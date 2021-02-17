import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/layout/BaseLayout'
import Sample1 from './components/Sample1'
import Sample2 from './components/Sample2'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


const App2 = () => <h1>Home page</h1>
const About = () => <h1>About Us</h1>
const Contact = () => <h1>Contact Us</h1>
const Blog = (props) => {
  return (
    <>
    <h1>Blog</h1>
    {props.match.params.blogID} <br />
    {props.location.pathname}<br />
    </>
  )
}
const NoMatch =() => <h1>Wrong turn</h1>

// const Blog = () => <h1>Blog</h1>
const Comments = () => <h1>Comments</h1>

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BaseLayout>
      <Switch>
        <Route exact path="/" component={App2} />
        <Route path="/about" component={About} />
        <Route path="/blog/:blogID" component={Blog} />
        <Redirect from="/blog" to="/" />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/comments" component={Comments} />
        <Route path="/sample1" component={Sample1} />
        <Route path="/sample2" component={Sample2} />
        <Route path="/sample2/:id" component={Sample2} />
        <Route component={NoMatch} />
      </Switch>
      </BaseLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


