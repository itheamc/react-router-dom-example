import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import NoPageFound from './pages/NoPageFound';
import NavBar from './components/NavBar';
import NavBar2 from './components/NavBar2'
import FullPostPage from './pages/FullPostPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [width, setWidth] = useState(window.innerWidth);


  //useEffect function
  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth);

    //cleanup
    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    }
  });

  // function to handle window width change
  const handleWindowWidth = () => {
    setWidth(window.innerWidth);
  }

  return (
    <div className="App">
      <Router>
        {width > 1280 ? <NavBar /> : <NavBar2 />}
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/home' component = {HomePage} />
          <Route exact path = '/blog' component = {BlogPage} />
          <Route exact path ='/about' component = {AboutPage} />
          <Route exact path = '/profile' component = {ProfilePage} />
          <Route path = '/blog/:id' component = {FullPostPage} />
          <Route path = '/search' component = {SearchPage} />
          <Route path = '*' component = {NoPageFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
