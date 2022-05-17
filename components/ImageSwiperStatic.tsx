import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

export default function ImageSwiperStatic(): JSX.Element {
    return(
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{
                width: "80%",
            }}
            // autoplay={{ 
            //     delay: 3000
            // }}
            breakpoints= {{
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 4,
                    spaceBetween: 40
                }
            }}
        >
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/mkxvGv4.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/BkIeqWm.png" width={300} height={300} alt="app-picture"/>
            </SwiperSlide>
            <SwiperSlide>
                <Image src="https://i.imgur.com/mkxvGv4.png" width={300} height={300} alt="app-picture"/>
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
