import type { Content } from "@prisma/client";
import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import {
  useFindManyContent,
  useCreatePost,
  useCreateImage,
  useUpdateContent,
  useCreateLike,
  useDeleteManyLike,
  useDeleteContent,
} from "../lib/hooks";

type AuthUser = { id: string; email?: string | null };

const Welcome = ({ user }: { user: AuthUser }) => {
  async function onSignout() {
    await signOut({ redirect: false });
    Router.push("/signin");
  }
  return (
    <div className="flex gap-4">
      <h3 className="text-lg">Welcome back, {user?.email}</h3>
      <button className="text-gray-300 underline" onClick={onSignout}>
        Signout
      </button>
    </div>
  );
};

const SigninSignup = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <Link href="/signin" className="rounded-lg border px-4 py-2">
        Signin
      </Link>
      <Link href="/signup" className="rounded-lg border px-4 py-2">
        Signup
      </Link>
    </div>
  );
};

const Posts = ({ user }: { user: AuthUser }) => {
  // check login
  const { data: session } = useSession();

  const { trigger: createPost } = useCreatePost();

  const { trigger: createImage } = useCreateImage();

  const { trigger: updateContent } = useUpdateContent();

  const { trigger: deleteContent } = useDeleteContent();

  const { trigger: deleteLike } = useDeleteManyLike();
  const { trigger: createLike } = useCreateLike();

  // list all posts that're visible to the current user
  const { data: contents } = useFindManyContent(
    {
      include: {
        author: true,
        likes: true,
      },
      orderBy: { createdAt: "desc" },
    },
    // fetch only when user's logged in
    { disabled: !session?.user }
  );

  if (!session?.user) {
    return null;
  }

  async function onCreatePost() {
    const title = prompt("Enter post title");
    if (title) {
      await createPost({ data: { title, authorId: user.id } });
    }
  }

  async function onCreateImage() {
    const url = prompt("Enter image url");
    if (url) {
      await createImage({ data: { url, authorId: user.id } });
    }
  }

  async function onTogglePublished(content: Content) {
    await updateContent({
      where: { id: content.id },
      data: { published: !content.published },
    });
  }

  async function onToggleLike(content: Content, isLiked: boolean) {
    if (isLiked) {
      await deleteLike({
        where: {
          authorId: user.id,
        },
      });
    } else {
      await createLike({
        data: {
          contentId: content.id,
          authorId: user.id,
        },
      });
    }
  }

  async function onDelete(content: Content) {
    await deleteContent({ where: { id: content.id } });
  }

  return (
    <div className="container flex flex-col text-white">
      <button
        className="rounded border border-white p-2 text-lg"
        onClick={onCreatePost}
      >
        + Create Post
      </button>

      <button
        className="rounded border border-white p-2 text-lg"
        onClick={onCreateImage}
      >
        + Create Image
      </button>

      <ul className="container mt-8 flex flex-col gap-2">
        {contents?.map((content) => {
          const isLiked = content.likes
            .map((x) => x.authorId)
            .includes(user.id);

          return (
            <li
              key={content.id}
              className="flex items-end justify-between gap-4"
            >
              <p
                className={`text-2xl ${
                  !content.published ? "text-gray-400" : ""
                }`}
              >
                {content.contentType == "Post" ? (
                  content.title
                ) : (
                  <Image
                    src={content.url}
                    width={0}
                    height={0}
                    sizes="50vw"
                    style={{ width: "100%", height: "auto" }}
                    alt="image"
                    priority
                  ></Image>
                )}
                <p className="text-lg"> by {content.author.email}</p>
              </p>
              <div className="flex justify-between gap-1 align-middle text-base">
                <button
                  className="underline"
                  onClick={() => onTogglePublished(content)}
                >
                  {content.published ? "Unpublish" : "Publish"}
                </button>
                <button className="underline" onClick={() => onDelete(content)}>
                  Delete
                </button>
                <button
                  className="underline"
                  onClick={() => onToggleLike(content, isLiked)}
                >
                  {isLiked ? "UnLike" : "Like"} {content.likes.length}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading ...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <h1 className="text-5xl font-extrabold">My Awesome Blog</h1>

        {session?.user ? (
          // welcome & blog posts
          <div className="flex flex-col">
            <Welcome user={session.user} />
            <section className="mt-10">
              <Posts user={session.user} />
            </section>
          </div>
        ) : (
          // if not logged in
          <SigninSignup />
        )}
      </div>
    </main>
  );
};

export default Home;
