"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Clock, Gift, Sun, Mail } from "lucide-react";
import Link from "next/link";

const perks = [
    {
        icon: Clock,
        title: "5 Days a week",
        description: "We believe in improved job satisfaction and morale. The five-day week gives you a better work-life balance and more time with family and friends."
    },
    {
        icon: Gift,
        title: "Rewards",
        description: "Well, we care for your 'Smile' we create a moment of yours with shopping vouchers, team lunch, outings, and a letter of thanks."
    },
    {
        icon: Sun,
        title: "Flexible Timings",
        description: "You are not tied to a desk to work for several hours. We have flexible working hours and a work environment that lets you fit the rest of your life with your work."
    }
];

export default function Careers() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-blue-900/10 to-transparent">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
                    <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-8"
                    >
                        Current Openings
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Become a Part of<br />Strandix System Family
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        Working at Strandix System means more than just a job. As part of our work-life balance, we respect your priorities outside of work and help you maximize your potential.
                    </motion.p>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Build your career with us</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    Strandix System offers a vibrant environment where your talent, expertise and knowledge can shine. You will be rewarded with compensation on par with industry standards, performance incentives, and continuous learning.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">We offer careers, not jobs</h2>
                                <p className="text-slate-400 text-lg leading-relaxed">
                                    In today's fast-changing business environment, we are looking for talented individuals who are motivated by career challenges and enjoy working in a dynamic and friendly atmosphere.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-auto md:h-[600px] rounded-[40px] overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-0" />
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600"
                                alt="Team collaboration"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Perks Section */}
            <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Perks of Joining Strandix</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            We ensure our team has everything they need to do their best work.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {perks.map((perk, index) => (
                            <motion.div
                                key={perk.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#030712] border border-white/10 rounded-[32px] p-8 hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <perk.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{perk.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {perk.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Apply CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-blue-500/20 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                            <Mail size={32} className="text-white" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Couldn't find the job you are looking for?</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            We are always on the lookout for great talent. Send your details and we will keep you in mind for future openings.
                        </p>
                        <a
                            href="mailto:hr@strandixsystem.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
                        >
                            Send your resume
                            <ArrowRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
