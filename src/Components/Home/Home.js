import React, { Fragment } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import styles from './Home.module.css';


export default function Home() {
  return <Fragment>

      <Swiper
        style={{
          '--swiper-pagination-color': '#ff6666',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        // navigation={false}
        modules={[Parallax, Pagination]}
        className="mySwiper p-5 text-capitalize"
      >
        <div
          slot="container-start"
          className={`parallax-bg ${styles.bg}`}
          style={{
            'backgroundImage':
              'url(https://img.freepik.com/premium-vector/collage-vintage-newspaper-background-with-torn-paper-style_553860-390.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide className={` ${styles.slider} p-5 text-danger-emphasis`}>
<div className='bg-dark bg-opacity-50 p-5'>

          <div className={`title mb-4 fw-bolder ${styles.swiperSlider}`}data-swiper-parallax="-300">
          Everything you need in time news
          </div>

          <div className="text" data-swiper-parallax="-100">
            <p className='fs-5'>
            The time news Journal is focused international daily newspaper. The Journal is published six days a week . The newspaper is published in broadsheet format and online.
            </p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={` ${styles.slider} p-5 text-danger-emphasis`}>


<div className='bg-dark bg-opacity-50 p-5'>
<div className={`title mb-4 fw-bolder ${styles.swiperSlider}`} data-swiper-parallax="-300">
          find news online
          </div>

          <div className="text" data-swiper-parallax="-100">
            <p className='fs-5'>
            The time news is a daily newspaper with a worldwide readership reported in 2022 to comprise 740,000 paid print subscribers, and 8.6 million paid digital subscribers.
            </p>
          </div>
</div>
          

        </SwiperSlide>
        <SwiperSlide className={` ${styles.slider} p-5 text-danger-emphasis`}>

<div className='bg-dark bg-opacity-50 p-5'>

          <div className={`title mb-4 fw-bolder ${styles.swiperSlider}`} data-swiper-parallax="-300">
          why time news
          </div>
         
          <div className="text" data-swiper-parallax="-100">
            <p className='fs-5'>
            time news is a daily middle-market newspaper and news broadcasting company. Founded on September 15, 1982.           </p>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>

      </Fragment>;
}
