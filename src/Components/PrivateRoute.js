import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '../redux/reducer';
import store from '../redux/store'

function PrivateRoute({ component: Component, ...rest }){
    const user = store.getState();
        return (
          <Route
            {...rest}
            render={props => 
              user ? (
                <Component {...props} />
              ) : (

                <Redirect
                  to={{
                    pathname: "/sign-in",
                    state: { from: props.location }
                  }}
                />
              )
            }
          />
        );
      }

      function mapReduxStateToProps(reduxState){
        return reduxState;
    }
    
    const mapDispatchToProps = {
        setUser
    }
    
    export default connect(mapReduxStateToProps, mapDispatchToProps)(PrivateRoute);