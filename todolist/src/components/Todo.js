import React from "react"; // import useEffect for local storage
import { useSelector } from "react-redux";  // extract data from the Redux store state, using a selector function
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";
import { H1S, Paper, DivSC } from './Styles' // import styled-component

const Todo = () => {
  const todosList = useSelector((state) => state.todos); // extract data from the Redux store

  // contitional rendering of all todos with edit or save button
  return (
    <>
      <div className="pt-4 ">
        <H1S><Paper><b> To Do List!</b></Paper></H1S>
      </div>
      <div className="row mt-5 mx-0">
        <div className="col-6 offset-3">
          <AddTodo />
        </div>
      </div>
      <div className="row mt-5 mx-0">
        <div className="col-6 offset-3">
          <ol className="w-100">
            {/* map through state and display items as text or input editing field */}
            {todosList.map((td) => {
              let showEdit = !td.isEdit ? (
                <div className="col-11 d-flex justify-content-between  pr-0 h-100">
                  {td.todo}
                  <UpdateTodo todoItem={td} /></div>)
                : (<div className="col-11 d-flex justify-content-between pr-0 h-100">
                  <input className="updateInput" type="text" id="edittodo" defaultValue={td.todo} />
                  <UpdateTodo todoItem={td} />
                </div>
                );
              return (
                <li key={td.id} className="w-100 my-1">
                  <div className="row">
                    {showEdit}
                    <div className="col-1 px-0 mx-0 d-flex flex-row ">
                      <DeleteTodo todoItem={td} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
