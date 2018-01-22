import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Submit from './scholarshipsubmit.js';
import ScholarshipData from "./ScholarshipData";
import scholarships from './img/scholarships.jpg';

const imgStyle = {
  position: 'absolute',
  backgroundSize: '100% 100vh',
  maxWidth:'100%',
  maxHeight:'100%',
  width:'100%',
  height:'100%',
  backgroundImage: `url(${scholarships})`,

}

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }
  componentWillMount(){
    this.getData();
  }
  getData = ()=>{
    axios.get('/getScholarships').then((response)=>{
      this.setState({
        data: response.data
      });
    }).catch((err)=>{
      console.log(err);
    });
  }
  render() {
    return (
      <div style={imgStyle}>
        <div className="App-intro">
        <Submit getData={this.getData}/>
        <br/>
        <ScholarshipData data={this.state.data}/>
        </div>
      </div>

    );
  }
}
