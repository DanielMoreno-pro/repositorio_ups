import React from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import Areas from "./components/areas"
import Ups from "./components/ups"
import Menu from './components/Menu';
import './styles/App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/areas" exact component={Areas} />
          <Route path="/ups" exact component={Ups} />
          
    
        </Switch>
      </BrowserRouter>
  );
}



    /*
    <div className="App">
      <Header />
      <Areas />
      <Footer />
    </div>
  );
  
}
*/

export default App;
