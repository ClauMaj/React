import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import FormsWithHooks from './components/FormsWithHooks'
import Parent from './components/liftingState/Parent'
import Forms from './components/Forms'
import ProjectManagement from './components/projectManagement/ProjectManagement'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/styles.css'


const noMatch = () => <div>Error: No Route</div>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/formswithhooks' component={FormsWithHooks}/>
          <Route path='/lifting_state' component={Parent}/>
          <Route path='/project_management' component={ProjectManagement}/>
          <Route  component={noMatch}/>
        </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

