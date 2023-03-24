import { allBlogPosts } from "contentlayer/generated";
import { Breadcrumb, getBreadcrumbs } from "~/ui";

import { Mdx } from "~/app/(content)/components";

type BlogPostPage = {
  params: {
    slug: string[];
  };
};

export function generateStaticParams(): BlogPostPage["params"][] {
  return allBlogPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

function getPostFromParams(params: BlogPostPage["params"]) {
  const slug = params?.slug?.join("/");
  const post = allBlogPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

const ShowcasePostPage = ({ params }: BlogPostPage) => {
  const post = getPostFromParams(params);

  return (
    <>
      <Breadcrumb items={getBreadcrumbs(post?.slug as string)} />
      <div className="prose prose-gray mx-auto w-fit">
        <Mdx code={post?.body.code as string} />
      </div>
    </>
  );
};

export default ShowcasePostPage;
