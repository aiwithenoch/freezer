"use client";

import { useState, useEffect } from "react";
import { type Lead, type LeadStatus } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter, Eye, ChevronLeft, ChevronRight, Download, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");

    useEffect(() => {
        const fetchLeads = async () => {
            try {
                const response = await fetch("/api/leads");
                const data = await response.json();
                setLeads(data);
            } catch (error) {
                console.error("Failed to fetch leads:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeads();
    }, []);

    const filteredLeads = (leads || []).filter(lead => {
        const name = lead.name || "";
        const email = lead.email || "";
        const company = lead.company || "";

        const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-heading uppercase">Managed Leads</h1>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">High-precision tracking for your outreach pipeline.</p>
                </div>
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between bg-muted/10 p-6 rounded-[2rem] border border-border/50">
                <div className="relative flex-1 max-w-xl group">
                    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                        type="text"
                        placeholder="Search leads, companies, or emails..."
                        className="w-full rounded-2xl border border-border/50 bg-white pl-12 pr-5 py-4 text-sm font-bold ring-offset-background placeholder:text-muted-foreground/50 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-border/50">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <select
                            className="bg-transparent text-sm font-black uppercase tracking-tight focus:outline-none border-none cursor-pointer"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as any)}
                        >
                            <option value="all">Global Pipeline</option>
                            <option value="cold">Phase: Cold</option>
                            <option value="active">Phase: Active</option>
                            <option value="interested">Phase: Interested</option>
                            <option value="qualified">Phase: Qualified</option>
                            <option value="dead">Phase: Stalled</option>
                        </select>
                    </div>
                    <Button variant="outline" size="lg" className="rounded-xl font-black uppercase tracking-widest text-[10px] gap-2 border-border/50">
                        <Download className="h-4 w-4" /> Export CSV
                    </Button>
                </div>
            </div>

            <Card className="p-0 overflow-hidden shadow-subtle border-border/50 bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/30 border-b border-border/50">
                            <tr>
                                <th className="px-8 py-6 font-black text-heading text-[10px] uppercase tracking-widest leading-none">Lead Information</th>
                                <th className="px-8 py-6 font-black text-heading text-[10px] uppercase tracking-widest leading-none">Organization</th>
                                <th className="px-8 py-6 font-black text-heading text-[10px] uppercase tracking-widest leading-none">Pipeline Status</th>
                                <th className="px-8 py-6 font-black text-heading text-[10px] uppercase tracking-widest leading-none text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50 font-bold text-heading">
                            <AnimatePresence>
                                {loading ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Synchronizing Records...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredLeads.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-8 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="h-12 w-12 rounded-2xl bg-muted flex items-center justify-center">
                                                    <Search className="h-6 w-6 text-muted-foreground" />
                                                </div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">No active leads found in this sector.</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredLeads.map((lead) => (
                                        <motion.tr
                                            key={lead.id}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="hover:bg-primary/[0.02] transition-colors group cursor-default"
                                        >
                                            <td className="px-8 py-5">
                                                <div className="flex flex-col">
                                                    <span className="font-black text-heading group-hover:text-primary transition-colors">{lead.name}</span>
                                                    <span className="text-[9px] font-black text-muted-foreground uppercase tracking-tighter">{lead.email}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex flex-col">
                                                    <span className="text-sm">{lead.company}</span>
                                                    <span className="text-[9px] font-black text-muted-foreground uppercase opacity-50 tracking-tighter">{lead.campaign_type} Automation</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <Badge variant={lead.status}>{lead.status}</Badge>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <Link href={`/leads/${lead.id}`}>
                                                    <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all rounded-xl h-10 w-10">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            </td>
                                        </motion.tr>
                                    ))
                                )}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between border-t border-border/50 px-8 py-6 bg-muted/10">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                        Orchestrating <span className="text-primary">{filteredLeads.length}</span> / <span className="text-primary">{leads?.length || 0}</span> Pipeline Units
                    </p>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="icon" className="h-10 w-10 disabled:opacity-30 border-border/50 bg-white" disabled>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10 disabled:opacity-30 border-border/50 bg-white" disabled>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
