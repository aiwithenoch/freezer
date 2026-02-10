"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = (data: any) => {
        console.log(data);
        router.push("/dashboard");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-32">
            <Card className="w-full max-w-md border-primary/20 p-8 shadow-2xl">
                <div className="mb-8 text-center">
                    <h1 className="text-2xl font-bold tracking-tight">Sign In</h1>
                    <p className="text-sm text-muted-foreground">Welcome back to FREEZER</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="name@company.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm font-medium">
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                            Remember me
                        </label>
                        <Link href="#" className="text-sm font-medium text-primary hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg shadow-lg">
                        Sign In
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/signup" className="font-semibold text-primary hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
