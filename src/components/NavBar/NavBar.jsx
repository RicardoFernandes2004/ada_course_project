import React from "react";
import logojpg from '../../assets/images/logo.jpg'
import './NavBar.css'

export class NavBar extends React.Component{
    render(){
        return (<header>
        <nav id="navbar">
          <div className="nav_brand">
            <img src={logojpg} alt="cathuh" />
            <h1>Cats News</h1>
          </div>
          <div className="nav_links">
            <ul className="nav_list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About us</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )}
}

