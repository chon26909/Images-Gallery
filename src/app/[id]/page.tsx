import { getGalleryById } from "@/services/gallery";
import { NextPage } from "next";
import Image from "next/image";

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

const page: NextPage<Props> = async ({ params }) => {
  const post = await getGalleryById(params.id);

  return (
    <div className="mx-auto w-[1000px]">
      {post && (
        <div className="mt-3 border rounded-md overflow-hidden">
          <Image
            className="object-cover w-full h-[80vh]"
            src={post.photo.url}
            alt={post.photo.title}
            width={0}
            height={0}
            sizes="100"
          />
          <div className="py-4 px-5">
            <div className="text-lg font-semibold">{post.photo.title}</div>
            <div className="mt-2">{post.photo.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
