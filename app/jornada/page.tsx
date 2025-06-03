import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BookOpen, Calculator, FunctionSquare, Brain, Star, Trophy } from "lucide-react";

const chapters = {
  base: [
    {
      id: 1,
      title: "Princípios Fundamentais da Contagem",
      description: "Princípio Aditivo, Multiplicativo e Diagramas de Árvore",
      icon: Calculator,
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Fatorial",
      description: "Definição, propriedades e aplicações do fatorial",
      icon: FunctionSquare,
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Permutações Simples",
      description: "Conceito e aplicações de permutações",
      icon: Star,
      color: "from-orange-500 to-yellow-400"
    },
    {
      id: 4,
      title: "Arranjos Simples",
      description: "Agrupamentos ordenados e suas aplicações",
      icon: Brain,
      color: "from-green-500 to-emerald-400"
    }
  ],
  intermediario: [
    {
      id: 5,
      title: "Combinações Simples",
      description: "Agrupamentos sem ordem e suas aplicações",
      icon: BookOpen,
      color: "from-red-500 to-orange-400"
    },
    {
      id: 6,
      title: "Permutações com Repetição",
      description: "Permutações com elementos repetidos",
      icon: Star,
      color: "from-indigo-500 to-purple-400"
    },
    {
      id: 7,
      title: "Permutações Circulares",
      description: "Ordenações em disposição circular",
      icon: Trophy,
      color: "from-pink-500 to-rose-400"
    }
  ],
  avancado: [
    {
      id: 8,
      title: "Combinações Completas",
      description: "Combinações com repetição permitida",
      icon: Brain,
      color: "from-violet-500 to-purple-400"
    },
    {
      id: 9,
      title: "Problemas com Restrições",
      description: "Resolução de casos especiais e restrições",
      icon: Calculator,
      color: "from-cyan-500 to-blue-400"
    },
    {
      id: 10,
      title: "Princípio da Inclusão-Exclusão",
      description: "Contagem em conjuntos com interseção",
      icon: FunctionSquare,
      color: "from-amber-500 to-yellow-400"
    }
  ]
};

export default function JornadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container px-4 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Jornada de Análise Combinatória
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Uma jornada completa pelos conceitos fundamentais até aplicações avançadas em Análise Combinatória.
          Cada módulo foi estruturado para construir uma base sólida de conhecimento.
        </p>

        <div className="space-y-16">
          {Object.entries(chapters).map(([level, modules], index) => (
            <section key={level}>
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className={`bg-gradient-to-r ${
                  level === 'base' ? 'from-blue-600 to-cyan-500' :
                  level === 'intermediario' ? 'from-purple-600 to-pink-500' :
                  'from-amber-600 to-yellow-500'
                } bg-clip-text text-transparent`}>
                  {level.toUpperCase()}
                </span>
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((chapter) => (
                  <Link href={`/jornada/${chapter.id}`} key={chapter.id}>
                    <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
                      <div className={`h-2 bg-gradient-to-r ${chapter.color}`} />
                      <CardHeader className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <chapter.icon className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Módulo {chapter.id}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{chapter.title}</CardTitle>
                        <CardDescription>{chapter.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className={`w-full bg-gradient-to-r ${chapter.color} hover:opacity-90 border-0`}>
                          Começar
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}