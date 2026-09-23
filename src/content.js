// Todos os textos do site ficam aqui. Edite à vontade: o layout lê tudo deste arquivo.
// Para mostrar o botão de CV, coloque o PDF em /public/cv/ e preencha "cvFile" em cada idioma.

export const links = {
  email: "gustavobalbi03@gmail.com",
  github: "https://github.com/gustavobalbi",
  linkedin: "https://www.linkedin.com/in/gustavo-balbi/",
  aspara: "https://www.aspara.org.br",
};

const repo = (name) => `${links.github}/${name}`;

export const content = {
  pt: {
    meta: {
      title: "Gustavo Balbi Queiroz | Desenvolvedor de software e dados",
      skip: "Pular para o conteúdo",
      langLabel: "Idioma",
    },
    nav: [
      { id: "sobre", label: "Sobre" },
      { id: "experiencia", label: "Experiência" },
      { id: "projetos", label: "Projetos" },
      { id: "competencias", label: "Competências" },
      { id: "contato", label: "Contato" },
    ],
    hero: {
      name: "Gustavo Balbi Queiroz",
      role: "Desenvolvedor de software e dados",
      lede:
        "Construo sistemas web e pipelines de dados de ponta a ponta: da extração no banco de origem até a API, o painel ou a aplicação que alguém usa no dia a dia. Estudo Sistemas de Informação na UFPA, em Belém.",
      cvFile: null, // ex.: "/cv/gustavo-balbi-cv-pt.pdf"
      cvLabel: "Baixar CV (PDF)",
      emailLabel: "Enviar e-mail",
      flowTitle: "Do dado bruto ao uso diário",
      flow: [
        { label: "Origem", detail: "Oracle, APIs" },
        { label: "ETL", detail: "Apache Hop, dbt, Airflow" },
        { label: "Banco", detail: "SQL Server, Azure SQL" },
        { label: "API", detail: "Django, REST" },
        { label: "Uso", detail: "Power BI, React" },
      ],
    },
    focus: {
      title: "O que eu entrego",
      items: [
        {
          name: "BI em nível executivo",
          text: "Produzo painéis em Power BI para a gestão, do modelo de dados e das medidas em DAX ao layout, com segurança por linha para cada perfil de acesso. Além de construir, sustentei mais de 70 relatórios em produção.",
          tags: "Power BI, DAX, modelagem dimensional, RLS",
        },
        {
          name: "Arquitetura de soluções digitais",
          text: "Desenho soluções de ponta a ponta para problemas do negócio: um bot de WhatsApp que entrega relatórios automaticamente e o Excel Online, que troca planilhas soltas por entrada de dados controlada via API até o banco e o BI.",
          tags: "Bot de WhatsApp, Excel Online, APIs, React, Django",
        },
        {
          name: "Comunicação com stakeholders",
          text: "Na ASPARÁ e na Revemar, trabalhei direto com as áreas de negócio: levantar requisitos, traduzir a regra em dado e validar cada entrega com quem vai usar.",
          tags: "Requisitos, apresentações, validação de entregas",
        },
      ],
    },
    beyond: {
      title: "Além do código",
      items: [
        {
          name: "Proposta de IA para a empresa",
          text: "Elaborei e apresentei na Revemar um projeto para a contratação de uma assinatura de IA, com casos de uso e ganhos esperados para o time.",
        },
        {
          name: "Entrevistas de candidatos",
          text: "Participei das entrevistas de candidatos na Revemar, avaliando conhecimento técnico e fit com a equipe.",
        },
      ],
    },
    pathTitle: "Trajetória",
    path: [
      { when: "2024", what: "Sistemas de Informação", detail: "Ingresso na UFPA" },
      { when: "2025", what: "Pesquisa em IA", detail: "PIBIC e monitoria de programação" },
      { when: "dez/2025", what: "Desenvolvedor Django", detail: "Sistema web em produção no Azure" },
      { when: "mar/2026", what: "Analista de Dados", detail: "Pipelines, BI e banco de dados" },
      { when: "Hoje", what: "Software e dados" },
    ],
    about: {
      title: "Sobre",
      paragraphs: [
        "Meu trabalho fica na interseção entre desenvolvimento e dados. Na Revemar, grupo de concessionárias com operação no Norte e Nordeste, cuidei do ciclo completo de dados: extração do Oracle, transformação, carga em SQL Server e entrega em Power BI, além de desenvolver uma aplicação web para entrada de dados que alimenta o banco e os relatórios.",
        "Antes disso, desenvolvi em Django um sistema institucional publicado no Azure. Na universidade, pesquiso aplicações de redes neurais a dados ambientais da Amazônia.",
        "Gosto de problemas em que o código precisa conversar com o negócio: entender a regra, modelar o dado certo e entregar algo que as pessoas realmente usem.",
      ],
    },
    experience: {
      title: "Experiência",
      stackLabel: "Stack",
      siteLabel: "Ver site no ar",
      items: [
        {
          role: "Analista de Dados",
          org: "Revemar",
          when: "mar/2026 – ago/2026",
          points: [
            "Pipelines ETL ponta a ponta em arquitetura Medallion: Oracle, Apache Hop, SQL Server e Power BI, com cargas orquestradas no Jenkins.",
            "Desenvolvimento de painéis em Power BI para o nível executivo, da modelagem e DAX ao layout, e sustentação de mais de 70 relatórios em produção.",
            "Administração do servidor de banco: armazenamento, desempenho, esquemas e versionamento.",
            "Otimização de queries e ETLs: jobs caíram de cerca de 10 para 5 minutos, e uma carga de horas passou a rodar em segundos ao eliminar um produto cartesiano e criar índices.",
            "Aplicação web em React e Django para edição de planilhas online que publicam dados via API no SQL Server e no Power BI.",
            "Segurança por linha (RLS) para 52 usuários, painel de monitoramento do Jenkins via API, bot de WhatsApp para envio automático de relatórios e integração de assistentes de IA ao ambiente de dados via MCP.",
            "Interlocução com as áreas de negócio para levantar requisitos e validar relatórios, apresentação de um projeto para contratação de uma assinatura de IA e participação em entrevistas de candidatos.",
          ],
          stack: "SQL Server, Oracle, Apache Hop, Jenkins, Power BI, DAX, Python, React, Django",
        },
        {
          role: "Desenvolvedor Django",
          org: "ASPARÁ (Associação de Servidores Públicos)",
          when: "dez/2025 – mar/2026",
          points: [
            "Sistema web institucional em Django publicado em produção no Azure, com área autenticada e diferentes níveis de acesso.",
            "Modelagem do banco em SQL Server para formulários, usuários e permissões.",
            "Análise exploratória dos formulários recebidos com Pandas e Plotly.",
            "Contato direto com a gestão da associação para definir requisitos, apresentar o andamento e validar as entregas.",
          ],
          stack: "Python, Django, SQL Server, Azure, Pandas, Plotly",
          url: links.aspara,
        },
        {
          role: "Bolsista de Iniciação Científica (PIBIC)",
          org: "Laboratório de Inteligência Analítica, UFPA",
          when: "2025 – 2026",
          points: [
            "Modelos supervisionados para classificar o risco de focos de incêndio na Amazônia Legal, comparando uma rede neural MLP a um baseline de Random Forest.",
            "Responsável pelo pipeline do projeto: pré-processamento, experimentação e avaliação. O MLP chegou a cerca de 95% de acurácia (F1-macro de 0,94).",
          ],
          stack: "Python, scikit-learn, Pandas",
        },
        {
          role: "Monitor de Nivelamento de Programação",
          org: "UFPA",
          when: "2025",
          points: ["Ensino de algoritmos e lógica de programação em Python para calouros de Computação."],
          stack: "Python",
        },
      ],
    },
    projects: {
      title: "Projetos",
      repoLabel: "Ver repositório",
      items: [
        {
          name: "Excel Online",
          context: "Profissional, Revemar",
          description:
            "Criador e editor de pastas de trabalho no navegador. Os dados preenchidos são publicados via API para ingestão em SQL Server e consumo em Power BI, substituindo planilhas soltas por uma entrada de dados controlada.",
          stack: "TypeScript, React, Vite, Univer, Django",
          url: repo("excel-online"),
        },
        {
          name: "Bus tracking pipeline",
          context: "Pessoal",
          description:
            "Pipeline ELT de alta frequência com posições em tempo real dos ônibus de São Paulo (API Olho Vivo). Dados crus em JSON na camada bronze, transformação em camadas com dbt e testes de qualidade, orquestração no Airflow rodando em Docker.",
          stack: "Python, dbt, Apache Airflow, Docker, Azure SQL",
          url: repo("bus-tracking-pipeline"),
        },
        {
          name: "Classificação de risco de queimada",
          context: "Pesquisa, PIBIC/UFPA",
          description:
            "Classificação do risco de focos de incêndio na Amazônia Legal com aprendizado de máquina. Rede neural MLP comparada a um Random Forest, com cerca de 95% de acurácia e F1-macro de 0,94.",
          stack: "Python, scikit-learn, Pandas",
          url: repo("Classifica-o-de-Risco-de-Queimada"),
        },
        {
          name: "Sistema fuzzy de priorização de chamados",
          context: "Acadêmico, UFPA",
          description:
            "Inferência fuzzy do tipo Mamdani que recomenda a prioridade de chamados técnicos a partir do impacto, do percentual de usuários afetados e do tempo em aberto. Implementação própria em Python validada contra o scikit-fuzzy, com cerca de 30 testes automatizados.",
          stack: "Python, scikit-fuzzy, pytest",
          url: repo("Sistemas-Fuzzy"),
        },
      ],
    },
    skills: {
      title: "Competências",
      groups: [
        { name: "Desenvolvimento", items: "Python, JavaScript e TypeScript, React, Django, HTML e CSS, APIs REST" },
        { name: "Dados", items: "SQL (CTEs, window functions, JSON), modelagem dimensional, arquitetura Medallion, dbt, Apache Hop, Airflow, Pandas" },
        { name: "BI", items: "Power BI, DAX, Power Query, segurança por linha (RLS)" },
        { name: "Bancos e infraestrutura", items: "SQL Server, Oracle, Azure, Docker, Git, Jenkins" },
        { name: "IA", items: "scikit-learn, redes neurais (MLP), lógica fuzzy, integração de LLMs via MCP" },
        { name: "Idiomas", items: "Português (nativo), inglês (fluente), espanhol (intermediário)" },
      ],
    },
    education: {
      title: "Formação",
      degree: "Sistemas de Informação, Universidade Federal do Pará (UFPA)",
      when: "Conclusão prevista em 2027",
      certsTitle: "Cursos",
      certs: [
        "Redes Neurais Artificiais em Python, Udemy (2025)",
        "Desenvolvimento Web com Python e Django, DIO (2025)",
        "Primeiros Passos com SQL, DIO (2025)",
        "Python Fundamentals, DIO (2024)",
        "Inglês, Centro Cultural Brasil-Estados Unidos (2013 a 2020)",
      ],
    },
    contact: {
      title: "Contato",
      text: "O jeito mais rápido de falar comigo é por e-mail. Também estou no LinkedIn e no GitHub.",
      copyLabel: "Copiar e-mail",
      copiedLabel: "Copiado!",
    },
  },

  en: {
    meta: {
      title: "Gustavo Balbi Queiroz | Software and data developer",
      skip: "Skip to content",
      langLabel: "Language",
    },
    nav: [
      { id: "sobre", label: "About" },
      { id: "experiencia", label: "Experience" },
      { id: "projetos", label: "Projects" },
      { id: "competencias", label: "Skills" },
      { id: "contato", label: "Contact" },
    ],
    hero: {
      name: "Gustavo Balbi Queiroz",
      role: "Software and data developer",
      lede:
        "I build web systems and end-to-end data pipelines: from extraction at the source database to the API, dashboard or application someone uses every day. Information Systems student at UFPA, in Belém, Brazil.",
      cvFile: null, // e.g. "/cv/gustavo-balbi-cv-en.pdf"
      cvLabel: "Download CV (PDF)",
      emailLabel: "Send an email",
      flowTitle: "From raw data to daily use",
      flow: [
        { label: "Source", detail: "Oracle, APIs" },
        { label: "ETL", detail: "Apache Hop, dbt, Airflow" },
        { label: "Database", detail: "SQL Server, Azure SQL" },
        { label: "API", detail: "Django, REST" },
        { label: "Use", detail: "Power BI, React" },
      ],
    },
    focus: {
      title: "What I deliver",
      items: [
        {
          name: "Executive-level BI",
          text: "I build Power BI dashboards for management, from the data model and DAX measures to the layout, with row-level security for each access profile. Beyond building, I maintained more than 70 reports in production.",
          tags: "Power BI, DAX, dimensional modeling, RLS",
        },
        {
          name: "Digital solution architecture",
          text: "I design end-to-end solutions for business problems: a WhatsApp bot that delivers reports automatically and Excel Online, which replaces scattered spreadsheets with controlled data entry flowing through an API into the database and BI.",
          tags: "WhatsApp bot, Excel Online, APIs, React, Django",
        },
        {
          name: "Stakeholder communication",
          text: "At ASPARÁ and Revemar I worked directly with business teams: gathering requirements, turning rules into data and validating each delivery with the people who use it.",
          tags: "Requirements, presentations, delivery validation",
        },
      ],
    },
    beyond: {
      title: "Beyond code",
      items: [
        {
          name: "AI proposal for the company",
          text: "Wrote and presented a project at Revemar for adopting a company-wide AI subscription, with use cases and expected gains for the team.",
        },
        {
          name: "Candidate interviews",
          text: "Took part in candidate interviews at Revemar, assessing technical knowledge and team fit.",
        },
      ],
    },
    pathTitle: "Path so far",
    path: [
      { when: "2024", what: "Information Systems", detail: "Started at UFPA" },
      { when: "2025", what: "AI research", detail: "Undergraduate research and programming TA" },
      { when: "Dec 2025", what: "Django developer", detail: "Web system in production on Azure" },
      { when: "Mar 2026", what: "Data analyst", detail: "Pipelines, BI and databases" },
      { when: "Now", what: "Software and data" },
    ],
    about: {
      title: "About",
      paragraphs: [
        "My work sits where software development meets data. At Revemar, a car dealership group operating across northern and northeastern Brazil, I handled the full data cycle: extraction from Oracle, transformation, loading into SQL Server and delivery in Power BI. I also built a web application for data entry that feeds the database and the reports.",
        "Before that, I built an institutional system in Django deployed on Azure. At university, I research applications of neural networks to environmental data from the Amazon.",
        "I enjoy problems where code has to talk to the business: understand the rule, model the right data and ship something people actually use.",
      ],
    },
    experience: {
      title: "Experience",
      stackLabel: "Stack",
      siteLabel: "Visit live site",
      items: [
        {
          role: "Data Analyst",
          org: "Revemar",
          when: "Mar 2026 – Aug 2026",
          points: [
            "End-to-end ETL pipelines on a Medallion architecture: Oracle, Apache Hop, SQL Server and Power BI, with loads orchestrated in Jenkins.",
            "Built executive-level Power BI dashboards, from modeling and DAX to layout, and maintained more than 70 reports in production.",
            "Administered the database server: storage, performance, schemas and versioning.",
            "Query and ETL optimization: jobs dropped from about 10 to 5 minutes, and a load that took hours now runs in seconds after removing a cartesian product and adding indexes.",
            "React and Django web application for editing online spreadsheets that publish data through an API into SQL Server and Power BI.",
            "Row-level security for 52 users, a Jenkins monitoring dashboard built on its API, a WhatsApp bot for automated report delivery and integration of AI assistants into the data environment via MCP.",
            "Worked with business teams to gather requirements and validate reports, presented a project for adopting an AI subscription and took part in candidate interviews.",
          ],
          stack: "SQL Server, Oracle, Apache Hop, Jenkins, Power BI, DAX, Python, React, Django",
        },
        {
          role: "Django Developer",
          org: "ASPARÁ (public servants association)",
          when: "Dec 2025 – Mar 2026",
          points: [
            "Institutional web system in Django deployed to production on Azure, with authentication and multiple access levels.",
            "SQL Server database design for forms, users and permissions.",
            "Exploratory analysis of submitted forms with Pandas and Plotly.",
            "Worked directly with the association's management to define requirements, report progress and validate deliveries.",
          ],
          stack: "Python, Django, SQL Server, Azure, Pandas, Plotly",
          url: links.aspara,
        },
        {
          role: "Undergraduate Research Fellow (PIBIC)",
          org: "Analytical Intelligence Lab, UFPA",
          when: "2025 – 2026",
          points: [
            "Supervised models to classify wildfire risk in the Brazilian Legal Amazon, comparing an MLP neural network against a Random Forest baseline.",
            "Owned the project pipeline: preprocessing, experimentation and evaluation. The MLP reached about 95% accuracy (0.94 macro F1).",
          ],
          stack: "Python, scikit-learn, Pandas",
        },
        {
          role: "Programming Teaching Assistant",
          org: "UFPA",
          when: "2025",
          points: ["Taught algorithms and programming logic in Python to first-year Computing students."],
          stack: "Python",
        },
      ],
    },
    projects: {
      title: "Projects",
      repoLabel: "View repository",
      items: [
        {
          name: "Excel Online",
          context: "Professional, Revemar",
          description:
            "In-browser workbook creator and editor. Entered data is published through an API into SQL Server and consumed in Power BI, replacing scattered spreadsheets with controlled data entry.",
          stack: "TypeScript, React, Vite, Univer, Django",
          url: repo("excel-online"),
        },
        {
          name: "Bus tracking pipeline",
          context: "Personal",
          description:
            "High-frequency ELT pipeline with real-time bus positions from São Paulo (Olho Vivo API). Raw JSON in the bronze layer, layered transformations and data quality tests in dbt, orchestration with Airflow running on Docker.",
          stack: "Python, dbt, Apache Airflow, Docker, Azure SQL",
          url: repo("bus-tracking-pipeline"),
        },
        {
          name: "Wildfire risk classification",
          context: "Research, PIBIC/UFPA",
          description:
            "Machine learning classification of wildfire risk in the Brazilian Legal Amazon. An MLP neural network compared against a Random Forest, reaching about 95% accuracy and 0.94 macro F1.",
          stack: "Python, scikit-learn, Pandas",
          url: repo("Classifica-o-de-Risco-de-Queimada"),
        },
        {
          name: "Fuzzy ticket prioritization",
          context: "Academic, UFPA",
          description:
            "Mamdani fuzzy inference system that recommends the priority of support tickets based on impact, share of affected users and time open. Hand-written Python implementation validated against scikit-fuzzy, with about 30 automated tests.",
          stack: "Python, scikit-fuzzy, pytest",
          url: repo("Sistemas-Fuzzy"),
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Development", items: "Python, JavaScript and TypeScript, React, Django, HTML and CSS, REST APIs" },
        { name: "Data", items: "SQL (CTEs, window functions, JSON), dimensional modeling, Medallion architecture, dbt, Apache Hop, Airflow, Pandas" },
        { name: "BI", items: "Power BI, DAX, Power Query, row-level security (RLS)" },
        { name: "Databases and infrastructure", items: "SQL Server, Oracle, Azure, Docker, Git, Jenkins" },
        { name: "AI", items: "scikit-learn, neural networks (MLP), fuzzy logic, LLM integration via MCP" },
        { name: "Languages", items: "Portuguese (native), English (fluent), Spanish (intermediate)" },
      ],
    },
    education: {
      title: "Education",
      degree: "Information Systems, Federal University of Pará (UFPA)",
      when: "Expected graduation: 2027",
      certsTitle: "Courses",
      certs: [
        "Artificial Neural Networks in Python, Udemy (2025)",
        "Web Development with Python and Django, DIO (2025)",
        "First Steps with SQL, DIO (2025)",
        "Python Fundamentals, DIO (2024)",
        "English, Centro Cultural Brasil-Estados Unidos (2013 to 2020)",
      ],
    },
    contact: {
      title: "Contact",
      text: "Email is the fastest way to reach me. I'm also on LinkedIn and GitHub.",
      copyLabel: "Copy email",
      copiedLabel: "Copied!",
    },
  },
};
