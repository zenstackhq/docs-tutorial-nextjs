import type { Post } from '@prisma/client';
import { type NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Router from 'next/router';
import { useCreatePost, useDeletePost, useFindManyPost, useUpdatePost } from '../lib/hooks';

type AuthUser = { id: string; email?: string | null };

const Welcome = ({ user }: { user: AuthUser }) => {
    async function onSignout() {
        await signOut({ redirect: false });
        await Router.push('/signin');
    }
    return (
        <div className='flex gap-4'>
            <h3 className='text-lg'>Welcome back, {user?.email}</h3>
            <button className='text-gray-300 underline' onClick={() => void onSignout()}>
                Signout
            </button>
        </div>
    );
};

const SigninSignup = () => {
    return (
        <div className='flex gap-4 text-2xl'>
            <Link href='/signin' className='rounded-lg border px-4 py-2'>
                Signin
            </Link>
            <Link href='/signup' className='rounded-lg border px-4 py-2'>
                Signup
            </Link>
        </div>
    );
};

const Posts = () => {
    // Post crud hooks
    const { mutateAsync: createPost } = useCreatePost();
    const { mutateAsync: updatePost } = useUpdatePost();
    const { mutateAsync: deletePost } = useDeletePost();

    // list all posts that're visible to the current user, together with their authors
    const { data: posts } = useFindManyPost({
        include: { createdBy: true },
        orderBy: { createdAt: 'desc' },
    });

    async function onCreatePost() {
        const name = prompt('Enter post name');
        if (name) {
            await createPost({ data: { name } });
        }
    }

    async function onTogglePublished(post: Post) {
        await updatePost({
            where: { id: post.id },
            data: { published: !post.published },
        });
    }

    async function onDelete(post: Post) {
        await deletePost({ where: { id: post.id } });
    }

    return (
        <div className='container flex flex-col text-white'>
            <button className='rounded border border-white p-2 text-lg' onClick={() => void onCreatePost()}>
                + Create Post
            </button>

            <ul className='container mt-8 flex flex-col gap-2'>
                {posts?.map((post) => (
                    <li key={post.id} className='flex items-end justify-between gap-4'>
                        <p className={`text-2xl ${!post.published ? 'text-gray-400' : ''}`}>
                            {post.name}
                            <span className='text-lg'> by {post.createdBy.email}</span>
                        </p>
                        <div className='flex w-32 justify-end gap-1 text-left'>
                            <button className='underline' onClick={() => void onTogglePublished(post)}>
                                {post.published ? 'Unpublish' : 'Publish'}
                            </button>
                            <button className='underline' onClick={() => void onDelete(post)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Home: NextPage = () => {
    const { data: session, status } = useSession();

    if (status === 'loading') return <p>Loading ...</p>;

    return (
        <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
            <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white'>
                <h1 className='text-5xl font-extrabold'>My Awesome Blog</h1>

                {session?.user ? (
                    // welcome & blog posts
                    <div className='flex flex-col'>
                        <Welcome user={session.user} />
                        <section className='mt-10'>
                            <Posts />
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
