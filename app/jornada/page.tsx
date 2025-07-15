import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JOURNEY } from "@/lib/jornada";

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
          {JOURNEY.map((level) => (
            <section key={level.id}>
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className={`bg-gradient-to-r ${level.id === 'base' ? 'from-blue-600 to-cyan-500' :
                    level.id === 'intermediario' ? 'from-purple-600 to-pink-500' :
                      'from-amber-600 to-yellow-500'
                  } bg-clip-text text-transparent`}>
                  {level.title.toUpperCase()}
                </span>
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {level.modules.map((module) => {
                  const firstChapterId = module.chapters[0]?.id;
                  return (
                    <Link href={`/jornada/${firstChapterId}`} key={module.id}>
                      <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${module.color}`} />
                        <CardHeader className="pt-6">
                          <div className="flex items-center justify-between mb-2">
                            <module.icon className="h-8 w-8 text-gray-600 dark:text-gray-300" />
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              Módulo {module.id}
                            </span>
                          </div>
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          <p className="text-gray-500 dark:text-gray-400">{module.description}</p>
                        </CardHeader>
                        <CardContent>
                          <Button className={`w-full bg-gradient-to-r ${module.color} hover:opacity-90 border-0`}>
                            Começar
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}