import React from 'react';
import axios from 'axios';

const Style = {
fontSize: "20px",
margin: "50px",
border: "5px",
padding: "20px",
border: "5px solid #eee",
boxShadow: "10px 10px #d3d9de",
width: "40%",
fontFamily:'Quicksand'

}

const buttonStyle = {
  fontSize: "15px",
  background: "#1fada6",
  color: "white"
}

export default class Submit extends React.Component {
  constructor() {
    super();
    this.state = {
      organization: '',
      name: '',
      amount: '',
      due_date:'',
      url:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { organization, name, amount, due_date, url } = this.state;
    console.log(this.state);
    axios.post("/scholarshipSubmit", {
      organization,
      name,
      amount,
      due_date,
      url
    }).then((res)=>{
    alert("Thank you for your submission");
    this.props.getData();
    this.setState({
      organization: '',
      name: '',
      amount: '',
      due_date:'',
      url:''
    });
    });
  }
  render() {
    return (

      <div style={Style}>
      <h2>Submit Scholarships: </h2>
      <form onSubmit={this.handleSubmit}> {/* Don't worry about a method or action for now */}
        <label htmlFor="organization">Organization Name: </label>
          <input value={this.state.organization} onChange={this.handleChange} name="organization" type="text" />
          <br /><br />
        <label htmlFor="name">Name of Scholarship: </label>
          <input value={this.state.name} onChange={this.handleChange} name="name" type="text" />
          <br /><br />
          <label htmlFor="amount">Scholarship Amount: </label>
            <input value={this.state.amount} onChange={this.handleChange} name="amount" type="text" />
            <br /><br />
            <label htmlFor="due_date">Scholarship Due Date: </label>
              <input value={this.state.due_date} onChange={this.handleChange} name="due_date" type="text" />
              <br /><br />
              <label htmlFor="url">Scholarship Website: </label>
              <input value={this.state.url} onChange={this.handleChange} name="url" type="text" />
              <br /><br />
        <button style={buttonStyle} type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
