"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Key,
    Settings as SettingsIcon,
    Type,
    Save,
    ShieldCheck,
    Clock,
    Zap,
    ChevronRight,
    Lock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<"api" | "email" | "scripts">("api");

    const tabs = [
        { id: "api", label: "Integrations", icon: Key },
        { id: "email", label: "Schedule", icon: Clock },
        { id: "scripts", label: "Automation Scripts", icon: Zap },
    ] as const;

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-heading uppercase">Settings</h1>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Configure your high-precision pipeline.</p>
                </div>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Tab Navigation */}
                <aside className="w-full lg:w-72 space-y-1.5">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={cn(
                                "flex w-full items-center justify-between group rounded-xl px-5 py-4 text-left text-sm font-black transition-all border border-transparent uppercase tracking-widest",
                                activeTab === tab.id
                                    ? "bg-primary text-white shadow-blue-glow"
                                    : "bg-white hover:bg-primary/5 hover:border-primary/20 text-muted-foreground hover:text-primary"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <tab.icon className={cn("h-4 w-4", activeTab === tab.id ? "text-white" : "text-muted-foreground group-hover:text-primary")} />
                                {tab.label}
                            </div>
                            <ChevronRight className={cn("h-3 w-3 opacity-0 transition-opacity", activeTab === tab.id && "opacity-100")} />
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <div className="flex-1 max-w-2xl bg-muted/10 rounded-[2rem] p-8 border border-border/50">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                        >
                            {activeTab === "api" && (
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-border/50 pb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                            <Key className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-black text-heading uppercase tracking-tighter italic">Deep Integrations</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <Lock className="h-3 w-3" /> Elastic Email API Secret
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="*******************"
                                                className="w-full rounded-xl border border-border/50 bg-white px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <Lock className="h-3 w-3" /> Backend Engine Secret
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="*******************"
                                                className="w-full rounded-xl border border-border/50 bg-white px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                                                <Type className="h-3 w-3" /> Booking Link
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="https://workflow.com/your-name"
                                                className="w-full rounded-xl border border-border/50 bg-white px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <Button className="w-full py-6 text-sm uppercase tracking-widest gap-2 shadow-blue-glow">
                                        <Save className="h-4 w-4" /> Hard-Sync Configuration
                                    </Button>
                                </div>
                            )}

                            {activeTab === "email" && (
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-border/50 pb-6">
                                        <div className="p-3 bg-success/10 rounded-xl text-success">
                                            <Clock className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-black text-heading uppercase tracking-tighter italic">Precision Schedule</h3>
                                    </div>
                                    <div className="grid gap-8 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Hard Daily Limit</label>
                                            <input
                                                type="number"
                                                defaultValue={50}
                                                className="w-full rounded-xl border border-border/50 bg-white px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Retargeting Window</label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    defaultValue={2}
                                                    className="w-full rounded-xl border border-border/50 bg-white px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                                                />
                                                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-muted-foreground uppercase tracking-tighter">Days</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full py-6 text-sm uppercase tracking-widest gap-2 shadow-blue-glow">
                                        <Save className="h-4 w-4" /> Commit Schedule Changes
                                    </Button>
                                </div>
                            )}

                            {activeTab === "scripts" && (
                                <div className="space-y-8">
                                    <div className="flex items-center gap-3 border-b border-border/50 pb-6">
                                        <div className="p-3 bg-warning/10 rounded-xl text-warning">
                                            <Zap className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-black text-heading uppercase tracking-tighter italic">Automation Scripts</h3>
                                    </div>
                                    <div className="space-y-10">
                                        {[
                                            { label: "Phase 1: First Contact", desc: "Core outreach script logic" },
                                            { label: "Phase 2: Objection Killers", desc: "Automated response logic for friction" },
                                            { label: "Phase 3: Close-Loop", desc: "Final conversion script triggers" },
                                        ].map((p, i) => (
                                            <div key={i} className="space-y-3 group">
                                                <div className="flex items-center justify-between">
                                                    <label className="text-[10px] font-black text-heading uppercase tracking-widest flex items-center gap-2">
                                                        <span className="w-5 h-5 flex items-center justify-center bg-heading text-white rounded text-[8px] italic">{i + 1}</span>
                                                        {p.label}
                                                    </label>
                                                    <span className="text-[8px] font-black text-muted-foreground uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Editable Draft</span>
                                                </div>
                                                <textarea
                                                    rows={4}
                                                    className="w-full rounded-2xl border border-border/50 bg-white px-5 py-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-muted-foreground/30 leading-relaxed"
                                                    placeholder="Enter high-precision script logic..."
                                                />
                                                <div className="flex justify-end">
                                                    <Button variant="ghost" size="sm" className="text-primary gap-2 hover:bg-primary/10 rounded-lg py-4">
                                                        <Save className="h-3 w-3" /> Save Script Unit
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
