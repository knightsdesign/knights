import { allShowcasePosts } from "contentlayer/generated";

type ShowcasePostPage = {
  params: {
    slug: string[];
  };
};

export function generateStaticParams(): ShowcasePostPage["params"][] {
  return allShowcasePosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

function getPostFromParams(params: ShowcasePostPage["params"]) {
  console.log({ params });
  const slug = params?.slug?.join("/");
  const post = allShowcasePosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

const ShowcasePostPage = ({ params }: ShowcasePostPage) => {
  const post = getPostFromParams(params);
  console.log({ post, params });
  return <>Post</>;
};

export default ShowcasePostPage;
