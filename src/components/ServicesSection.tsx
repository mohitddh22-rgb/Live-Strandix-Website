"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Cpu, Workflow, CheckCircle2, Cloud } from "lucide-react";

const services = [
    {
        icon: Monitor,
        name: "AI AND IOT SOLUTIONS",
        title: "AI and IOT Development Services",
        features: [
            {
                name: "Custom Web Applications",
                desc: "We offer one of the best Web Development services in numerous countries, tailoring solutions to business needs."
            },
            {
                name: "Custom Solutions",
                desc: "Scalable and secure web architecture built with modern cloud-first technologies."
            },
            {
                name: "UI/UX Excellence",
                desc: "Transforming complex requirements into intuitive and high-performance user interfaces."
            }
        ]
    },
    {
        icon: Smartphone,
        name: "WEB SOLUTIONS AND CRM",
        title: "Web Solutions and CRM Development",
        features: [
            {
                name: "Native & Cross-Platform",
                desc: "We provide professional Android, iOS, React Native, and Flutter developers for high-quality apps."
            },
            {
                name: "Performance Optimized",
                desc: "Mobile solutions designed for speed, security, and seamless user experiences on all devices."
            },
            {
                name: "Complete Lifecycle",
                desc: "From initial thought to final deployment on App Store and Play Store."
            }
        ]
    },
    {
        icon: Cpu,
        name: "FINTECH",
        title: "Fintech Solutions",
        features: [
            {
                name: "AI-Powered Automation",
                desc: "Develop and integrate AI solutions to automate processes, drive insights, and enhance user experience."
            },
            {
                name: "SAAS Compliance",
                desc: "We build smart IoT solutions that connect devices, collect data, and enable intelligent automation."
            },
            {
                name: "Predictive Analytics",
                desc: "Harness the power of data to stay ahead of the competition with AI-driven insights."
            }
        ]
    },
    {
        icon: Cloud,
        name: "SAAS SOFTWARE SOLUTIONS",
        title: "SAAS Software Development",
        features: [
            {
                name: "Business Operations And Management (CRM/ERP)",
                desc: "SaaS is widely used to run core business function such as Customer Relationship Management (CRM) to track sales, and Resource Planning (ERP) to manage finance, accounting, and supply chains."
            },
            {
                name: "Collaboration And Communication Tools",
                desc: "SaaS enables distributed teams to work together in real-time through applications like Slack for messaging, Zoom for video conferencing, and Google Workspace or Microsoft 365 for document editing and sharing."
            },
            {
                name: "Scalable Content And Project Management",
                desc: "Companies use SaaS for marketing, human resources, and project management to easily manage, scale, and update projects without managing the underlying hardware or software updates."
            }
        ]
    }
];

export default function ServicesSection() {
    return (
        <section className="py-32 px-6 md:px-12 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
                    >
                        Solutions We Deliver
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white"
                    >
                        Transforming Thoughts into Digital Reality
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 text-lg max-w-3xl mx-auto"
                    >
                        Strandix System assists to develop an impeccable website and mobile application across numerous domains.
                    </motion.p>
                </div>

                <div className="flex flex-col gap-32">
                    {services.map((service, idx) => (
                        <div key={service.name} className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                                        <service.icon size={22} />
                                    </div>
                                    <span className="text-sm font-bold text-blue-500 tracking-[0.2em]">{service.name}</span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">{service.title}</h3>

                                <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors font-bold mb-12 text-white">
                                    Learn More
                                </button>
                            </div>

                            <div className="lg:w-1/2 grid gap-8">
                                {service.features.map((feature) => (
                                    <div key={feature.name} className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] transition-all group">
                                        <div className="flex gap-4">
                                            <div className="mt-1">
                                                <CheckCircle2 size={18} className="text-blue-500" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors text-white">{feature.name}</h4>
                                                <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
