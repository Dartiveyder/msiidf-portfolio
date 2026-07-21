import type { Lang } from "@/components/Navbar";

export type { Lang };

export type Heading = { title: string; highlight: string };

export type ImpactMetric = {
  value: string;
  label?: string;
  description?: string;
};

export type CaseStudy = {
  /** Optional lead line shown under the H1 on the project's hero. */
  heroSubtitle?: string;
  /** Optional context callout, e.g. clarifying this was one of several works done for a company/product. */
  note?: string;
  role?: string;
  period?: string;
  type?: string;
  skills?: string[];
  problem: string;
  solution: string;
  impact: ImpactMetric[];
  /** Markdown body for the process/development section — headings, paragraphs, images, quotes. */
  body: string;
};

export type Project = {
  slug: string;
  icon: string;
  image?: string;
  /** Overrides the default alt text (project name) for the cover image. */
  imageAlt?: string;
  tools?: string[];
  externalUrl?: string;
  /** Overrides the default "visit site" label for this project's external-link button. */
  externalUrlLabel?: string;
  requestAccess?: boolean;
  /** Overrides the default "/contato" destination for the request-access button. */
  requestAccessHref?: string;
  name: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  caseStudy?: CaseStudy;
};

type ProjectMeta = Omit<Project, "name" | "title" | "summary" | "description" | "tags" | "caseStudy" | "externalUrlLabel" | "imageAlt">;
type ProjectText = Pick<Project, "name" | "title" | "summary" | "description" | "tags" | "caseStudy" | "externalUrlLabel" | "imageAlt">;

const projectsMeta: ProjectMeta[] = [
  {
    slug: "flow",
    icon: "/assets/flow-icon.png",
    image: "/assets/flow-screenshot.png",
    tools: ["Figma", "Clarity", "Teams", "ChatGPT"],
    requestAccess: true,
    requestAccessHref: "https://drive.google.com/file/d/1M5yybTueiNiDDY5bqZ-LWgXka-X8i-3f/view?usp=sharing",
  },
  {
    slug: "jobfy",
    icon: "/assets/jobfy-icon.png",
    image: "/assets/jobfy-screenshot.png",
    tools: ["Figma", "Clarity", "Teams", "ChatGPT"],
    requestAccess: true,
  },
  {
    slug: "delivery-de-roupas",
    icon: "/assets/malla-icon.png",
    image: "/assets/delivery-roupas-screenshot.png",
    tools: ["Figma", "Maze"],
    externalUrl: "https://malladelivery.notion.site/Ol-9dddcadd87c041f5b826db06044bc291",
  },
  {
    slug: "nfg",
    icon: "/assets/nfg-icon.png",
    image: "/assets/nfg-hero.png",
    externalUrl: "https://www.behance.net/gallery/198699925/Redesign-NFG-Nota-Fiscal-Gaucha",
  },
  {
    slug: "msiidf",
    icon: "/assets/msiidf-icon.png",
    image: "/assets/msiidf-cover.png",
    tools: ["Figma"],
    externalUrl: "https://www.behance.net/gallery/159696863/MSIIDF",
  },
  {
    slug: "fighterx",
    icon: "/assets/fighterx-icon.png",
    image: "/assets/fighterx-screenshot.png",
    tools: ["Figma", "Framer"],
    externalUrl: "https://numerical-path-424890.framer.app/",
  },
  {
    slug: "universal-streaming",
    icon: "/assets/universal-streaming-icon.png",
    image: "/assets/universal-screenshot.png",
    tools: ["Figma", "Framer"],
    externalUrl: "https://independent-acknowledgment-093223.framer.app/#funcionalidades",
  },
];

const projectsText: Record<Lang, Record<string, ProjectText>> = {
  pt: {
    flow: {
      name: "Flow",
      title: "Sistema ERP",
      summary: "Sistema ERP voltado para o RH, Folha de pagamento, Ponto, Férias, Saúde e Segurança do Trabalho.",
      description:
        "Sistema ERP voltado para o RH, Folha de pagamento, Ponto, Férias, Saúde e Segurança do Trabalho, melhoria de fluxos e UI de sistema.",
      tags: ["ERP", "RH", "Sistemas complexos"],
    },
    jobfy: {
      name: "Jobfy",
      title: "Recrutamento e seleção",
      summary:
        "Criação de currículos com uma experiência guiada por IA, oferecendo templates, e personalização focada em empregabilidade.",
      description:
        "Criação de currículos com uma experiência guiada por IA, oferecendo templates, e personalização focada em empregabilidade. Interface intuitiva e feedback em tempo real garantem adaptação fácil do usuário em todas as etapas.",
      tags: ["Product Design", "IA", "Recrutamento"],
      caseStudy: {
        note:
          "Este case apresenta um dos trabalhos que desenvolvi para a Jobfy durante minha atuação como UX/UI Designer.",
        role: "UX/UI Designer",
        type: "Produto B2C · Recrutamento",
        skills: [
          "Discovery",
          "Análise de dados",
          "Arquitetura da informação",
          "Prototipação",
          "Design system",
        ],
        problem:
          "A jornada de criação de perfil e as etapas de processos seletivos na Jobfy pediam muito tempo e atenção do candidato, o que aumentava o abandono antes da conclusão.",
        solution:
          "Analisei sessões de uso no Microsoft Clarity para mapear pontos de atrito reais, não presumidos. A partir disso, redesenhei a jornada de criação de perfil, reduzindo etapas e reorganizando as informações por prioridade, e reestruturei a arquitetura de informação de criação de vagas e gestão de candidatos. Também documentei componentes, estados de carregamento, sucesso, erro e restrições de acesso, criando uma base mais consistente para o time de desenvolvimento.",
        impact: [
          {
            value: "37%",
            label: "Redução no tempo de criação de perfil",
            description: "Menos etapas e informações priorizadas tornaram o cadastro mais rápido de concluir.",
          },
          {
            value: "+1M",
            label: "Usuários impactados",
            description: "Soluções de recrutamento e seleção usadas por mais de 1 milhão de pessoas.",
          },
          {
            value: "90%",
            label: "Satisfação dos usuários",
            description: "Medida a partir de metodologias centradas no usuário e estudos de comportamento.",
          },
        ],
        body: `## Descoberta

Antes de desenhar qualquer tela, o objetivo era entender onde exatamente os candidatos travavam. Analisei sessões gravadas no Microsoft Clarity, mapeando cliques, tempo parado em cada campo e pontos de saída do fluxo.

Os dados mostraram um padrão claro: a maior parte do abandono acontecia nos primeiros passos do cadastro, antes mesmo do candidato ver algum valor da plataforma.

> Os primeiros minutos definiam se o candidato continuava ou desistia — e era exatamente ali que o fluxo pedia mais esforço.

![Tela do produto Jobfy](/assets/jobfy-screenshot.png)

## Redesenho da jornada

Com os pontos de atrito mapeados, priorizei o que realmente precisava ser preenchido logo no início e adiei campos secundários para depois que o candidato já tivesse visto valor na plataforma. Reorganizei a arquitetura de informação da criação de vagas e da gestão de candidatos para os recrutadores, com hierarquias visuais mais claras entre o que exigia ação imediata e o que era só acompanhamento.

Cada decisão de fluxo foi validada com protótipos navegáveis antes de ir para alta fidelidade, reduzindo retrabalho e alinhando expectativas com o time de produto.

Não foi possível retirar todos os campos ou dividir etapas no cadastro do usuário, pois muitos dos dados solicitados eram obrigatórios para o sistema.

## Design system e handoff

Para reduzir divergências entre o Figma e o que era efetivamente entregue, documentei componentes e todos os seus estados: carregamento, sucesso, erro, ausência de dados e restrições de acesso, junto com especificações de comportamento e regras de interação. Isso deu ao time de desenvolvimento uma referência única, sem depender de decisões implícitas durante a implementação.

## Resultados e aprendizados

Com o fluxo de criação de perfil mais enxuto, o tempo necessário para concluir o cadastro caiu 37%. Mais do que o número em si, o processo confirmou algo importante: boa parte dos problemas de abandono não estava na interface em si, mas na ordem e na priorização das informações pedidas, uma lição que passou a orientar outros fluxos da plataforma.`,
      },
    },
    "delivery-de-roupas": {
      name: "App de Delivery de Roupas",
      title: "Case Malla",
      summary: "Case para um app de delivery de roupas, explorando idealização, descoberta, validação e prototipação.",
      description:
        "Case para um app de delivery de roupas, explorando todas as etapas do processo: idealização, descoberta, validação e prototipação. Decisões embasadas em pesquisa, insights de usuários e testes, entregando uma solução validada, escalável e centrada no usuário.",
      tags: ["Discovery", "Prototipação", "Pesquisa"],
      caseStudy: {
        role: "UX Designer",
        type: "Estudo de caso · Fashion delivery",
        skills: ["Design Thinking", "Pesquisa (quali e quanti)", "Mapa de empatia", "Prototipação", "Testes de usabilidade"],
        problem:
          "Pequenos negócios de roupas foram duramente afetados pela pandemia: no primeiro quadrimestre de 2021, 43.736 empresas do varejo de vestuário fecharam e 84% das que continuaram abertas registraram queda no faturamento. Ao mesmo tempo, o consumidor migrava para o digital, mas esbarrava em uma barreira recorrente: o medo da roupa não servir. Entre os entrevistados que compravam roupas online, 60% já haviam desistido de uma compra por esse motivo, e 38% precisaram trocar ou devolver um produto.",
        solution:
          "A partir de entrevistas com consumidores e pequenos lojistas, identificamos uma tendência já usada por marcas de grife: o fashion delivery, ou \"malinha\", em que o cliente experimenta as peças em casa antes de decidir a compra. Desenhamos o Malla, um aplicativo mobile que leva esse serviço para pequenos varejistas de roupas, priorizando funcionalidades com o método MoSCoW e validando o fluxo com wireframes, protótipos de alta fidelidade e testes de usabilidade no Maze.",
        impact: [
          {
            value: "92%",
            label: "Compram roupas pelo celular",
            description: "Entre os entrevistados que compram roupas online, a maioria usa o smartphone — decisivo para a escolha por um app mobile.",
          },
          {
            value: "60%",
            label: "Já desistiram de comprar por medo",
            description: "Consumidores que já deixaram de finalizar uma compra online com medo da roupa não servir.",
          },
          {
            value: "38%",
            label: "Precisaram trocar ou devolver",
            description: "Parcela dos compradores online que precisou solicitar troca ou devolução de uma peça.",
          },
        ],
        body: `## Empatização

O projeto nasceu durante a pandemia, quando pequenos negócios de roupas foram obrigados a fechar as portas ou migrar para o digital sem preparo. Conduzimos uma pesquisa quantitativa com 173 pessoas e uma pesquisa qualitativa para entender o comportamento de quem compra roupas online.

Os dados confirmaram um padrão: o medo de a peça não servir era o principal freio da compra online, e o processo de troca ou devolução era visto como desgastante tanto por quem compra quanto, presumivelmente, por quem vende.

> Marcas que ainda não encontraram novas formas de chegar ao consumidor precisam correr ou ficarão para trás.

## Definição

Organizamos os relatos das entrevistas em um mapa de empatia e consolidamos os padrões em uma persona: a Ana, uma consumidora que passou a comprar roupas online durante a pandemia, mas que tem medo de a peça não servir e desconfia das lojas. Ao mapear a jornada da Ana, ficou claro que o momento mais crítico era entre o recebimento do produto e o pós-compra, exatamente onde a expectativa se rompe.

A partir disso, definimos o objetivo do projeto: aumentar o faturamento dos pequenos negócios de roupas com tecnologia e novas tendências de consumo, garantindo assertividade no momento da escolha para que o consumidor finalize a compra com confiança.

## Ideação

Em vez de partir para um brainstorming aberto, buscamos o que já vinha funcionando no mercado. Encontramos o fashion delivery, ou "malinha", um serviço em que o cliente experimenta peças em casa antes de decidir a compra, já usado por marcas de grife havia alguns anos. O problema: esse tipo de serviço era, até então, quase exclusivo para um público de renda mais alta.

A oportunidade ficou clara: e se a gente democratizasse o acesso ao fashion delivery, formalizando esse serviço em um aplicativo acessível para pequenos varejistas e consumidores de todas as classes? Mapeamos o fluxo atual de solicitação de malinha praticado informalmente por lojistas, priorizamos funcionalidades com o método MoSCoW e desenhamos o fluxo do usuário do app.

## Prototipação

Como 92% das pessoas que compram roupa online no nosso estudo usam o celular para isso, a decisão por um aplicativo mobile foi natural. Partimos de wireframes baseados em benchmarking de apps de moda, e até de aluguel de carro, e evoluímos para uma interface de alta fidelidade, testada com usuários reais na ferramenta Maze.

![Tela do produto Malla](/assets/delivery-roupas-screenshot.png)

Os testes de usabilidade validaram o fluxo principal de solicitação da malinha e trouxeram ajustes finos antes da entrega do protótipo navegável em alta fidelidade.

## Próximos passos

Como próximos passos, mapeamos a necessidade de pesquisar diretamente com os pequenos varejistas, e não só com os consumidores, criar uma versão em que o cliente monte sua própria malinha sem depender de um teste de estilo, e definir como funcionaria a logística de entrega e devolução das peças.`,
      },
    },
    nfg: {
      name: "NFG — Nota Fiscal Gaúcha",
      title: "Redesign Nota Fiscal Gaúcha",
      summary:
        "Redesign focado em acessibilidade, clareza e usabilidade, identificando falhas críticas de contraste e hierarquia visual.",
      description:
        "Redesign focado em acessibilidade, clareza e usabilidade. Identificação de falhas críticas de contraste, legibilidade e hierarquia visual. Melhoria na arquitetura de informação, padrões visuais e áreas de toque pensando em eficiência e inclusão.",
      tags: ["Acessibilidade", "Redesign", "Governo"],
      caseStudy: {
        heroSubtitle: "Uma experiência mais acessível, legível e consistente",
        problem:
          "O NFG — Nota Fiscal Gaúcha apresentava falhas críticas de contraste, hierarquia visual e padronização em suas principais telas. Botões com áreas de toque pequenas, textos com baixo contraste e componentes sem prioridade visual clara dificultavam tarefas simples, como fazer login, resgatar um prêmio ou acompanhar o cálculo de uma recompensa.",
        solution:
          "O redesign concentrou esforços em três frentes: corrigir os problemas de contraste e legibilidade identificados na auditoria, reorganizar a hierarquia de informação das telas com base na importância real de cada elemento, e padronizar componentes, tipografia e cores em um sistema visual único para todo o aplicativo.",
        impact: [
          {
            value: "Mais legibilidade",
            description: "Correção das falhas de contraste e hierarquia visual identificadas na interface anterior, tornando as informações mais fáceis de ler.",
          },
          {
            value: "Menos esforço",
            description: "Áreas de toque maiores e fluxos mais diretos, reduzindo o esforço necessário para completar as tarefas mais comuns do aplicativo.",
          },
          {
            value: "Mais consistência",
            description: "Padronização de componentes, ícones e tipografia em todas as telas, tornando a experiência mais previsível.",
          },
        ],
        body: `## Diagnóstico da experiência

O NFG — Nota Fiscal Gaúcha é o aplicativo do programa de cidadania fiscal do Rio Grande do Sul, que permite consultar notas fiscais, participar de sorteios e resgatar prêmios. O redesign partiu de uma auditoria das principais telas do aplicativo em uso: login, página inicial, Meus Prêmios e Receita Certa, avaliando contraste, hierarquia visual, consistência de padrões e áreas de toque.

## Principais problemas encontrados

Na tela de login, os botões de "Entrar" e "Cadastre-se" tinham uma área de clique menor que 40px, e a opção de recuperar senha ficava praticamente escondida por causa do baixo contraste com o fundo.

![Login antes do redesign](/assets/nfg-login-antes.png)

Na página inicial, os botões da barra de navegação não estavam alinhados, o ícone de perfil seguia um padrão diferente dos demais cards, as margens não eram padronizadas, os ícones usavam uma fonte serifada que prejudicava a leitura, e não havia nenhuma notificação evidente para o usuário.

![Página inicial antes do redesign](/assets/nfg-home.png)

Em Meus Prêmios, o botão de resgate também tinha uma área de clique ruim, todos os componentes da tela tinham o mesmo peso visual mesmo com importâncias diferentes, e a quantidade de notas já pagas não ficava evidente.

![Meus Prêmios antes do redesign](/assets/nfg-meus-premios.png)

Em Receita Certa, o contraste do texto dificultava a leitura, o sorteio ainda a calcular tinha a mesma prioridade visual dos já distribuídos, a data de previsão do cálculo não tinha destaque proporcional à sua importância, e os itens da lista não tinham espaçamento entre si.

![Receita Certa antes do redesign](/assets/nfg-receita-certa.png)

## Redesenho da jornada

Com os problemas mapeados, o foco passou a ser reorganizar cada tela pela importância real da informação para o usuário, em vez de manter a ordem herdada da versão anterior. Isso incluiu reagrupar os cards da página inicial, destacar o que exige ação, como resgatar um prêmio ou acompanhar um cálculo pendente, e simplificar o que é só consulta.

## Hierarquia da informação

Cards foram alinhados ao centro e padronizados em tamanho, margens e espaçamento, para que a leitura da tela não dependesse de adivinhar qual elemento é mais importante. Nas telas de listagem, como Receita Certa, os itens passaram a ter espaçamento e agrupamento visual consistentes entre si.

## Acessibilidade e legibilidade

A tipografia foi trocada para a Inter em todo o aplicativo, substituindo a fonte serifada usada nos ícones da página inicial, priorizando legibilidade em diferentes tamanhos de tela. Também foram ajustados os contrastes de texto que dificultavam a leitura, como o da opção de recuperar senha e das informações da Receita Certa.

![Sistema tipográfico](/assets/nfg-tipografia.png)

## Sistema visual

A paleta de cores existente foi mantida e organizada como referência formal para o time: um azul principal (#005E9B), um laranja de destaque (#E88625), além de neutros (#141414 e #FAFAFA) e um azul secundário (#00A9D5) para estados e realces.

![Paleta de cores](/assets/nfg-paleta-cores.png)

## Componentes e estados

Os botões de ação, como "Entrar" e "Cadastrar", ganharam uma área de toque de 48px, e o botão de recuperar senha passou a ter mais contraste e destaque junto das demais opções da tela. Notificações também passaram a ser sinalizadas de forma visível na navegação.

![Login depois do redesign](/assets/nfg-login-depois.png)

## Resultados e aprendizados

O redesign resultou em telas mais legíveis, com áreas de toque adequadas e um sistema visual consistente entre páginas que antes seguiam padrões diferentes. Ficou claro que boa parte dos problemas de usabilidade do aplicativo não vinha de funcionalidades ausentes, mas da falta de padronização entre telas construídas em momentos diferentes, reforçando a importância de um sistema visual documentado desde o início de um produto.`,
      },
    },
    msiidf: {
      name: "MSIIDF",
      title: "Case MSIIDF",
      summary: "Identidade visual autoral aplicada a uma experiência conceitual de moda e e-commerce.",
      description: "Identidade visual autoral aplicada a uma experiência conceitual de moda e e-commerce.",
      tags: ["Branding", "UI/UX", "Web Design"],
      imageAlt:
        "Interface conceitual do projeto MSIIDF com identidade visual monocromática, fotografia editorial e apresentação de produtos de moda.",
      externalUrlLabel: "VER NO BEHANCE",
      caseStudy: {
        heroSubtitle: "Identidade visual e experiência digital",
        role: "Brand & UI Designer",
        type: "Projeto autoral • Branding e e-commerce conceitual",
        skills: ["Branding", "Direção de arte", "UI Design", "Web Design", "Prototipação"],
        problem:
          "MSIIDF nasceu da necessidade de reunir identidade pessoal, moda e produto em uma única experiência. O desafio era transformar o nome MSILVA em uma marca reconhecível e fazer com que essa identidade funcionasse além do logotipo, aparecendo também na fotografia, na direção de arte, na navegação e na apresentação dos produtos.\n\nA marca precisava comunicar movimento, transformação e personalidade sem perder legibilidade ou consistência. Ao mesmo tempo, a interface deveria equilibrar a linguagem editorial da moda com elementos conhecidos de uma experiência de e-commerce.",
        solution:
          "A solução foi criar uma identidade visual autoral e aplicá-la em um e-commerce conceitual de moda. O sistema foi construído a partir da estilização das letras do nome MSILVA, combinando símbolos relacionados a tempo, direção, crescimento, continuidade e transformação.\n\nEssa identidade foi aplicada em uma interface predominantemente preta e branca, composta por fotografias editoriais, tipografia geométrica, mensagens de marca e cards de produtos. O resultado conecta expressão pessoal, apresentação de produto e experiência digital dentro de uma mesma linguagem visual.",
        impact: [
          {
            value: "01",
            label: "Marca com significado",
            description:
              "O símbolo transforma as letras do nome MSILVA em uma composição única, associando cada forma a ideias de tempo, movimento, crescimento e continuidade.",
          },
          {
            value: "02",
            label: "Sistema visual consistente",
            description:
              "A combinação entre paleta monocromática, tipografia geométrica e fotografia de alto contraste criou uma linguagem reconhecível em diferentes aplicações.",
          },
          {
            value: "03",
            label: "Experiência integrada",
            description:
              "A interface reuniu identidade de marca, conteúdo editorial e apresentação de produtos em uma experiência digital coesa e navegável.",
          },
        ],
        body: `## Imersão

O projeto começou como uma exploração de identidade pessoal, moda e experiência digital. Em vez de tratar o trabalho apenas como a criação de um logotipo, a intenção era desenvolver um universo completo, capaz de existir em fotografias, produtos e interfaces.

As referências visuais transitavam entre moda editorial, tecnologia, luxo e estética underground. Essa combinação ajudou a definir uma direção de arte marcada por contrastes, áreas escuras, formas geométricas e imagens recortadas.

> A identidade não representa um estado fixo. Ela acompanha as mudanças de tempo, direção, sentimento e movimento.

## Definição

O conceito central da marca foi construído a partir da transformação. Sentimentos, emoções e ações não permanecem estáticos, e a identidade deveria representar essa mudança constante.

A linguagem visual passou a trabalhar com contrastes como luxo e underground, luz e sombra, passado e futuro, estabilidade e volatilidade. Esses conceitos orientaram a construção do símbolo, a escolha das cores, a tipografia e o comportamento da interface.

## Construção do símbolo

O logotipo foi criado por meio da estilização das letras do nome MSILVA. Cada parte recebeu uma interpretação visual relacionada ao conceito da marca.

A letra M foi inspirada em uma ampulheta inclinada. A ampulheta representa o tempo, enquanto sua inclinação sugere que a trajetória não precisa seguir uma ordem convencional.

A letra S utiliza formas semelhantes a setas apontando para cima e para baixo. Essas direções representam a volatilidade dos sentimentos e as mudanças presentes em uma trajetória pessoal.

As letras I e L formam partes de uma seta direcionada para cima, representando crescimento, evolução e a intenção de continuar avançando.

A letra V, combinada com seus elementos internos, cria uma forma semelhante a um botão de reprodução. O símbolo reforça a ideia de continuidade e movimento.

A letra A aparece parcialmente construída. Essa incompletude representa aquilo que ainda está por vir e mostra que a identidade permanece aberta a novas transformações.

![Estudo de construção do logotipo MSIIDF mostrando a estilização das letras do nome MSILVA.](/assets/msiidf-logo-construction.png)

## Sistema visual

A identidade utiliza principalmente preto e branco. O tom #090909 funciona como base da experiência, criando contraste com fotografias, textos, controles e elementos interativos.

A ausência de uma paleta extensa permite que as imagens e os produtos recebam maior destaque. O branco é aplicado nos conteúdos principais, enquanto variações de cinza ajudam a organizar informações secundárias.

A tipografia Aldrich Regular foi escolhida para títulos e elementos de destaque. Sua construção geométrica e tecnológica complementa o desenho do logotipo.

A tipografia Abel foi utilizada em textos de apoio e conteúdos descritivos. Sua estrutura mais leve cria contraste com os títulos e mantém a leitura simples dentro da interface escura.

![Sistema visual do projeto MSIIDF com paleta preta e branca e aplicação das tipografias Aldrich e Abel.](/assets/msiidf-visual-system.png)

![Sistema visual do projeto MSIIDF com paleta preta e branca e aplicação das tipografias Aldrich e Abel.](/assets/msiidf-typography.png)

## Interface

A interface foi desenvolvida com uma estética minimalista, editorial e monocromática. Grandes áreas vazias, fotografias recortadas e informações distribuídas pelas extremidades da tela mantêm a atenção no modelo, na mensagem e no produto.

A experiência apresenta uma navegação principal com as opções Shop, Products e Contact Us. Durante o percurso, o usuário encontra fotografias editoriais, mensagens relacionadas a performance e persistência, categorias de moda e produtos disponíveis para compra.

Os cards de produto apresentam imagem, variações, nome, preço, botão de compra e ação para adicionar aos favoritos. Essa estrutura aproxima a experiência de um e-commerce sem abandonar a linguagem visual de uma publicação editorial.

![Telas da interface MSIIDF com fotografias editoriais, navegação e cards de produtos de moda.](/assets/msiidf-interface.png)

## Prototipação

O protótipo foi desenvolvido no Figma para demonstrar como a identidade poderia funcionar em uma experiência digital. A navegação vertical, os indicadores e as transições entre conteúdo, modelo e produtos reforçam o conceito de movimento presente na marca.

A solução foi estruturada como uma exploração conceitual. O objetivo não era apresentar um produto comercial validado, mas demonstrar como branding, direção de arte e design de interface poderiam ser trabalhados como partes de um mesmo sistema.

![Protótipo do projeto MSIIDF aplicado em um dispositivo, destacando a experiência digital de moda.](/assets/msiidf-interface.png)

## Próximos passos

Como evolução do projeto, os próximos passos seriam validar a navegação com usuários, adaptar todas as telas para diferentes tamanhos de dispositivo e aprofundar os fluxos de catálogo, detalhes do produto, carrinho e finalização da compra.

Também seria importante revisar a acessibilidade da interface, documentar o sistema visual e transformar o protótipo conceitual em uma especificação preparada para desenvolvimento.`,
      },
    },
    fighterx: {
      name: "FighterX",
      title: "Experiência Imersiva",
      summary: "CTAs claros e navegação intuitiva, focada em experiência e personalização com segmentação de personagens.",
      description:
        "CTAs claros e navegação intuitiva, focada em experiência e personalização do usuário com segmentação de personagens. Visual imersivo e responsivo integra comunidade e e-sports, elevando a experiência além do gameplay.",
      tags: ["Games", "E-sports", "UI Visual"],
    },
    "universal-streaming": {
      name: "Universal — Streaming Musical",
      title: "Usabilidade e Conversão",
      summary: "Design mobile-first com recomendações inteligentes e planos flexíveis para todos os perfis.",
      description:
        "Design mobile-first com recomendações inteligentes e planos flexíveis para todos os perfis. Plataforma de streaming musical com experiência personalizada, navegação intuitiva e onboarding fluido, com destaque para engajamento e usabilidade sem atritos.",
      tags: ["Streaming", "Mobile-first", "Conversão"],
    },
  },
  en: {
    flow: {
      name: "Flow",
      title: "ERP System",
      summary: "ERP system for HR, payroll, timekeeping, leave, and workplace health & safety.",
      description:
        "ERP system for HR, payroll, timekeeping, leave, and workplace health & safety, with flow and system UI improvements.",
      tags: ["ERP", "HR", "Complex systems"],
    },
    jobfy: {
      name: "Jobfy",
      title: "Recruitment & Hiring",
      summary: "AI-guided resume building experience, offering templates and personalization focused on employability.",
      description:
        "AI-guided resume building experience, offering templates and personalization focused on employability. An intuitive interface and real-time feedback make it easy for users to adapt at every step.",
      tags: ["Product Design", "AI", "Recruitment"],
      caseStudy: {
        note:
          "This case features one of the projects I worked on for Jobfy during my time as a UX/UI Designer.",
        role: "UX/UI Designer",
        type: "B2C Product · Recruitment",
        skills: [
          "Discovery",
          "Data analysis",
          "Information architecture",
          "Prototyping",
          "Design system",
        ],
        problem:
          "The profile-creation journey and hiring process stages at Jobfy demanded too much time and attention from candidates, increasing drop-off before completion.",
        solution:
          "I analyzed usage sessions in Microsoft Clarity to map real, not assumed, friction points. From there, I redesigned the profile-creation journey, reducing steps and reorganizing information by priority, and restructured the information architecture for job creation and candidate management. I also documented components and their loading, success, error and restricted-access states, creating a more consistent foundation for the development team.",
        impact: [
          {
            value: "37%",
            label: "Reduction in profile-creation time",
            description: "Fewer steps and prioritized information made sign-up faster to complete.",
          },
          {
            value: "+1M",
            label: "Users impacted",
            description: "Recruitment and selection solutions used by more than 1 million people.",
          },
          {
            value: "90%",
            label: "User satisfaction",
            description: "Measured using user-centered methods and behavior studies.",
          },
        ],
        body: `## Discovery

Before designing any screen, the goal was to understand exactly where candidates were getting stuck. I analyzed recorded sessions in Microsoft Clarity, mapping clicks, time spent stalled on each field, and drop-off points in the flow.

The data showed a clear pattern: most of the drop-off happened in the very first steps of sign-up, before candidates even saw any value from the platform.

> The first few minutes decided whether a candidate stayed or left — and that was exactly where the flow demanded the most effort.

![Jobfy product screen](/assets/jobfy-screenshot.png)

## Redesigning the journey

With the friction points mapped, I prioritized what actually needed to be filled in right away and deferred secondary fields until after the candidate had already seen value in the platform. I reorganized the information architecture for job creation and candidate management for recruiters, with clearer visual hierarchies between what required immediate action and what was just for tracking.

Every flow decision was validated with clickable prototypes before moving to high fidelity, reducing rework and aligning expectations with the product team.

Not every field could be removed, nor could the sign-up be split into fewer steps, since much of the requested data was mandatory for the system.

## Design system and handoff

To reduce divergence between Figma and what actually shipped, I documented components and all of their states: loading, success, error, empty and restricted-access, along with behavior specs and interaction rules. This gave the development team a single source of truth, instead of relying on implicit decisions during implementation.

## Results and takeaways

With a leaner profile-creation flow, the time needed to complete sign-up dropped by 37%. More than the number itself, the process confirmed something important: much of the drop-off wasn't about the interface itself, but about the order and prioritization of the information being asked for, a lesson that went on to guide other flows across the platform.`,
      },
    },
    "delivery-de-roupas": {
      name: "Clothing Delivery App",
      title: "Malla Case Study",
      summary: "A case study for a clothing delivery app, covering ideation, discovery, validation and prototyping.",
      description:
        "A case study for a clothing delivery app, covering the full process: ideation, discovery, validation and prototyping. Decisions grounded in research, user insights and testing, delivering a validated, scalable and user-centered solution.",
      tags: ["Discovery", "Prototyping", "Research"],
      caseStudy: {
        role: "UX Designer",
        type: "Case study · Fashion delivery",
        skills: ["Design Thinking", "Research (qual & quant)", "Empathy mapping", "Prototyping", "Usability testing"],
        problem:
          "Small clothing businesses were hit hard by the pandemic: in the first quarter of 2021 alone, 43,736 apparel retailers closed and 84% of the ones that stayed open saw revenue drop. At the same time, consumers were shifting online, but ran into a recurring barrier: the fear that clothes wouldn't fit. Among the people we surveyed who bought clothes online, 60% had already given up on a purchase for that reason, and 38% needed to exchange or return a product.",
        solution:
          "Interviews with consumers and small retailers pointed us to a trend already used by upscale brands: fashion delivery, or \"malinha,\" where customers try pieces at home before deciding to buy. We designed Malla, a mobile app that brings that service to small clothing retailers, prioritizing features with the MoSCoW method and validating the flow through wireframes, high-fidelity prototypes and usability testing in Maze.",
        impact: [
          {
            value: "92%",
            label: "Shop for clothes on their phone",
            description: "Among online clothes shoppers we surveyed, the phone was the dominant device — the deciding factor for going mobile-first.",
          },
          {
            value: "60%",
            label: "Have given up buying out of fear",
            description: "Consumers who had already abandoned an online purchase over fear the item wouldn't fit.",
          },
          {
            value: "38%",
            label: "Needed an exchange or return",
            description: "Share of online shoppers who needed to request an exchange or return.",
          },
        ],
        body: `## Empathize

The project started during the pandemic, when small clothing businesses were forced to close or move online without much preparation. We ran a quantitative survey with 173 people and a qualitative study to understand how people shop for clothes online.

The data confirmed a clear pattern: fear that an item wouldn't fit was the main thing holding back online purchases, and exchanges or returns were seen as a hassle for buyers, and presumably for sellers too.

> Brands that haven't found new ways to reach consumers need to catch up, or they'll be left behind.

## Define

We organized the interview findings into an empathy map and consolidated the patterns into a persona: Ana, a shopper who started buying clothes online during the pandemic but is afraid items won't fit and doesn't fully trust online stores. Mapping Ana's journey made it clear the most critical moment was between receiving the product and the post-purchase experience, exactly where the broken expectation shows up.

From there, we defined the project's goal: increase revenue for small clothing businesses through technology and new consumption trends, ensuring shoppers feel confident enough at the point of choice to complete the purchase.

## Ideate

Instead of an open brainstorm, we looked at what was already working in the market. We found fashion delivery, or "malinha," a service where customers try pieces at home before deciding to buy, already used by upscale brands for years. The problem: that kind of service was, until then, nearly exclusive to higher-income customers.

The opportunity was clear: what if we democratized access to fashion delivery by formalizing it into an app accessible to small retailers and shoppers of every income level? We mapped the informal "malinha" request flow already used by retailers, prioritized features with the MoSCoW method, and designed the app's user flow.

## Prototype

Since 92% of the online clothes shoppers in our study used their phone to do it, going mobile-first was a natural call. We started from wireframes based on benchmarking fashion apps, and even a car rental app, and evolved into a high-fidelity interface, tested with real users in Maze.

![Malla product screen](/assets/delivery-roupas-screenshot.png)

Usability testing validated the main "malinha" request flow and surfaced small adjustments before delivering the clickable high-fidelity prototype.

## Next steps

As next steps, we mapped the need to research directly with small retailers, not just consumers, build a version where customers assemble their own "malinha" without depending on a style quiz, and define how delivery and returns logistics would work.`,
      },
    },
    nfg: {
      name: "NFG — Nota Fiscal Gaúcha",
      title: "Nota Fiscal Gaúcha Redesign",
      summary:
        "Redesign focused on accessibility, clarity and usability, identifying critical contrast and visual hierarchy issues.",
      description:
        "Redesign focused on accessibility, clarity and usability. Identified critical issues in contrast, legibility and visual hierarchy. Improved information architecture, visual patterns and touch targets with a focus on efficiency and inclusion.",
      tags: ["Accessibility", "Redesign", "Government"],
      caseStudy: {
        heroSubtitle: "A more accessible, readable and consistent experience",
        problem:
          "NFG — Nota Fiscal Gaúcha had critical issues with contrast, visual hierarchy and standardization across its core screens. Buttons with small touch areas, low-contrast text and components with no clear visual priority made simple tasks, like logging in, redeeming a prize or tracking a reward calculation, harder than they needed to be.",
        solution:
          "The redesign focused on three fronts: fixing the contrast and legibility issues found in the audit, reorganizing each screen's information hierarchy around the real importance of each element, and standardizing components, typography and color into a single visual system for the whole app.",
        impact: [
          {
            value: "More readability",
            description: "Fixed the contrast and visual hierarchy issues found in the previous interface, making information easier to read.",
          },
          {
            value: "Less effort",
            description: "Larger touch areas and more direct flows, reducing the effort needed to complete the app's most common tasks.",
          },
          {
            value: "More consistency",
            description: "Standardized components, icons and typography across every screen, making the experience more predictable.",
          },
        ],
        body: `## Experience diagnosis

NFG — Nota Fiscal Gaúcha is the app for Rio Grande do Sul's tax-citizenship program, where residents can look up receipts, enter prize draws and redeem rewards. The redesign started with an audit of the app's core screens as they existed: login, home, My Prizes and Receita Certa, evaluating contrast, visual hierarchy, pattern consistency and touch target sizes.

## Key issues found

On the login screen, the "Sign in" and "Sign up" buttons had a click area smaller than 40px, and the password-recovery option was nearly hidden due to low contrast against the background.

![Login before the redesign](/assets/nfg-login-antes.png)

On the home screen, the navigation bar buttons weren't aligned, the profile icon followed a different pattern from the other cards, margins weren't standardized, card icons used a serif font that hurt readability, and there were no visible notifications for the user.

![Home screen before the redesign](/assets/nfg-home.png)

In My Prizes, the redeem button also had a poor click area, every component on the screen carried the same visual weight regardless of actual importance, and the number of already-paid invoices wasn't clear.

![My Prizes before the redesign](/assets/nfg-meus-premios.png)

In Receita Certa, text contrast made reading difficult, the draw still being calculated had the same visual priority as already-distributed ones, the calculation date lacked emphasis relative to its importance, and list items had no spacing between them.

![Receita Certa before the redesign](/assets/nfg-receita-certa.png)

## Redesigning the journey

With the issues mapped, the focus shifted to reorganizing each screen around the real importance of information to the user, instead of keeping the order inherited from the previous version. That included regrouping the home screen's cards, emphasizing what requires action, like redeeming a prize or tracking a pending calculation, and simplifying what's purely informational.

## Information hierarchy

Cards were center-aligned and standardized in size, margins and spacing, so reading a screen no longer depended on guessing which element mattered most. On list screens like Receita Certa, items gained consistent spacing and visual grouping.

## Accessibility and readability

Typography was switched to Inter across the app, replacing the serif font used in the home screen's icons, prioritizing legibility across different screen sizes. Text contrast issues were also fixed, including the password-recovery option and the Receita Certa details.

![Typography system](/assets/nfg-tipografia.png)

## Visual system

The existing color palette was kept and formalized as a reference for the team: a primary blue (#005E9B), an accent orange (#E88625), neutrals (#141414 and #FAFAFA), and a secondary blue (#00A9D5) for states and highlights.

![Color palette](/assets/nfg-paleta-cores.png)

## Components and states

Action buttons, like "Sign in" and "Sign up," gained a 48px touch area, and the password-recovery button gained more contrast and prominence alongside the screen's other options. Notifications also became visibly signaled in the navigation.

![Login after the redesign](/assets/nfg-login-depois.png)

## Results and takeaways

The redesign resulted in more readable screens, adequate touch areas, and a visual system that's now consistent across pages that used to follow different standards. It became clear that most of the app's usability problems didn't come from missing features, but from a lack of standardization across screens built at different times, reinforcing how important a documented visual system is from a product's very beginning.`,
      },
    },
    msiidf: {
      name: "MSIIDF",
      title: "Case MSIIDF",
      summary: "An authorial visual identity applied to a conceptual fashion and e-commerce experience.",
      description: "An authorial visual identity applied to a conceptual fashion and e-commerce experience.",
      tags: ["Branding", "UI/UX", "Web Design"],
      imageAlt:
        "Conceptual interface for the MSIIDF project with a monochromatic visual identity, editorial photography and fashion product presentation.",
      externalUrlLabel: "VIEW ON BEHANCE",
      caseStudy: {
        heroSubtitle: "Visual identity and digital experience",
        role: "Brand & UI Designer",
        type: "Personal project • Branding and conceptual e-commerce",
        skills: ["Branding", "Art direction", "UI Design", "Web Design", "Prototyping"],
        problem:
          "MSIIDF was born from the need to bring together personal identity, fashion and product into a single experience. The challenge was turning the name MSILVA into a recognizable brand and making that identity work beyond the logo, showing up in photography, art direction, navigation and product presentation as well.\n\nThe brand needed to communicate movement, transformation and personality without losing legibility or consistency. At the same time, the interface had to balance fashion's editorial language with the familiar elements of an e-commerce experience.",
        solution:
          "The solution was to create an authorial visual identity and apply it to a conceptual fashion e-commerce. The system was built by stylizing the letters of the name MSILVA, combining symbols related to time, direction, growth, continuity and transformation.\n\nThat identity was applied to a predominantly black-and-white interface, made up of editorial photography, geometric typography, brand messaging and product cards. The result connects personal expression, product presentation and digital experience within a single visual language.",
        impact: [
          {
            value: "01",
            label: "A brand with meaning",
            description:
              "The symbol turns the letters of the name MSILVA into a single composition, linking each shape to ideas of time, movement, growth and continuity.",
          },
          {
            value: "02",
            label: "A consistent visual system",
            description:
              "The combination of a monochromatic palette, geometric typography and high-contrast photography created a recognizable language across different applications.",
          },
          {
            value: "03",
            label: "An integrated experience",
            description:
              "The interface brought together brand identity, editorial content and product presentation into a cohesive, navigable digital experience.",
          },
        ],
        body: `## Immersion

The project began as an exploration of personal identity, fashion and digital experience. Rather than treating the work as just creating a logo, the intention was to develop a complete universe, one able to exist across photography, products and interfaces.

Visual references moved between editorial fashion, technology, luxury and underground aesthetics. That combination helped define an art direction marked by contrast, dark areas, geometric shapes and cropped imagery.

> Identity doesn't represent a fixed state. It follows the changes of time, direction, feeling and movement.

## Definition

The brand's core concept was built around transformation. Feelings, emotions and actions don't stay static, and the identity needed to represent that constant change.

The visual language went on to work with contrasts like luxury and underground, light and shadow, past and future, stability and volatility. These concepts guided the construction of the symbol, the choice of colors, the typography and the interface's behavior.

## Building the symbol

The logo was created by stylizing the letters of the name MSILVA. Each part received a visual interpretation tied to the brand's concept.

The letter M was inspired by a tilted hourglass. The hourglass represents time, while its tilt suggests that a path doesn't need to follow a conventional order.

The letter S uses shapes similar to arrows pointing up and down. These directions represent the volatility of feelings and the changes present in a personal journey.

The letters I and L form parts of an arrow pointing upward, representing growth, evolution and the intent to keep moving forward.

The letter V, combined with its internal elements, creates a shape similar to a play button. The symbol reinforces the idea of continuity and movement.

The letter A appears partially built. That incompleteness represents what's still to come and shows that the identity remains open to new transformations.

![Study of the MSIIDF logo construction showing the stylization of the letters in the name MSILVA.](/assets/msiidf-logo-construction.png)

## Visual system

The identity uses mostly black and white. The tone #090909 works as the base of the experience, creating contrast with photography, text, controls and interactive elements.

The absence of an extensive palette lets images and products stand out more. White is applied to primary content, while shades of gray help organize secondary information.

Aldrich Regular was chosen for headings and highlighted elements. Its geometric, technological construction complements the logo's design.

Abel was used for supporting text and descriptive content. Its lighter structure creates contrast with the headings and keeps reading simple within the dark interface.

![MSIIDF's visual system with a black-and-white palette and the application of Aldrich and Abel typography.](/assets/msiidf-visual-system.png)

![MSIIDF's visual system with a black-and-white palette and the application of Aldrich and Abel typography.](/assets/msiidf-typography.png)

## Interface

The interface was developed with a minimalist, editorial, monochromatic aesthetic. Large empty areas, cropped photography and information distributed along the edges of the screen keep attention on the model, the message and the product.

The experience presents a main navigation with the options Shop, Products and Contact Us. Along the way, the user encounters editorial photography, messages related to performance and persistence, fashion categories and products available for purchase.

Product cards display an image, variations, name, price, a buy button and an action to add to favorites. This structure brings the experience closer to an e-commerce without abandoning the visual language of an editorial publication.

![MSIIDF interface screens with editorial photography, navigation and fashion product cards.](/assets/msiidf-interface.png)

## Prototyping

The prototype was built in Figma to demonstrate how the identity could function in a digital experience. Vertical navigation, indicators and transitions between content, model and products reinforce the concept of movement present in the brand.

The solution was structured as a conceptual exploration. The goal wasn't to present a validated commercial product, but to demonstrate how branding, art direction and interface design could be worked as parts of a single system.

![MSIIDF prototype applied to a device, highlighting the digital fashion experience.](/assets/msiidf-interface.png)

## Next steps

As an evolution of the project, the next steps would be to validate the navigation with users, adapt every screen for different device sizes, and go deeper on the catalog, product detail, cart and checkout flows.

It would also be important to review the interface's accessibility, document the visual system, and turn the conceptual prototype into a specification ready for development.`,
      },
    },
    fighterx: {
      name: "FighterX",
      title: "Immersive Experience",
      summary: "Clear CTAs and intuitive navigation, focused on experience and personalization with character segmentation.",
      description:
        "Clear CTAs and intuitive navigation, focused on user experience and personalization through character segmentation. An immersive, responsive visual language brings community and e-sports together, elevating the experience beyond gameplay.",
      tags: ["Games", "E-sports", "Visual UI"],
    },
    "universal-streaming": {
      name: "Universal — Music Streaming",
      title: "Usability & Conversion",
      summary: "Mobile-first design with smart recommendations and flexible plans for every profile.",
      description:
        "Mobile-first design with smart recommendations and flexible plans for every profile. A music streaming platform with a personalized experience, intuitive navigation and smooth onboarding, focused on engagement and frictionless usability.",
      tags: ["Streaming", "Mobile-first", "Conversion"],
    },
  },
};

export function getProjects(lang: Lang): Project[] {
  return projectsMeta.map((meta) => ({ ...meta, ...projectsText[lang][meta.slug] }));
}

export function getProject(lang: Lang, slug: string): Project | undefined {
  return getProjects(lang).find((p) => p.slug === slug);
}

export function getNextProject(lang: Lang, slug: string): Project | undefined {
  const projects = getProjects(lang);
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mateus-silva-a657a3207/",
  behance: "https://www.behance.net/mateussilva115",
};

export type SiteText = {
  common: { viewMore: string };
  brand: { name: string; person: string; tagline: string; role: string; bio: string };
  home: {
    heroSkills: string[];
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    statsHeading: Heading;
    projectsHeading: Heading;
    projectsCta: string;
    aboutEyebrow: string;
    aboutHeading: Heading;
    aboutCta: string;
    workflowHeading: Heading;
    workflowCta: string;
    contactEyebrow: string;
    contactHeading: Heading;
    contactCta: string;
  };
  stats: { emoji: string; title: string; desc: string }[];
  workflow: { n: string; title: string; desc: string }[];
  sobre: {
    eyebrow: string;
    bioParagraphs: string[];
    experienceEyebrow: string;
    experienceHeading: Heading;
    currentBadge: string;
    experiences: {
      role: string;
      org: string;
      period: string;
      current: boolean;
      summary: string;
      bullets: string[];
      products: string[];
    }[];
    educationEyebrow: string;
    educationHeading: Heading;
    education: { title: string; org: string; period: string; desc: string };
    achievementsEyebrow: string;
    achievementsHeading: Heading;
    ctaHeading: string;
    ctaWorkflow: string;
    ctaContact: string;
  };
  fluxo: {
    heading: Heading;
    subtitle: string;
    ctaHeading: string;
    ctaButton: string;
  };
  projetos: { heading: Heading };
  projetoDetalhe: {
    back: string;
    toolsHeading: string;
    requestAccess: string;
    visitSite: string;
    otherProjects: Heading;
    notFoundTitle: string;
    notFoundBack: string;
    metaRole: string;
    metaPeriod: string;
    metaType: string;
    metaSkills: string;
    problemEyebrow: string;
    problemHeading: Heading;
    solutionEyebrow: string;
    solutionHeading: Heading;
    impactEyebrow: string;
    impactHeading: Heading;
    processEyebrow: string;
    processHeading: Heading;
    nextProject: string;
  };
  contato: {
    eyebrow: string;
    heading: Heading;
    viewProfile: string;
  };
  footer: { tagline: string; navTitle: string; links: { label: string; href: string }[] };
};

const pt: SiteText = {
  common: { viewMore: "VER MAIS" },
  brand: {
    name: "MSIIDF",
    person: "Mateus Silva",
    tagline: "Transformando ideias em experiências digitais memoráveis",
    role: "Product Designer e UX/UI Designer com experiência na construção e evolução de produtos digitais B2B e B2C, especialmente em soluções de recrutamento, gestão de pessoas e rotinas de RH.",
    bio: "Transformo processos, regras de negócio e jornadas complexas em experiências mais claras e eficientes. Integro inteligência artificial ao meu fluxo de trabalho para analisar requisitos, sintetizar informações, explorar alternativas de interface e estruturar documentações mais completas. Atuo de forma end-to-end, da compreensão do problema até a validação e o acompanhamento da solução implementada — estruturando jornadas, fluxos e interfaces de alta fidelidade, e trabalhando próximo a Product Owners, analistas de negócio e desenvolvedores em refinamentos, handoff e validação das entregas.",
  },
  home: {
    heroSkills: ["Product Design", "UX Design", "UI Design", "UX Research"],
    heroCtaPrimary: "VER PROJETOS",
    heroCtaSecondary: "CONTATO",
    statsHeading: { title: "Feitos e", highlight: "Realizações" },
    projectsHeading: { title: "Projetos e", highlight: "Trabalhos" },
    projectsCta: "VER TODOS OS PROJETOS",
    aboutEyebrow: "Quem sou",
    aboutHeading: { title: "Product Designer", highlight: "orientado a resultado" },
    aboutCta: "SABER MAIS →",
    workflowHeading: { title: "Fluxo de", highlight: "Trabalho" },
    workflowCta: "VER PROCESSO COMPLETO →",
    contactEyebrow: "Contatos",
    contactHeading: { title: "Redes sociais e", highlight: "Contatos" },
    contactCta: "FALAR COMIGO",
  },
  stats: [
    {
      emoji: "😄",
      title: "Satisfação 90%",
      desc: "Melhoria da experiência e do contentamento do usuário, com base em metodologias centradas no usuário e estudos de comportamento.",
    },
    {
      emoji: "⏱️",
      title: "Redução de 37%",
      desc: "Redução de 37% no tempo de criação de perfil para candidatura a vagas.",
    },
    {
      emoji: "⬆️",
      title: "+1 milhão de usuários",
      desc: "Criação de soluções para recrutamento e seleção com impacto em mais de 1 milhão de usuários.",
    },
    {
      emoji: "⇄",
      title: "Produto end-to-end",
      desc: "Criação e validação do produto de ponta a ponta, incluindo pesquisa, fluxos, protótipos e testes. A solução está em operação e contribui para a rentabilidade da empresa.",
    },
  ],
  workflow: [
    {
      n: "01",
      title: "Descoberta",
      desc: "Entendimento do negócio, entrevistas com stakeholders e usuários, mapeamento de regras e restrições do sistema.",
    },
    {
      n: "02",
      title: "Definição",
      desc: "Síntese de insights, definição de problema e hipóteses, priorização com base em impacto e esforço.",
    },
    {
      n: "03",
      title: "Design",
      desc: "Wireframes, fluxos e protótipos de alta fidelidade alinhados ao design system e à identidade da marca.",
    },
    {
      n: "04",
      title: "Testes",
      desc: "Testes de usabilidade com usuários reais sobre o protótipo, coletando feedback qualitativo e quantitativo para validar hipóteses antes da implementação.",
    },
    {
      n: "05",
      title: "Ajustes",
      desc: "Refinamento do design com base nos feedbacks dos testes, corrigindo pontos de atrito e ajustando fluxos antes do handoff.",
    },
    {
      n: "06",
      title: "Handoff",
      desc: "Documentação de specs, componentes e fluxos para o time de desenvolvimento, com acompanhamento próximo da implementação.",
    },
    {
      n: "07",
      title: "Análise",
      desc: "Acompanhamento de métricas pós-lançamento para medir o impacto da solução e orientar próximas iterações.",
    },
  ],
  sobre: {
    eyebrow: "Quem sou",
    bioParagraphs: [
      "Sou Product Designer e UX/UI Designer com experiência na construção e evolução de produtos digitais B2B e B2C, especialmente em soluções de recrutamento, gestão de pessoas e rotinas de RH. Meu trabalho é transformar processos, regras de negócio e jornadas complexas em experiências mais claras, consistentes e eficientes.",
      "Integro inteligência artificial ao meu fluxo de trabalho para analisar requisitos, sintetizar informações, explorar alternativas de interface, acelerar a criação de fluxos e protótipos e estruturar documentações mais completas para produto e desenvolvimento.",
      "Atuo de forma end-to-end, desde a compreensão e definição do problema até a validação e o acompanhamento da solução implementada. Estruturo jornadas, fluxos, wireframes e interfaces de alta fidelidade, considerando estados, exceções, permissões, acessibilidade e diferentes cenários de uso.",
      "Trabalho próximo a Product Owners, analistas de negócio e desenvolvedores durante refinamentos, análise de viabilidade, handoff e validação das entregas. Também contribuo para a criação, documentação e evolução de padrões e componentes de interface, promovendo maior consistência entre os módulos do produto e reduzindo ambiguidades durante o desenvolvimento.",
    ],
    experienceEyebrow: "Trajetória",
    experienceHeading: { title: "Experiência", highlight: "profissional" },
    currentBadge: "POSIÇÃO ATUAL",
    experiences: [
      {
        role: "UX/UI Designer",
        org: "Metadados",
        period: "jan de 2024 — jul de 2026 · 2 anos e 6 meses",
        current: false,
        summary:
          "Atuação na evolução de produtos digitais B2B e B2C voltados à gestão de pessoas, entregas end-to-end, traduzindo necessidades de profissionais de RH e regras de negócio complexas em jornadas mais claras, eficientes e consistentes.",
        bullets: [
          "Estruturação e evolução de fluxos de usuário, wireframes, protótipos navegáveis e interfaces de alta fidelidade no Figma.",
          "Participação na análise de requisitos e no refinamento de soluções junto a Product Owners, desenvolvedores e áreas de negócio.",
          "Criação e documentação de estados, comportamentos, regras de interação, cenários de erro e especificações para desenvolvimento.",
          "Contribuição para a padronização de componentes e padrões visuais, promovendo maior consistência entre diferentes áreas do produto.",
          "Avaliação de usabilidade, acessibilidade, responsividade e clareza das informações durante a construção das soluções.",
          "Acompanhamento da implementação para reduzir divergências entre o projeto no Figma e a experiência entregue no produto.",
          "Análise de dados de comportamento no Mixpanel para identificar pontos de abandono, validar hipóteses e orientar priorizações.",
          "Simplificação de um fluxo com grande quantidade de regras e exceções de folha de pagamento, férias e ponto, melhorando a previsibilidade da operação para usuários e desenvolvimento.",
        ],
        products: ["Jobfy", "Flow", "Admissão Digital", "Vibe"],
      },
      {
        role: "UX/UI Designer",
        org: "Skeel — Recrutamento Inteligente",
        period: "set de 2022 — jan de 2024 · 1 ano e 5 meses · Caxias do Sul, RS",
        current: false,
        summary:
          "Atuação no desenvolvimento e na evolução de uma plataforma de recrutamento e seleção, considerando as necessidades de recrutadores, profissionais de RH e candidatos.",
        bullets: [
          "Mapeei e redesenhei jornadas de criação de vagas, gestão de candidatos e etapas de processos seletivos.",
          "Conduzi entrevistas com usuários e analisei sessões no Microsoft Clarity para identificar problemas, validar hipóteses e orientar melhorias.",
          "Estruturei fluxos, wireframes, protótipos e interfaces responsivas para produtos web.",
          "Redesenhei a jornada de criação de perfil, contribuindo para uma redução de 37% no tempo necessário para concluir a tarefa.",
          "Organizei arquitetura da informação e hierarquias visuais para tornar processos de recrutamento mais compreensíveis.",
          "Documentei componentes e estados de carregamento, sucesso, erro, ausência de dados e restrições de acesso.",
          "Colaborei com produto e engenharia em refinamentos, handoff, acompanhamento da implementação e validação das entregas.",
        ],
        products: ["Jobfy"],
      },
      {
        role: "Assistente de RH (Treinamento e Desenvolvimento) e Estagiário",
        org: "Marcopolo S.A.",
        period: "abr de 2021 — ago de 2022 · 1 ano e 5 meses · Caxias do Sul, RS",
        current: false,
        summary:
          "Assistente de RH (mai–ago de 2022): apoio a processos internos de Treinamento e Desenvolvimento, organização de treinamentos, comunicação com colaboradores e atividades administrativas da área, com contato direto com rotinas de RH, necessidades operacionais e desafios enfrentados por profissionais e colaboradores. Estagiário (abr de 2021–mai de 2022): atuação inicial na área, com foco em pensamento estratégico e design.",
        bullets: [],
        products: [],
      },
    ],
    educationEyebrow: "Formação",
    educationHeading: { title: "Formação", highlight: "acadêmica" },
    education: {
      title: "Bacharelado em Publicidade e Propaganda",
      org: "FSG — Centro Universitário da Serra Gaúcha",
      period: "2021 — jul de 2026",
      desc: "Estudos relacionados a comportamento do consumidor, comunicação e áreas correlatas.",
    },
    achievementsEyebrow: "Por que escolher?",
    achievementsHeading: { title: "Feitos e", highlight: "Realizações" },
    ctaHeading: "Quer ver como eu trabalho?",
    ctaWorkflow: "VER FLUXO DE TRABALHO",
    ctaContact: "FALAR COMIGO",
  },
  fluxo: {
    heading: { title: "Fluxo de", highlight: "Trabalho" },
    subtitle: "Um processo repetível para transformar problemas de negócio complexos em produtos claros e mensuráveis.",
    ctaHeading: "Quer ver isso na prática?",
    ctaButton: "VER PROJETOS",
  },
  projetos: {
    heading: { title: "Projetos e", highlight: "Trabalhos" },
  },
  projetoDetalhe: {
    back: "← VOLTAR PARA PROJETOS",
    toolsHeading: "Ferramentas utilizadas",
    requestAccess: "SOLICITAR ACESSO",
    visitSite: "IR PARA O SITE",
    otherProjects: { title: "Outros", highlight: "projetos" },
    notFoundTitle: "Projeto não encontrado",
    notFoundBack: "← Voltar para projetos",
    metaRole: "Papel",
    metaPeriod: "Período",
    metaType: "Tipo",
    metaSkills: "Habilidades",
    problemEyebrow: "O desafio",
    problemHeading: { title: "O", highlight: "Problema" },
    solutionEyebrow: "A abordagem",
    solutionHeading: { title: "A", highlight: "Solução" },
    impactEyebrow: "Resultados",
    impactHeading: { title: "O", highlight: "Impacto" },
    processEyebrow: "Como aconteceu",
    processHeading: { title: "O", highlight: "Processo" },
    nextProject: "Próximo projeto",
  },
  contato: {
    eyebrow: "Contatos",
    heading: { title: "Redes sociais e", highlight: "Contatos" },
    viewProfile: "Ver perfil",
  },
  footer: {
    tagline: "Transformando ideias em experiências digitais memoráveis",
    navTitle: "Navegação",
    links: [
      { label: "Quem sou", href: "/sobre" },
      { label: "Projetos", href: "/projetos" },
      { label: "Fluxo de trabalho", href: "/fluxo-de-trabalho" },
      { label: "Contatos", href: "/contato" },
    ],
  },
};

const en: SiteText = {
  common: { viewMore: "VIEW MORE" },
  brand: {
    name: "MSIIDF",
    person: "Mateus Silva",
    tagline: "Turning ideas into memorable digital experiences",
    role: "Product Designer and UX/UI Designer with experience building and evolving B2B and B2C digital products, especially recruitment, people management and HR-routine solutions.",
    bio: "I turn business processes, rules and complex journeys into clearer, more consistent and efficient experiences. I integrate AI into my workflow to analyze requirements, synthesize information, explore interface alternatives and produce more complete documentation. I work end-to-end — from problem framing to validation and follow-up of the shipped solution — structuring journeys, flows and high-fidelity interfaces, and working closely with Product Owners, business analysts and developers on refinements, handoff and delivery validation.",
  },
  home: {
    heroSkills: ["Product Design", "UX Design", "UI Design", "UX Research"],
    heroCtaPrimary: "VIEW PROJECTS",
    heroCtaSecondary: "CONTACT",
    statsHeading: { title: "Highlights and", highlight: "Achievements" },
    projectsHeading: { title: "Projects and", highlight: "Work" },
    projectsCta: "VIEW ALL PROJECTS",
    aboutEyebrow: "About",
    aboutHeading: { title: "Product Designer", highlight: "driven by results" },
    aboutCta: "LEARN MORE →",
    workflowHeading: { title: "Design", highlight: "Workflow" },
    workflowCta: "VIEW FULL PROCESS →",
    contactEyebrow: "Contact",
    contactHeading: { title: "Social and", highlight: "Contact" },
    contactCta: "TALK TO ME",
  },
  stats: [
    {
      emoji: "😄",
      title: "90% Satisfaction",
      desc: "Improved user experience and satisfaction, based on user-centered methods and behavior studies.",
    },
    {
      emoji: "⏱️",
      title: "37% Reduction",
      desc: "37% reduction in the time to build a profile for job applications.",
    },
    {
      emoji: "⬆️",
      title: "+1 million users",
      desc: "Recruitment and selection solutions impacting over 1 million users.",
    },
    {
      emoji: "⇄",
      title: "End-to-end product",
      desc: "Created and validated the product end-to-end, including research, flows, prototypes and testing. The solution is live and contributes to company revenue.",
    },
  ],
  workflow: [
    {
      n: "01",
      title: "Discovery",
      desc: "Understanding the business, interviewing stakeholders and users, mapping system rules and constraints.",
    },
    {
      n: "02",
      title: "Definition",
      desc: "Synthesizing insights, framing the problem and hypotheses, prioritizing by impact and effort.",
    },
    {
      n: "03",
      title: "Design",
      desc: "Wireframes, flows and high-fidelity prototypes aligned with the design system and brand identity.",
    },
    {
      n: "04",
      title: "Testing",
      desc: "Usability testing with real users on the prototype, gathering qualitative and quantitative feedback to validate hypotheses before implementation.",
    },
    {
      n: "05",
      title: "Refinement",
      desc: "Refining the design based on test feedback, fixing friction points and adjusting flows before handoff.",
    },
    {
      n: "06",
      title: "Handoff",
      desc: "Documenting specs, components and flows for the development team, with close follow-up during implementation.",
    },
    {
      n: "07",
      title: "Analysis",
      desc: "Tracking post-launch metrics to measure the solution's impact and guide the next iterations.",
    },
  ],
  sobre: {
    eyebrow: "About",
    bioParagraphs: [
      "I'm a Product Designer and UX/UI Designer with experience building and evolving B2B and B2C digital products, especially recruitment, people management and HR-routine solutions. My work is about turning business processes, rules and complex journeys into clearer, more consistent and efficient experiences.",
      "I integrate artificial intelligence into my workflow to analyze requirements, synthesize information, explore interface alternatives, speed up the creation of flows and prototypes, and produce more complete documentation for product and development.",
      "I work end-to-end, from understanding and framing the problem through to validating and following up on the shipped solution. I structure journeys, flows, wireframes and high-fidelity interfaces, accounting for states, exceptions, permissions, accessibility and different usage scenarios.",
      "I work closely with Product Owners, business analysts and developers during refinement, feasibility analysis, handoff and delivery validation. I also help create, document and evolve interface standards and components, promoting consistency across product modules and reducing ambiguity during development.",
    ],
    experienceEyebrow: "Background",
    experienceHeading: { title: "Professional", highlight: "experience" },
    currentBadge: "CURRENT ROLE",
    experiences: [
      {
        role: "UX/UI Designer",
        org: "Metadados",
        period: "Jan 2024 — Jul 2026 · 2 years and 6 months",
        current: false,
        summary:
          "Working on the evolution of B2B and B2C digital products for people management, delivering end-to-end, translating the needs of HR professionals and complex business rules into clearer, more efficient and consistent journeys.",
        bullets: [
          "Structuring and evolving user flows, wireframes, clickable prototypes and high-fidelity interfaces in Figma.",
          "Participating in requirements analysis and solution refinement together with Product Owners, developers and business teams.",
          "Creating and documenting states, behaviors, interaction rules, error scenarios and specs for development.",
          "Contributing to the standardization of components and visual patterns, improving consistency across different product areas.",
          "Evaluating usability, accessibility, responsiveness and information clarity throughout the build process.",
          "Following up on implementation to reduce divergence between the Figma design and the experience shipped in the product.",
          "Analyzing behavior data in Mixpanel to identify drop-off points, validate hypotheses and guide prioritization.",
          "Simplified a flow with a large number of payroll, vacation and timekeeping rules and exceptions, improving operational predictability for users and development.",
        ],
        products: ["Jobfy", "Flow", "Digital Admission", "Vibe"],
      },
      {
        role: "UX/UI Designer",
        org: "Skeel — Intelligent Recruitment",
        period: "Sep 2022 — Jan 2024 · 1 year and 5 months · Caxias do Sul, RS",
        current: false,
        summary:
          "Worked on developing and evolving a recruitment platform, considering the needs of recruiters, HR professionals and candidates.",
        bullets: [
          "Mapped and redesigned journeys for job creation, candidate management and hiring process stages.",
          "Conducted user interviews and analyzed sessions in Microsoft Clarity to identify problems, validate hypotheses and guide improvements.",
          "Structured flows, wireframes, prototypes and responsive interfaces for web products.",
          "Redesigned the profile-creation journey, contributing to a 37% reduction in the time needed to complete the task.",
          "Organized information architecture and visual hierarchies to make recruitment processes easier to understand.",
          "Documented components and loading, success, error, empty and restricted-access states.",
          "Collaborated with product and engineering on refinements, handoff, implementation follow-up and delivery validation.",
        ],
        products: ["Jobfy"],
      },
      {
        role: "HR Assistant (Training & Development) and Intern",
        org: "Marcopolo S.A.",
        period: "Apr 2021 — Aug 2022 · 1 year and 5 months · Caxias do Sul, RS",
        current: false,
        summary:
          "HR Assistant (May–Aug 2022): supported internal Training & Development processes, organizing training sessions, employee communication and administrative tasks, with direct contact with HR routines, operational needs and challenges faced by employees. Intern (Apr 2021–May 2022): early work in the field, with a focus on strategic thinking and design.",
        bullets: [],
        products: [],
      },
    ],
    educationEyebrow: "Education",
    educationHeading: { title: "Academic", highlight: "background" },
    education: {
      title: "Bachelor's Degree in Advertising",
      org: "FSG — Centro Universitário da Serra Gaúcha",
      period: "2021 — Jul 2026",
      desc: "Studies related to consumer behavior, communication and related fields.",
    },
    achievementsEyebrow: "Why choose me?",
    achievementsHeading: { title: "Highlights and", highlight: "Achievements" },
    ctaHeading: "Want to see how I work?",
    ctaWorkflow: "VIEW WORKFLOW",
    ctaContact: "TALK TO ME",
  },
  fluxo: {
    heading: { title: "Design", highlight: "Workflow" },
    subtitle: "A repeatable process for turning complex business problems into clear, measurable products.",
    ctaHeading: "Want to see it in practice?",
    ctaButton: "VIEW PROJECTS",
  },
  projetos: {
    heading: { title: "Projects and", highlight: "Work" },
  },
  projetoDetalhe: {
    back: "← BACK TO PROJECTS",
    toolsHeading: "Tools used",
    requestAccess: "REQUEST ACCESS",
    visitSite: "VISIT SITE",
    otherProjects: { title: "Other", highlight: "projects" },
    notFoundTitle: "Project not found",
    notFoundBack: "← Back to projects",
    metaRole: "Role",
    metaPeriod: "Period",
    metaType: "Type",
    metaSkills: "Skills",
    problemEyebrow: "The challenge",
    problemHeading: { title: "The", highlight: "Problem" },
    solutionEyebrow: "The approach",
    solutionHeading: { title: "The", highlight: "Solution" },
    impactEyebrow: "Results",
    impactHeading: { title: "The", highlight: "Impact" },
    processEyebrow: "How it unfolded",
    processHeading: { title: "The", highlight: "Process" },
    nextProject: "Next project",
  },
  contato: {
    eyebrow: "Contact",
    heading: { title: "Social and", highlight: "Contact" },
    viewProfile: "View profile",
  },
  footer: {
    tagline: "Turning ideas into memorable digital experiences",
    navTitle: "Navigation",
    links: [
      { label: "About", href: "/sobre" },
      { label: "Projects", href: "/projetos" },
      { label: "Workflow", href: "/fluxo-de-trabalho" },
      { label: "Contact", href: "/contato" },
    ],
  },
};

export const siteText: Record<Lang, SiteText> = { pt, en };

export function getSiteText(lang: Lang): SiteText {
  return siteText[lang];
}
