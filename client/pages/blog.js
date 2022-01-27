import { useContext, useEffect, Fragment } from "react";
import Head from 'next/head'
import { BlogContext } from "../context/blogContext";
import Blog from "../components/Blog/index";

export default function BlogPage() {
  const { blogPosts, fetchMediumArticles } = useContext(BlogContext);

  useEffect(() => {
    if (!blogPosts?.length) {
      fetchMediumArticles();
    }
  });
  // DO THIS STUFF IN THE PAGES/API/BLOG FOLDER/FILE

  return (
    <Fragment>
    <Head>
      <title>Rachel Reilly's Coding Blog</title>
      <meta name="description" content="Rachel Reilly's coding blog, originally posted on rachelrly.medium.com" />
      <link rel="icon" href="favicon.ico" />
    </Head>
    <Blog blogPosts={blogPosts} />    
    </Fragment>
  );
}