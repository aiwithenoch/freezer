"use client";

import { MOCK_CAMPAIGNS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Mail, Users, Calendar, Target } from "lucide-react";

export default function CampaignsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Campaigns</h1>
                    <p className="text-muted-foreground">Create and manage your AI-powered outreach campaigns.</p>
                </div>
                <Button className="gap-2 shadow-lg">
                    <Plus className="h-4 w-4" /> Create New Campaign
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {MOCK_CAMPAIGNS.map((campaign) => (
                    <Card key={campaign.id} className="group relative border-primary/10 hover:border-primary/40">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                {campaign.name}
                            </h3>
                            <Badge variant="active" className="capitalize">
                                {campaign.campaign_type}
                            </Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-b py-4">
                            <div className="flex flex-col gap-1 text-center border-r">
                                <span className="text-xs font-bold text-muted-foreground uppercase flex items-center justify-center gap-1">
                                    <Users className="h-3 w-3" /> Leads
                                </span>
                                <span className="text-xl font-bold">{campaign.total_leads}</span>
                            </div>
                            <div className="flex flex-col gap-1 text-center">
                                <span className="text-xs font-bold text-muted-foreground uppercase flex items-center justify-center gap-1">
                                    <Target className="h-3 w-3" /> Qualified
                                </span>
                                <span className="text-xl font-bold text-primary">{campaign.qualified}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Calendar className="h-3.3 w-3.5" />
                                Created: {campaign.created_at}
                            </div>
                            <Button variant="ghost" size="sm" className="h-8 group-hover:bg-primary group-hover:text-primary-foreground">
                                View Details
                            </Button>
                        </div>
                    </Card>
                ))}

                {/* Create Empty Card */}
                <button className="flex min-h-[220px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted p-6 transition-colors hover:border-primary/40 hover:bg-muted/30">
                    <div className="mb-2 rounded-full bg-muted p-3 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary">
                        <Plus className="h-6 w-6" />
                    </div>
                    <span className="font-bold">New Campaign</span>
                    <span className="text-xs text-muted-foreground">Scale your outreach</span>
                </button>
            </div>
        </div>
    );
}
