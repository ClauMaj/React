import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/todoActions";

const DeleteTodo = ({ todoItem }) => {
  const dispatch = useDispatch();


  // dispatch todo for deletion
  return (
    <>
      <label
        className="btn btn-danger"
        onClick={() => dispatch(deleteTodo(todoItem))}
      >
        &nbsp;&nbsp;X&nbsp;&nbsp;
      </label>
    </>
  );
};

export default DeleteTodo;
