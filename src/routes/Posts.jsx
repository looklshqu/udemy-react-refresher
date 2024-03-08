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
