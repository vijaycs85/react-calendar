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
      var today = new Date(),
      imgSrc = 'https://vijaycs85.github.io/static-calendar/' + today.getFullYear() + '/' + today.getMonth() + '/' + today.getDate() + '.png';
      // Remove once added all images.
      imgSrc = 'https://vijaycs85.github.io/static-calendar/2019/1/1.png';
      this.setState({picture: <img src={imgSrc} />});
      console.log(imgSrc);
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