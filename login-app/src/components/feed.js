import React from "react";
import Post from './post';
import Nav from './nav'


let e = React.createElement;

export default class Feed extends React.Component {
    render() {
        return (

            <><div>
                <Nav />
            </div>
            
            <div id="log" className="container">
                   <center><Post /></center> 
                </div></>
        );
    }
}  



  
