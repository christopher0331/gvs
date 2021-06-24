import {React, useState, lazy} from 'react';
import styled from 'styled-components';
import Arrows from './Arrows.js';
import ArrowLeftStyle from './ArrowLeftCSS';
import ArrowRightStyle from './ArrowRightCSS';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSlider = () => {
    
    const innerWidth = window.innerWidth;

    const data = [
      ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/HorizontalCedarStainedCarousel.webp","Cedar Pickets, Horizontal fencing, 182 linear feet"],
      ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/CommercialFence.webp","Commercial Fencing, Chain Link Fence, 16ft tall, 500 linear feet"],
      ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/PicketWithDecorationCarousel.webp","Privacy fence, 6ft tall picket fence, decorative gates"],
      ["https://greenviewsolutionsimages.s3-us-west-1.amazonaws.com/HomePage/FullSizedWebp/CustomPicketCarousel.webp","Cedar Picket, picket fencing, 4ft tall custom picket fence"]
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