export default function StatsSection() {
    const stats = [
        { value: "50+", label: "Successful Projects", desc: "Delivered across diverse industries globally." },
        { value: "80+", label: "User Stories", desc: "Completed with high precision and client satisfaction." },
    ];

    return (
        <section className="py-20 border-y border-white/[0.06] bg-black">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={`flex flex-col items-center text-center px-8 ${i !== stats.length - 1 ? "md:border-r border-white/[0.06]" : ""
                                }`}
                        >
                            <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent mb-4">
                                {stat.value}
                            </h3>
                            <p className="text-xl font-bold mb-2 uppercase tracking-wide text-white">{stat.label}</p>
                            <p className="text-slate-500 text-sm max-w-[200px] leading-relaxed">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
