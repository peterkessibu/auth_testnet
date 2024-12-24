"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Header } from "@/components/header";

export default function LandingPage() {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const checkSignInStatus = async () => {
      if (isSignedIn) {
        router.push("/test-net");
      }
    };
    checkSignInStatus();
  }, [isSignedIn, router]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Testnet_Auth
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Secure and easy authentication for your testnet applications.
            </p>
          </div>
        </section>
      </main>
      <footer className="py-6 px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Testnet_Auth. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
