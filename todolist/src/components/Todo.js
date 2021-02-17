import React, {useEffect} from "react"; // import useEffect for local storage
import { useSelector } from "react-redux";  // extract data from the Redux store state, using a selector function
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

const Todo = () => { 
  const todosList = useSelector((state) => state.todos); // extract data from the Redux store

  useEffect(() => {                  // store the state in local storage
    localStorage.setItem('todos', JSON.stringify(todosList))
  }, [todosList])


  // contitional rendering of all todos with edit or save button
  return (
    <>
      <h1 className="text-center">ToDo List!</h1>
      <div className="row">
        <div className="col-6 offset-3">
          <AddTodo />                              
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 offset-3">
          <ol className="w-100">
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
