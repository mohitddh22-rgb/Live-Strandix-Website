"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-[#030712] text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-b from-blue-900/10 to-transparent">
                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Terms of Service
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 font-bold uppercase tracking-widest text-sm"
                    >
                        Last Updated: March 2026
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto prose prose-invert prose-blue">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">1. Acceptance of Terms</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                By accessing strandixsystem.com, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">2. Use of Services</h2>
                            <ul className="list-none space-y-6 pt-4">
                                <li className="space-y-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Eligibility
                                    </h3>
                                    <p className="text-slate-400 pl-4.5">You must be at least 18 years old to use our services.</p>
                                </li>
                                <li className="space-y-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Account Responsibility
                                    </h3>
                                    <p className="text-slate-400 pl-4.5">You are responsible for maintaining the confidentiality of your account credentials.</p>
                                </li>
                                <li className="space-y-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Prohibited Conduct
                                    </h3>
                                    <p className="text-slate-400 pl-4.5">You may not use our infrastructure for any unlawful activities, including but not limited to unauthorized data mining or system interference.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">3. Payment and Escrow Terms</h2>
                            <p className="text-slate-400 mb-4">If using our integrated payment facilitation tools:</p>
                            <ul className="list-none space-y-6 pt-4">
                                <li className="space-y-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Vaulting
                                    </h3>
                                    <p className="text-slate-400 pl-4.5">Funds are held securely until transaction conditions are met.</p>
                                </li>
                                <li className="space-y-2">
                                    <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                        Disputes
                                    </h3>
                                    <p className="text-slate-400 pl-4.5">Strandix System acts as a neutral mediator but is not liable for the quality of third-party goods or services.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">4. Limitation of Liability</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                Strandix System shall not be liable for any indirect, incidental, or consequential damages resulting from your use or inability to use our platform.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">5. Governing Law</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                These terms are governed by the laws of your jurisdiction, without regard to its conflict of law provisions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
