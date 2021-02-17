import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../actions/todoActions";
import { startUpdate } from "../actions/todoActions";

const UpdateTodo = ({ todoItem }) => {
  const dispatch = useDispatch();


const handleUpdate = (e) => {
  let updatedItem = { id: todoItem.id,
    todo: e.target.previousSibling.value,
  }
  dispatch(updateTodo(updatedItem));
}
  let showEditSave = !todoItem.isEdit ? (
    <label
        className="btn btn-info mx-1"
        onClick={() => dispatch(startUpdate(todoItem))}
      >
        Edit
      </label>) 
      : (<label
        className="btn btn-success mx-1"
        onClick={handleUpdate}
      >
        Save
      </label>);
  return (
    <>
    
      {showEditSave}
    </>
  );
};

export default UpdateTodo;
