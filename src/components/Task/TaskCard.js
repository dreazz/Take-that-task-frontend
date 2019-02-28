import React, { Component } from 'react'
import Axios from 'axios';

export default class TaskCard extends Component {
  state={
    title:'',
    body:'',
    status:'',
  }
  componentDidMount(){
    Axios.get(`http://localhost:5000/me`)
     .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
