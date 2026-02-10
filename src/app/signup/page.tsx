"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
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
                    <h1 className="text-2xl font-bold tracking-tight">Create an Account</h1>
                    <p className="text-sm text-muted-foreground">Start your 7-day free trial</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                            {...register("fullName", { required: true })}
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="John Doe"
                        />
                    </div>
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
                        <label className="text-sm font-medium">Agency/Company Name</label>
                        <input
                            {...register("company", { required: true })}
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                            placeholder="Acme Growth"
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
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm Password</label>
                        <input
                            {...register("confirmPassword", { required: true })}
                            type="password"
                            className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg shadow-lg">
                        Create Account
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/signin" className="font-semibold text-primary hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}
