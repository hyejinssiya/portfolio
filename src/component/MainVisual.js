import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const MainVisual = () => {

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.body.offsetHeight,
          behavior: 'smooth',
        });
      };
    useEffect(() => {
        AOS.init();
    })
    
  return (
    <div className="main_visual">
        <div className="main_title">
          <div className="main_txt">
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="500"
            ><span>2022</span></p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="1000"><span>Portfolio</span></p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="1500"><span>Kwon Hyejin</span></p>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"
             data-aos-duration="2000"><span>Publisher</span></p>
          </div>
          <p className="desc">본 포트폴리오는 리액트, 적응형 사이트로 제작되었습니다.</p>
          <div className="scroll_down" onClick={scrollToBottom}>
            <div className="mouse_shape">
              <div className="mouse_animation"></div>
            </div>
            <p>scroll down</p>
          </div>
        </div>
        
      </div>
  );
};


export default MainVisual;
