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
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<"api" | "email" | "prompts">("api");

    const tabs = [
        { id: "api", label: "API Keys", icon: Key },
        { id: "email", label: "Email Config", icon: Clock },
        { id: "prompts", label: "AI Prompts", icon: Sparkles },
    ] as const;

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Configure your integrations and automation preferences.</p>
            </div>

            <div className="flex flex-col gap-8 lg:flex-row">
                {/* Tab Navigation */}
                <aside className="w-full lg:w-64 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-bold transition-all",
                                activeTab === tab.id
                                    ? "bg-primary text-primary-foreground shadow-lg"
                                    : "hover:bg-muted"
                            )}
                        >
                            <tab.icon className="h-4 w-4" />
                            {tab.label}
                        </button>
                    ))}
                </aside>

                {/* Content Area */}
                <div className="flex-1 max-w-2xl">
                    {activeTab === "api" && (
                        <Card className="animate-fade-in space-y-6">
                            <h3 className="text-xl font-bold border-b pb-4">API Integrations</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Elastic Email API Key</label>
                                    <input
                                        type="password"
                                        placeholder="*******************"
                                        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Gemini API Key</label>
                                    <input
                                        type="password"
                                        placeholder="*******************"
                                        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Calendly Booking Link</label>
                                    <input
                                        type="text"
                                        placeholder="https://calendly.com/your-name"
                                        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>
                            </div>
                            <Button className="gap-2">
                                <Save className="h-4 w-4" /> Save API Settings
                            </Button>
                        </Card>
                    )}

                    {activeTab === "email" && (
                        <Card className="animate-fade-in space-y-6">
                            <h3 className="text-xl font-bold border-b pb-4">Email Configuration</h3>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Daily Send Limit</label>
                                    <input
                                        type="number"
                                        defaultValue={50}
                                        className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>
                                {["Day 1", "Day 3", "Day 5", "Day 10"].map((day, i) => (
                                    <div key={i} className="space-y-2">
                                        <label className="text-sm font-medium">Wait Time ({day})</label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                defaultValue={day.split(" ")[1]}
                                                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                            />
                                            <span className="text-xs text-muted-foreground">days</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="gap-2">
                                <Save className="h-4 w-4" /> Update Schedule
                            </Button>
                        </Card>
                    )}

                    {activeTab === "prompts" && (
                        <Card className="animate-fade-in space-y-6">
                            <h3 className="text-xl font-bold border-b pb-4">AI Prompts</h3>
                            <div className="space-y-6">
                                {[
                                    { label: "Initial Outreach", desc: "First touch email generation prompt" },
                                    { label: "Objection Handler", desc: "How AI should respond to 'Too busy' or 'Not now'" },
                                    { label: "Value Prop Addition", desc: "Prompt for adding deeper company context" },
                                ].map((p, i) => (
                                    <div key={i} className="space-y-2">
                                        <label className="text-sm font-bold">{p.label}</label>
                                        <p className="text-xs text-muted-foreground">{p.desc}</p>
                                        <textarea
                                            rows={4}
                                            className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                            placeholder="Enter AI instructions..."
                                        />
                                        <div className="flex justify-end">
                                            <Button variant="ghost" size="sm" className="text-primary gap-1">
                                                <Save className="h-3 w-3" /> Save Prompt
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
