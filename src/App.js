import React from 'react';
// import { Title } from './estilos/Styled'
import Header from './components/Header'
import Cadastro from './components/Cadastro'
import Login from './components/Login'
import Pessoa from './ListaPessoa/Pessoa'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>

        {/* Essa Tag a baixo é onde fica o navbar do site que fica dentro do components*/}
        <Header />

        <Switch>
          <Route path="/Cadastro"><Cadastro /></Route>
          <Route path="/Login"><Login /></Route>
          <Route path="/Pessoa"><Pessoa /></Route>


          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
