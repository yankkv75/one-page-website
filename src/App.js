import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ServicesScren from './screens/ServicesScreen';
import SignUpScreen from './screens/SignUpSreen';

function App() {
  return (

    <Router>
      <Header />
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/products' component={ProductScreen} />
        <Route path='/services' component={ServicesScren} />
        <Route path='/sign-up' component={SignUpScreen} />
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
