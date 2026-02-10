"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Plus,
    Mail,
    Clock,
    Zap,
    Trash2,
    Brain,
    Settings2,
    Save,
    Rocket
} from "lucide-react";
import Link from "next/link";

export default function SequenceBuilderPage() {
    const steps = [
        { id: 1, type: "email", title: "Intro: AI Personalized", delay: "Immediate", prompt: "Write a short 2-sentence intro based on {{context}}." },
        { id: 2, type: "wait", delay: "2 Days" },
        { id: 3, type: "email", title: "Follow-up: Case Study", delay: "Day 3", prompt: "Reference our results with Acme corp." },
        { id: 4, type: "wait", delay: "3 Days" },
        { id: 5, type: "email", title: "Last Call: Consulting", delay: "Day 6", prompt: "Offer a free 10-minute strategy call." },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/campaigns">
                        <Button variant="ghost" size="sm" className="font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Back</Button>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-heading">Sequence Builder</h1>
                        <p className="text-muted-foreground font-medium">Design your AI-powered outreach flow.</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 font-black text-xs uppercase tracking-widest border-border/50">
                        <Save className="h-4 w-4" /> Save Draft
                    </Button>
                    <Button className="gap-2 shadow-blue-glow font-black text-xs uppercase tracking-widest px-6">
                        <Rocket className="h-4 w-4" /> Launch Campaign
                    </Button>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Visual Flow Canvas */}
                <div className="lg:col-span-2 space-y-6">
                    {steps.map((step, i) => (
                        <div key={step.id} className="relative">
                            {step.type === "email" ? (
                                <Card className="border-l-4 border-l-primary shadow-subtle group hover:bg-white transition-all relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">{step.delay}</p>
                                                <h4 className="font-black text-heading">{step.title}</h4>
                                            </div>
                                        </div>
                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-heading"><Settings2 className="h-4 w-4" /></Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive"><Trash2 className="h-4 w-4" /></Button>
                                        </div>
                                    </div>
                                    <div className="bg-muted/10 rounded-xl p-4 border border-border/50">
                                        <div className="flex items-center gap-2 mb-2 text-primary">
                                            <Brain className="h-3 w-3" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">AI Prompt</span>
                                        </div>
                                        <p className="text-sm font-medium text-muted-foreground italic">"{step.prompt}"</p>
                                    </div>
                                </Card>
                            ) : (
                                <div className="flex flex-col items-center py-2 relative z-10">
                                    <div className="w-px h-8 bg-border/50 dashed" />
                                    <div className="px-4 py-2 rounded-full bg-muted/20 border border-border/50 flex items-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                        <Clock className="h-3 w-3" />
                                        Wait {step.delay}
                                    </div>
                                    <div className="w-px h-8 bg-border/50 dashed" />
                                </div>
                            )}
                        </div>
                    ))}

                    <button className="w-full py-8 border-2 border-dashed border-border/50 rounded-2xl flex flex-col items-center justify-center text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all group">
                        <div className="h-12 w-12 rounded-full bg-muted/20 flex items-center justify-center mb-2 group-hover:bg-primary/10 transition-all">
                            <Plus className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-black uppercase tracking-widest">Add Step to Flow</span>
                    </button>
                </div>

                {/* Sidebar Controls */}
                <div className="space-y-6">
                    <Card className="shadow-subtle">
                        <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Sequence Settings</h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">AI Voice Model</label>
                                <select className="w-full rounded-xl border border-border/50 bg-white px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20">
                                    <option>GPT-4o (Premium)</option>
                                    <option>Claude 3.5 Sonnet</option>
                                    <option>DeepSeek-V3 (Balanced)</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Daily Send Limit</label>
                                <input type="number" defaultValue={50} className="w-full rounded-xl border border-border/50 bg-white px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20" />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-2xl bg-success/5 border border-success/20">
                                <div className="flex items-center gap-3">
                                    <Zap className="h-4 w-4 text-success" />
                                    <span className="text-[10px] font-black text-success uppercase tracking-widest">Smart-Send Active</span>
                                </div>
                                <div className="h-4 w-8 rounded-full bg-success relative">
                                    <div className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-white shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="shadow-subtle border-l-4 border-l-warning">
                        <div className="flex items-start gap-3">
                            <Brain className="h-5 w-5 text-warning" />
                            <div>
                                <h4 className="font-bold text-heading text-sm">AI Advice</h4>
                                <p className="text-[11px] text-muted-foreground font-medium mt-1 leading-relaxed">
                                    Your 3rd follow-up is too aggressive. Try focusing on the "Acme Case Study" to increase reply rates by ~22%.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
