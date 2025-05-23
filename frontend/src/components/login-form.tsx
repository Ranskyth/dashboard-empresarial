/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const handleSub = async (data: any) => {
    try{
          await fetch("http://localhost:3333/login", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      }}).then((res) => {
        return res.json()
      }).then((resjson) => {
        console.log(resjson)
        router.push("/dashboard")
      })
      .catch((error) => {
        console.log(error)
        alert(`error : ${error}`)
      })
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
    }
    
    if(loading) return <h1>Carregando...</h1>

    return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleSub)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  {...register("password")}
                  id="password"
                  placeholder="password"
                  type="password"
                  required
                />
              </div>
              <div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
