import React, { Component } from 'react';
import axios from 'axios';

export default class AllFoods extends Component {
  constructor() {
    super();
    this.state = {
      foods: []
    };
  }
  componentDidMount() {
    axios
      .get('/api')
      .then(response => this.setState({ foods: response.data }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let colors = [
      '#98cdff',
      '#ff9999',
      '#ffbf97',
      '#8ccfb9',
      '#bcb5ff',
      '#ffeaa9',
      '#75c1d9',
      '#c1d989',
      '#c5c2e2',
      '#fff5cf',
      '#93d9d3'
    ];

    return (
      <div className="allFoods-container">
        {this.state.foods &&
          this.state.foods.map(
            (food, idx) =>
              (idx === 0 ? (
                <div
                  key={food + idx}
                  style={{ backgroundColor: colors[idx % colors.length] }}
                  className="allFoods-child-large">
                  <h1> {food.name} </h1>
                  <img className="allFoods-img" src={food.imageurl} />
                </div>
              ) : (
                <div
                  key={food + idx}
                  style={{ backgroundColor: colors[idx % colors.length] }}
                  className="allFoods-child">
                  <h1> {food.name} </h1>

                  <img className="allFoods-img" src={food.imageurl} />
                </div>
              ))
          )}
      </div>
    );
  }
}
