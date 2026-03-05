import { Rocket } from "lucide-react";

export default function InfrastructureSection() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white/5 mx-6 md:mx-12 rounded-[40px] mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] -ml-32 -mb-32" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Rocket size={28} className="text-blue-500" />
                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">Why Strandix System?</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Innovation Powered by Expertise</h2>

                    <p className="text-slate-400 text-lg leading-relaxed">
                        Strandix System stands out by blending deep software engineering with AI & modern cloud architecture,
                        building solutions that are secure, scalable, and tailored for industry-specific needs.
                        Partner with us to innovate, scale, and stay ahead of the competition.
                    </p>
                </div>

                <div className="flex-shrink-0">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-indigo-700 border border-white/20 rounded-full flex flex-col items-center justify-center p-8 backdrop-blur-xl relative overflow-hidden group shadow-2xl shadow-blue-500/20">
                        <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
                        <div className="text-3xl font-black text-white/10 absolute -top-4 -right-4 rotate-12 uppercase select-none">Trusted</div>
                        <div className="text-[60px] font-black text-white/5 absolute -bottom-4 -left-4 -rotate-12 uppercase select-none">Scale</div>

                        <div className="relative z-10 text-center">
                            <div className="text-lg font-bold text-white mb-1">CMMI</div>
                            <div className="text-4xl font-extrabold text-white">Level 3</div>
                            <div className="mt-4 text-[10px] font-bold py-1.5 px-4 bg-white text-blue-700 rounded-full uppercase tracking-tighter">Certified Quality</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
