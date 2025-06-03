import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BookOpen, Trophy } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Bem-vindo ao MathQuest
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                Sua jornada interativa no mundo da Análise Combinatória começa aqui. 
                Aprenda, pratique e domine os conceitos de forma divertida.
              </p>
            </div>
            <div className="space-y-4">
              <Link href="/jornada">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full transform transition-all duration-300 hover:scale-105">
                  Iniciar Jornada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold">Aprendizado Interativo</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Aprenda através de desafios práticos e exemplos do mundo real.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold">Conteúdo Estruturado</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Material organizado em níveis progressivos de dificuldade.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-cyan-100 dark:bg-cyan-900/20 rounded-full">
                <Trophy className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold">Certificados</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Receba certificados ao completar cada módulo do curso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}