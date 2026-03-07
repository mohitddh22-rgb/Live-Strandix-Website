"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
                        Privacy Policy
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
                            <h2 className="text-3xl font-bold text-white">1. Information We Collect</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                We collect information you provide directly to us when you create an account, use our infrastructure services, or contact support. This includes:
                            </p>
                            <ul className="list-none space-y-4 pt-4">
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-slate-300"><strong className="text-white">Identity Data:</strong> Name, email address, and company details.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-slate-300"><strong className="text-white">Technical Data:</strong> IP address, browser type, and usage patterns on our platform.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">2. How We Use Your Information</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                We use the collected data to:
                            </p>
                            <ul className="list-none space-y-4 pt-4">
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-slate-300">Provide, maintain, and improve the Strandix System infrastructure.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-slate-300">Process transactions and send related information, including confirmations and invoices.</p>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                    <p className="text-slate-300">Protect against fraudulent or illegal activity.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">3. Data Security</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                We implement institutional-grade security measures to protect your data. However, no transmission over the internet is 100% secure. We encourage the use of multi-factor authentication for all Strandix accounts.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-white">4. Your Rights</h2>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                You may access, update, or delete your personal information at any time through your account settings or by contacting our support team.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
