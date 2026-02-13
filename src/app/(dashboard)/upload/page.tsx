"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Download, FileText, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Papa from "papaparse";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function UploadPage() {
    const [isImporting, setIsImporting] = useState(false);
    const router = useRouter();

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setData(results.data);
            },
            error: (error) => {
                console.error(error);
                toast.error("Error parsing CSV");
            }
        });
    };

    const handleImport = async () => {
        setIsImporting(true);
        try {
            // Batch import (for simplicity, we iterate, but the API could be optimized)
            for (const lead of data) {
                await fetch("/api/leads", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(lead)
                });
            }
            toast.success("Leads imported successfully!");
            router.push("/leads");
        } catch (error) {
            console.error("Import failed:", error);
            toast.error("Import failed. Please try again.");
        } finally {
            setIsImporting(false);
        }
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Upload Leads</h1>
                <p className="text-muted-foreground">Import your leads via CSV to start sending AI-powered emails.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <Card className="flex flex-col items-center justify-center border-2 border-dashed border-primary/20 p-12 text-center transition-all hover:border-primary/50 hover:bg-primary/5 group relative overflow-hidden">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary group-hover:scale-110 transition-transform">
                        <Upload className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-heading">Drag and drop your CSV</h3>
                    <p className="mb-6 text-sm text-muted-foreground">or click to browse from your computer</p>
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        className="absolute inset-0 z-10 cursor-pointer opacity-0"
                    />
                    <Button variant="outline" className="relative z-0 shadow-subtle group-hover:bg-primary group-hover:text-white transition-all">Choose File</Button>
                    <div className="mt-4 flex flex-col items-center gap-2">
                        <a href="#" className="flex items-center gap-1 text-xs text-primary hover:underline font-bold">
                            <Download className="h-3 w-3" /> Download Sample CSV
                        </a>
                    </div>
                </Card>

                <Card className="p-8">
                    <h3 className="mb-6 font-bold text-heading uppercase tracking-wider text-sm">Requirements</h3>
                    <div className="space-y-4">
                        {[
                            { col: "name", req: true, desc: "Full name of the lead" },
                            { col: "email", req: true, desc: "Valid email address" },
                            { col: "company", req: true, desc: "Lead's company name" },
                            { col: "campaign_type", req: true, desc: "website, outbound, etc." },
                            { col: "context", req: true, desc: "Personalization trigger text" },
                        ].map((col, i) => (
                            <div key={i} className="flex items-start justify-between border-b border-border/50 pb-3 last:border-0">
                                <div>
                                    <code className="text-[10px] font-bold text-primary p-1 bg-primary/5 rounded">{col.col}</code>
                                    <p className="text-[11px] text-muted-foreground mt-1 font-medium">{col.desc}</p>
                                </div>
                                {col.req && <span className="text-[9px] font-bold uppercase text-destructive bg-destructive/5 px-2 py-0.5 rounded-full">Required</span>}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {data.length > 0 && (
                <div className="animate-fade-in space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-xl font-bold text-heading">
                            Preview: {fileName}
                            <span className="text-sm font-normal text-muted-foreground">({data.length} leads detected)</span>
                        </h2>
                        <Button onClick={handleImport} className="gap-2 shadow-blue-glow" disabled={isImporting}>
                            {isImporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <CheckCircle2 className="h-4 w-4" />}
                            {isImporting ? "Importing..." : `Import ${data.length} Leads`}
                        </Button>
                    </div>
                    <Card className="p-0 overflow-hidden shadow-subtle border-border/50">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-muted/30 border-b border-border/50">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Company</th>
                                        <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Campaign</th>
                                        <th className="px-6 py-4 font-bold text-heading text-xs uppercase tracking-wider">Context</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {data.slice(0, 5).map((row, i) => (
                                        <tr key={i} className="hover:bg-primary/[0.02] transition-colors">
                                            <td className="px-6 py-4 font-medium text-heading">{row.name}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{row.email}</td>
                                            <td className="px-6 py-4 font-medium text-heading">{row.company}</td>
                                            <td className="px-6 py-4 text-muted-foreground capitalize">{row.campaign_type}</td>
                                            <td className="px-6 py-4 max-w-xs truncate text-[11px] text-muted-foreground">{row.context}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}
