import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container,
    Row,
    Media
  } from 'reactstrap';

const items = [
    {
        src: '../assets/images/Snowboarding/Snowboard_1.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_2.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_3.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_4.jpg',
        altText: 'Alyeska (Alaska)',
        caption: 'Alyeska (Alaska)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_5.jpeg',
        altText: 'Kicking Horse (BC)',
        caption: 'Kicking Horse (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_6.jpeg',
        altText: 'Kicking Horse (BC)',
        caption: 'Kicking Horse (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_7.jpg',
        altText: 'Revelstoke (BC)',
        caption: 'Revelstoke (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_8.jpg',
        altText: 'Revelstoke (BC)',
        caption: 'Revelstoke (BC)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_9.jpg',
        altText: 'Sunshine Village (AB)',
        caption: 'Sunshine Village (AB)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_10.jpg',
        altText: 'Sunshine Village (AB)',
        caption: 'Sunshine Village (AB)'
    },
    {
        src: '../assets/images/Snowboarding/Snowboard_11.jpeg',
        altText: 'Sunshine Village (AB)',
        caption: 'Sunshine Village (AB)'
    },

];

const Snowboard = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className='carousel_image'/>
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Container className="themed-container" fluid={true} style={{backgroundColor: '#8CFBDE'}}>
        <Row><p></p></Row>
        <Row>
            <div className="col-lg-1"></div>
            <div className="col-12 col-lg-5">
                <Carousel
                    size="md"
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>    
            </div>
            <div className="col-12 col-lg-5" style={{display: 'flex', alignItems: 'center'}}>
                <Media body className="ml-5">
                    <Media heading>Snowboarding</Media>
                    <p>
                        Snowboarding is one of my favorite activities!  I enjoy it so much, that between high 
                        school and University I worked at Sunshine Village.  It was a fantastic experience and 
                        allowed me to gain a unique life experience.
                    </p>
                    <p>
                        Most of the time I snowboard at Sunshine Village.  Since my parents live in Canmore, this 
                        is a great base ski hill for my family.  We try to get out as often as we can, but always 
                        wish there were more opportunities.
                    </p>
                    <p>
                        Some other ski-hills I’ve visited recently (all of which are pictured):
                    </p>
                    <li>
                        Sunshine Village
                    </li>
                    <li>
                        Kicking Horse Resort
                    </li>
                    <li>
                        Revelstoke Resort
                    </li>
                    <li>
                        Alyeska – took advantage while I was working in Alaska!
                    </li>

                </Media>
            </div>
            <div className="col-lg-1"></div>
        </Row>
        <Row><p></p></Row>
    </Container>
  );
}

export default Snowboard;