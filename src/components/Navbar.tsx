"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "About us", href: "/about-us" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Our Team", href: "/our-team" },
    { name: "Careers", href: "/careers" },
    {
        name: "Services",
        href: "#",
        hasMegaMenu: true,
        megaMenu: [
            {
                title: "Web Solutions and CRM",
                items: ["Android Development", "iOS Development", "React Native", "Flutter"]
            },
            {
                title: "AI and IOT Solutions",
                items: ["Python", "PHP", "Ruby On Rails", "NodeJS", "ReactJS", "MEAN Stack", "MERN Stack", "AngularJS"]
            },
            {
                title: "Fintech",
                items: ["Blockchain Development", "iGaming Services", "Salesforce Development"]
            },
            {
                title: "SaaS Solutions",
                items: ["CRM/ERP Software", "Collaboration Tools", "Project Management"]
            }
        ]
    },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleAccordion = (name: string) => {
        setOpenMobileAccordion(openMobileAccordion === name ? null : name);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-20 flex items-center px-6 md:px-12",
                isScrolled ? "glass h-16" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Strandix System" className="h-10 w-auto" />
                    <span className="font-bold text-xl tracking-tight text-white uppercase font-[family-name:var(--font-space-grotesk)]">STRANDIX SYSTEM</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8 h-full">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group h-full flex items-center">
                            {item.hasMegaMenu ? (
                                <>
                                    <button
                                        className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors h-full"
                                    >
                                        {item.name}
                                        <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform" />
                                    </button>

                                    {/* Mega Menu Dropdown */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-500/5 before:pointer-events-none">
                                            <div className="grid grid-cols-3 gap-8 relative z-10">
                                                {item.megaMenu?.map((category) => (
                                                    <div key={category.title}>
                                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                            {category.title}
                                                        </h4>
                                                        <ul className="space-y-3">
                                                            {category.items.map((subItem) => (
                                                                <li key={subItem}>
                                                                    <Link href="#" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">
                                                                        {subItem}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors h-full"
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link href="/contact-us" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-sm font-bold text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2">
                        Contact Us
                        <ArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2 z-[201]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#030712] z-[200] lg:hidden flex flex-col p-8 pt-24"
                    >
                        <div className="flex flex-col gap-6 overflow-y-auto pb-20">
                            {navItems.map((item) => (
                                <div key={item.name} className="border-b border-white/10 pb-4">
                                    {item.hasMegaMenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleAccordion(item.name)}
                                                className="flex items-center justify-between w-full text-2xl font-bold text-white"
                                            >
                                                {item.name}
                                                <ChevronDown
                                                    size={24}
                                                    className={`transition-transform duration-300 ${openMobileAccordion === item.name ? 'rotate-180 text-blue-500' : 'text-slate-500'}`}
                                                />
                                            </button>
                                            <AnimatePresence>
                                                {openMobileAccordion === item.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-6 pb-2 space-y-8 pl-4 border-l-2 border-blue-500/30 ml-2">
                                                            {item.megaMenu?.map((category) => (
                                                                <div key={category.title}>
                                                                    <h4 className="text-blue-400 font-bold mb-3 text-sm uppercase tracking-wider">{category.title}</h4>
                                                                    <ul className="space-y-3">
                                                                        {category.items.map((subItem) => (
                                                                            <li key={subItem}>
                                                                                <Link
                                                                                    href="#"
                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                    className="text-slate-300 hover:text-white text-base block py-1"
                                                                                >
                                                                                    {subItem}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-2xl font-bold block text-white"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 flex flex-col gap-4 bg-[#030712]">
                            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-center font-bold text-lg bg-blue-600 rounded-xl text-white">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
