import React, { useState } from 'react'; 
//utilizing functional components instead of class component to create star ratings
const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
        return(
            //creating a div to hold the star rating
            <div className='starrating'>
               
                {[...Array(5)].map((star, i) =>{ //creating a function that creates star for 5 array elements
                    const ratingValue = i + 1; //set starting value of 1 versus index to give 1-5 value as stars are iterated over
                 
                    return(
                        //Wrapped star in a button and Set function to handle click of the button
                        <button 

                            type = 'button' 
                            key={ratingValue}
                            className={ratingValue <= (hover || rating) ? "on" : "off"} 
                            onClick={() => setRating(ratingValue)}
                            onMouseEnter={()=> setHover(ratingValue)} // set hover affect 
                            onMouseLeave={()=> setHover(rating)}
                            >

                         
                                
                        <span className="star" >&#9733;</span> 

                        </button>
                      
                    ); //using HTML star icon - added radio buttons to keep track of stars checked
                    })}
            </div>
        );
        
    };

export default StarRating;