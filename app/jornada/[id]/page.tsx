import { ChapterQuiz } from "@/components/chapter-quiz";

const chapters = {
  1: {
    title: "Fundamentos da Contagem",
    content: `Narrativa: Em uma antiga biblioteca mágica, você encontra um grimório misterioso que conta a história de um reino onde a matemática é a fonte de todo poder mágico. O Grão-Mestre da Ordem dos Matemágicos explica que para se tornar um verdadeiro guardião da ordem, você precisa dominar os princípios fundamentais da contagem.

    Para provar seu valor, você precisa resolver o seguinte desafio:

    Em uma escola de magia, existem:
    - 4 tipos diferentes de varinhas mágicas
    - 3 tipos de cristais de poder
    - 2 tipos de encantamentos básicos

    Quantas combinações diferentes são possíveis ao criar um feitiço básico usando exatamente uma varinha, um cristal e um encantamento?`,
    correctAnswer: "24"
  },
  2: {
    title: "Arranjos e Permutações",
    content: `Em um antigo templo matemático, você encontra um desafio inscrito nas paredes:

    Um grupo de 5 aprendizes precisa se organizar em uma formação especial para realizar um ritual mágico. 
    Apenas 3 posições são necessárias no ritual.

    De quantas maneiras diferentes esses 5 aprendizes podem se organizar nas 3 posições?`,
    correctAnswer: "60"
  },
  3: {
    title: "Combinações Simples",
    content: `No Grande Salão dos Números, um enigma aguarda sua solução:

    Uma antiga profecia diz que 7 grimórios místicos contêm segredos fundamentais da matemática.
    Para completar seu treinamento, você deve escolher 3 deles para estudar.

    De quantas maneiras diferentes você pode escolher os 3 grimórios?`,
    correctAnswer: "35"
  }
  // Outros capítulos serão adicionados conforme necessário
};

export default function ChapterPage({ params }: Readonly<{ params: { id: string } }>) {
  const chapter = chapters[params.id as unknown as keyof typeof chapters];

  if (!chapter) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-background to-muted/50">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-red-50 dark:bg-red-900/10 border-2 border-red-200 dark:border-red-800 rounded-xl p-8 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">
              Capítulo não encontrado
            </h2>
            <p className="text-red-600 dark:text-red-300 text-lg mb-6">
              Este capítulo ainda não está disponível em nossa jornada.
            </p>
            <a 
              href="/jornada"
              className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-6 py-3 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            >
              Voltar para a Jornada
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 bg-gradient-to-b from-background to-muted/50">
      <div className="container max-w-4xl mx-auto px-4">
        <ChapterQuiz id={params.id} {...chapter} />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(chapters).map(id => ({ id }));
}