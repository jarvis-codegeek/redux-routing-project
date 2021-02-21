import './App.css';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import AddUser from './modules/addUser/container/AddUser';
import ListOfUsers from './modules/addUser/container/ListUser';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="">
        <main>
          <Header />
          <Switch>
            <Route path="/addUser" component={AddUser} />
            <Route path="/listOfUsers" component={ListOfUsers} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App);
