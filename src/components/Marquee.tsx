"use client";

import { motion } from "framer-motion";

const partners = [
    "Acme Corp",
    "Globex",
    "Initech",
    "Umbrella",
    "Cyberdyne",
    "Weyland",
    "Tyrell",
    "Soylent",
    "Oscorp",
    "Stark Ind.",
    "Wayne Ent.",
    "LexCorp",
];

export default function Marquee() {
    return (
        <section id="partners" className="relative overflow-hidden border-y border-white/[0.04] py-16 md:py-20">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-muted">
                    Trusted by industry leaders
                </p>

                <div className="flex animate-marquee whitespace-nowrap">
                    {[...partners, ...partners].map((name, i) => (
                        <div
                            key={`${name}-${i}`}
                            className="mx-8 flex h-12 items-center justify-center rounded-lg border border-white/[0.04] bg-white/[0.02] px-8 text-sm font-medium tracking-wider text-muted/60 grayscale transition-all hover:text-foreground hover:grayscale-0 hover:border-white/[0.1] sm:mx-12"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
