import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import PostsList from "../components/PostsList";
import { useState } from "react";

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  // const hideModalHandler = () => {
  //   setModalIsVisible(false);
  // };

  // const showModalHandler = () => {
  //   setModalIsVisible(true);
  // };

  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
