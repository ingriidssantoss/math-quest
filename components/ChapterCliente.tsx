"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, ArrowLeft, Brain, ArrowRight } from "lucide-react";
import { ChapterContent, getNextChapterInModule } from "@/lib/jornada";

interface ChapterClientProps {
    chap: ChapterContent & { moduleId: number; moduleTitle: string };
    allIds: string[];
}

export default function ChapterClient({ chap, allIds }: ChapterClientProps) {
    const router = useRouter();
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const correct = answer.trim() === chap.correctAnswer;
        setIsCorrect(correct);

        if (correct) {
            // Salvar progresso no localStorage
            const completedChapters = JSON.parse(localStorage.getItem('completedChapters') || '[]');
            if (!completedChapters.includes(chap.id)) {
                completedChapters.push(chap.id);
                localStorage.setItem('completedChapters', JSON.stringify(completedChapters));
            }

            await new Promise(resolve => setTimeout(resolve, 1500));

            // Verificar se há próximo capítulo no módulo
            const nextChapter = getNextChapterInModule(chap.id);

            if (nextChapter) {
                // Ir para o próximo capítulo
                router.push(`/jornada/${nextChapter}`);
            } else {
                // Último capítulo do módulo - ir para certificado
                router.push(`/certificado/${chap.moduleId}`);
            }
        } else {
            setIsSubmitting(false);
        }
    };

    const nextChapter = getNextChapterInModule(chap.id);

    return (
        <div className="space-y-4 max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-6">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push('/jornada')}
                    className="text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar para Jornada
                </Button>
            </div>

            <Card className="border-2 shadow-xl backdrop-blur-sm bg-background/95 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-blue-500" />
                <CardHeader className="space-y-1 bg-gradient-to-r from-purple-100/50 to-blue-100/50 dark:from-purple-950/50 dark:to-blue-950/50 border-b pt-8">
                    <div className="flex items-center gap-3">
                        <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                        <div>
                            <CardTitle className="text-2xl">{chap.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">
                                Módulo {chap.moduleId}: {chap.moduleTitle}
                            </p>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line text-lg leading-relaxed">{chap.content}</p>
                    </div>

                    {chap.correctAnswer && (
                        <div className="space-y-6">
                            <div className="relative">
                                <Input
                                    placeholder="Digite sua resposta"
                                    value={answer}
                                    onChange={(e) => {
                                        setAnswer(e.target.value);
                                        if (isCorrect !== null) setIsCorrect(null);
                                    }}
                                    className={`text-lg p-6 transition-all duration-300 ${isCorrect === null
                                            ? "border-gray-200 dark:border-gray-800"
                                            : isCorrect
                                                ? "border-green-500 dark:border-green-500 ring-2 ring-green-500/20"
                                                : "border-red-500 dark:border-red-500 ring-2 ring-red-500/20"
                                        }`}
                                    disabled={isSubmitting}
                                />
                                {isCorrect !== null && (
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                        {isCorrect ? (
                                            <CheckCircle2 className="h-6 w-6 text-green-500 animate-in fade-in-50" />
                                        ) : (
                                            <XCircle className="h-6 w-6 text-red-500 animate-in fade-in-50" />
                                        )}
                                    </div>
                                )}
                            </div>

                            <Button
                                onClick={handleSubmit}
                                className={`w-full text-lg p-6 transition-all duration-300 ${isCorrect
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                                    }`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Verificando..." : "Verificar Resposta"}
                            </Button>

                            {isCorrect === false && (
                                <div className="bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg p-6 animate-in fade-in-50 slide-in-from-top-5">
                                    <p className="text-red-600 dark:text-red-400 text-center text-lg">
                                        Tente novamente! Revise os conceitos e pense cuidadosamente na solução.
                                    </p>
                                </div>
                            )}

                            {isCorrect === true && (
                                <div className="bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg p-6 animate-in fade-in-50 slide-in-from-top-5">
                                    <p className="text-green-600 dark:text-green-400 text-center text-lg">
                                        {nextChapter
                                            ? "Parabéns! Redirecionando para o próximo capítulo..."
                                            : "Parabéns! Você completou o módulo! Redirecionando para seu certificado..."
                                        }
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {!chap.correctAnswer && (
                        <div className="text-center">
                            <Button
                                onClick={() => {
                                    const nextChapter = getNextChapterInModule(chap.id);
                                    if (nextChapter) {
                                        router.push(`/jornada/${nextChapter}`);
                                    } else {
                                        router.push(`/certificado/${chap.moduleId}`);
                                    }
                                }}
                                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-lg p-6"
                            >
                                {nextChapter ? (
                                    <>
                                        Próximo Capítulo
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </>
                                ) : (
                                    "Finalizar Módulo"
                                )}
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}