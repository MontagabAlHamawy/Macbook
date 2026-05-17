"use client";

import { performanceImages, performanceImgPositions } from "@/lib/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.fromTo(
        ".content p",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".content",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      mm.add("(min-width: 1024px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        performanceImgPositions.forEach(({ id, left, right, bottom }) => {
          if (id === "p5") return;
          const selector = `.${id}`;
          timeline.fromTo(
            selector,
            {
              opacity: 1,
              y: 80,
              scale: 0.92,
              ...(left !== undefined ? { left: `${left + 8}%` } : {}),
              ...(right !== undefined ? { right: `${right + 8}%` } : {}),
              bottom: `${bottom - 12}%`,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              ...(left !== undefined ? { left: `${left}%` } : {}),
              ...(right !== undefined ? { right: `${right}%` } : {}),
              bottom: `${bottom}%`,
              ease: "none",
            },
            0
          );
        });
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section id='performance' ref={sectionRef}>
      <h2>Next-Level Performance</h2>
      <div className="wrapper">
        {performanceImages.map((img) => (
          <Image
            key={img.id}
            className={img.id}
            src={img.src}
            alt={`Performance image ${img.id}`}
            width={400}
            height={100}
          />
        ))}
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia ad,
          <span className="text-white">{' '}tempore illo cumque voluptatibus perferendis molestiae at deserunt hic totam</span>
          , ducimus culpa minus iusto iste minima expedita. Aliquid, tenetur.</p>
      </div>
    </section>
  );
}
