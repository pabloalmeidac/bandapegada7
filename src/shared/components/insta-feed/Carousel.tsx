import React, { useState, Fragment } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './style.css';

interface IFeedItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  permalink: string;
}

interface IMyProps {
  slides: IFeedItem[],
}

export const Carousel: React.FC<IMyProps> = ( props : IMyProps) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    return null;
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props.slides) || props.slides.length <= 0) {
    return null;
  }

  return (
    <div className='container'>
      <div className='container-left'>
        <IoIosArrowBack className="left-arrow" onClick={prevSlide}/>
      </div>
      <div className='container-feed'>
        {props.slides.map((item, index) => (
          item.media_type === 'IMAGE' && index === current ? (
            <Fragment key={index}>
              <img src={ item.media_url } alt="foto instagram"/>
              <a href={item.permalink} target="_blank" rel="noreferrer"> Ver postagem </a>
            </Fragment>
          ): item.media_type === 'VIDEO' && index === current  ? nextSlide() : ''
        ))}
      </div>
      <div className='container-right'>
        <IoIosArrowForward  className="right-arrow" onClick={nextSlide}/>
      </div>
    </div>
  );
};