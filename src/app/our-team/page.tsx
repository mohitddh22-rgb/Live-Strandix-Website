"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Linkedin, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: 'Shashi Dadhich',
        role: 'Director / Planning',
        bio: 'Visionary leader driving strategic growth and organizational excellence.',
        expertise: 'Planning',
        image: '/team/shashi_dadhich.jpg'
    },
    {
        name: 'Anand Rathore',
        role: 'Founder / Director',
        bio: 'Strategic visionary behind Strandix System, shaping the future of enterprise tech.',
        expertise: 'Leadership',
        image: '/team/anand_rathore.jpg'
    },
    {
        name: 'Shikha Rathore',
        role: 'HR and Operations / Finance Head',
        bio: 'Streamlining operational efficiency and managing financial strategy.',
        expertise: 'Operations',
        image: '/team/shikha_rathore.jpg',
        imagePosition: 'center 20%'
    },
    {
        name: 'Mohit Dadhich',
        role: 'CO Founder / CTO',
        bio: 'Architecting cutting-edge technical solutions and driving innovation.',
        expertise: 'Technology',
    },
    {
        name: 'Ujjwal Mehta',
        role: 'Lead Technical Architect',
        bio: 'Designing resilient, high-performance systems for complex enterprise needs.',
        expertise: 'Architecture',
        image: '/team/ujjwal_mehta.jpg'
    },
    {
        name: 'Kritika Arya',
        role: 'HR and Operations Manager',
        bio: 'Fostering a productive work environment and optimizing internal processes.',
        expertise: 'Management',
        image: '/team/kritika_arya.jpg'
    }
];

export default function OurTeam() {
    return (
        <main className="min-h-screen bg-[#030712] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-purple-900/10 to-transparent">
                <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
                    <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase"
                    >
                        Our Team
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        We are a community of friendly, open-minded, collaborative and professionally growing people dedicated to building scalable solutions.
                    </motion.p>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative bg-white/[0.02] border border-white/[0.05] rounded-[32px] overflow-hidden hover:bg-white/[0.04] transition-all"
                            >
                                {/* Visual Header */}
                                <div className="h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex flex-col items-center justify-center relative overflow-hidden">
                                    {member.image ? (
                                        <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-500"
                                                style={{ objectPosition: member.imagePosition || 'center center' }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                                        </div>
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800')] opacity-10 mix-blend-overlay bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                                                <User size={40} className="text-white/80" />
                                            </div>
                                        </>
                                    )}
                                    <div className="absolute top-6 left-6 z-10">
                                        <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-400">
                                            {member.expertise}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                        {member.bio}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                        <button className="text-sm font-bold hover:text-blue-400 transition-colors flex items-center gap-2">
                                            View Profile <ArrowRight size={16} />
                                        </button>
                                        <div className="flex gap-4 text-slate-500">
                                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                                            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers CTA */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850')] opacity-5 mix-blend-overlay bg-cover bg-center" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Growing Team</h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            We are always looking for passionate engineers, designers, and strategists to build the future of enterprise software.
                        </p>
                        <Link href="#" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors">
                            View Open Positions <ArrowRight size={20} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
