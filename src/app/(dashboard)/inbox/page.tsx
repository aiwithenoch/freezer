"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Search,
    Filter,
    MessageSquare,
    User,
    Clock,
    Zap,
    Brain,
    Reply
} from "lucide-react";

export default function InboxPage() {
    const messages = [
        {
            id: 1,
            name: "John Doe",
            company: "Acme Inc",
            subject: "Re: Quick question about Acme's SEO",
            snippet: "This sounds interesting. Can you tell me more about the automation tools?",
            time: "2m ago",
            sentiment: "interested",
            read: false
        },
        {
            id: 2,
            name: "Sarah Smith",
            company: "TechFlow",
            subject: "Re: Growth strategies for TechFlow",
            snippet: "We just closed our seed round and are looking to scale the team. Let's chat next week.",
            time: "4h ago",
            sentiment: "qualified",
            read: true
        },
        {
            id: 3,
            name: "David Brown",
            company: "SaaS Startup",
            subject: "No longer interested",
            snippet: "Please remove me from your list. We are going in a different direction.",
            time: "1d ago",
            sentiment: "dead",
            read: true
        },
    ];

    return (
        <div className="flex flex-col gap-8 h-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-heading">Live Inbox</h1>
                    <p className="text-muted-foreground font-medium">Manage replies and interactions with AI-powered sentiment analysis.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-success/10 text-success text-[10px] font-black uppercase tracking-widest border border-success/20">
                        <Zap className="h-3 w-3" />
                        Automated Tagging Active
                    </div>
                </div>
            </div>

            <div className="flex gap-6 h-[calc(100vh-250px)]">
                {/* Message List */}
                <Card className="w-1/3 p-0 flex flex-col shadow-subtle overflow-hidden">
                    <div className="p-4 border-b border-border/50 bg-muted/10">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search messages..."
                                className="w-full rounded-xl border-border/50 bg-white pl-10 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto divide-y divide-border/50">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`p-4 cursor-pointer transition-all hover:bg-primary/[0.02] group ${!msg.read ? 'bg-primary/[0.03] border-l-4 border-l-primary' : ''}`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <p className="font-black text-heading group-hover:text-primary transition-colors">{msg.name}</p>
                                    <span className="text-[10px] font-bold text-muted-foreground">{msg.time}</span>
                                </div>
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2">{msg.company}</p>
                                <p className={`text-xs truncate mb-2 ${!msg.read ? 'font-black text-heading' : 'font-medium text-muted-foreground'}`}>
                                    {msg.subject}
                                </p>
                                <Badge variant={msg.sentiment as any} className="text-[9px] uppercase">{msg.sentiment}</Badge>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Conversation View */}
                <Card className="flex-1 flex flex-col p-0 shadow-subtle overflow-hidden relative">
                    <div className="p-6 border-b border-border/50 bg-white flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-xl shadow-blue-glow">
                                J
                            </div>
                            <div>
                                <h3 className="font-black text-heading text-lg leading-tight">John Doe</h3>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">CEO at Acme Inc</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="font-black text-[10px] uppercase tracking-widest border-border/50 hover:bg-primary hover:text-white transition-all">View CRM</Button>
                        </div>
                    </div>

                    <div className="flex-1 p-8 bg-muted/5 space-y-8 overflow-y-auto">
                        <div className="flex flex-col items-center">
                            <span className="px-3 py-1 rounded-full bg-white border border-border/50 text-[10px] font-black uppercase text-muted-foreground">Today</span>
                        </div>

                        {/* Received */}
                        <div className="flex items-start gap-4 max-w-[80%]">
                            <div className="p-4 rounded-2xl bg-white border border-border/50 shadow-sm">
                                <p className="text-sm font-medium text-heading leading-relaxed">
                                    Hi Jonathan, thanks for reaching out. This sounds interesting. <br /><br />
                                    Can you tell me more about the automation tools? We've been looking for something like this for our Q1 scale-up.
                                </p>
                            </div>
                        </div>

                        {/* Intelligent Script Suggestion */}
                        <div className="flex flex-col items-end gap-3">
                            <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                                <Brain className="h-4 w-4" />
                                Smart Script Suggestion
                            </div>
                            <div className="p-6 rounded-2xl bg-primary text-white shadow-blue-glow max-w-[80%] relative">
                                <p className="text-sm font-bold leading-relaxed italic opacity-90">
                                    "I'd love to! Our automation engine handles personalized outreach at scale while maintaining a 1:1 human feel. Would you like to hop on a 10-minute demo tomorrow morning at 10 AM EST?"
                                </p>
                                <div className="mt-4 flex gap-2">
                                    <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-black text-[10px] uppercase tracking-widest">Use Suggestion</Button>
                                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 font-black text-[10px] uppercase tracking-widest">Edit</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reply Input */}
                    <div className="p-6 border-t border-border/50 bg-white">
                        <div className="relative">
                            <textarea
                                placeholder="Write your reply..."
                                className="w-full rounded-2xl border-border/50 bg-muted/10 p-4 pb-12 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none h-24"
                            />
                            <div className="absolute bottom-3 right-3 flex gap-2">
                                <Button size="sm" className="gap-2 shadow-blue-glow font-black text-[10px] uppercase tracking-widest px-4">
                                    <Reply className="h-4 w-4" /> Send Reply
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
