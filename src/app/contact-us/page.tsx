"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const locations = [
    {
        city: "Indore",
        type: "Head Office",
        address: "1 Panna estate, Kesar Bagh Rd, Indira Gandhi Nagar, Indore, (M.P.) 452001",
        phone: "+919977069348",
        email: "career@strandixsystem.com"
    },
    {
        city: "Neemuch",
        type: "Branch Office",
        address: "Bungalow No. 07, Behind IDBI Bank, Neemuch, (M.P.) - 458441",
        phone: "+919522312777",
        email: "career@strandixsystem.com"
    },
    {
        city: "Canada",
        type: "International",
        address: "3145 Goretti place Mississauga ON, Canada",
        phone: "+16265525569",
        email: "marketing@strandixsystem.com"
    }
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        interest: "Custom software development",
        budget: "$20K - 200K",
        industry: "Fintech & insurance",
        message: ""
    });

    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500/30">
            <Navbar />

            {/* Hero Header */}
            <section className="relative pt-32 pb-12 px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6"
                    >
                        Get In Touch
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        Let's Connect!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-2xl leading-relaxed"
                    >
                        Send us a message, and we'll promptly discuss your project with you.
                    </motion.p>
                </div>
            </section>

            {/* Two Column Layout (Form + Info) */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.5fr_1fr] gap-16">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/[0.02] border border-white/5 rounded-[40px] p-8 md:p-12 relative overflow-hidden"
                    >
                        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-300">What you are interested in*</label>
                                <div className="relative">
                                    <select
                                        value={formData.interest}
                                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                                        className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-6 py-4 appearance-none focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    >
                                        <option>Custom software development</option>
                                        <option>Tech consultation</option>
                                        <option>Tech outstaffing</option>
                                        <option>ERP implementation services</option>
                                        <option>AI services</option>
                                        <option>Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <label className="text-sm font-bold uppercase tracking-wider text-slate-300">Your budget*</label>
                                    <div className="relative">
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-6 py-4 appearance-none focus:outline-none focus:border-blue-500 transition-colors text-white"
                                        >
                                            <option>&lt; $20K</option>
                                            <option>$20K - 200K</option>
                                            <option>&gt; $200K</option>
                                            <option>Non-disclosure</option>
                                        </select>
                                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-sm font-bold uppercase tracking-wider text-slate-300">Your industry*</label>
                                    <div className="relative">
                                        <select
                                            value={formData.industry}
                                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                            className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-6 py-4 appearance-none focus:outline-none focus:border-blue-500 transition-colors text-white"
                                        >
                                            <option>Healthcare & life-sciences</option>
                                            <option>Real estate & proptech</option>
                                            <option>Fintech & insurance</option>
                                            <option>Retail & e-commerce</option>
                                            <option>Edtech & e-learning</option>
                                            <option>Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={20} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-sm font-bold uppercase tracking-wider text-slate-300">Your message (optional)</label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#0f172a] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
                                <p className="text-xs text-slate-500">
                                    By submitting, you agree to our <Link href="#" className="text-blue-500 hover:underline">Terms & Conditions</Link>.
                                </p>
                                <button className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                                    Send Message <ArrowRight size={20} />
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Side Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-12"
                    >
                        {/* Cost Estimator */}
                        <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 rounded-[32px] p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-2xl font-bold mb-3 relative z-10">Instant Cost Estimator</h3>
                            <p className="text-slate-300 mb-6 relative z-10">Know how much you'll spend — in seconds!</p>
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors relative z-10">
                                Get Your Calculation <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Who we are */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold">Who we are?</h3>
                                <Link href="/about-us" className="text-blue-500 text-sm font-bold hover:underline">Read More</Link>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Strandix System is a renowned name in web and mobile design and development in the software industry. We design and develop scalable infrastructure that represents your company and spreads across the globe.
                            </p>
                        </div>

                        {/* Why choose us stats */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Why choose us?</h3>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">Products delivered</p>
                                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">150+</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">Years on market</p>
                                    <p className="text-4xl font-black text-white">07</p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider mb-2">Client satisfaction</p>
                                    <p className="text-4xl font-black text-white">99%</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* Locations */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Global Presence</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {locations.map((loc, index) => (
                            <motion.div
                                key={loc.city}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/[0.02] border border-white/10 rounded-[32px] p-8 hover:bg-white/[0.04] transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{loc.city}</h3>
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{loc.type}</span>
                                    </div>
                                </div>

                                <div className="space-y-4 text-slate-400">
                                    <p className="leading-relaxed">{loc.address}</p>
                                    <a href={`tel:${loc.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
                                        <Phone size={16} className="text-slate-500" />
                                        {loc.phone}
                                    </a>
                                    <a href={`mailto:${loc.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                                        <Mail size={16} className="text-slate-500" />
                                        {loc.email}
                                    </a>
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
