import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import Home from './components/Home';
import About from './components/About';
import ShipmentForm from './components/ShipmentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      role: null
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState(() => ({
        isAuthenticated: true
      }));
    }
    console.log(this.state.role);
  }

  handleAuthentication = (boolean, string) => {
    this.setState(() => ({
      isAuthenticated: boolean,
      role: string
    }));
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid p-0">
          <div className="row-lg-12">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link to="/" className="navbar-brand">
                Begwani Global
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="navbar-nav">
                  {this.state.isAuthenticated && this.state.role === 'admin' ? (
                    <React.Fragment>
                      <Link to="/" className="nav-item nav-link"></Link>
                      <Link to="/getAllEvents" className="nav-item nav-link">
                        Manage Bookings DROP DOWN
                      </Link>
                      <Link to="/getAllUsers" className="nav-item nav-link">
                        Notification
                      </Link>
                      <Link to="/users/logout" className="nav-item nav-link">
                        Logout{' '}
                      </Link>
                    </React.Fragment>
                  ) : this.state.isAuthenticated &&
                    this.state.role === 'user' ? (
                    <React.Fragment>
                      <Link to="/" className="nav-item nav-link">
                        My Bookings DROP DOWN
                      </Link>
                      <Link to="/" className="nav-item nav-link">
                        Notification
                      </Link>
                      <Link to="/users/logout" className="nav-item nav-link">
                        Logout{' '}
                      </Link>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <Link
                        to="/containerTracking"
                        className="nav-item nav-link"
                      >
                        Container Tracking
                      </Link>
                      <Link to="/ShipmentForm" className="nav-item nav-link">
                        Shipment Creation
                      </Link>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </nav>
          </div>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/aboutus" component={About} exact={true} />
            <Route path="/ShipmentForm" component={ShipmentForm} exact={true} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
