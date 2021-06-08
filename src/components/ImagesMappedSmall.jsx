import {React, useState, lazy} from 'react';
import styled from 'styled-components';
import Arrows from './Arrows.js';
import ArrowLeftStyle from './ArrowLeftCSS';
import ArrowRightStyle from './ArrowRightCSS';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSliderSmall = () => {
    
    const innerWidth = window.innerWidth;

    const dataSmall = [
        "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/HorizontalPineStained_642.webp", 
        "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/Commercial_642.webp", 
        "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/CustomPickett_642.webp", 
        "https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/PremiumPicketWDecor_642.webp"
      ];

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
      });
    
      const { translate, transition, activeIndex } = state;

      const nextSlide = () => {
        if (activeIndex === dataSmall.length - 1) {
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
            translate: (dataSmall.length - 1) * window.innerWidth,
            activeIndex: dataSmall.length - 1
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
                    {dataSmall.map(slide => (
                          <SlideStyle key={slide}>
                                  <LazyLoadImage 
                                  alt="" 
                                  src={slide} 
                                  height = "400px" 
                                  width={innerWidth}
                                  key={slide} 
                                  >
                                </LazyLoadImage>
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



const HoverButtonsBS = styled.div`
    z-index: 3;
    &:hover{
        z-index: 6
    }
    &:active{
        z-index: 6
    }
`;

const SliderCSSBS = styled.div`
    position: relative;
    top: 0%;
    margin: 0 auto;
    overflow: hidden;
    width: 100%;
    height: 400px;
    z-index: 5;
    &:hover {
        z-index: 0;
    }
`;

const ViewerBS = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: black;
`;

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 400px;
    display: flex;
    background: whitesmoke;
`;

const SlideStyle = styled.div`
    height: 400px;
    width: 100%;
    background-size: contain;
    background-repeat: norepeat;
    background-position: center;
`;

export default ImageSliderSmall;