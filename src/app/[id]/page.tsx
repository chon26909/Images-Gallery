"use client";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const getPost = async (params: Props["params"]) => {
  try {
    const res = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/photos/" + params.id
    );

    return res.data;
  } catch (error) {}
};

const page: NextPage<Props> = async ({ params }) => {
  const post = await getPost(params);

  return (
    <div>
      <div>{post.photo.title}</div>
      <Image
        src={post.photo.url}
        alt={post.photo.title}
        width={300}
        height={300}
      />
    </div>
  );
};

export default page;