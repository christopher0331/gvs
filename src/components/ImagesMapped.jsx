import {React, useState, lazy} from 'react';
import styled from 'styled-components';
import Arrows from './Arrows.js';
import ArrowLeftStyle from './ArrowLeftCSS';
import ArrowRightStyle from './ArrowRightCSS';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


const ImageSlider = () => {
    
    const innerWidth = window.innerWidth;

    const data = [
      ["https://ik.imagekit.io/greenviewsolutions/featuredprojects/Project1/picture13?tr=w-1200,h-600","Privacy fence, 6ft tall picket fence, decorative gates", "Our Fences are Built to the Highest Quality"], 
      ["https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/homepage1.webp?tr=w-600,h-400","Cedar Pickets, Horizontal fencing, 182 linear feet", "From Privacy Structures, to Quality Fences, We've Got You Covered"],
      ["https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/homepage2.webp?tr=w-600,h-400","Commercial Fencing, Chain Link Fence, 16ft tall, 500 linear feet", "Our Commercial Fences are Built to Last and Provide Security and Protection for Decades!"],
      ["https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/homepage3.webp?tr=w-600,h-400","Privacy fence, 6ft tall picket fence, decorative gates", "Our Fences are Built to the Highest Quality"],
      ["https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/homepage4.webp?tr=w-600,h-400","Cedar Picket, picket fencing, 4ft tall custom picket fence", "The Amount of Customizations are Limitless!"],
      ["https://ik.imagekit.io/greenviewsolutions/HomePage/FullSizedWebp/homepage6.webp?tr=w-600,h-400","Cedar Picket, picket fencing, 4ft tall custom picket fence", "A Growing Family Dedicated to Bringing Quality Service to Yours!"]
];

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
      });
    
      const { translate, transition, activeIndex } = state;

      const nextSlide = () => {
        if (activeIndex === data.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeIndex: 0
          });
        };
    
        setState({
          ...state,
          activeIndex: activeIndex + 1,
          translate: (activeIndex + 1) * window.innerWidth
        });
      };
    
      const prevSlide = () => {
        if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (data.length - 1) * window.innerWidth,
            activeIndex: data.length - 1
          });
        };

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * window.innerWidth
          });
    }

        return(
            <ViewerBS>
              <SliderCSSBS>
                  <SliderContent translate={translate} transition={transition}>
                      {data.map(slide => (
                            <SlideStyle key={slide}>
                                    <LazyLoadImage                                       
                                      alt={slide[1]}
                                      src={slide[0]} 
                                      height = "900px" 
                                      width={innerWidth}
                                      key={slide} 
                                    >
                          
                                  </LazyLoadImage>
                                  <CallToAction>
                                        <p>{slide[2]}</p>
                                        <Button>
                                          <Link to='contact-us' style={{color: "white"}}>
                                              Free Estimate   
                                          </Link>
                                        </Button>
                                    </CallToAction>
                            </SlideStyle>
                          ))}

                  </SliderContent>
                 
              </SliderCSSBS>
            <HoverButtonsBS>
                <ArrowRightStyle>
                        <Arrows direction="right" handleClick={nextSlide}/>
                </ArrowRightStyle>
                <ArrowLeftStyle>
                        <Arrows direction="left" handleClick={prevSlide} />
                </ArrowLeftStyle>
            </HoverButtonsBS>
        </ViewerBS>
        )

}

const Button = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, .0);
    border: 1px solid white;
    color: white;
    margin-top: 10vw;
    z-index: 10;
    padding: 3px 3px;
    border-radius: 5px;
    transition: .5s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      color: darkgreen;
      cursor: pointer;
    }
`; 

const CallToAction = styled.div`
    display: flex;
    position: relative; 
    text-align: center;
    height: 18vw;
    width: 70vw;
    font-size: 3vw;
    border-radius: 10px;
    color: white;
    padding: 5px 5px;
    justify-content: center;
    margin-left: 15vw;
    margin-top: -500px;
    align-content: center;
    background-color: rgba(0, 0, 0, .4);
    z-index: 10;
`;

const HoverButtonsBS = styled.div`
    display: flex;
    z-index: 3;
    justify-content: center;
    &:hover{
        z-index: 8
    }
    &:active{
        z-index: 8
    }
`;

const SliderCSSBS = styled.div`
    position: relative;
    display: flex;
    justify-items: center;
    top: 0%;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    height: 700px;
    z-index: 5;
    &:hover {
        z-index: 0;
    }
`;

const ViewerBS = styled.div`
    position: relative;
    width: 100%;
    height: 700px;
    z-index: 1;
    background: black;
`;

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 580px;
    display: flex;
    background: whitesmoke;
`;

const SlideStyle = styled.div`
    height: 700px;
    width: 100%;
    background-size: contain;
    background-repeat: norepeat;
    background-position: center;
`;

export default ImageSlider;