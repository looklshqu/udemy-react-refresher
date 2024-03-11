import Post from "./Post";
import NewPost from "../routes/NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }
  //   fetchPosts();
  // }, []);

  // const addPostHandler = (postData) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingData) => [postData, ...existingData]);
  // };

  return (
    <>
      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts...</p>
        </div>
      )} */}
    </>
  );
}

export default PostsList;
