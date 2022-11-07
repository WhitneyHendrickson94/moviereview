import React from 'react';


//created a Review component that takes inputs from the Review Form
export default class Review extends React.Component {
    render(){
    return(
    <div className="card w-75">
    <div className="card-body">
    <h5 className="card-subtitle mb-2 text-muted">{this.props.review.name}</h5>
    <p className="card-text">{this.props.review.review}</p>
    <p>{this.props.review.rating}</p>
  
    </div>
   </div>
        );
    };
}

