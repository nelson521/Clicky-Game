import React, { Component } from 'react';


class Nav extends Component {
  render() {
    return (

      <div className="navbar navbar-light bg-info">
        <div className="col-sm-4">
          <a href="/">Rick and Morty</a>
        </div>
        <div className="col-sm-4">
          <p>Click an image to begin!</p>
        </div>
        <div className="col-sm-4">
          <p>Score: 0 | Top Score: 0</p>
        </div>
      </div>


    )
  }



}

export default Nav; 