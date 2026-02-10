"use client";

import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";
import { TrendingUp, Users, MousePointer2, MessageSquare, Target } from "lucide-react";

const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), { ssr: false });
const Bar = dynamic(() => import("recharts").then((mod) => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import("recharts").then((mod) => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import("recharts").then((mod) => mod.Tooltip), { ssr: false });
const ResponsiveContainer = dynamic(() => import("recharts").then((mod) => mod.ResponsiveContainer), { ssr: false });
const AreaChart = dynamic(() => import("recharts").then((mod) => mod.AreaChart), { ssr: false });
const Area = dynamic(() => import("recharts").then((mod) => mod.Area), { ssr: false });
const Cell = dynamic(() => import("recharts").then((mod) => mod.Cell), { ssr: false });

const data = [
    { name: "Mon", sent: 400, replies: 24, qualified: 12 },
    { name: "Tue", sent: 300, replies: 13, qualified: 5 },
    { name: "Wed", sent: 200, replies: 98, qualified: 42 },
    { name: "Thu", sent: 278, replies: 39, qualified: 20 },
    { name: "Fri", sent: 189, replies: 48, qualified: 21 },
    { name: "Sat", sent: 239, replies: 38, qualified: 15 },
    { name: "Sun", sent: 349, replies: 43, qualified: 25 },
];

const funnelData = [
    { name: "Sent", value: 2482, color: "#2563EB" },
    { name: "Opened", value: 1840, color: "#3B82F6" },
    { name: "Replied", value: 428, color: "#60A5FA" },
    { name: "Qualified", value: 128, color: "#93C5FD" },
];

export default function AnalyticsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-heading">Advanced Analytics</h1>
                    <p className="text-muted-foreground font-medium">Deep dive into your campaign performance and growth metrics.</p>
                </div>
                <div className="flex gap-2">
                    <Card className="p-3 bg-primary/5 border-primary/10">
                        <div className="flex items-center gap-2 text-primary">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm font-bold">+18.4% Growth</span>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                <Card className="lg:col-span-2 shadow-subtle">
                    <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Outreach Funnel</h3>
                    <div className="h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={funnelData} layout="vertical" margin={{ left: 40 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                                <XAxis type="number" hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    tick={{ fill: "#64748B", fontSize: 12, fontWeight: 700 }}
                                    axisLine={false}
                                    tickLine={false}
                                />
                                <Tooltip
                                    cursor={{ fill: "transparent" }}
                                    content={({ active, payload }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div className="bg-heading text-white p-3 rounded-xl shadow-xl border border-white/10">
                                                    <p className="font-bold uppercase tracking-widest text-[10px] opacity-70 mb-1">{payload[0].name}</p>
                                                    <p className="text-xl font-black">{payload[0].value.toLocaleString()}</p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={40}>
                                    {funnelData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>

                <Card className="shadow-subtle">
                    <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Performance Stats</h3>
                    <div className="space-y-6">
                        {[
                            { label: "Total Leads", value: "2,482", icon: Users, trend: "+12%" },
                            { label: "Open Rate", value: "74.1%", icon: MousePointer2, trend: "+3.2%" },
                            { label: "Reply Rate", value: "17.2%", icon: MessageSquare, trend: "+5.1%" },
                            { label: "Booked Calls", value: "128", icon: Target, trend: "+34%" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/20 border border-border/50 group hover:bg-white transition-all hover:shadow-subtle">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-lg bg-primary/5 text-primary">
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                        <p className="text-lg font-black text-heading leading-tight">{stat.value}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-black text-success">{stat.trend}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <Card className="shadow-subtle overflow-hidden">
                <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Growth Analysis</h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorSent" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94A3B8", fontSize: 10, fontWeight: 700 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94A3B8", fontSize: 10, fontWeight: 700 }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#0F172A",
                                    border: "none",
                                    borderRadius: "12px",
                                    color: "#fff",
                                    padding: "12px"
                                }}
                                itemStyle={{ color: "#fff", fontWeight: 700, fontSize: "12px" }}
                            />
                            <Area
                                type="monotone"
                                dataKey="sent"
                                stroke="#2563EB"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorSent)"
                            />
                            <Area
                                type="monotone"
                                dataKey="qualified"
                                stroke="#06B6D4"
                                strokeWidth={4}
                                fillOpacity={0}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </Card>
        </div>
    );
}
