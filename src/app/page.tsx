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
        <div className="flex flex-col gap-20 pb-20 pt-32">
            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto flex max-w-[800px] flex-col items-center gap-6"
                >
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                        <Zap className="h-4 w-4" />
                        Next-Gen Automation
                    </div>
                    <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-7xl text-heading">
                        High-Precision <br />
                        <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">
                            Cold Email Pipeline
                        </span>
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl font-medium">
                        50 personalized outreach sequences daily. Intelligent objection handling.
                        Focus only on high-value conversations that book.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href="/signup">
                            <Button size="lg" className="rounded-full shadow-blue-glow">
                                Start Scaling <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="rounded-full border-border/50">
                            View Performance Demo
                        </Button>
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: "Smart Personalization",
                            desc: "Deep-scan algorithms generate unique, context-aware emails based on leads' real-time data.",
                            icon: MousePointer2,
                        },
                        {
                            title: "Automated Follow-ups",
                            desc: "High-precision 5-email sequences that intelligently handle common stalls and replies.",
                            icon: Target,
                        },
                        {
                            title: "Reputation Shield",
                            desc: "Integrated domain warm-up and spam-trigger protection for 100% inbox placement.",
                            icon: ShieldCheck,
                        },
                    ].map((feature, i) => (
                        <Card key={i} className="text-center">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                                <feature.icon className="h-7 w-7" />
                            </div>
                            <h3 className="mb-2 text-xl font-black text-heading uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-muted-foreground font-medium text-sm leading-relaxed">{feature.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section className="bg-muted/30 py-24 border-y border-border/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl text-heading uppercase">The Pipeline</h2>
                    <p className="mb-16 text-muted-foreground font-medium">Four steps to absolute conversion dominance.</p>
                    <div className="relative grid gap-8 md:grid-cols-4">
                        <div className="absolute left-0 top-[22px] hidden h-[1px] w-full bg-border/50 md:block" />
                        {[
                            { step: "1", title: "Upload Leads", desc: "Import batches via optimized CSV" },
                            { step: "2", title: "Data Mapping", desc: "System scans and builds context" },
                            { step: "3", title: "Automated Flow", desc: "Sequences launch with precision" },
                            { step: "4", title: "Booked Calls", desc: "Qualified leads hit your dashboard" },
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center">
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-black text-white shadow-blue-glow">
                                    {item.step}
                                </div>
                                <h4 className="mb-2 font-black text-heading text-sm uppercase tracking-widest">{item.title}</h4>
                                <p className="text-sm text-muted-foreground font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 text-center">
                <div className="mx-auto max-w-[900px] rounded-[2.5rem] bg-heading px-8 py-20 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h2 className="mb-4 text-4xl font-black sm:text-5xl uppercase tracking-tighter italic">Scale Without Friction</h2>
                        <p className="mb-10 text-lg font-medium opacity-70">Join elite sales teams orchestrating their outreach with precision.</p>
                        <Link href="/signup">
                            <Button size="lg" variant="secondary" className="rounded-full shadow-white/10 px-10 h-16 text-lg">
                                Access the Pipeline <ChevronRight className="ml-2 h-6 w-6" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-border/50 py-16 bg-muted/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                        <div className="flex items-center gap-3 font-black text-heading group">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-blue-glow">
                                F
                            </div>
                            <span className="text-xl tracking-tighter uppercase font-black">FREEZER</span>
                        </div>
                        <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-primary transition-colors">Engineering Support</a>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">© 2026 FREEZER AUTOMATION. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function ChevronRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
