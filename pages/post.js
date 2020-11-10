import axios from "axios";
import { withRouter } from "next/router";

const Post = ({ id, comments }) => (
  <div>
    <h1>POST #{id}</h1>
    {comments.map(({ id, body, email }) => (
      <div key={id}>
        <p>{body}</p>
        <p>{email}</p>
      </div>
    ))}
  </div>
);

Post.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
  );
  const { data } = response;
  return { ...query, comments: data };
};

export default withRouter(Post);
