import React from 'react';
import axios from 'axios';
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
    axios.post("/jobSubmit", {
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
      <form onSubmit={this.handleSubmit}> {/* Don't worry about a method or action for now */}
        <label htmlFor="organization">Organization Name: </label>
          <input value={this.state.organization} onChange={this.handleChange} name="organization" type="text" />
        <label htmlFor="name">Name of Scholarship: </label>
          <input value={this.state.name} onChange={this.handleChange} name="name" type="text" />
          <label htmlFor="amount">How much is being offered?: </label>
            <input value={this.state.amount} onChange={this.handleChange} name="amount" type="text" />
            <label htmlFor="due_date">And when is this scholarship due? </label>
              <input value={this.state.due_date} onChange={this.handleChange} name="due_date" type="text" />
              <label htmlFor="url">URL: </label>
              <input value={this.state.url} onChange={this.handleChange} name="url" type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}