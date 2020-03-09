import React from 'react';
import ExoUn from './component/exoUn'
import ExoDeux from './component/exoDeux'
import ExoTrois from './component/exoTrois'
import ExoQuatre from './component/exoQuatre'
import ExoCinq from './component/exoCinq'
import ExoSix from './component/exoSix'
import ExoSept from './component/exoSept'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App (){
return(
  <div>
    <h1>Recapitulatif React</h1>
    <Router>
     <Link to="/exoUn">exercice 1</Link>
     <Link to="/exoDeux">exercice 2</Link>
     <Link to="/exoTrois">exercice 3</Link>
     <Link to="/exoQuatre">exercice 4</Link>
     <Link to="/exoCinq">exercice 5</Link>
     <Link to="/exoSix">exercice 6</Link>
     <Link to="/exoSept">exercice 7</Link>
       <Switch>
         <Route exact path="/">
           Home
         </Route>
         <Route path="/exoUn">
           <ExoUn />
         </Route>
         <Route path="/exoDeux">
           <ExoDeux />
         </Route>
         <Route path="/exoTrois">
           <ExoTrois />
         </Route>
         <Route path="/exoQuatre">
           <ExoQuatre />
         </Route>
         <Route path="/exoCinq">
           <ExoCinq />
         </Route>
         <Route path="/exoSix">
           <ExoSix />
         </Route>
         <Route path="/exoSept">
           <ExoSept />
         </Route>
       </Switch>
     </Router>
  </div>
)
}
export default App