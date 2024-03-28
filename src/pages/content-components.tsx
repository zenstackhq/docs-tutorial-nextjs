import type {
  Content,
  Post as PostType,
  Image as ImageType,
} from "@zenstackhq/runtime/prisma";

import NextImage from "next/image";

export const Post = ({ content }: { content: Content }) => {
  const post = content as PostType;
  return <span>{post.title}</span>;
};

export const Image = ({ content }: { content: Content }) => {
  const image = content as ImageType;
  return (
    <NextImage
      src={image.url}
      width={0}
      height={0}
      sizes="20vw"
      style={{ width: "100%", height: "auto" }}
      alt="image"
      priority
    ></NextImage>
  );
};
