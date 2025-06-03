import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle2, XCircle } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Princípio Multiplicativo",
    description: "Exercício sobre o princípio fundamental da contagem",
    question: "Em uma sorveteria existem 4 sabores de sorvete e 3 tipos de cobertura. De quantas maneiras diferentes você pode escolher um sorvete com cobertura?",
    answer: "12"
  },
  {
    id: 2,
    title: "Arranjos Simples",
    description: "Exercício sobre arranjos",
    question: "De quantas maneiras diferentes 5 pessoas podem ocupar 3 cadeiras?",
    answer: "60"
  },
  {
    id: 3,
    title: "Combinações",
    description: "Exercício sobre combinações",
    question: "De quantas maneiras diferentes podemos escolher 3 livros dentre 7 livros disponíveis?",
    answer: "35"
  }
];

export default function DesafiosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Desafios
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Teste seus conhecimentos em Análise Combinatória com estes desafios cuidadosamente elaborados.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="transform transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400" />
              <CardHeader className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Brain className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Desafio {challenge.id}
                  </span>
                </div>
                <CardTitle>{challenge.title}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-200">{challenge.question}</p>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Digite sua resposta"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 border-0">
                    Verificar Resposta
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}