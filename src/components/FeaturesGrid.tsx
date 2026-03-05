"use client";

import { motion } from "framer-motion";
import { Server, Database, BrainCircuit } from "lucide-react";

const features = [
    {
        icon: Server,
        title: "Infrastructure",
        description:
            "Bare-metal performance meets cloud flexibility. Multi-region deployments with automatic failover and zero-downtime upgrades.",
        gradient: "from-blue to-cyan-400",
        glow: "group-hover:shadow-blue/20",
    },
    {
        icon: Database,
        title: "Data APIs",
        description:
            "Unified access to structured and unstructured data sources. Real-time streaming with sub-millisecond query performance.",
        gradient: "from-purple to-pink-400",
        glow: "group-hover:shadow-purple/20",
    },
    {
        icon: BrainCircuit,
        title: "AI Automation",
        description:
            "Self-healing pipelines powered by LLMs. Intelligent routing, anomaly detection, and predictive scaling — all on autopilot.",
        gradient: "from-emerald-400 to-blue",
        glow: "group-hover:shadow-emerald-400/20",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function FeaturesGrid() {
    return (
        <section id="features" className="relative px-6 py-24 md:py-32">
            <div className="mx-auto max-w-7xl">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue">
                        Core Platform
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Built for scale. Designed for speed.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
                        A modular platform that adapts to your workload — from prototyping
                        to production.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            variants={cardVariants}
                            className={`group relative overflow-hidden rounded-2xl border border-card-border bg-card p-8 transition-shadow duration-500 hover:shadow-2xl ${feature.glow}`}
                        >
                            {/* Hover glow */}
                            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59,130,246,0.06), transparent 40%)",
                                }}
                            />

                            {/* Icon */}
                            <div
                                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                            >
                                <feature.icon size={22} className="text-white" />
                            </div>

                            <h3 className="mb-3 text-xl font-semibold text-foreground">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted">
                                {feature.description}
                            </p>

                            {/* Bottom accent line */}
                            <div
                                className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-60`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
