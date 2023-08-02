import React from 'react';
import styled from "styled-components";
import Flex from "../../components/Flex";

const StyledLoadingSpinner = styled.div`
@keyframes ldio-0v3zhx4fgz4g {
  0 % {opacity: 1}
  100% {opacity: 0}
}
  .ldio-0v3zhx4fgz4g div {
    left: 86.73px;
    top: 47.79px;
    position: absolute;
    animation: ldio-0v3zhx4fgz4g linear 0.9174311926605504s infinite;
    background: #5953ff;
    width: 3.54px;
    height: 14.16px;
    border-radius: 0px / 0px;
    transform-origin: 1.77px 40.71px;
  }.ldio-0v3zhx4fgz4g div:nth-child(1) {
     transform: rotate(0deg);
     animation-delay: -0.8519003931847968s;
     background: #5953ff;
   }.ldio-0v3zhx4fgz4g div:nth-child(2) {
      transform: rotate(25.714285714285715deg);
      animation-delay: -0.7863695937090431s;
      background: #5953ff;
    }.ldio-0v3zhx4fgz4g div:nth-child(3) {
       transform: rotate(51.42857142857143deg);
       animation-delay: -0.7208387942332896s;
       background: #5953ff;
     }.ldio-0v3zhx4fgz4g div:nth-child(4) {
        transform: rotate(77.14285714285714deg);
        animation-delay: -0.655307994757536s;
        background: #5953ff;
      }.ldio-0v3zhx4fgz4g div:nth-child(5) {
         transform: rotate(102.85714285714286deg);
         animation-delay: -0.5897771952817824s;
         background: #5953ff;
       }.ldio-0v3zhx4fgz4g div:nth-child(6) {
          transform: rotate(128.57142857142858deg);
          animation-delay: -0.5242463958060288s;
          background: #5953ff;
        }.ldio-0v3zhx4fgz4g div:nth-child(7) {
           transform: rotate(154.28571428571428deg);
           animation-delay: -0.4587155963302752s;
           background: #5953ff;
         }.ldio-0v3zhx4fgz4g div:nth-child(8) {
            transform: rotate(180deg);
            animation-delay: -0.39318479685452157s;
            background: #5953ff;
          }.ldio-0v3zhx4fgz4g div:nth-child(9) {
             transform: rotate(205.71428571428572deg);
             animation-delay: -0.327653997378768s;
             background: #5953ff;
           }.ldio-0v3zhx4fgz4g div:nth-child(10) {
              transform: rotate(231.42857142857142deg);
              animation-delay: -0.2621231979030144s;
              background: #5953ff;
            }.ldio-0v3zhx4fgz4g div:nth-child(11) {
               transform: rotate(257.14285714285717deg);
               animation-delay: -0.19659239842726078s;
               background: #5953ff;
             }.ldio-0v3zhx4fgz4g div:nth-child(12) {
                transform: rotate(282.85714285714283deg);
                animation-delay: -0.1310615989515072s;
                background: #5953ff;
              }.ldio-0v3zhx4fgz4g div:nth-child(13) {
                 transform: rotate(308.57142857142856deg);
                 animation-delay: -0.0655307994757536s;
                 background: #5953ff;
               }.ldio-0v3zhx4fgz4g div:nth-child(14) {
                  transform: rotate(334.2857142857143deg);
                  animation-delay: 0s;
                  background: #5953ff;
                }
  .loadingio-spinner-spinner-qg7rbl5t9bl {
    width: 177px;
    height: 177px;
    display: inline-block;
    overflow: hidden;
    background: #f1f2f3;
  }
  .ldio-0v3zhx4fgz4g {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-0v3zhx4fgz4g div {box-sizing: content-box;}
`
export const LoadingSpinner = () => {
    return (
        <Flex justifyContent={'center'}>
            <StyledLoadingSpinner>
                <div className="loadingio-spinner-spinner-qg7rbl5t9bl">
                    <div className="ldio-0v3zhx4fgz4g">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </StyledLoadingSpinner>
        </Flex>
    );
};

export default LoadingSpinner;