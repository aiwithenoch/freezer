"use client";

import { useState, useEffect } from "react";
import { type Lead, type Campaign } from "@/lib/mock-data";

export default function DashboardPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [leadsRes, campaignsRes] = await Promise.all([
                    fetch("/api/leads"),
                    fetch("/api/campaigns")
                ]);
                const [leadsData, campaignsData] = await Promise.all([
                    leadsRes.json(),
                    campaignsRes.json()
                ]);
                setLeads(leadsData);
                setCampaigns(campaignsData);
            } catch (error) {
                console.error("Failed to fetch dashboard stats:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const totalLeads = leads?.length || 0;
    const activeCampaigns = campaigns?.length || 0;
    const qualifiedLeads = leads?.filter(l => l.status === "qualified").length || 0;
    const replyRate = totalLeads > 0 ? ((leads?.filter(l => l.status === "interested" || l.status === "qualified").length || 0) / totalLeads * 100).toFixed(1) : "0";

    const stats = [
        { title: "Total Leads", value: totalLeads.toLocaleString(), icon: Users, description: "Total leads in database", trend: "Live" },
        { title: "Active Sequences", value: activeCampaigns.toString(), icon: Mail, description: "Sequences currently running", trend: "Live" },
        { title: "Qualified Leads", value: qualifiedLeads.toString(), icon: Target, description: "Leads that booked a call", trend: "Live" },
        { title: "Reply Rate", value: `${replyRate}%`, icon: MessageSquare, description: "Average interest rate", trend: "Live" },
    ];

    const isEmpty = !loading && totalLeads === 0;

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
                    <p className="mb-6 text-muted-foreground">Upload your first batch of leads to get started with high-precision outreach.</p>
                    <Link href="/upload">
                        <Button variant="outline">Upload your first batch</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-8"
        >
            <motion.div variants={item} className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Hello, Jonathan</h1>
                    <p className="text-muted-foreground">Here's what's happening with your outreach today.</p>
                </div>
                <Link href="/upload">
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" /> Import Leads
                    </Button>
                </Link>
            </motion.div>

            <motion.div variants={container} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <motion.div key={i} variants={item}>
                        <StatCard {...stat} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div variants={container} className="grid gap-6 lg:grid-cols-3">
                <motion.div variants={item} className="col-span-2">
                    <Card>
                        <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Performance Overview</h3>
                        <div className="flex h-64 flex-col items-center justify-center">
                            {/* Chart placeholder */}
                            <div className="flex w-full items-end justify-between px-4">
                                {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                                        className="w-full mx-1 bg-primary/10 hover:bg-primary/30 transition-all cursor-pointer rounded-t-lg group relative"
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-heading text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            {h}% Growth
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-6 flex w-full justify-between px-4 text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">
                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                                <span>Sun</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div variants={item}>
                    <Card>
                        <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Recent Activity</h3>
                        <div className="space-y-6">
                            {[
                                { text: "John Doe replied to Campaign Q1", time: "2m ago", type: "reply" },
                                { text: "50 leads imported for Website Build", time: "4h ago", type: "import" },
                                { text: "Automation engine identified a new lead for Sarah Smith", time: "1d ago", type: "finished" },
                            ].map((activity, i) => (
                                <motion.div key={i} variants={item} className="flex gap-4 text-sm group cursor-default">
                                    <div className="h-2 w-2 mt-1.5 rounded-full bg-primary shadow-blue-glow ring-4 ring-primary/5" />
                                    <div className="flex-1">
                                        <p className="font-semibold text-heading group-hover:text-primary transition-colors">{activity.text}</p>
                                        <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">{activity.time}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
