"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Download, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Papa from "papaparse";
import { sonner } from "sonner"; // Assuming sonner is installed

export default function UploadPage() {
    const [data, setData] = useState<any[]>([]);
    const [fileName, setFileName] = useState<string>("");

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
            }
        });
    };

    const handleImport = () => {
        // Show a success toast/alert
        alert("Leads imported successfully! (Mock Action)");
        setData([]);
        setFileName("");
    };

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Upload Leads</h1>
                <p className="text-muted-foreground">Import your leads via CSV to start sending AI-powered emails.</p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <Card className="flex flex-col items-center justify-center border-2 border-dashed p-12 text-center transition-colors hover:border-primary/50">
                    <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                        <Upload className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold">Drag and drop your CSV</h3>
                    <p className="mb-6 text-sm text-muted-foreground">or click to browse from your computer</p>
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        className="absolute inset-0 z-10 cursor-pointer opacity-0"
                    />
                    <Button variant="outline" className="relative z-0">Choose File</Button>
                    <div className="mt-4 flex flex-col items-center gap-2">
                        <a href="#" className="flex items-center gap-1 text-xs text-primary hover:underline">
                            <Download className="h-3 w-3" /> Download Sample CSV
                        </a>
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="mb-4 font-bold">Requirements</h3>
                    <div className="space-y-4">
                        {[
                            { col: "name", req: true, desc: "Full name of the lead" },
                            { col: "email", req: true, desc: "Valid email address" },
                            { col: "company", req: true, desc: "Lead's company name" },
                            { col: "campaign_type", req: true, desc: "website, outbound, etc." },
                            { col: "context", req: true, desc: "Personalization trigger text" },
                        ].map((col, i) => (
                            <div key={i} className="flex items-start justify-between border-b pb-2 last:border-0">
                                <div>
                                    <code className="text-xs font-bold text-primary">{col.col}</code>
                                    <p className="text-xs text-muted-foreground">{col.desc}</p>
                                </div>
                                {col.req && <span className="text-[10px] font-bold uppercase text-red-500">Required</span>}
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {data.length > 0 && (
                <div className="animate-fade-in space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="flex items-center gap-2 text-xl font-bold">
                            Preview: {fileName}
                            <span className="text-sm font-normal text-muted-foreground">({data.length} leads detected)</span>
                        </h2>
                        <Button onClick={handleImport} className="gap-2 shadow-lg">
                            <CheckCircle2 className="h-4 w-4" /> Import {data.length} Leads
                        </Button>
                    </div>
                    <div className="w-full overflow-x-auto rounded-xl border bg-card">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-muted/50 border-b">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Name</th>
                                    <th className="px-4 py-3 font-medium">Email</th>
                                    <th className="px-4 py-3 font-medium">Company</th>
                                    <th className="px-4 py-3 font-medium">Campaign</th>
                                    <th className="px-4 py-3 font-medium">Context</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {data.slice(0, 5).map((row, i) => (
                                    <tr key={i} className="hover:bg-muted/30">
                                        <td className="px-4 py-3">{row.name}</td>
                                        <td className="px-4 py-3">{row.email}</td>
                                        <td className="px-4 py-3">{row.company}</td>
                                        <td className="px-4 py-3">{row.campaign_type}</td>
                                        <td className="px-4 py-3 max-w-xs truncate">{row.context}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {data.length > 5 && (
                            <div className="p-3 text-center text-xs text-muted-foreground">
                                Showing first 5 leads out of {data.length}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
