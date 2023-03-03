import React from 'react';
import LoginButton from './login-button';



let e = React.createElement;

export default class Post extends React.Component {
   render() {
    return (
        <div className = "card w-75">
            <h3 className = "card-header bg-primary text-white">
                Login
            </h3>
            <div className = "card-body">
                <form>
                <input type = "user" className="form-control mt-1" placeholder='User'></input>
                <br></br>
                <input type = "password" className="form-control mt-1" placeholder='Password'></input>
                </form>
            </div>
            <div className = "card-footer">
                <LoginButton/>
            </div>
        </div>
        
         );
     }
}



