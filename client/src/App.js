import React, {Component}  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavTool, Footer} from './components/index.js';
import { HomePage, ProductView } from './containers/index.js';
import './bootstrap.min.css';


import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <NavTool />

        <main className='py-3'>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductView} />

        </main>

        <Footer />
      </Router>
    ) 
    }
}

export default App;
