"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageCompare() {
    const [position, setPosition] = useState(75);

    return (
        <div className="image-compare">
            <div className="image-compare__before">
                <Image src="/image/scrience-and-reasearch/science-secB-2.png" alt="ico" fill
                    sizes="100vw"
                    unoptimized
                    priority></Image>
            </div>

            <div
                className="image-compare__after"
                style={{
                    clipPath: `inset(0 ${100 - position}% 0 0)`
                }}
            >
                <Image src="/image/scrience-and-reasearch/science-secB-1.jpg" alt="ico" fill
                    sizes="100vw"
                    unoptimized
                    priority></Image>
            </div>

            <div
                className="image-compare__divider"
                style={{ left: `${position}%` }}
            >
                <div className="image-compare__handle">
                    <span>‹</span>
                    <span>›</span>
                </div>
            </div>

            <input
                type="range"
                min="0"
                max="100"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="image-compare__range"
            />
        </div>
    );
}