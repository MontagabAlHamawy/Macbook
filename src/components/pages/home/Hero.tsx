"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id='hero'>
            <div>
                <h1>Mackbook Pro</h1>
                <Image src={'/title.png'} alt="mackbook title" width={200} height={200} />
            </div>
            <video ref={videoRef} src={'/videos/hero.mp4'} autoPlay muted playsInline />

            <button>Buy</button>
            <p>From $1599 or $133/mo for 12 months</p>
        </section>
    );
}
