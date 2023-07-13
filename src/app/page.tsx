import { getGalleryList } from "../services/gallery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// const getPosts = async () => {
//   try {
//     const res = await axios.get(
//       "https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20"
//     );

//     return res.data;
//   } catch (error) {}
// };

const page = async () => {
  const posts = await getGalleryList({ limit: 5, offset: 1 });

  return (
    <main className="mt-5">
      <div className="text-2xl font-bold text-center">Gallery</div>
      <div>
        {posts &&
          posts.photos.map((item: any, index: number) => {
            return (
              <Link href={`/${item.id}`}>
                <div>
                  <Image
                    src={item.url}
                    alt={item.title}
                    width={300}
                    height={300}
                  />
                  <div>
                    {index + 1} {item.title}
                  </div>
                  <div>{item.description}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </main>
  );
};

export default page;
