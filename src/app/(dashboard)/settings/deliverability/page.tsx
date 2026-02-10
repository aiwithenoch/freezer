"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ShieldCheck,
    Zap,
    AlertTriangle,
    Globe,
    Mail,
    Activity,
    Lock,
    Search
} from "lucide-react";

export default function DeliverabilityPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-heading">Deliverability Shield</h1>
                    <p className="text-muted-foreground font-medium">Protect your sender reputation and ensure 100% inbox placement.</p>
                </div>
                <div className="flex gap-2">
                    <Badge className="bg-success text-white px-4 py-1.5 shadow-lg shadow-success/20 animate-pulse">
                        Domain Healthy
                    </Badge>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Sender Score", value: "98/100", icon: ShieldCheck, color: "text-success", bg: "bg-success/5" },
                    { label: "Inbox Placement", value: "99.2%", icon: Target, color: "text-primary", bg: "bg-primary/5" },
                    { label: "Spam Reports", value: "0.02%", icon: AlertTriangle, color: "text-warning", bg: "bg-warning/5" },
                    { label: "DMARC/SPF", value: "Active", icon: Lock, color: "text-success", bg: "bg-success/5" },
                ].map((stat, i) => (
                    <Card key={i} className="flex flex-col gap-2 border-l-4 border-primary shadow-subtle">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                            <div className={`rounded-full ${stat.bg} p-2 ${stat.color}`}>
                                <stat.icon className="h-4 w-4" />
                            </div>
                        </div>
                        <span className="text-2xl font-black text-heading">{stat.value}</span>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="shadow-subtle">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="font-bold text-heading uppercase tracking-wider text-sm">Domain Warm-up</h3>
                            <p className="text-xs text-muted-foreground font-medium mt-1">Gradually increasing volume to build trust.</p>
                        </div>
                        <Activity className="h-6 w-6 text-primary animate-bounce-slow" />
                    </div>

                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">
                                <span>Current Phase: Scale-up</span>
                                <span className="text-primary">64% Progress</span>
                            </div>
                            <div className="h-3 w-full bg-muted/20 rounded-full overflow-hidden border border-border/50">
                                <div className="h-full bg-primary shadow-blue-glow rounded-full" style={{ width: "64%" }} />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="p-4 rounded-2xl bg-muted/10 border border-border/50 text-center">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Today's Cap</p>
                                <p className="text-lg font-black text-heading">500</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-muted/10 border border-border/50 text-center">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Sent</p>
                                <p className="text-lg font-black text-heading text-primary">320</p>
                            </div>
                            <div className="p-4 rounded-2xl bg-muted/10 border border-border/50 text-center">
                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Remaining</p>
                                <p className="text-lg font-black text-heading">180</p>
                            </div>
                        </div>

                        <Button className="w-full shadow-blue-glow font-black text-xs uppercase tracking-widest py-6">
                            Adjust Warm-up Speed
                        </Button>
                    </div>
                </Card>

                <Card className="shadow-subtle">
                    <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Spam Trigger Scanner</h3>
                    <div className="space-y-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
                            <textarea
                                placeholder="Paste your email copy here to scan for spam triggers..."
                                className="w-full h-48 rounded-2xl border-border/50 bg-muted/5 p-4 pl-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <Badge variant="cold" className="bg-destructive/10 text-destructive border-destructive/20 text-[10px] uppercase">"Free"</Badge>
                            <Badge variant="cold" className="bg-destructive/10 text-destructive border-destructive/20 text-[10px] uppercase">"Click here"</Badge>
                            <Badge variant="cold" className="bg-destructive/10 text-destructive border-destructive/20 text-[10px] uppercase">"Money"</Badge>
                            <Badge variant="cold" className="bg-destructive/10 text-destructive border-destructive/20 text-[10px] uppercase">"Guaranteed"</Badge>
                        </div>
                        <Button variant="outline" className="w-full font-black text-xs uppercase tracking-widest py-6 border-border/50">
                            Scan Copy for Risk
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
}

function Target(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
}
