"use client";

import { useParams, useRouter } from "next/navigation";
import { MOCK_LEADS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ChevronLeft,
    Mail,
    Calendar,
    CheckCircle2,
    Clock,
    Pause,
    UserPlus,
    UserMinus,
    MessageSquare
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function LeadDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const lead = MOCK_LEADS.find(l => l.id === id);

    if (!lead) return <div className="p-8 text-center">Lead not found</div>;

    const sequence = [
        { step: 1, name: "Initial Email", status: "sent", date: "Jan 15", icon: CheckCircle2 },
        { step: 2, name: "Case Study", status: "sent", date: "Jan 17", icon: CheckCircle2 },
        { step: 3, name: "Value Prop", status: "scheduled", date: "Jan 20", icon: Clock },
        { step: 4, name: "Objection Handler", status: "pending", date: "-", icon: Pause },
        { step: 5, name: "Breakup Email", status: "pending", date: "-", icon: Pause },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <h1 className="text-3xl font-bold tracking-tight">{lead.name}</h1>
                <Badge variant={lead.status} className="capitalize text-sm px-3 py-1">
                    {lead.status}
                </Badge>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-8">
                    {/* Lead Info Card */}
                    <Card className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <p className="text-xs font-bold uppercase text-muted-foreground">Email</p>
                            <p className="font-medium">{lead.email}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-muted-foreground">Company</p>
                            <p className="font-medium">{lead.company}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-muted-foreground">Campaign Type</p>
                            <p className="font-medium capitalize">{lead.campaign_type}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-muted-foreground">Lead Context</p>
                            <p className="text-sm italic text-muted-foreground">{lead.context}</p>
                        </div>
                    </Card>

                    {/* Sequence Timeline */}
                    <Card>
                        <h3 className="mb-6 flex items-center gap-2 font-bold">
                            <Mail className="h-5 w-5 text-primary" /> Email Sequence Progress
                        </h3>
                        <div className="relative space-y-6">
                            <div className="absolute left-[19px] top-2 h-[calc(100%-16px)] w-0.5 bg-muted" />
                            {sequence.map((item, i) => {
                                const Icon = item.icon;
                                const isSent = item.status === "sent";
                                const isScheduled = item.status === "scheduled";

                                return (
                                    <div key={i} className="relative z-10 flex items-start gap-4">
                                        <div className={cn(
                                            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2",
                                            isSent ? "bg-primary border-primary text-white" :
                                                isScheduled ? "bg-blue-50 border-blue-200 text-blue-500" :
                                                    "bg-muted border-muted text-muted-foreground"
                                        )}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex-1 rounded-lg border bg-muted/20 p-4">
                                            <div className="flex items-center justify-between">
                                                <p className="font-bold">{item.name}</p>
                                                <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
                                            </div>
                                            <p className="text-xs capitalize opacity-70">{item.status}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Card>

                    {/* Reply History */}
                    <Card>
                        <h3 className="mb-6 flex items-center gap-2 font-bold">
                            <MessageSquare className="h-5 w-5 text-primary" /> Reply History
                        </h3>
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <div className="rounded-full bg-muted p-4 text-muted-foreground">
                                <MessageSquare className="h-6 w-6" />
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">No replies recorded yet.</p>
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="flex flex-col gap-3">
                        <h3 className="font-bold">Actions</h3>
                        <Button className="w-full justify-start gap-2" variant="outline">
                            <Pause className="h-4 w-4" /> Pause Sequence
                        </Button>
                        <Button className="w-full justify-start gap-2 text-purple-600 bg-purple-50 hover:bg-purple-100 border-purple-100">
                            <UserPlus className="h-4 w-4" /> Mark as Qualified
                        </Button>
                        <Button className="w-full justify-start gap-2 text-red-600 bg-red-50 hover:bg-red-100 border-red-100">
                            <UserMinus className="h-4 w-4" /> Mark as Dead
                        </Button>
                    </Card>

                    <Card>
                        <h3 className="mb-4 font-bold">AI Notes</h3>
                        <p className="text-sm text-muted-foreground">
                            Lead just received Series A funding. AI will emphasize scalability and
                            infrastructure in the next email follow-up.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
