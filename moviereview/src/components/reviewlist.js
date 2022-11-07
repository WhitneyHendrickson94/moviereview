import React from 'react';
import Review from './review';


//created ReviewList component
export default class ReviewList extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
            reviews: props.reviews
            }

        }
    
        render(){
            let reviews = [];
            console.log(reviews);
            if(this.state.reviews){
                for( let review of this.state.reviews){
                    reviews.push(<Review {...review} />)  //push instances of review to reviews array
            }
        return(
            <div className="card border-info mb-3" style={{maxwidth:"20rem"}}>
            <div className="card-header">Reviews</div>
            <div className="card-body">
             <p className="card-text">{reviews}</p>
            </div>
            </div>
          
        );
        }
    };
}
