"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/anc1.jpg",
  "/assets/anc2.jpeg",
  "/assets/anc3.jpg",
  "/assets/anc4.jpg",
];

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <Slider {...settings} className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <div key={index} className="h-screen w-full relative">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </Slider>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center bg-black bg-opacity-60">
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white leading-tight">
            67th Annual NASA Convention
          </h1>
        </Fade>
        <Fade direction="up" delay={800} cascade damping={0.1} triggerOnce>
          <p className="text-lg lg:text-xl font-light mb-10 text-gray-300">
            The National Association of Students of Architecture
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
