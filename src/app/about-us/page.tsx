"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Users, Clock, Smile, Award, ChevronRight, Play } from "lucide-react";

const stats = [
    { label: "Team Members", value: "350+", icon: Users },
    { label: "Products Delivered", value: "150+", icon: Trophy },
    { label: "Years on Market", value: "07", icon: Clock },
    { label: "Client Satisfaction", value: "99%", icon: Smile },
    { label: "Awards & Certs", value: "60+", icon: Award },
];

const timeline = [
    { year: "2018", event: "Foundation of Thoughtwin with a vision to innovate." },
    { year: "2020", event: "Expanded global operations and scaled the team to 100+." },
    { year: "2022", event: "Achieved CMMI Level 3 certification for quality excellence." },
    { year: "2024", event: "Recognized as a top AI & Software development partner." },
    { year: "2025", event: "Leading digital transformation with cutting-edge AI solutions." },
];

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-[#000000] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We are a community of friendly, open-minded, collaborative and professionally growing people.
                    </motion.p>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 px-6 bg-slate-950/20">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Who We Are?</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            A renowned name in the web, mobile design, and software industry.
                        </h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            Strandix System (Thoughtwin) assists to develop an impeccable website and mobile application. We serve on numerous domains and transform client's thoughts into reality.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            We design and develop websites that represent your company and spread across the globe. Our team blends deep software engineering with AI and modern cloud architecture.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-colors">Our History</button>
                            <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors">Contact Us</button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer"
                    >
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                                <Play fill="white" size={32} className="ml-1" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="font-bold text-lg">We are Strandix System</p>
                            <p className="text-sm text-slate-400 font-medium">Watch our story in action</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 px-6 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mx-auto mb-6">
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Our Journey</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Years of Innovation</h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white/[0.02] border border-white/[0.06] rounded-3xl hover:bg-white/[0.04] transition-all relative group"
                            >
                                <div className="text-4xl font-black text-blue-600/20 mb-4 group-hover:text-blue-600/40 transition-colors">{item.year}</div>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.event}</p>
                                <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:block opacity-20 group-last:hidden">
                                    <ChevronRight size={24} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
