import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import coffee from "../../assets/coffee.png";
import glass from "../../assets/glass.png";
import love from "../../assets/love.png";
import page from "../../assets/page.png";
import "../../ImageSlide.css";

gsap.registerPlugin(ScrollTrigger);

export default function MainSection2() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const images = wrapper.querySelectorAll<HTMLImageElement>(".image-slide-images img");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 0 },
        {
          y: (_i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    const clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees.

    gsap.to(images, {
      skewY: 0,
      scrollTrigger: {
        trigger: wrapper,
        start: "top center",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const skew = clamp(velocity / -50);
          images.forEach((img) => gsap.to(img, { skewY: skew, overwrite: "auto" }));
        },
      },
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="image-slide-wrapper " ref={wrapperRef}>
      <div className="image-slide-content">
        <h1 className="image-slide-text">재미있는 퀴즈를 만들어보세요</h1>
        <h1 aria-hidden="true" className="image-slide-text image-slide-outline-text">
          재미있는 퀴즈를 만들어보세요
        </h1>
        <h1 aria-hidden="true" className="image-slide-text image-slide-filter-text">
          재미있는 퀴즈를 만들어보세요
        </h1>

        <section className="image-slide-images">
          <img
            data-speed="0.8"
            src={coffee}
            alt=""
            className="w-[350px] h-[350px] image-slide-img"
          />
          <img
            data-speed="0.9"
            src={glass}
            alt=""
            className="w-[400px] h-[400px] image-slide-img"
          />
          <img data-speed="1" src={love} alt="" className="w-[400px] h-[400px] image-slide-img" />
          <img data-speed="1.2" src={page} alt="" className="w-[400px] h-[400px] image-slide-img" />
          <img
            data-speed="1.2"
            src={coffee}
            alt=""
            className="w-[375px] h-[375px] image-slide-img"
          />

          <img data-speed="0.8" src={love} alt="" className="w-[400px] h-[400px] image-slide-img" />
          <img data-speed="1" src={page} alt="" className="w-[400px] h-[400px] image-slide-img" />
        </section>
      </div>
    </div>
  );
}
