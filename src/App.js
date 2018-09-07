import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import firebase from './firebase';
import MainScreen from './MainScreen';
import LandingScreen from './LandingScreen';
import Spinner from './Spinner';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      user: null
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ 
          user,
          loading: false
         })
        : this.setState({ 
          user: null,
          loading: false
         });
    });
  }

  render() {
    return (      
      <Switch>
        <Route path="/landing" component={LandingScreen} />
        <Route path="/" render={props => 
          this.state.loading ? (
            <Spinner />
          ) :
          this.state.user ? (
            <MainScreen />
          ) : 
          <Redirect to="/landing" />
        } />
      </Switch>
    );
  }
}

export default App;
