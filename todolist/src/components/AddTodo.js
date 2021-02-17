import React from "react";
import { useDispatch } from "react-redux";
import { v1 as uuidv1 } from "uuid";
import { addTodo } from "../actions/todoActions";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let todoItem = {
      id: uuidv1(),
      todo: e.target.todoinput.value,
      isEdit: false,
    };

    dispatch(addTodo(todoItem));

    e.target.todoinput.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="todoInput" type="text" id="todoinput" placeholder="Add to do..." /> <br />
        <br />
        <button className="btn btn-outline-warning float-right" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddTodo;
