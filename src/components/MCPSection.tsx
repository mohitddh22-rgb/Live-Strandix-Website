"use client";

import { motion } from "framer-motion";
import { Trophy, CheckCircle, Users, Award, Briefcase, Zap, Globe } from "lucide-react";

const successMarkers = [
    { name: "150+ Successful Projects", icon: CheckCircle },
    { name: "60+ Awards & Certifications", icon: Award },
    { name: "120K+ User Stories Completed", icon: Briefcase },
    { name: "CMMI Level 3 Certified", icon: Trophy },
    { name: "Global Clients Served", icon: Globe },
    { name: "Expert AI Integration", icon: Zap },
];

export default function MCPSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-slate-950/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
                        >
                            Why Partner with Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white"
                        >
                            The only AI Team that transforms thoughts into reality.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-lg mb-10 leading-relaxed"
                        >
                            Strandix System assists to develop an impeccable website and mobile application. We serve on numerous domains and transform client's thoughts into reality.
                        </motion.p>

                        <button className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all font-bold group">
                            Let's Estimate Your Project – Free!
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {successMarkers.map((marker, i) => (
                            <motion.div
                                key={marker.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-6 bg-white/[0.03] border border-white/[0.06] rounded-2xl flex items-center gap-4 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all group"
                            >
                                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <marker.icon size={20} />
                                </div>
                                <span className="font-bold text-sm tracking-wide text-white">{marker.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
