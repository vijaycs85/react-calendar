import React, { Component } from 'react';
import "./Day.css";

class Day extends Component {
  constructor() {
      super();
      this.state = {
          picture: []
      };
  }

  componentDidMount() {
      fetch('https://randomuser.me/api?results=1')
          .then(results =>{
              return results.json();
          }).then(data => {
              let picture = data.results.map((pic) => {
                  return (
                      <div key={pic.results}>
                          <img src={pic.picture.large} />
                      </div>
                  )
          });
          this.setState({picture: picture});
              console.log("state", this.state.picture);
          })
  }

  render() {
      return (
          <div className="container2">
              <div className="container1">
                  {this.state.picture}
              </div>
          </div>
      )
  }

}

export default Day;