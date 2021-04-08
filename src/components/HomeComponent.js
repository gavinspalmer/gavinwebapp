import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

/*function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}
<CardImg src='../assets/images/Gavin_Palmer_Headshot.jpg' alt='Gavin Palmer' />
*/

function Home(props) {
    return(
        <div className="col-12 col-md-6 offset-md-3">
            <Card body className="text-center">
                <CardImg src='../assets/images/Gavin_Palmer_Headshot.jpg' alt='Gavin Palmer' />
                <CardBody>
                    <CardTitle tag="h2">Gavin Palmer</CardTitle>
                    <CardSubtitle tag="h4">P.Eng</CardSubtitle>
                    <CardText>
                        As a detail-oriented and innovative Engineering professional with several years experience I realize the 
                        importance of identifying client and company demands, goals and obstacles in order to effectively execute 
                        innovative solutions for productivity problems. Recently, I have expanded roles which provide detailed 
                        experience in software development and application management, and have been recognized for utilizing my 
                        technical aptitude to research, analyze and ‘self-teach’ emerging advanced software development skills. 
                        Throughout my career, I have continuously added value to the organization I represent and have a proven 
                        record of success.
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Home;