import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "animate.css";

export const TaskCard = ({
  title,
  desc,
  id,
  count,
  deleteTodoHandler,
  isAnimated,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const markTodoHandler = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <Card
      className={
        isAnimated
          ? "animate__animated animate__bounce  animate__repeat-3	3"
          : ""
      }
    >
      <Card.Header className={isCompleted ? "text-bg-success" : ""}>
        Task #{count}
      </Card.Header>
      <Card.Body className="btn2">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button
          variant="success"
          className="btn"
          onClick={markTodoHandler}
          style={{ visibility: !isCompleted ? "visible" : "hidden" }}
        >
          Mark as completed
        </Button>
        <Button
          style={{ visibility: !isCompleted ? "visible" : "hidden" }}
          variant="danger"
          onClick={() => {
            deleteTodoHandler(id);
          }}
        >
          Delete the task
        </Button>
      </Card.Body>
    </Card>
  );
};
