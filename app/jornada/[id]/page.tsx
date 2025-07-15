import { Metadata } from "next";
import { allChapterIds, chapterContentsById, moduleTitles } from "@/lib/jornada";
import ChapterClient from "@/components/ChapterCliente";
import Link from "next/link";

export default function ChapterPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const chap = chapterContentsById[id];

  if (!chap) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-xl p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">
              Capítulo não encontrado
            </h2>
            <p className="text-red-600 dark:text-red-300 text-lg mb-6">
              Este capítulo ainda não está disponível em nossa jornada.
            </p>
            <Link
              href="/jornada"
              className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-6 py-3 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            >
              Voltar para a Jornada
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-background to-muted/50">
      <div className="container max-w-4xl mx-auto px-4">
        <ChapterClient chap={chap} allIds={allChapterIds} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const chapterParams = allChapterIds.map(id => ({ id }));
  const moduleParams = Object.keys(moduleTitles).map(id => ({ id }));
  return [...chapterParams, ...moduleParams];
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const chap = chapterContentsById[params.id];
  return {
    title: chap ? `${chap.title} | MathQuest` : "Capítulo não encontrado | MathQuest"
  };
}