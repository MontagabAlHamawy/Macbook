'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })
    useGSAP(() => {
        if (!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#showcase",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    pin: true,
                }
            })
            timeline.to('.mask img', {
                transform: 'scale(1.1)',
            }).to('.content', { opacity: 1, y: 0, ease: 'power1.in' })
        }
    }, [isTablet])
    return (
        <section id="showcase">
            <div className="media">
                <video src={'/videos/game.mp4'} loop muted autoPlay playsInline />
                <div className="mask">
                    <img src={'/mask-logo.svg'} alt="mask"/>
                </div>
            </div>
            <div className="content">
                <div className="wrapper">
                    <div className="lg:max-w-md">
                        <h2>Rocket Chip</h2>
                        <div className="space-y-5 mt-7 pe-10">
                            <p>
                                Intreducing{" "}
                                <span className="text-white">the future of gaming</span>
                                . M4 Powers
                            </p>
                            <p>Experience the next generation of gaming with unparalleled performance and immersive visuals.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta temporibus accusantium excepturi autem, ducimus atque placeat quia eos neque dicta rerum laborum alias nulla error consectetur quis quidem animi voluptate?</p>
                            <p className="text-primary">Learn more about the Rocket Chip</p>

                        </div>
                    </div>
                    <div className="max-w-3xs space-y-14">
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>4x  faster</h3>
                            <p>pro rendering performance than M2</p>
                        </div>
                        <div className="space-y-2">
                            <p>Up to</p>
                            <h3>1.5x  faster</h3>
                            <p>CPU performance than M2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
