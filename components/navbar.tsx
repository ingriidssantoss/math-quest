'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, GraduationCap, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-purple-600" />
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            MathQuest
          </span>
        </Link>
        <div className="flex items-center space-x-1">
          <Link href="/">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              className={cn(
                "flex items-center px-4 py-2",
                isActive("/") && "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
              )}
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/aprender">
            <Button
              variant={isActive("/aprender") ? "secondary" : "ghost"}
              className={cn(
                "flex items-center px-4 py-2",
                isActive("/aprender") && "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              )}
            >
              <Brain className="h-4 w-4 mr-2" />
              Aprender
            </Button>
          </Link>
          <Link href="/jornada">
            <Button
              variant={isActive("/jornada") ? "secondary" : "ghost"}
              className={cn(
                "flex items-center px-4 py-2",
                isActive("/jornada") && "bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400"
              )}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              Jornada
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;