"use client";
import { motion, useScroll, useTransform } from "motion/react"  
import { useRef, useState, useEffect } from "react";

export function EnterAnimation({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: "40px" }}
            animate={{ opacity: 1, y: "0px" }}
            transition={{
                duration: 0.5,
                y: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
            }}
        >
            {children}
        </motion.div>
    )
}

export function BlurScrollContainer({ children }: { children: React.ReactNode }) {
const containerRef = useRef<HTMLDivElement>(null);
    // Use a boolean to signal that the ref is physically in the DOM
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // After mount, if the ref exists, signal readiness
        if (containerRef.current) {
            setIsReady(true);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        // We pass the ref only when isReady is true
        target: isReady ? containerRef : undefined,
        offset: ["start end", "end start"],
    });

    // Map scroll progress (0 to 1) 
    // 0.0 to 0.3: Fading/Blurring in
    // 0.3 to 0.7: STAYS CLEAR (The Window)
    // 0.7 to 1.0: Fading/Blurring out
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1], 
        ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]
    );

    const opacityValue = useTransform(
        scrollYProgress, 
        [0, 0.3, 0.7, 1], 
        [0, 1, 1, 0]
    );

    const scaleValue = useTransform(
        scrollYProgress, 
        [0, 0.3, 0.7, 1], 
        [0.9, 1, 1, 0.9]
    );
    return (
        <div ref={containerRef} className="relative">
            <motion.div
                style={{
                    filter: blurValue,
                    opacity: opacityValue,
                    scale: scaleValue,
                    willChange: "filter, opacity, transform",
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
