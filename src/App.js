import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  Switch,
  Route
} from "react-router-dom";

import Games from './pages/Games';
import Blog from './pages/Blog'
import Contact from './pages/Contact';
import About from './pages/About';
import Post from './pages/Post';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route exact path="/" component={Games} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} /> 
          <Route path="/about" component={About} />
          <Route path="/404" component={NotFound} />
          <Route path="/post/:id" render={props => <Post {...props}/>}/>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
