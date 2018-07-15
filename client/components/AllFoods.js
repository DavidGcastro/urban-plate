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
      this.state.foods &&
      this.state.foods.map((food, idx) => {
        return <h1 key={food + idx}> {food.name} </h1>;
      })
    );
  }
}
