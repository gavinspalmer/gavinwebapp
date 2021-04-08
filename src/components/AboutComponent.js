import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Snowboard from './SnowboardComponent';
import Food from './FoodComponent';
import Sports from './SportsComponent';


function About(props) {
    return(
        <div>
            <Snowboard />
            <Food />
            <Sports />
        </div>   
    );
}

export default About;