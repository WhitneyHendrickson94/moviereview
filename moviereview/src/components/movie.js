import React from 'react';
import ReviewForm from './reviewform';
import ReviewList from './reviewlist';


//Movie component - built with props from movie objects in movie list
export default class Movie extends React.Component{
    render(){
    return(
    <div className="card" style={{width: '20rem'}}>
    <div className="card-body">
    <img src={this.props.img} alt={this.props.title}/>
    <p className="card-text">{this.props.synopsis}</p>
    <h5 className="card-subtitle mb-2 text-muted">{this.props.title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{this.props.year}</h6>
    
    </div>
    <ReviewForm />
    <ReviewList />
   
        
    </div>
        );
    };
};
