import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Zap,
    Target,
    Calendar,
    CheckCircle2,
    ArrowRight,
    MousePointer2,
    ShieldCheck,
    LineChart,
    ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
    return (
        <div className="flex flex-col gap-28 pb-20 pt-32">
            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto flex max-w-[900px] flex-col items-center gap-8"
                >
                    <div className="flex items-center gap-3 rounded-full bg-primary/5 px-6 py-2 text-[10px] font-black text-primary uppercase tracking-[0.2em] font-sans border border-primary/10">
                        <Zap className="h-3 w-3" />
                        Next-Generation Automation
                    </div>
                    <h1 className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl text-heading leading-[0.95] italic">
                        The New Standard of <br />
                        <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent not-italic font-black">
                            Outreach Precision
                        </span>
                    </h1>
                    <p className="max-w-[700px] text-xl text-muted-foreground sm:text-2xl font-medium leading-relaxed italic opacity-80">
                        Fifty highly personalized sequences daily. Zero friction.
                        A literary approach to automation that builds genuine connection at scale.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row mt-4">
                        <Link href="/signup">
                            <Button size="lg" className="rounded-full shadow-blue-glow px-10 h-16 text-xs uppercase tracking-widest font-black">
                                Start Scaling <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="rounded-full border-border/50 px-10 h-16 text-xs uppercase tracking-widest font-black">
                            The Strategy Guide
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4">
                <div className="grid gap-12 md:grid-cols-3">
                    {[
                        {
                            title: "Humanist Logic",
                            desc: "Algorithms designed to replicate the nuance of professional penmanship and editorial precision.",
                            icon: MousePointer2,
                        },
                        {
                            title: "Calm Orchestration",
                            desc: "A high-precision sequence engine that handles replies with the authority of a dedicated assistant.",
                            icon: Target,
                        },
                        {
                            title: "Reputation Shield",
                            desc: "Clean, honest deliverability protocols ensuring your message reaches the intended reader, every time.",
                            icon: ShieldCheck,
                        },
                    ].map((feature, i) => (
                        <Card key={i} className="text-left border-none shadow-none bg-transparent p-0 group">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-3 text-2xl font-black text-heading italic lowercase tracking-tight">{feature.title}</h3>
                            <p className="text-muted-foreground font-medium text-base leading-relaxed opacity-70 border-l-2 border-primary/10 pl-6">{feature.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section className="bg-heading py-28 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2),transparent)]" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl text-white italic transition-all">The Architecture</h2>
                    <p className="mb-20 text-white/50 font-black uppercase tracking-[0.3em] font-sans text-xs">Four phases to total delivery dominance.</p>
                    <div className="relative grid gap-12 md:grid-cols-4">
                        {[
                            { step: "I", title: "Archive Import", desc: "Batch leads via secure CSV" },
                            { step: "II", title: "Context Mapping", desc: "Refining the personal narrative" },
                            { step: "III", title: "Precision Flow", desc: "Launching the automation engine" },
                            { step: "IV", title: "Booked Calls", desc: "Genuine conversion at scale" },
                        ].map((item, i) => (
                            <div key={i} className="relative flex flex-col items-center">
                                <div className="mb-6 text-5xl font-black text-white/10 italic">
                                    {item.step}
                                </div>
                                <h4 className="mb-3 font-black text-white text-sm uppercase tracking-[0.2em] font-sans">{item.title}</h4>
                                <p className="text-sm text-white/50 font-medium italic leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 text-center py-20">
                <div className="mx-auto max-w-[900px] border border-border/50 rounded-[3rem] px-8 py-20 bg-white shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="mb-6 text-5xl font-black text-heading italic leading-[0.9] sm:text-6xl">Scalable Penmanship. <br /> Absolute Control.</h2>
                        <p className="mb-12 text-lg font-medium text-muted-foreground max-w-lg mx-auto italic">Join elite teams orchestrating their outreach with calm, authoritative precision.</p>
                        <Link href="/signup">
                            <Button size="lg" className="rounded-full shadow-blue-glow px-12 h-16 text-xs uppercase tracking-widest font-black">
                                Access the Pipeline <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
                        <div className="flex items-center gap-4 font-black text-heading group">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-blue-glow text-xl italic">
                                F
                            </div>
                            <span className="text-2xl tracking-tighter uppercase font-black italic">FREEZER</span>
                        </div>
                        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground font-sans">
                            <a href="#" className="hover:text-primary transition-colors">Archive</a>
                            <a href="#" className="hover:text-primary transition-colors">Manifesto</a>
                            <a href="#" className="hover:text-primary transition-colors">Engineering</a>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-30 font-sans italic">© 2026 FREEZER AUTOMATION.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
