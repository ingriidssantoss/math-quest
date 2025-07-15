import { BookOpen, Calculator, FunctionSquare, Brain, Star, Trophy, LucideCrop as LucideProps } from "lucide-react";

// Interfaces
export interface ChapterContent {
    id: string;
    title: string;
    content: string;
    correctAnswer: string;
}

export interface Module {
    id: number;
    title: string;
    description: string;
    icon: typeof LucideProps;
    color: string;
    chapters: ChapterContent[];
}

export interface Level {
    id: string;
    title: string;
    modules: Module[];
}

export interface CertificateFormProps {
    moduleTitle: string;
    moduleId: number;
}

// Definição da Jornada
export const JOURNEY: Level[] = [
    {
        id: 'base',
        title: 'Base',
        modules: [
            {
                // Modulo 1 - 12
                id: 1,
                title: 'Princípios Fundamentais da Contagem',
                description: 'Princípio Aditivo, Multiplicativo e Diagramas de Árvore',
                icon: Calculator,
                color: 'from-blue-500 to-cyan-400',
                chapters: [
                    {
                        id: '1-1',
                        title: 'O Chamado da Combinatória',
                        content: 'Em um dia chuvoso, enquanto explorava o sótão da casa de sua avó, Lira encontra um antigo baú coberto por poeira. Curiosa, ela o abre e descobre um medalhão misterioso. Ao tocá-lo, uma luz intensa a envolve, transportando-a para Combinaria, um mundo encantado. Uma voz ecoa: "Bem-vinda à Combinaria! Sua jornada está apenas começando, prepare-se para desafios incríveis."',
                        correctAnswer: ''
                    },
                    {
                        id: '1-2',
                        title: 'As Três Trilhas',
                        content: 'Diante de uma encruzilhada, Lira vê três trilhas mágicas: Rubra (R), Azul (A) e Verde (V). Um pergaminho holográfico surge com a pergunta: "Para descobrir segredos únicos, você deve escolher um par de trilhas para explorar. Quantos pares distintos de trilhas você pode formar?"',
                        correctAnswer: '3'
                    },
                    {
                        id: '1-3',
                        title: 'Arsenal Mágico',
                        content: 'Dentro de uma sala protegida por vapores brilhantes, Lira encontra um armário mágico. Para prosseguir, ela deve escolher uma das 3 armas e uma das 4 poções disponíveis. Quantas combinações diferentes de arma e poção Lira pode formar?',
                        correctAnswer: '12'
                    },
                    {
                        id: '1-4',
                        title: 'Runas do Destino',
                        content: 'Um cofre mágico bloqueia o caminho de Lira. Para abri-lo, ela precisa selecionar exatamente duas das quatro runas brilhantes disponíveis. Quantas combinações distintas de duas runas Lira pode formar?',
                        correctAnswer: '6'
                    },
                    {
                        id: '1-5',
                        title: 'Portal das Criaturas',
                        content: 'Lira encontra um portal mágico protegido por criaturas fantásticas. Para atravessá-lo, ela precisa escolher uma das 5 criaturas guardiãs e uma das 2 pedras mágicas para ativar o portal. Quantas combinações únicas de criatura e pedra Lira pode escolher?',
                        correctAnswer: '10'
                    },
                    {
                        id: '1-6',
                        title: 'Labirinto das Decisões',
                        content: 'Lira está em um vasto labirinto. Para chegar ao centro, ela precisará decidir em três bifurcações sucessivas qual dos dois corredores seguir. Com 3 bifurcações e 2 opções em cada uma, quantas rotas únicas levam Lira ao centro?',
                        correctAnswer: '8'
                    },
                    {
                        id: '1-7',
                        title: 'Conselho dos Elementos',
                        content: 'No coração do labirinto, Lira é recebida por um círculo de sábios. Para prosseguir, ela deve escolher um tipo de desafio (Raciocínio, Força ou Velocidade) e um aliado (mago ou guerreiro). Quantas combinações distintas de desafio e aliado são possíveis?',
                        correctAnswer: '6'
                    },
                    {
                        id: '1-8',
                        title: 'Portais Gêmeos',
                        content: 'Lira chega a uma sala com dois portais. Para ativá-los, é preciso escolher um dos 3 reinos mágicos (Pedra, Nuvem, Sombra) e um artefato (Luz ou Trevas). Quantas combinações de reino e artefato podem ser formadas?',
                        correctAnswer: '6'
                    },
                    {
                        id: '1-9',
                        title: 'Tabuleiro Mágico',
                        content: 'Um gigantesco tabuleiro flutuante se divide em três trilhas. Para avançar, Lira precisa escolher 1 das 3 trilhas para seguir e 1 dos 4 marcadores etéreos para usar. Quantas combinações diferentes de trilha e marcador são possíveis?',
                        correctAnswer: '12'
                    },
                    {
                        id: '1-10',
                        title: 'Aliança Mágica',
                        content: 'Em uma sala de reuniões, os emissários dos quatro reinos oferecem propostas de aliança. Para cada uma das 4 propostas, Lira deve decidir se aceita ou rejeita. Quantas combinações de respostas (sequências de aceitar/rejeitar) podem ser dadas?',
                        correctAnswer: '16'
                    },
                    {
                        id: '1-11',
                        title: 'Espelho da Reflexão',
                        content: 'Lira enfrenta um espelho antigo. Para provar que domina as combinações, ela precisa primeiro selecionar duas runas entre cinco disponíveis e, em seguida, escolher um dos três elixires para amplificar seu poder. Quantas combinações completas (par de runas + elixir) são possíveis?',
                        correctAnswer: '30'
                    },
                    {
                        id: '1-12',
                        title: 'Câmara das Decisões Finais',
                        content: 'Lira chega a uma câmara circular final. Um painel exibe três caminhos, dois tipos de invocação (Fogo ou Gelo) e dois aliados. Quantas jornadas únicas podem ser traçadas combinando um caminho, uma invocação e um aliado?',
                        correctAnswer: '12'
                    }
                ]
            },
            {
                id: 2,
                title: 'Fatorial',
                description: 'Definição, propriedades e aplicações do fatorial',
                icon: FunctionSquare,
                color: 'from-purple-500 to-pink-400',
                chapters: [
                    {
                        id: '2-13',
                        title: 'O Relógio do Tempo Infinito',
                        content: 'Ao deixar a Câmara das Decisões, Lira sobe uma torre mecânica com um enorme relógio de engrenagens. Um guardião espectral pergunta: “Se alinharmos todas as 5 engrenagens numeradas ao mesmo tempo, quantas configurações possíveis existem?” O desafio é calcular 5!.',
                        correctAnswer: '120'
                    },
                    {
                        id: '2-14',
                        title: 'As Escadas do Saber',
                        content: 'Uma escada luminosa sobe em direção a um arco rúnico, e cada degrau revela uma operação. A porta no topo só se abre se Lira resolver a seguinte expressão: 6! – 4!.',
                        correctAnswer: '696'
                    },
                    {
                        id: '2-15',
                        title: 'O Labirinto das Posições',
                        content: 'Lira entra em um salão com três pedestais para três relíquias sagradas. Um sábio de pedra questiona: “De quantas formas distintas as 3 relíquias podem ser posicionadas nos 3 pedestais?”',
                        correctAnswer: '6'
                    },
                    {
                        id: '2-16',
                        title: 'O Altar das Possibilidades',
                        content: 'Num templo, quatro pergaminhos flutuam sobre dois nichos. Para destravar o altar, Lira deve prever todas as maneiras de escolher e ordenar 2 dos 4 pergaminhos. Quantos arranjos distintos são possíveis?',
                        correctAnswer: '12'
                    },
                    {
                        id: '2-17',
                        title: 'A Torre das Sequências',
                        content: 'Lira sobe uma torre e, para libertar um vento ancestral, precisa organizar 4 sinais mágicos em uma sequência perfeita. De quantas maneiras possíveis os 4 sinais distintos podem ser sequenciados?',
                        correctAnswer: '24'
                    },
                    {
                        id: '2-18',
                        title: 'As Gemas Repetidas',
                        content: 'Em uma gruta, Lira encontra 3 gemas de luz idênticas e 2 gemas de sombra idênticas. Ela precisa colocá-las em fila para abrir o caminho. Quantas sequências distintas são possíveis com essas 5 gemas?',
                        correctAnswer: '10'
                    },
                    {
                        id: '2-19',
                        title: 'O Cofre Triplo',
                        content: 'Três cofres exigem senhas de 3 símbolos distintos, escolhidos entre 5 símbolos rúnicos disponíveis. Lira deve calcular quantas senhas diferentes pode criar.',
                        correctAnswer: '60'
                    },
                    {
                        id: '2-20',
                        title: 'O Dragão de Gelo',
                        content: 'Na Ponte Congelada, um Dragão de Gelo apresenta 4 gemas: 2 vermelhas idênticas, 1 azul e 1 verde. Para acalmá-lo, Lira deve mostrar de quantas formas diferentes é possível dispor as 4 gemas em linha.',
                        correctAnswer: '12'
                    }
                ]
            },
            {
                id: 3,
                title: 'Permutações Simples',
                description: 'Exploração do conceito de permutações simples e suas aplicações.',
                icon: Star,
                color: 'from-indigo-500 to-purple-500',
                chapters: [
                    {
                        id: '3-21',
                        title: 'O Santuário da Ordem',
                        content: 'Ao entrar em um vale, Lira se depara com um santuário onde seis estátuas guardiãs estão lado a lado. Uma voz ecoa: “Reorganize os guardiões para revelar o padrão oculto.” De quantas formas diferentes existem para organizar as 6 estátuas em uma fila?',
                        correctAnswer: '720'
                    },
                    {
                        id: '3-22',
                        title: 'A Dança dos Elementos',
                        content: 'Cinco orbes mágicos giram ao redor de Lira: dois de água (idênticos), um de fogo, um de terra e um de ar. De quantas maneiras diferentes ela pode organizar esses 5 elementos em uma dança ritualística?',
                        correctAnswer: '60'
                    },
                    {
                        id: '3-23',
                        title: 'O Teatro das Sombras',
                        content: 'Lira adentra um antigo teatro. Para despertar os espíritos do palco, ela precisa organizar quatro personagens: A, B e dois gêmeos idênticos (G). Quantas formações diferentes podem ser feitas com os personagens A, B, G, G?',
                        correctAnswer: '12'
                    },
                    {
                        id: '3-24',
                        title: 'O Jardim da Reordenação',
                        content: 'Lira caminha por um jardim com cinco flores místicas: três rosas idênticas, uma tulipa e uma orquídea. Ela precisa calcular todas as formas únicas de ordená-las em uma fileira.',
                        correctAnswer: '20'
                    },
                    {
                        id: '3-25',
                        title: 'O Círculo das Sentinelas',
                        content: 'No centro de um templo circular, cinco sentinelas guardam um artefato. Lira precisa calcular quantas disposições circulares são possíveis para as 5 sentinelas para despertar o artefato.',
                        correctAnswer: '24'
                    },
                    {
                        id: '3-26',
                        title: 'O Despertar das Estátuas',
                        content: 'Lira ativa um salão onde seis estátuas de guardiões estão dispostas em círculo. Ela precisa encontrar todas as permutações circulares possíveis para completar o ritual. Quantas formações circulares podem ser feitas?',
                        correctAnswer: '120'
                    },
                    {
                        id: '3-27',
                        title: 'A Roda dos Ecos',
                        content: 'No centro de um campo sagrado, uma roda mágica está inativa. Para girá-la, Lira precisa posicionar 4 runas sagradas de forma circular. Quantas formações circulares distintas podem ser feitas?',
                        correctAnswer: '6'
                    },
                    {
                        id: '3-28',
                        title: 'O Portal da Escolha Certa',
                        content: 'Lira encontra um corredor com seis portas encantadas. O Guardião das Alternativas lança o desafio: “Escolha 3 portas para inspecionar. A ordem não importa.” De quantas maneiras Lira pode escolher as 3 portas?',
                        correctAnswer: '20'
                    },
                    {
                        id: '3-29',
                        title: 'O Desafio da Sabedoria Antiga',
                        content: 'Em uma biblioteca ancestral, Lira encontra sete tomos mágicos. O desafio é escolher 2 livros para estudar. Quantas combinações diferentes de 2 livros podem ser feitas?',
                        correctAnswer: '21'
                    },
                    {
                        id: '3-30',
                        title: 'O Enigma do Inventário Proibido',
                        content: 'Na Torre Proibida, Lira deve montar um inventário de poções escolhendo 2 entre 5 frascos disponíveis. O mestre da torre adverte: “A ordem dos frascos não importa.” Quantas combinações distintas podem ser feitas?',
                        correctAnswer: '10'
                    }
                ]
            },
            {
                id: 4,
                title: 'Arranjos Simples',
                description: 'Exploração do conceito de arranjos simples e suas aplicações.',
                icon: Brain,
                color: 'from-teal-500 to-green-500',
                chapters: [
                    {
                        id: '4-31',
                        title: 'A Porta dos Pergaminhos',
                        content: 'Em um salão, Lira encontra 5 pergaminhos mágicos. Um portal só se abre se ela posicionar 3 deles em uma ordem específica. O Guardião desafia: “Quantas sequências distintas de 3 pergaminhos você pode formar?”',
                        correctAnswer: '60'
                    },
                    {
                        id: '4-32',
                        title: 'As Runas do Tempo',
                        content: 'Lira encontra quatro runas temporais. Para avançar, ela precisa selecionar e organizar duas em um pedestal mágico, onde a ordem é essencial. Quantos arranjos possíveis de 2 runas entre 4 existem?',
                        correctAnswer: '12'
                    },
                    {
                        id: '4-33',
                        title: 'O Caminho dos Cristais',
                        content: 'Diante de uma ponte suspensa, Lira deve escolher 3 cristais entre 6 para ativar os degraus de energia. A ordem de ativação é crucial. Quantos arranjos possíveis de 3 cristais podem ser feitos?',
                        correctAnswer: '120'
                    },
                    {
                        id: '4-34',
                        title: 'O Altar Elemental',
                        content: 'No Altar Elemental, cinco esferas de energia representam os elementos. Para uma invocação, Lira deve escolher 4 esferas e organizá-las em sequência. Quantos arranjos diferentes de 4 esferas entre 5 são possíveis?',
                        correctAnswer: '120'
                    },
                    {
                        id: '4-35',
                        title: 'O Cofre dos Códigos',
                        content: 'Para abrir um cofre ancestral, Lira precisa de uma senha de 2 símbolos distintos entre os 7 disponíveis. A posição dos símbolos importa. Quantos arranjos de 2 símbolos são possíveis?',
                        correctAnswer: '42'
                    },
                    {
                        id: '4-36',
                        title: 'As Lâminas do Destino',
                        content: 'Lira deve forjar 3 lâminas com 3 dos 5 metais místicos disponíveis. A ordem de forjamento altera o tipo de lâmina produzida. Quantos arranjos de 3 metais entre 5 são possíveis?',
                        correctAnswer: '60'
                    },
                    {
                        id: '4-37',
                        title: 'O Selo das Estrelas',
                        content: 'Para quebrar o Selo das Estrelas, Lira precisa organizar 3 das 6 constelações possíveis em uma ordem sagrada. Quantos arranjos de 3 constelações podem ser feitos?',
                        correctAnswer: '120'
                    },
                    {
                        id: '4-38',
                        title: 'A Escada de Cristal',
                        content: 'Lira escala uma escada onde a sequência dos passos importa. Ela deve ativar 4 degraus, escolhidos entre 6. Quantos arranjos de 4 passos são possíveis?',
                        correctAnswer: '360'
                    },
                    {
                        id: '4-39',
                        title: 'O Véu dos Ecos',
                        content: 'Para atravessar um véu mágico, Lira precisa dispor corretamente 2 entre 6 palavras de poder. Quantos arranjos diferentes de 2 palavras podem ser formados?',
                        correctAnswer: '30'
                    },
                    {
                        id: '4-40',
                        title: 'A Cripta dos Guardiões',
                        content: 'Na cripta ancestral, Lira deve invocar 3 dos 7 guardiões. A ordem dos nomes influencia quais guardiões se manifestarão. Quantos arranjos possíveis de 3 nomes existem?',
                        correctAnswer: '210'
                    }
                ]
            }
        ]
    },
    {
        id: 'intermediario',
        title: 'Intermediário',
        modules: [
            {
                id: 5,
                title: 'Combinações Simples',
                description: 'Conceito e aplicações de combinações',
                icon: Star,
                color: 'from-pink-500 to-red-500',
                chapters: [
                    {
                        id: '5-41',
                        title: 'As Chaves do Cofre',
                        content: 'Lira se depara com um cofre que abre com duas chaves dentre cinco disponíveis. O Guardião avisa: “Não importa a ordem, apenas quais forem escolhidas.” Quantas combinações de 2 chaves podem ser feitas?',
                        correctAnswer: '10'
                    },
                    {
                        id: '5-42',
                        title: 'O Jardim das Essências',
                        content: 'Em um jardim, Lira precisa selecionar 3 frascos de perfume entre 7 para criar uma essência rara. A ordem dos frascos não importa. Quantas combinações de 3 frascos são possíveis?',
                        correctAnswer: '35'
                    },
                    {
                        id: '5-43',
                        title: 'As Chamas do Conselho',
                        content: 'Durante um ritual, Lira precisa escolher 4 tochas mágicas entre 9 disponíveis. O fogo aceso depende apenas das tochas escolhidas, não da ordem. Quantas combinações de 4 tochas são possíveis?',
                        correctAnswer: '126'
                    },
                    {
                        id: '5-44',
                        title: 'O Véu das Poções',
                        content: 'Na câmara das alquimias, Lira deve escolher 3 ingredientes entre 6. O mestre alquimista avisa: “Não importa a sequência. Apenas os componentes certos.” Quantas combinações possíveis existem?',
                        correctAnswer: '20'
                    },
                    {
                        id: '5-45',
                        title: 'A Trilha dos Talismãs',
                        content: 'Lira precisa escolher 2 talismãs entre 8 para atravessar a Floresta dos Ecos. A ordem de escolha não interfere na ativação. Quantas combinações de 2 talismãs podem ser feitas?',
                        correctAnswer: '28'
                    },
                    {
                        id: '5-46',
                        title: 'O Altar dos Códigos',
                        content: 'No templo dos números, Lira precisa formar um grupo de 5 símbolos rúnicos entre 10. Cada grupo abre um código antigo, independentemente da ordem. Quantas combinações de 5 símbolos são possíveis?',
                        correctAnswer: '252'
                    },
                    {
                        id: '5-47',
                        title: 'A Biblioteca das Estrelas',
                        content: 'Na biblioteca celestial, Lira deve escolher 4 livros sagrados entre 7 prateleiras. A ordem de leitura não importa. Quantas combinações de 4 livros podem ser feitas?',
                        correctAnswer: '35'
                    },
                    {
                        id: '5-48',
                        title: 'O Enigma da Montanha',
                        content: 'Diante de uma pedra enigmática, Lira deve selecionar 6 cristais entre 12. O guardião adverte: “Não se preocupe com a ordem, apenas com os que forem escolhidos.” Quantas combinações de 6 cristais existem?',
                        correctAnswer: '924'
                    },
                    {
                        id: '5-49',
                        title: 'A Travessia das Nuvens',
                        content: 'Para atravessar uma ponte de nuvens, Lira precisa escolher 3 penas encantadas entre 9. A ordem das penas não altera o resultado. Quantas combinações de 3 penas são possíveis?',
                        correctAnswer: '84'
                    },
                    {
                        id: '5-50',
                        title: 'As Vozes do Conselho Antigo',
                        content: 'Para evocar a presença de um conselho, Lira deve formar um grupo de 3 nomes entre 8 inscrições arcanas. A ordem dos nomes não interfere. Quantas combinações de 3 nomes são possíveis?',
                        correctAnswer: '56'
                    },
                    {
                        id: '5-51',
                        title: 'O Ritual dos Guardiões',
                        content: 'Para selar um portal sombrio, Lira deve escolher 5 guardiões entre 11 candidatos. O equilíbrio depende apenas de quem for escolhido, não da ordem. Quantas combinações de 5 guardiões são possíveis?',
                        correctAnswer: '462'
                    },
                    {
                        id: '5-52',
                        title: 'O Código Final das Combinações',
                        content: 'No Observatório Matemágico, Lira encontra um painel com 52 símbolos e precisa escolher 6 para ativar o código final. A sequência não importa. Quantas combinações de 6 símbolos são possíveis?',
                        correctAnswer: '20358520'
                    }
                ]
            },
            {
                id: 6,
                title: 'Permutações com Repetição',
                description: '-',
                icon: Brain,
                color: 'from-yellow-500 to-orange-500',
                chapters: [
                    {
                        id: '6-53',
                        title: 'O Portal dos Nomes',
                        content: 'Lira encontra um portão mágico onde precisa organizar as letras da palavra “LUZ”. O espírito do portal pergunta: “Quantas formas haveria de formar palavras com essas três letras distintas?”',
                        correctAnswer: '6'
                    },
                    {
                        id: '6-54',
                        title: 'O Cofre das Runas Repetidas',
                        content: 'Para abrir um cofre sagrado, Lira deve organizar 4 runas: A, A, B, C. Duas delas são idênticas. Quantas formas diferentes de organizar as runas existem para quebrar o selo?',
                        correctAnswer: '12'
                    },
                    {
                        id: '6-55',
                        title: 'As Lâminas Gêmeas',
                        content: 'Lira encontra 5 espadas: 3 são idênticas (X, X, X) e 2 são únicas (Y, Z). Ela precisa descobrir todas as formas possíveis de alinhá-las em um suporte cerimonial.',
                        correctAnswer: '20'
                    },
                    {
                        id: '6-56',
                        title: 'O Véu dos Ecos Múltiplos',
                        content: 'Lira encontra 6 orbes mágicos: 2 de fogo idênticos, 2 de gelo idênticos e 2 de sombra idênticos. De quantas formas diferentes os 6 orbes podem ser alinhados em sequência?',
                        correctAnswer: '90'
                    },
                    {
                        id: '6-57',
                        title: 'A Espiral dos Números Místicos',
                        content: 'Uma espiral mágica exige que Lira disponha 5 números rúnicos: 1, 1, 2, 2, 3. Quantas permutações possíveis existem para despertar o padrão da espiral?',
                        correctAnswer: '30'
                    },
                    {
                        id: '6-58',
                        title: 'O Enigma das Pérolas',
                        content: 'Em uma sala, Lira precisa ordenar 6 pérolas: 3 azuis idênticas, 2 vermelhas idênticas e 1 branca. Quantas formas distintas de ordenar as pérolas existem?',
                        correctAnswer: '60'
                    },
                    {
                        id: '6-59',
                        title: 'A Muralha das Sílabas',
                        content: 'Na Muralha de Linguagens Perdidas, Lira vê a palavra “MIMIMI”. Para quebrar o feitiço, ela deve calcular quantos anagramas distintos podem ser feitos com essas letras.',
                        correctAnswer: '20'
                    },
                    {
                        id: '6-60',
                        title: 'Os Brasões do Reino',
                        content: 'Lira precisa desenhar todos os brasões possíveis para um novo clã, usando os 4 símbolos A, A, B, C. Quantas permutações possíveis existem?',
                        correctAnswer: '12'
                    },
                    {
                        id: '6-61',
                        title: 'A Tábua dos Espelhos',
                        content: 'Num salão espelhado, Lira vê a palavra “ESPEJO” escrita. Cada reflexão revela uma nova permutação. Quantas permutações distintas podem ser formadas com as letras desta palavra?',
                        correctAnswer: '360'
                    },
                    {
                        id: '6-62',
                        title: 'O Orbe das Variações Finais',
                        content: 'Lira encontra um orbe prateado que emite a palavra “NENHUM”. Para acessá-lo, ela precisa identificar todos os anagramas possíveis dessa palavra com letras repetidas.',
                        correctAnswer: '360'
                    }
                ]
            },
            {
                id: 7,
                title: ' Permutações Circulares',
                description: 'Conceito e aplicações de permutações circulares',
                icon: Trophy,
                color: 'from-blue-500 to-indigo-500',
                chapters: [
                    {
                        id: '7-63',
                        title: 'O Círculo dos Heróis',
                        content: 'Lira encontra oito heróis lendários reunidos ao redor de uma fogueira sagrada. Para ativar o selo da união, ela precisa calcular de quantas maneiras diferentes os 8 heróis podem se sentar ao redor do círculo.',
                        correctAnswer: '5040'
                    },
                    {
                        id: '7-64',
                        title: 'A Roda das Possibilidades',
                        content: 'Lira chega a uma arena mística onde cinco portais flutuam em círculo. Para ativar a arena, ela deve calcular as diferentes formas de posicionar os 5 portais ao redor.',
                        correctAnswer: '24'
                    },
                    {
                        id: '7-65',
                        title: 'O Encontro dos Anciões',
                        content: 'Seis anciões mágicos sentam-se ao redor de uma mesa de pedra para um conselho. Lira deve prever todas as formas distintas de arranjá-los, considerando que a disposição é circular.',
                        correctAnswer: '120'
                    },
                    {
                        id: '7-66',
                        title: 'As Lâmpadas do Equilíbrio',
                        content: 'Lira deve posicionar 4 lâmpadas mágicas ao redor de uma estátua para formar um selo de proteção. A ordem em círculo define a energia gerada. Quantas formações circulares existem?',
                        correctAnswer: '6'
                    },
                    {
                        id: '7-67',
                        title: 'A Dança dos Espíritos',
                        content: 'Em uma cerimônia, Lira organiza sete dançarinos espirituais em um círculo ao redor de uma chama. A posição define o ritmo da dança. Quantas formações circulares podem ser feitas?',
                        correctAnswer: '720'
                    },
                    {
                        id: '7-68',
                        title: 'O Círculo das Pedras Rúnicas',
                        content: 'O círculo de pedras rúnicas só é ativado quando 3 delas são posicionadas ao redor do altar. A ordem relativa importa, mas rotações não contam. Quantas formações circulares existem?',
                        correctAnswer: '2'
                    },
                    {
                        id: '7-69',
                        title: 'A Ceia dos Guardiões',
                        content: 'Lira participa de uma ceia com 9 guardiões em uma mesa redonda. Para manter o equilíbrio cerimonial, ela deve descobrir todas as possíveis formas de distribuí-los ao redor.',
                        correctAnswer: '40320'
                    },
                    {
                        id: '7-70',
                        title: 'O Enlace Final',
                        content: 'Para concluir o módulo, Lira deve organizar 10 cristais do destino em um círculo ao redor de um obelisco dourado. Quantas formações circulares podem ser feitas com os 10 cristais?',
                        correctAnswer: '362880'
                    }
                       
                ]
            }
        ]
    },
    {
        id: 'avancado',
        title: 'Avançado',
        modules: [
            {
                id: 8,
                title: 'Combinações Com Repetição',
                description: '-',
                icon: BookOpen,
                color: 'from-rose-500 to-fuchsia-500',
                chapters: [
                    {
                        id: '8-71',
                        title: 'A Fonte da Duplicação',
                        content: 'Lira encontra a Fonte da Duplicação, onde pode escolher entre 4 ingredientes mágicos, podendo repetir. O desafio é formar combinações de 2 ingredientes. Quantas combinações com repetição são possíveis?',
                        correctAnswer: '10'
                    },
                    {
                        id: '8-72',
                        title: 'O Desafio do Alquimista Cego',
                        content: 'Um velho alquimista pede ajuda para encontrar todas as combinações possíveis de 3 ervas, dentre 5 disponíveis, sendo possível repetir qualquer erva. Quantas combinações com repetição podem ser formadas?',
                        correctAnswer: '35'
                    },
                    {
                        id: '8-73',
                        title: 'O Inventário de Cristal',
                        content: 'Lira precisa organizar seu inventário. Ela tem 6 tipos de pedras mágicas e quer selecionar 3, podendo repetir, para colocá-las nos suportes de cristal. Quantas combinações com repetição podem ser feitas?',
                        correctAnswer: '56'
                    },
                    {
                        id: '8-74',
                        title: 'A Pedra das Partições',
                        content: 'Lira encontra uma pedra mágica que se fragmenta. Um enigma pede que ela descubra de quantas formas pode repartir 6 unidades idênticas entre 2 recipientes, permitindo que um fique vazio.',
                        correctAnswer: '7'
                    },
                    {
                        id: '8-75',
                        title: 'O Rastro de Areia',
                        content: 'No Deserto de Katra, uma ampulheta mágica apresenta o seguinte problema: de quantas formas diferentes é possível repartir 5 unidades idênticas entre 3 recipientes mágicos?',
                        correctAnswer: '21'
                    },
                    {
                        id: '8-76',
                        title: 'O Julgamento Final do Círculo',
                        content: 'Diante do Círculo dos Guardiões, Lira recebe um desafio final que combina técnicas. São dadas 4 pedras, sendo duas delas idênticas, e ela deve dispô-las em um círculo. Quantas formações únicas existem?',
                        correctAnswer: '3'
                    },
                    {
                        id: '8-77',
                        title: 'A Coroa dos Reinos',
                        content: 'Lira encontra a coroa de três reinos. Para restaurá-la, ela precisa combinar 4 partes, que podem ser de 5 tipos diferentes (com repetição). Quantas combinações são possíveis?',
                        correctAnswer: '70'
                    },
                    {
                        id: '8-78',
                        title: 'Os Espelhos das Distribuições',
                        content: 'No Salão dos Espelhos, Lira precisa descobrir de quantas formas pode distribuir 7 unidades idênticas entre 4 recipientes diferentes. Ela deve contar todos os reflexos (distribuições) válidos.',
                        correctAnswer: '120'
                    },
                    {
                        id: '8-79',
                        title: 'A Harpa da Harmonia',
                        content: 'Lira precisa afinar uma harpa mágica usando 6 cordas encantadas de 3 tipos diferentes, podendo repetir os tipos. Quantas afinações únicas (combinações com repetição) são possíveis?',
                        correctAnswer: '28'
                    },
                    {
                        id: '8-80',
                        title: 'O Enigma dos Fragmentos',
                        content: 'Lira deve usar o Princípio da Inclusão-Exclusão. Dados os conjuntos A, B, C: |A|=26, |B|=29, |C|=27, |A∩B|=11, |A∩C|=14, |B∩C|=13, |A∩B∩C|=6. Qual o total de elementos, |A∪B∪C|?',
                        correctAnswer: '50'
                    }
                ]
            },
            {
                id: 9,
                title: 'Problemas com Repetição',
                description: '-',
                icon: BookOpen,
                color: 'from-cyan-400 to-sky-400',
                chapters: [
                    {
                        id: '9-81',
                        title: 'O Salão das Proibições',
                        content: 'Lira entra em um salão com 5 portas mágicas. Ela pode escolher 2 portas para abrir, mas está proibida de escolher a primeira e a última porta juntas. Quantas combinações válidas ela pode fazer?',
                        correctAnswer: '9'
                    },
                    {
                        id: '9-82',
                        title: 'As Chamas Incompatíveis',
                        content: 'Para acender um altar, Lira precisa escolher 3 entre 6 tochas. No entanto, a tocha de número 2 e a de número 5 são incompatíveis e nunca podem ser acesas juntas. Quantas combinações de 3 tochas são possíveis?',
                        correctAnswer: '16'
                    },
                    {
                        id: '9-83',
                        title: 'O Desafio dos Guardiões Rivais',
                        content: 'Lira precisa formar um grupo de 3 guardiões a partir de 7 disponíveis. Porém, dois deles (Guardião A e Guardião B) são rivais e se recusam a ficar no mesmo grupo. Quantos trios diferentes ela pode formar?',
                        correctAnswer: '30'
                    },
                    {
                        id: '9-84',
                        title: 'As Senhas Sem Repetição',
                        content: 'Lira precisa criar senhas mágicas de 3 dígitos, usando os números de 0 a 9. Para a senha ser válida, os números não podem se repetir. Quantas senhas distintas de 3 dígitos podem ser formadas?',
                        correctAnswer: '720'
                    },
                    {
                        id: '9-85',
                        title: 'A Escada do Silêncio',
                        content: 'Para subir os 4 degraus de uma escada mágica, Lira pode dar passos de 1 ou 2 degraus. A regra é que ela não pode dar dois passos de mesmo tamanho em sequência (ex: 1, 1 ou 2, 2). Quantas sequências de passos válidas somam exatamente 4 degraus?',
                        correctAnswer: '3'
                    },
                    {
                        id: '9-86',
                        title: 'O Labirinto de Cor',
                        content: 'Lira deve pintar 3 salas em fila com 3 cores disponíveis (Vermelho, Azul, Verde). A regra é que salas vizinhas não podem ter a mesma cor. De quantas formas diferentes ela pode pintar as 3 salas?',
                        correctAnswer: '12'
                    },
                    {
                        id: '9-87',
                        title: 'Os Códigos Conjurados',
                        content: 'Lira precisa criar um código de 4 símbolos. Para cada posição, ela pode usar um dos 4 símbolos de poder {A, B, C, D}. Contudo, um símbolo específico, o {A}, é proibido na primeira posição. Quantos códigos podem ser criados?',
                        correctAnswer: '256'
                    },
                    {
                        id: '9-88',
                        title: 'A Chave do Espelho',
                        content: 'Lira deve encontrar uma senha palíndroma de 3 letras (que se lê da mesma forma de trás para frente, como "ANA"). Ela pode usar 4 letras distintas para formar a senha, e as letras podem se repetir. Quantas senhas assim são possíveis?',
                        correctAnswer: '16'
                    },
                    {
                        id: '9-89',
                        title: 'O Selo da Exclusão',
                        content: 'Lira deve escolher um grupo de 3 aprendizes entre 7. No entanto, um deles, o mais rebelde, foi proibido de participar. Quantas combinações são possíveis sem incluir o aprendiz excluído?',
                        correctAnswer: '20'
                    },
                    {
                        id: '9-90',
                        title: 'A Harmonia Final',
                        content: 'Para selar o Livro de Combinaria, Lira precisa montar uma sequência de 3 elementos distintos, escolhidos entre 6. A única regra é que o primeiro e o último elemento da sequência não podem ser do mesmo tipo. Quantas sequências válidas existem?',
                        correctAnswer: '90'
                    }
                ]
            },
            {
                id: 10,
                title: ' Princípio da Inclusão‑Exclusão',
                description: '-',
                icon: BookOpen,
                color: 'from-red-500 to-orange-400',
                chapters: [
                    {
                        id: '10-91',
                        title: 'O Portal dos Conjuntos',
                        content: 'Lira chega a um templo e deve calcular quantos aprendizes estudam ao menos uma de três artes: Feitiçaria (F), Alquimia (A) e Encantamento (E). Dados: |F|=40, |A|=30, |E|=20, |F∩A|=10, |F∩E|=5, |A∩E|=8, e |F∩A∩E|=3.',
                        correctAnswer: '70'
                    },
                    {
                        id: '10-92',
                        title: 'As Chaves do Conhecimento',
                        content: 'Em uma escola de 100 alunos, Lira precisa saber quantos não estudam nenhuma das três matérias: Aritmética (A), Álgebra (L) e Geometria (G). Dados: |A|=60, |L|=50, |G|=40, |A∩L|=20, |A∩G|=10, |L∩G|=15, e |A∩L∩G|=5.',
                        correctAnswer: '0'
                    },
                    {
                        id: '10-93',
                        title: 'A Câmara das Máscaras',
                        content: 'Lira precisa identificar quantos viajantes usam ao menos uma de três máscaras (A, B, C). Dados: |A|=120, |B|=90, |C|=80, |A∩B|=50, |A∩C|=30, |B∩C|=20, e |A∩B∩C|=10. Qual o total de usuários?',
                        correctAnswer: '200'
                    },
                    {
                        id: '10-94',
                        title: 'A Escadaria da Exclusão',
                        content: 'Lira deve calcular quantos alunos estudam APENAS Aritmética e Álgebra (mas não os três). Sabe-se que o total que estuda Aritmética e Álgebra é 50, e o total que estuda os três juntos é 10.',
                        correctAnswer: '40'
                    },
                    {
                        id: '10-95',
                        title: 'A Biblioteca Tripla',
                        content: 'Lira quer saber quantos livros são exclusivamente de Magia (M). Dados: |M|=120, |M∩História|=30, |M∩Runas|=20, e a interseção dos três é 10. Lembre-se de somar a interseção tripla de volta!',
                        correctAnswer: '80'
                    },
                    {
                        id: '10-96',
                        title: 'O Véu das Probabilidades',
                        content: 'Lira deve calcular o total de elementos únicos nos conjuntos A, B e C. Dados: |A|=60, |B|=70, |C|=80, |A∩B|=25, |A∩C|=30, |B∩C|=35, e |A∩B∩C|=15.',
                        correctAnswer: '135'
                    },
                    {
                        id: '10-97',
                        title: 'As Lâminas da Interseção',
                        content: 'Para forjar uma lâmina, Lira precisa saber quantos ferreiros usam ao menos um de três minérios (A, B, C). Dados: |A|=50, |B|=60, |C|=70, |A∩B|=20, |A∩C|=15, |B∩C|=25, e |A∩B∩C|=10.',
                        correctAnswer: '130'
                    },
                    {
                        id: '10-98',
                        title: 'O Enigma dos Arquivistas',
                        content: 'Três arquivistas (X, Y, Z) registram eventos. Lira deve calcular o total de eventos únicos. Dados: |X|=90, |Y|=85, |Z|=95, |X∩Y|=40, |X∩Z|=30, |Y∩Z|=35, e |X∩Y∩Z|=20.',
                        correctAnswer: '185'
                    },
                    {
                        id: '10-99',
                        title: 'O Ritual da Exclusão',
                        content: 'No último ritual, Lira analisa fragmentos de energia em três círculos (A, B, C). Calcule o total de fragmentos distintos. Dados: |A|=100, |B|=110, |C|=120, |A∩B|=50, |A∩C|=40, |B∩C|=60, e |A∩B∩C|=30.',
                        correctAnswer: '210'
                    },
                    {
                        id: '10-100',
                        title: 'A Luz da Completude',
                        content: 'Lira alcança o Círculo Final. Resolva o desafio sobre estudantes de Poção (P), Encanto (E) e Defesa (D). Dados: |P|=150, |E|=130, |D|=140, |P∩E|=60, |P∩D|=70, |E∩D|=50, e |P∩E∩D|=30. Quantos estudam pelo menos uma área?',
                        correctAnswer: '270'
                    }  
                ]
            }
        ]
    }
]

// Desafios achatados
export interface Challenge {
    moduleId: number;
    chapterId: string;
    title: string;
    question: string;
    answer: string;
}

export const challenges: Challenge[] = JOURNEY.flatMap(lvl =>
    lvl.modules.flatMap(mod =>
        mod.chapters.map(chap => ({
            moduleId: mod.id,
            chapterId: chap.id,
            title: chap.title,
            question: chap.content,
            answer: chap.correctAnswer
        }))
    )
);

// Conteúdos por capítulo para páginas dinâmicas
export const chapterContentsById: Record<string, ChapterContent & { moduleId: number; moduleTitle: string }> = JOURNEY
    .flatMap(lvl => lvl.modules.flatMap(mod =>
        mod.chapters.map(chap => ({
            ...chap,
            moduleId: mod.id,
            moduleTitle: mod.title
        }))
    ))
    .reduce((acc, chap) => {
        acc[chap.id] = chap;
        return acc;
    }, {} as Record<string, ChapterContent & { moduleId: number; moduleTitle: string }>);

// IDs para SSG
export const allChapterIds = Object.keys(chapterContentsById);

// Títulos dos módulos
export const moduleTitles: Record<number, string> = JOURNEY
    .flatMap(lvl => lvl.modules)
    .reduce((acc, mod) => {
        acc[mod.id] = mod.title;
        return acc;
    }, {} as Record<number, string>);

// Função para obter capítulos de um módulo
export const getModuleChapters = (moduleId: number): ChapterContent[] => {
    return JOURNEY
        .flatMap(lvl => lvl.modules)
        .find(mod => mod.id === moduleId)?.chapters || [];
};

// Função para verificar se um módulo foi completado
export const isModuleCompleted = (moduleId: number, completedChapters: string[]): boolean => {
    const moduleChapters = getModuleChapters(moduleId);
    return moduleChapters.every(chapter => completedChapters.includes(chapter.id));
};

// Função para obter o próximo capítulo de um módulo
export const getNextChapterInModule = (currentChapterId: string): string | null => {
    const currentChapter = chapterContentsById[currentChapterId];
    if (!currentChapter) return null;

    const moduleChapters = getModuleChapters(currentChapter.moduleId);
    const currentIndex = moduleChapters.findIndex(ch => ch.id === currentChapterId);

    if (currentIndex === -1 || currentIndex === moduleChapters.length - 1) {
        return null; // Último capítulo do módulo
    }

    return moduleChapters[currentIndex + 1].id;
};