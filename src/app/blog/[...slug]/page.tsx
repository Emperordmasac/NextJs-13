// -- This is how you can dynamically render content based on the params that we in.

import { delay } from "@/lib/delay";

const getData = async (slug) => {
  // const post = await getDataFromCMS(slug);
  const post = await delay(5000);
  return { slug };
};

const BlogPost = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return <div>{post.slug}</div>;
};

export default BlogPost;

// const getDataFromCMS = (slug) => {};
