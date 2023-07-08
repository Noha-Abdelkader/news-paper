import React, { Fragment, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "./CardContainer.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function CardContainer() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=9bcfa9fc8c0d4f25b879f12a63738533`
    )
      .then((res) => res.json())
      .then((res) => setNews(res.articles));
  }, []);

  return (
    <Fragment>
      <div className='py-5 bg-black'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        
        }}
        pagination={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          '--swiper-pagination-color': '#ff6666',
        }}>

          {news? news.map((news, index) => 
                (news.urlToImage ?  <SwiperSlide key={index} className="p-0 " >
                    <Card className={`${styles.card} border-danger-subtle`} >
                      <Card.Img variant="top" src={news.urlToImage} className="w-100" />
                      <Card.Body>
                        {/* <a href={news.url} className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover "> */}
                          <Card.Title className="text-dark lh-base"> {news.title} </Card.Title>
                        {/* </a> */}
                      </Card.Body>
                    </Card>
                </SwiperSlide>: '')
              ):''}

             </Swiper>
        </div>
    </Fragment>
  );
}
