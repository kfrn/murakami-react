import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/shared/Footer'
import NavBar from './components/shared/NavBar'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'
import BooksPageContainer from './containers/BooksPageContainer'
import CartContainer from './containers/CartContainer'
import SingleBookPageContainer from './containers/SingleBookPageContainer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/books" component={BooksPageContainer} />
          <Route exact path="/books/:id" component={SingleBookPageContainer} />
          <Route path="/cart" component={CartContainer} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
