import {Router, Switch} from react-router-dom;

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
    
      <Route path=""/>
  
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
