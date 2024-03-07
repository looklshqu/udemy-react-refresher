import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="SeungHwe" body="React.js is awesome!" />
        <Post author="Lee" body="Check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
