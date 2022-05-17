import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

export default function ImageSwiper(): JSX.Element {
    return(
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
        </Swiper>
    );
}
