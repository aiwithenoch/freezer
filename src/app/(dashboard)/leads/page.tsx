"use client";

import { useState } from "react";
import { MOCK_LEADS, LeadStatus } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Filter, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LeadsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");

    const filteredLeads = MOCK_LEADS.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.company.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Leads</h1>
                    <p className="text-muted-foreground">Manage and track your email outreach progress.</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search leads..."
                        className="w-full rounded-md border bg-background pl-10 pr-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <select
                            className="rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as any)}
                        >
                            <option value="all">All Statuses</option>
                            <option value="cold">Cold</option>
                            <option value="active">Active</option>
                            <option value="interested">Interested</option>
                            <option value="qualified">Qualified</option>
                            <option value="dead">Dead</option>
                        </select>
                    </div>
                    <Button variant="outline" className="hidden sm:flex">Export CSV</Button>
                </div>
            </div>

            <Card className="p-0 overflow-hidden shadow-subtle border-border/50">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/30 border-b border-border/50">
                            <tr>
                                <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Name</th>
                                <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Company</th>
                                <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Campaign</th>
                                <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Last Contact</th>
                                <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {filteredLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-primary/[0.02] transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-heading group-hover:text-primary transition-colors">{lead.name}</span>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{lead.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-heading">{lead.company}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={lead.status}>{lead.status}</Badge>
                                    </td>
                                    <td className="px-6 py-4 capitalize text-muted-foreground">{lead.campaign_type}</td>
                                    <td className="px-6 py-4 text-muted-foreground font-medium">{lead.last_sent}</td>
                                    <td className="px-6 py-4 text-right">
                                        <Link href={`/leads/${lead.id}`}>
                                            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary transition-all">
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between border-t border-border/50 px-6 py-4 bg-muted/10">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Showing <span className="text-primary">{filteredLeads.length}</span> of <span className="text-primary">{MOCK_LEADS.length}</span> leads
                    </p>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 disabled:opacity-30 border-border/50" disabled>
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-8 w-8 disabled:opacity-30 border-border/50" disabled>
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
