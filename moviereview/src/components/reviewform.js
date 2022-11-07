import React from "react";
import StarRating from "./starrating";
import ReviewList from "./reviewlist";


//crated Review Form Component
export default class ReviewForm extends React.Component {
    //Created constructor that holds the state of a review
    constructor(props){
        super(props);

        this.state = {
            review: {
                name: props.name,
                review: props.review,
                rating: <StarRating />
            }
        }
    }
    //changed state of the input values
    handleNameChanged(event) {
        var review = this.state.review;
        var modifiedValue = event.target.value;
        review.name = modifiedValue;
        this.setState({
          review:review
        });
    }
    handleReviewChanged(event) {
        var review = this.state.review;
        var modifiedValue = event.target.value;
        review.review = modifiedValue;
        this.setState({
            review:review
        });
    }

    handleRatingChanged(event) {
        var review = this.state.review;
        var modifiedValue = event.target.value;
        review.rating = modifiedValue;
        this.setState({
            review:review
        });
    }
    //Wrote function to handle Submit Review button - this is not functioning properly 
        handleButtonClicked() {
            console.log(this.state.review);
            <ReviewList />

            this.props.name.current.value = '';
            this.props.review.current.value = '';
            this.props.rating = 0;
          }
            
    render(){
        
        return(
            //Built Form 
        <div id="ReviewForm" className="card border-info mb-3" style={{maxwidth: "20rem;"}}>
        <div className="card-header">Leave a Review</div>
        <div className="card-body">
        <div className="form-group">
            <label className="col-form-label mt-4">
                Name:
            </label>
            <input type='text' className="form-control" value={this.state.review.name} onChange = {this.handleNameChanged.bind(this)}/>
            
            <label className="col-form-label mt-4">
                Review:
            </label>
            <input type='text' className="form-control" value={this.state.review.review} onChange = {this.handleReviewChanged.bind(this)}/>
            
            <label className="col-form-label mt-4">
                Rating:
            </label>
            <StarRating value={this.state.review.rating} onChange = {this.handleRatingChanged.bind(this)}/>
            
            <button type="submit" className ="btn btn-info" onClick={this.handleButtonClicked.bind(this)}>Submit Review</button>
            
        </div>
        
        </div>
        </div>
        
        ); 
    };
}