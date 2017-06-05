import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/shared/Footer'
import NavBar from './components/shared/NavBar'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


// <Router>
//   <div className="router">
//     <NavBar />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route path="/about" component={AboutPage} />
//       <Route path="/cart" component={Cart} />
//       <Route exact path="/books" component={BooksContainer} />
//       <Route path="/books/:id" component={BookDetails} />
//       <Route path="*" component={NotFound} />
//     </Switch>
//     <Footer />
//   </div>
// </Router>
