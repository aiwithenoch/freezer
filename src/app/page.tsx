import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Zap,
    Target,
    Calendar,
    CheckCircle2,
    ArrowRight,
    Sparkles
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="flex flex-col gap-20 pb-20 pt-32">
            {/* Hero Section */}
            <section className="container mx-auto px-4 text-center">
                <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6">
                    <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary animate-fade-in">
                        <Sparkles className="h-4 w-4" />
                        AI-Powered Outreach
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                        Automate Your Cold Email <br />
                        <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                            Outreach with AI
                        </span>
                    </h1>
                    <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
                        50 personalized emails daily. AI handles objections.
                        Only pay attention when they book a call.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href="/signup">
                            <Button size="lg" className="rounded-full shadow-lg hover:shadow-primary/25">
                                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="rounded-full">
                            View Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        {
                            title: "AI Personalization",
                            desc: "Gemini generates unique, context-aware emails based on your leads' background and news.",
                            icon: Sparkles,
                        },
                        {
                            title: "Smart Follow-ups",
                            desc: "Automated 5-email sequences that intelligently handle common objections and stalls.",
                            icon: Target,
                        },
                        {
                            title: "Auto-Qualification",
                            desc: "Directly sends your Calendly link when the lead shows genuine interest or asks to meet.",
                            icon: Calendar,
                        },
                    ].map((feature, i) => (
                        <Card key={i} className="group relative overflow-hidden text-center hover:border-primary/50">
                            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section className="bg-muted/50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
                    <div className="relative grid gap-8 md:grid-cols-4">
                        <div className="absolute left-0 top-[22px] hidden h-[2px] w-full bg-border md:block" />
                        {[
                            { step: "1", title: "Upload Leads", desc: "Import 50 leads via CSV" },
                            { step: "2", title: "AI Personalizes", desc: "AI scans and builds context" },
                            { step: "3", title: "Automated Flow", desc: "Sequences start instantly" },
                            { step: "4", title: "Booked Calls", desc: "Qualified leads hit your inbox" },
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                                    {item.step}
                                </div>
                                <h4 className="mb-1 font-bold">{item.title}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 text-center">
                <div className="mx-auto max-w-[800px] rounded-3xl bg-primary px-8 py-12 text-primary-foreground shadow-2xl">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Start automating today</h2>
                    <p className="mb-8 text-lg opacity-90">Join top sales teams scaling their outreach with AI.</p>
                    <Link href="/signup">
                        <Button size="lg" variant="secondary" className="rounded-full shadow-xl">
                            Create Your Account <ChevronRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        <div className="flex items-center gap-2 font-bold text-primary">
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary text-[10px] text-primary-foreground">
                                F
                            </div>
                            FREEZER
                        </div>
                        <div className="flex gap-8 text-sm text-muted-foreground">
                            <a href="#" className="hover:text-primary">Privacy</a>
                            <a href="#" className="hover:text-primary">Terms</a>
                            <a href="#" className="hover:text-primary">Support</a>
                        </div>
                        <p className="text-sm text-muted-foreground">© 2026 Riverside AI. All rights reserved.</p>
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
