import React, { Fragment, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import styles from './Search.module.css';
import useDebounce from '../../Hooks/useDebounce';



export default function Search() {
    const [data,setData] = useState(null);
    const [search,setSearch] = useState('bitcoin');

    const debounceValue = useDebounce(search , 500);

    //  const getData = async()=> await fetch(`https://newsapi.org/v2/everything?q=${debounceValue}&apiKey=9bcfa9fc8c0d4f25b879f12a63738533`)
    //  .then(res=>res.json())
    //     .then(res=>setData(res.articles)) 



    useEffect(()=>{
        // if(debounceValue) getData();

    //    { debounceValue ? fetch(`https://newsapi.org/v2/everything?q=${debounceValue}&apiKey=9bcfa9fc8c0d4f25b879f12a63738533`)
    //     .then(res=>res.json())
    //     .then(res=>setData(res.articles)) : ''};

    } ,[debounceValue])


  return <Fragment>
    <div className='p-3'>
        <div className='d-flex justify-content-end'>
        <div className="w-25 p-3 ">
            <input
              type="search"
              placeholder="Search"
              className="me-2 px-2 py-1 rounded-2 border-danger"
              onChange={(e)=>setSearch(e.target.value)}
              aria-label="Search"
            />
            </div>

        </div>

                <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        breakpoints={{
            0: {
              slidesPerView: 3,
            },
            550: {
              slidesPerView: 5,
            },
            700: {
              slidesPerView: 6,
            },
            1200: {
              slidesPerView: 8,
            },
          }}
        modules={[Autoplay]}
        className="mySwiper bg-body py-4"
      >
      
        {data?  data.map((data,index)=> (
                data.urlToImage?
             <SwiperSlide className='p-0'  key={index}>
                <a href={data.url} target='_blank'>
                    <Card  className={`${styles.cardImg} border-0`}>
                       <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                       <Card.Img variant="top" src={data.urlToImage} className='rounded-circle'/>
                         <Card.Title className='fs-6  link-underline-danger link-offset-2  link-underline-opacity-25  link-underline-opacity-100-hover'>{data.source.name}</Card.Title>
                       </Card.Body>
                   </Card>
                </a> 
        </SwiperSlide>
                :'')) :<div class="lds-facebook  mx-auto "><div></div><div></div><div></div></div>}
      </Swiper>
    </div>
    

  </Fragment>
}
