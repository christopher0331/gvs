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
      ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/homepage1.webp","Cedar Pickets, Horizontal fencing, 182 linear feet", "From Privacy Structures, to Quality Fences, We've Got You Covered"],
      ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/homepage2.webp","Commercial Fencing, Chain Link Fence, 16ft tall, 500 linear feet", "Our Commercial Fences are Built to Last and Provide Security and Protection for Decades!"],
      ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/homepage3.webp","Privacy fence, 6ft tall picket fence, decorative gates", "We Handle Wood Fences with Precision and Love. Our Fences are Built to the Highest Quality"],
      ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/homepage4.webp","Cedar Picket, picket fencing, 4ft tall custom picket fence", "The Amount of Customizations are Limitless!"],
      ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/homepage5.webp","Privacy fence, 6ft tall picket fence, decorative gates", "Composite Fencing Provides a Beautiful Natural Looking Barrier to Your Home"],
      ["https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/FullSizedWebp/homepage6.webp","Cedar Picket, picket fencing, 4ft tall custom picket fence", "A Growing Family Dedicated to Bringing Quality Service to Yours!"]
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
                          <SlideStyle key={slide[0]}>
                                  <LazyLoadImage 
                                  alt={slide[1]} 
                                  src={slide[0]} 
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