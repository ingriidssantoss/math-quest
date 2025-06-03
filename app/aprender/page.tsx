"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Brain, GraduationCap } from "lucide-react";
import Link from "next/link";

const resources = {
  videos: [
    {
      title: "Princípio Fundamental da Contagem",
      url: "https://www.youtube.com/watch?v=example1",
      description: "Aprenda os fundamentos da contagem de maneira clara e objetiva"
    },
    {
      title: "Arranjos e Permutações",
      url: "https://www.youtube.com/watch?v=example2",
      description: "Entenda a diferença entre arranjos e permutações com exemplos práticos"
    },
    {
      title: "Combinações Simples",
      url: "https://www.youtube.com/watch?v=example3",
      description: "Domine o conceito de combinações e suas aplicações"
    }
  ],
  materials: [
    {
      title: "Apostila Completa",
      url: "/materials/apostila.pdf",
      description: "Material completo sobre Análise Combinatória"
    },
    {
      title: "Lista de Exercícios",
      url: "/materials/exercicios.pdf",
      description: "Exercícios resolvidos e propostos"
    },
    {
      title: "Resumo Teórico",
      url: "/materials/resumo.pdf",
      description: "Resumo dos principais conceitos"
    }
  ],
  practice: [
    {
      title: "Quiz Interativo",
      url: "/quiz",
      description: "Teste seus conhecimentos com questões práticas"
    },
    {
      title: "Simulado Online",
      url: "/simulado",
      description: "Prepare-se com um simulado completo"
    },
    {
      title: "Desafios Diários",
      url: "/desafios",
      description: "Novos desafios todos os dias"
    }
  ]
};

export default function AprenderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Recursos de Aprendizagem
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore nossa coleção de recursos para aprofundar seus conhecimentos em Análise Combinatória
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Videoaulas
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.videos.map((video, index) => (
                <Card key={video.title} className="transform transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="h-8 w-8 flex items-center justify-center text-red-500 font-bold">Youtube</span>
                      <span className="text-sm font-medium text-gray-500">Vídeo {index + 1}</span>
                    </div>
                    <CardTitle>{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{video.description}</p>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-400">
                      Assistir Aula
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Material de Estudo
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.materials.map((material, index) => (
                <Card key={material.title} className="transform transition-all duration-300 hover:scale-105">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <BookOpen className="h-8 w-8 text-blue-500" />
                      <span className="text-sm font-medium text-gray-500">Material {index + 1}</span>
                    </div>
                    <CardTitle>{material.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{material.description}</p>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400">
                      Baixar Material
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Pratique
              </span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.practice.map((item, index) => (
                <Card key={item.title} className="transform transition-all duration-300 hover:scale-105">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-400" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Brain className="h-8 w-8 text-purple-500" />
                      <span className="text-sm font-medium text-gray-500">Prática {index + 1}</span>
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-400">
                      Começar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="text-center mt-16">
            <Link href="/jornada">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 text-lg rounded-full transform transition-all duration-300 hover:scale-105">
                <GraduationCap className="mr-2 h-6 w-6" />
                Iniciar Jornada de Aprendizagem
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}