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
    return (
      <div className="allFoods-container">
        {this.state.foods &&
          this.state.foods.map((food, idx) => (
            <div key={food + idx} className="allFoods-child">
              <h1> {food.name} </h1>
              <img className="allFoods-img" src={food.imageurl} />
            </div>
          ))}
      </div>
    );
  }
}
