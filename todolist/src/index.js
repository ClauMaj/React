import React from "react";    // import react
import ReactDOM from "react-dom";  // import react-dom
import App from "./App";  // component
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap link
import "./assets/styles.css";  // import custom css
import BaseLayout from "./components/layout/BaseLayout";   // import the BaseLayout component(covers all pages)
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";      // routers and switches for the render
import reducer from "./reducers/todoReducer";  // import the reducer
import Todo from "./components/Todo"; // component
//redux
import { createStore } from "redux"; //Redux.createStore()
import { Provider } from "react-redux"; // makes available the state by wraping all components
import { v1 as uuidv1 } from "uuid"; // unique ID for each entry

// Check if there is anything in local storage and if there is rad it and pass it to the store /// if not default values
const storedState = localStorage.getItem('todos') ? {todos: JSON.parse(localStorage.getItem('todos'))} : {todos: [
  {
    id: uuidv1(),
    todo: "Wake up!",
    isEdit: false,
  },
],}

// Create Store passing the reducer, initial state and ReduxDev tools link
let store = createStore(
  reducer,
  storedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



// default rendering method on the root element
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/todo" component={Todo} />
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
