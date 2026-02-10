"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Activity, Globe, CheckCircle2, AlertTriangle, Zap, Server } from "lucide-react";
import { motion } from "framer-motion";

export default function DeliverabilityPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-heading uppercase">Deliverability Shield</h1>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Medical-grade domain health monitoring and warm-up.</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-xs font-black text-success uppercase tracking-widest border border-success/20">
                        <CheckCircle2 className="h-3 w-3" />
                        Domain Secured
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {[
                    { label: "Sender Score", value: "98/100", icon: ShieldCheck, color: "text-primary", bg: "bg-primary/5" },
                    { label: "Inbox Placement", value: "99.2%", icon: Globe, color: "text-success", bg: "bg-success/5" },
                    { label: "Blacklist Status", value: "Clean", icon: Server, color: "text-primary", bg: "bg-primary/5" },
                ].map((stat, i) => (
                    <Card key={i} className="flex flex-col items-center justify-center py-10 text-center">
                        <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}>
                            <stat.icon className="h-8 w-8" />
                        </div>
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                        <h3 className="mt-1 text-3xl font-black text-heading italic uppercase tracking-tighter">{stat.value}</h3>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between border-b border-border/50 pb-6">
                        <h3 className="text-xl font-black text-heading uppercase tracking-tighter italic">Warm-up Protocol</h3>
                        <Badge variant="active" className="rounded-full">Protocol Active</Badge>
                    </div>

                    <div className="space-y-10">
                        {[
                            { day: "Day 12", volume: "24/50 emails", progress: 48, status: "stable" },
                            { day: "Day 8", volume: "15/50 emails", progress: 30, status: "complete" },
                            { day: "Day 4", volume: "5/50 emails", progress: 10, status: "complete" },
                        ].map((day, i) => (
                            <div key={i} className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={`h-2 w-2 rounded-full ${day.status === "stable" ? "bg-primary animate-pulse" : "bg-success"}`} />
                                        <span className="text-sm font-black text-heading uppercase tracking-widest">{day.day}</span>
                                    </div>
                                    <span className="text-[10px] font-black text-muted-foreground uppercase">{day.volume}</span>
                                </div>
                                <div className="h-3 w-full overflow-hidden rounded-full bg-muted/50 border border-border/50">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${day.progress}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className={`h-full ${day.status === "stable" ? "bg-primary shadow-blue-glow" : "bg-success"}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl bg-muted/20 p-6 border border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Activity className="h-5 w-5 text-primary" />
                            <p className="text-xs font-bold text-muted-foreground leading-relaxed">
                                Our <span className="text-heading">High-Precision Engine</span> is currently rotating through 48 clean IP addresses to maintain your sender reputation.
                            </p>
                        </div>
                        <Button variant="ghost" className="text-primary font-black uppercase text-[10px] tracking-widest">View Engine Logs</Button>
                    </div>
                </Card>

                <Card className="space-y-8 bg-heading text-white shadow-2xl">
                    <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                        <div className="p-3 bg-white/10 rounded-xl text-primary">
                            <Zap className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-black uppercase tracking-tighter italic">Deep Scan</h3>
                    </div>

                    <div className="space-y-6">
                        <p className="text-xs font-bold text-white/70 leading-relaxed uppercase tracking-wide">
                            The system scans every sequence for "Spam Triggers" before execution.
                        </p>
                        <div className="space-y-4">
                            {[
                                { label: "SPF / DKIM / DMARC", status: "Secure", color: "text-success" },
                                { label: "Domain Age", status: "2.4 Years", color: "text-white" },
                                { label: "IP Reputation", status: "High", color: "text-success" },
                            ].map((check, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0">
                                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">{check.label}</span>
                                    <span className={`text-[10px] font-black uppercase tracking-widest ${check.color}`}>{check.status}</span>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full bg-white text-heading hover:bg-white/90 font-black uppercase tracking-widest py-6 h-auto">
                            Run Global Audit
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
