import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Background } from "@/components/background";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Background />
      <Header />
      <main className="flex-1 relative bg-transparent">{children}</main>
      <Footer />
    </div>
  );
}
