"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowRight, Instagram } from "lucide-react";

export default function Footer() {
    const columns = [
        {
            title: "Solutions",
            links: ["Web Development", "Mobile Development", "AI Integration", "IoT Development"]
        },
        {
            title: "Company",
            links: ["About us", "Our Team", "Careers", "Contact us"]
        },
        {
            title: "Development",
            links: ["Case Studies", "Cost Calculator", "Technologies", "Methodology"]
        },
        {
            title: "Locations",
            links: ["India (HQ)", "USA Office", "UK Office", "Singapore Office"]
        }
    ];

    return (
        <footer className="pt-24 pb-12 px-6 md:px-12 border-t border-white/5 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-8 text-white uppercase font-bold text-xl tracking-tight">
                            <img src="/logo.png" alt="Strandix System" className="h-10 w-auto" />
                            STRANDIX SYSTEM
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-xs">
                            Strandix System your trusted expert web and mobile app developers helping businesses innovate and scale.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                                <Twitter size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                                <Instagram size={18} />
                            </Link>
                        </div>
                    </div>

                    {columns.map((column) => (
                        <div key={column.title}>
                            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">{column.title}</h4>
                            <ul className="grid gap-3">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <Link href="#" className="text-slate-400 text-sm hover:text-white transition-colors">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-span-2 lg:col-span-1">
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white">Get an Estimate</h4>
                        <div className="relative group mb-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                            />
                            <button className="absolute right-2 top-2 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors text-white">
                                <ArrowRight size={16} />
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-500">
                            Partner with us for your next digital breakthrough.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 items-center">
                    <div className="text-slate-500 text-[10px] flex gap-8">
                        <span>&copy; {new Date().getFullYear()} Strandix System. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                        <Link href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
