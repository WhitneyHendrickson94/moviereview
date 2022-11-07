import React from 'react';
import Movie from './movie';



export default class MovieList extends React.Component{
render(){
//movie objects with their props
    let movieOne = {
        img:'https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/200x0/v2/https://flxt.tmsimg.com/assets/p14494882_p_v8_aa.jpg',
        synopsis: `A cynical journalist decides to take a train from Washington, D.C.
        to Los Angeles for Christmas to get inspiration for a story in honor of his 
        late father. He gets to know the other passengers and runs into an old flame
        while aboard.`,
        title: 'The Christmas Train',
        year: '2017'
    };
    let movieTwo = {
        img:'https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/200x0/v2/https://flxt.tmsimg.com/assets/p11082181_p_v13_ac.jpg',
        synopsis: `After unexpectedly moving to Alaska, an ambitious doctor starts a 
        new romance and learns that her small town is hiding a holiday secret.`,
        title: 'Christmas Under Wraps',
        year: '2014'
    };
    let movieThree = {
        img:'https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/200x0/v2/https://resizing.flixster.com/gankeuMoGXorhNWsCsoKsq4V0lY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM5NGVkZmI5LTJmYWEtNDNmZi1iZTNhLWYwZWUxZWIwYjQ0YS5qcGc=',
        synopsis: `A doctor encounters a man from her past who brings with him a 
        revelation that could change her life forever..`,
        title: 'The Christmas Doctor',
        year: '2020'
    };
    return(
        //instances of movies being built on the DOM
        <div className="container">
            <div className='row'>
            <div className='col-sm'><Movie {...movieOne} /></div>
            <div className='col-sm'><Movie {...movieTwo} /></div>
            <div className='col-sm'><Movie {...movieThree} /></div>
            </div>
        </div>
    );



};

}



