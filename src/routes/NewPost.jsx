import { Link, Form, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost() {
  // const [enteredBody, setEnteredBody] = useState("");
  // const [enteredAuthor, setEnteredAuthor] = useState("");

  // function bodyChangeHandler(event) {
  //   setEnteredBody(event.target.value);
  // }

  // function authorChangeHandler(event) {
  //   setEnteredAuthor(event.target.value);
  // }

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(`name: ${e.target.name}, value: ${e.target.value}`);
  //   const postData = {
  //     body: enteredBody,
  //     author: enteredAuthor,
  //   };
  //   onAddPost(postData);
  //   onCancel();
  // };

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="..">Cancel</Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return redirect("/");
}
