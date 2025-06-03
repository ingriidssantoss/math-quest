"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Layout, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => router.push("/dashboard")}
          >
            <Layout className="mr-2 h-4 w-4" />
            Visão Geral
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => router.push("/dashboard/conteudo")}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Gerenciar Conteúdo
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-500 hover:text-red-600"
            onClick={() => router.push("/login")}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}