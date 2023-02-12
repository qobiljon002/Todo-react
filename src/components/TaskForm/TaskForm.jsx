import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import styles from "./TaskForm.module.css";

export const TaskForm = ({ todos, setTodos }) => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [btnTextStatus, setBtnTextStatus] = useState("Add todo");
  const [btnVariant, setBtnVariant] = useState("primary");

  const spinnerWithText = (
    <>
      <Spinner animation="border" size="sm" role="status" />{" "}
      <span>Adding todo...</span>
    </>
  );

  const clearInputs = () => {
    titleRef.current.value = "";
    descRef.current.value = "";
  };

  const addTodoHandler = () => {
    if (!titleRef.current.value || !descRef.current.value) {
      return;
    }

    const todo = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      id: Math.random(),
    };

    setBtnTextStatus(spinnerWithText);
    setBtnVariant("warning");
    setTimeout(() => {
      clearInputs();
      setTodos([todo, ...todos]);
      setBtnTextStatus("Added todo!");
      setBtnVariant("success");
      setTimeout(() => {
        setBtnTextStatus("Add todo");
        setBtnVariant("primary");
      }, 500);
    }, 1000);
  };

  return (
    <div className={styles.formContainer}>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Task title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Go grocery shopping"
            ref={titleRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Task description (optional)</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Go grocery shopping at 12pm. Pick up some milk and eggs..."
            ref={descRef}
          />
        </Form.Group>
        <Button variant={btnVariant} className="btn" onClick={addTodoHandler}>
          {btnTextStatus}
        </Button>
        <Button variant="danger">Reset inputs</Button>
      </Form>
    </div>
  );
};
