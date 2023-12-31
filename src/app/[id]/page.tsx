import Button from "@/components/Button";
import { getGalleryById, getGalleryList } from "@/services/gallery";
import { NextPage } from "next";
import Image from "next/image";
import Card from "./Card";

interface Props {
  params: {
    id: string;
  };
}

// const getPost = async (params: Props["params"]) => {
//   try {
//     const res = await axios.get(
//       "https://api.slingacademy.com/v1/sample-data/photos/" + params.id
//     );

//     return res.data;
//   } catch (error) {}
// };

export async function generateStaticParams() {
  const res = await getGalleryList({ limit: 52, offset: 0 });

  let paths: { id: string }[] = [];

  if (res) {
    paths = res.photos.map((item) => ({
      id: String(item.id),
    }));
  }

  return paths;
}

const page: NextPage<Props> = async ({ params }) => {
  const post = await getGalleryById(params.id);

  return (
    <div className="mx-auto w-[1000px]">{post && <Card {...post.photo} />}</div>
  );
};

export default page;
