'use client';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

import cat from '../../../../../public/cat.jpg';
import dog from '../../../../../public/dog.jpg';
import sea from '../../../../../public/sea.jpg';
import shadow from '../../../../../public/shadow.jpg';
import skyEarth from '../../../../../public/sky-earth.jpg';

export const Slider = () => {
  return (
    <div className={styles.root}>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        loop={true}
        speed={2000}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image src={dog} alt="dog" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sea} alt="sea" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={cat} alt="cat" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={shadow} alt="shadow" className={styles.image} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={skyEarth} alt="sky-earth" className={styles.image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
