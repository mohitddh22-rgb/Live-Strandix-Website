"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const slides = [
    {
        title: "Software Development Company in India",
        description: "Partner with Strandix System, your trusted expert web and mobile app developers in the USA, UK, and Singapore. We deliver cutting-edge digital solutions.",
        cta: "Request an Estimation",
        bg: "bg-blue-900/20",
        gradient: "from-blue-600/40 via-transparent to-transparent"
    },
    {
        title: "The only AI Team that transforms thoughts into reality",
        description: "Strandix System stands out by blending deep software engineering with AI & modern cloud architecture, building solutions that are secure and scalable.",
        cta: "Let's Estimate Your Project",
        bg: "bg-indigo-900/20",
        gradient: "from-indigo-600/40 via-transparent to-transparent"
    },
    {
        title: "Innovate, Scale, and Stay Ahead of the Competition",
        description: "We help businesses stay ahead with powerful digital tools across all networks, delivering exceptional 99.9% uptime and stability.",
        cta: "Contact Us Now",
        bg: "bg-purple-900/20",
        gradient: "from-purple-600/40 via-transparent to-transparent"
    }
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[90vh] md:h-screen w-full flex items-center overflow-hidden pt-12 bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className={`absolute inset-0 z-0 ${slides[current].bg}`}
                >
                    {/* Main Background Glow */}
                    <div className="absolute top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[100px]" />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].gradient}`} />
                </motion.div>
            </AnimatePresence>

            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative z-10">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current + "-content"}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white">
                                {slides[current].title}
                            </h1>

                            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mb-10">
                                {slides[current].description}
                            </p>

                            <button className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform group">
                                {slides[current].cta}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination / Thumbnails */}
            <div className="absolute bottom-12 left-6 md:left-12 z-20 flex gap-4">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 transition-all duration-300 rounded-full ${current === i ? "w-12 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:flex flex-col items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">
                <span className="[writing-mode:vertical-rl] mb-4">Explore More</span>
                <div className="h-16 w-px bg-white/10 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                    />
                </div>
            </div>
        </section>
    );
}
