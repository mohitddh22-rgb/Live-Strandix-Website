"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ArrowRight, Laptop, Smartphone, Cpu, Brain } from "lucide-react";

const categories = [
    { id: "all", name: "ALL SOLUTIONS", icon: null },
    { id: "ai", name: "FINTECH", icon: Brain },
    { id: "iot", name: "SAAS COMPLIANCE", icon: Cpu },
    { id: "web", name: "AI AND IOT SOLUTIONS", icon: Laptop },
    { id: "mobile", name: "WEB SOLUTIONS AND CRM", icon: Smartphone },
];

const projects = [
    {
        id: 1,
        category: "ai",
        title: "VaultPayz",
        description: "VaultPayz is India's leading digital gold and silver investment platform. You can buy, sell, and store 24K gold and 999 silver starting from just ₹100. Your holdings are stored digitally and can be converted to physical gold/silver anytime.",
        features: [
            "Buying & Selling",
            "SIP & Investments",
            "Physical Delivery",
            "Account & Security",
            "Wallet & Payments",
            "Transfer & Gifting"
        ],
        image: "/vaultpayz.png",
        type: "Fintech & Investments",
        href: "https://vaultpayz.com"
    },

    {
        id: 3,
        category: "iot",
        title: "AuditWise",
        description: "AuditWise is a role-based audit management platform that unifies your audit lifecycle—from data ingestion to review and approval—with powerful analytics, multi-database connectivity, and seamless team collaboration.",
        features: [
            "Role-Based Access Control",
            "Excel Audit Import",
            "Multi-Database Connectivity",
            "Secure Email Delivery",
            "Approve & Reject Workflow",
            "Analytics Dashboard",
            "Reviewer Management",
            "Enterprise Security"
        ],
        image: "/auditwise.png",
        type: "SAAS Compliance",
        href: "https://www.auditwise.in"
    },
    {
        id: 4,
        category: "web",
        title: "iloveuiux",
        description: "Run an instant UX audit that shows revenue loss, money at stake, and how much you can recover.",
        features: [
            "UX Score (0-100)",
            "Revenue Loss Estimate",
            "Money at Stake",
            "Recovery Potential",
            "Industry Position",
            "Top 5 Problems Costing Money",
            "Executive Verdict",
            "Fix Plan & Priority"
        ],
        image: "/iloveuiux.png",
        type: "AI and IOT Solutions",
        href: "https://iloveuiux.com"
    },
    {
        id: 5,
        category: "mobile",
        title: "Aeternis",
        description: "Aeternis is a powerful, cloud-based system designed from the ground up to be incredibly easy to use. Focus on your hospitality while our secure and reliable platform handles the rest. With real-time updates synced instantly across all your devices, Aeternis radically streamlines your operations, helping you save time and money every single day.",
        features: [
            "Easy to Use",
            "Secure & Reliable",
            "Cloud-Based",
            "Real-time Updates",
            "Saves Time & Money",
            "Works on Any Device"
        ],
        image: "/aeternis.png",
        type: "Web Solutions and CRM",
        href: "https://www.aeternis.in"
    }
];

export default function CaseStudies() {
    const [activeTab, setActiveTab] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesTab = activeTab === "all" || project.category === activeTab;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <main className="min-h-screen bg-[#030712] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-to-b from-blue-900/10 to-transparent">
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase"
                    >
                        Our Case Studies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Explore how we deliver scalable Fintech, SAAS Compliance, AI and IOT Solutions, and Web Solutions and CRM.
                    </motion.p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 px-6 sticky top-[72px] z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${activeTab === cat.id
                                    ? "bg-blue-600 border-blue-600 text-white"
                                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10"
                                    } flex items-center gap-2`}
                            >
                                {cat.icon && <cat.icon size={14} />}
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search case studies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                        />
                    </div>
                </div>
            </section>

            {/* Case Study List */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto space-y-32">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 rounded-full text-[10px] font-black uppercase tracking-widest text-blue-500">
                                            {project.type}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                        {project.title}
                                    </h2>
                                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {project.href ? (
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-all group w-fit"
                                        >
                                            View Case Study
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    ) : (
                                        <button className="flex items-center gap-3 px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-slate-200 transition-all group">
                                            View Case Study
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    )}
                                </div>

                                <div className={`relative aspect-[4/3] rounded-[40px] overflow-hidden bg-slate-900 shadow-2xl group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-40">
                            <p className="text-slate-500 text-xl italic">No case studies found matching your criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
