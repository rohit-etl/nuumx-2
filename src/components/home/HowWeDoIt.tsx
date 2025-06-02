import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import front from '../../assets/images/front.png';

//@ts-ignore
import 'swiper/css';
//@ts-ignore  
import 'swiper/css/navigation';

const HowWeDoIt = () => {
  const data = [
    {
      title: "Discover",
      description: "Gain a deep understanding of your organization's challenges, customer needs, and transformation goals. "
    },
    {
      title: "Define",
      description: "Turn insights into actionable problem statements that guide the transformation journey."
    },
    {
      title: "Design",
      description: "Develop innovative, AI-driven strategies and solutions tailored to your unique business challenges."
    },
    {
      title: "Demo",
      description: "Validate concepts and strategies in controlled, real-world scenarios to assess their feasibility and impact."
    },
    {
      title: "Deploy",
      description: "Integrate successful solutions into your organization's workflows, ensuring seamless adoption. "
    },
    {
      title: "Derive",
      description: "Extract insights from deployed solutions to refine strategies and achieve sustainable growth."
    }, 
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-fluid overflow-visible how-we-do-it-bg">
      <div className="container container-wrapper py-15 sm:py-20 md:py-20 px-4 sm:px-8 md:px-15 flex flex-col gap-10 md:gap-20">
        <div className='flex flex-col gap-5 md:gap-10 items-center justify-center'>
          <p className='text-center text-[var(--text-secondary)] font-light'>how we do</p>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>AI Done Right</h2>
            <h4 className='text-[var(--text-secondary)] text-sm sm:text-base md:text-lg'>Powered by 6D Framework</h4>
          </div>
        </div>
        <div className='relative'>
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            centeredSlides={true}
            centeredSlidesBounds={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="slide-content h-full min-w-fit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <img
                    src={front}
                    alt="front"
                    className="slide-image"
                    style={{ transform: 'rotate(30deg)' }}
                  />
                  {activeIndex === index && (
                    <div className="flex flex-col gap-4 md:gap-8 center-ball-text items-center justify-center">
                      <h3 className="title-animation font-[var(--font-clash)] text-3xl sm:text-4xl md:!text-[48px] tracking-widest uppercase text-center" style={{ fontWeight: 400, lineHeight: "1.2" }}>{item.title}</h3>
                      <p className={`description-animation font-[var(--font-inter)] text-[6px] sm:text-base md:text-[16px] -leading-[0.5] w-[120px] sm:w-[320px] text-center hidden sm:block ${isHovered ? 'show' : ''}`} style={{ fontWeight: 400, lineHeight: "1.2" }}>{item.description}</p>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>
        {`
          .slide-content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 280px;
            position: relative;
          }
          @media (min-width: 640px) {
            .slide-content {
              height: 380px;
            }
          }
          @media (min-width: 1024px) {
            .slide-content {
              height: 480px;
            }
          }
          .slide-image {
            width: 120px;
            height: auto;
            transition: transform 0.4s cubic-bezier(0,0.2,0,1);
            max-width: 100%;
            display: block;
            user-select: none;
          }
          @media (min-width: 640px) {
            .slide-image {
              width: 180px;
            }
          }
          @media (min-width: 1024px) {
            .slide-image {
              width: 240px;
            }
          }
          .swiper-slide-active .slide-image {
            transform: scale(1.5) rotate(30deg) !important;
          }
          @media (min-width: 640px) {
            .swiper-slide-active .slide-image {
              transform: scale(1.6) rotate(30deg) !important;
            }
          }
          @media (min-width: 1024px) {
            .swiper-slide-active .slide-image {
              transform: scale(1.75) rotate(30deg) !important;
            }
          }
          .mySwiper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          }
          @media (min-width: 640px) {
            .mySwiper {
            }
          }
          @media (min-width: 1024px) {
            .mySwiper {
            }
          }
          .swiper-button-next, .swiper-button-prev {
            position: absolute;
            bottom: 0;
            top: auto;
            transform: none;
            left: 50%;
            border: 1px solid #fff;
            padding: 8px;
            width: 10px;
            height: 10px;
            aspect-ratio: 1/1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            z-index: 10;
          }
          @media (min-width: 640px) {
            .swiper-button-next, .swiper-button-prev {
              padding: 10px;
              width: 12px;
              height: 12px;
            }
          }
          .swiper-button-prev {
            transform: translateX(-40px);
          }
          @media (min-width: 640px) {
            .swiper-button-prev {
              transform: translateX(-60px);
            }
          }
          .swiper-button-next {
            transform: translateX(10px);
          }
          @media (min-width: 640px) {
            .swiper-button-next {
              transform: translateX(20px);
            }
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 10px;
            color: #fff;
          }
          @media (min-width: 640px) {
            .swiper-button-next:after, .swiper-button-prev:after {
              font-size: 12px;
            }
          }
          .center-ball-text {
            position: absolute;
            top: 52%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            text-align: center;
            z-index: 2;
            width: 90%;
            pointer-events: none;
          }
          @media (min-width: 640px) {
            .center-ball-text {
              width: 80%;
            }
          }
          @media (min-width: 1024px) {
            .center-ball-text {
              width: 70%;
            }
          }
          .center-ball-text h3 {
            margin: 0 0 8px 0;
            font-size: 1.25rem;
            font-weight: bold;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          }
          @media (min-width: 640px) {
            .center-ball-text h3 {
              font-size: 1.5rem;
            }
          }
          .center-ball-text p {
            margin: 0;
            font-size: 0.875rem;
            text-shadow: 0 2px 8px rgba(0,0,0,0.5);
          }
          @media (min-width: 640px) {
            .center-ball-text p {
              font-size: 1rem;
            }
          }

          /* Title Animation */
          .title-animation {
            animation: slideInFromRight 0.8s ease-out forwards;
            opacity: 0;
            transform: translateX(50px);
          }
          @media (min-width: 640px) {
            .title-animation {
              transform: translateX(75px);
            }
          }
          @media (min-width: 1024px) {
            .title-animation {
              transform: translateX(100px);
            }
          }

          @keyframes slideInFromRight {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @media (min-width: 640px) {
            @keyframes slideInFromRight {
              0% {
                opacity: 0;
                transform: translateX(75px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
          }
          @media (min-width: 1024px) {
            @keyframes slideInFromRight {
              0% {
                opacity: 0;
                transform: translateX(100px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
          }

          /* Description Animation */
          .description-animation {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.5s ease-out;
          }
          @media (min-width: 640px) {
            .description-animation {
              transform: translateY(40px);
            }
          }
          @media (min-width: 1024px) {
            .description-animation {
              transform: translateY(50px);
            }
          }

          .description-animation.show {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
    </div>
  )
}

export default HowWeDoIt;