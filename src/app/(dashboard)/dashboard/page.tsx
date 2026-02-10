"use client";

import { StatCard } from "@/components/ui/card";
import { Users, Mail, Target, MessageSquare, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
    const stats = [
        { title: "Total Leads", value: "2,482", icon: Users, description: "Total leads in database", trend: "+12%" },
        { title: "Active Sequences", value: "45", icon: Mail, description: "Sequences currently running", trend: "+5%" },
        { title: "Qualified Leads", value: "128", icon: Target, description: "Leads that booked a call", trend: "+18%" },
        { title: "Reply Rate", value: "24.5%", icon: MessageSquare, description: "Average reply rate", trend: "+2%" },
    ];

    const isEmpty = false; // Toggle this to see the empty state

    if (isEmpty) {
        return (
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <Link href="/upload">
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" /> Upload Leads
                        </Button>
                    </Link>
                </div>
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted p-12 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                        <Mail className="h-8 w-8" />
                    </div>
                    <h2 className="text-xl font-bold">No data yet</h2>
                    <p className="mb-6 text-muted-foreground">Upload your first batch of leads to get started with AI outreach.</p>
                    <Link href="/upload">
                        <Button variant="outline">Upload your first batch</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Hello, Jonathan</h1>
                    <p className="text-muted-foreground">Here's what's happening with your outreach today.</p>
                </div>
                <Link href="/upload">
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" /> Import Leads
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <StatCard key={i} {...stat} />
                ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <div className="glass-card col-span-2 rounded-xl p-6">
                    <h3 className="mb-4 font-bold">Performance Overview</h3>
                    <div className="flex h-64 flex-col items-center justify-center text-muted-foreground">
                        {/* Chart placeholder */}
                        <div className="flex w-full items-end justify-between px-8">
                            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                <div key={i} className="w-8 bg-primary/20 hover:bg-primary transition-colors cursor-pointer rounded-t-md" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                        <div className="mt-4 flex w-full justify-between px-8 text-xs font-medium">
                            <span>Mon</span>
                            <span>Tue</span>
                            <span>Wed</span>
                            <span>Thu</span>
                            <span>Fri</span>
                            <span>Sat</span>
                            <span>Sun</span>
                        </div>
                    </div>
                </div>

                <div className="glass-card rounded-xl p-6">
                    <h3 className="mb-4 font-bold">Recent Activity</h3>
                    <div className="space-y-4">
                        {[
                            { text: "John Doe replied to Campaign Q1", time: "2m ago", type: "reply" },
                            { text: "50 leads imported for Website Build", time: "4h ago", type: "import" },
                            { text: "Email sequence finished for Sarah Smith", time: "1d ago", type: "finished" },
                        ].map((activity, i) => (
                            <div key={i} className="flex gap-3 text-sm">
                                <div className="h-2 w-2 mt-1.5 rounded-full bg-primary" />
                                <div className="flex-1">
                                    <p className="font-medium">{activity.text}</p>
                                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
