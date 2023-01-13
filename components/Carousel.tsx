"use client";

import Image from "next/image";
import { useEffect } from "react";
import carousel1 from '../public/images/carousel/carousel1.png';
import carousel2 from '../public/images/carousel/carousel2.jpg';
import carousel3 from '../public/images/carousel/carousel3.jpg';

export default function Carousel(){
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
    const images : string[] = [];
    return (
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active relative float-left w-full">
      <Image
        src={carousel1}
        alt="Img carousel"
        className="block w-full"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">Retrouvez les maillots des bleus ...</h5>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <Image
        src={carousel2}
        alt="Img carousel"
        className="block w-full"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">de votre joueur favori ...</h5>
      </div>
    </div>
    <div className="carousel-item relative float-left w-full">
      <Image
        src={carousel3}
        alt="Img carousel"
        className="block w-full"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">ou de votre club favori.</h5>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>)

}