import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Index = (props) => {
  useEffect(() => {
    console.log(props.posts);
  }, []);
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/?id=${post.id}`} as={`/p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const { data } = response;
  return { posts: data };
};

export default Index;
