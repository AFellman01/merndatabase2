import React from 'react';


const Datastyle = {
fontSize: "20px",
margin: "30px",
fontFamily:'Quicksand'



}

export default class ScholarshipData extends React.Component {
  render(){
    return(
      <ol>
        <div style={Datastyle}>
        <h2>View Scholarships:</h2>
      {
        this.props.data.map((item)=>{
          return (
            <li key={item._id}>
            <h3>Org: {item.organization}</h3>
            <p>Name of Scholarship: {item.name}</p>
            <p>The Amount Being Offered: {item.amount}</p>
            <p>When Submissions are Due: {item.due_date}</p>
            <p>The Website: {item.url}</p>
            <br />
          </li>
        );

        })
      }
      </div>
    </ol>
    )
  }
};
