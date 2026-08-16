import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";

type Locale = "pt" | "en";

interface Section {
  title: string;
  body: string[];
}

interface Copy {
  nav: {
    method: string;
    capabilities: string;
    perspective: string;
    contact: string;
    menu: string;
  };
  hero: {
    kicker: string;
    title: string;
    body: string;
    updated: string;
  };
  intro: {
    kicker: string;
    title: string;
    body: string;
  };
  sections: Section[];
  closing: {
    kicker: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    line: string;
    legal: string;
  };
}

const copy: Record<Locale, Copy> = {
  pt: {
    nav: {
      method: "Método",
      capabilities: "Capacidades",
      perspective: "Perspetiva",
      contact: "Falar Connosco",
      menu: "Abrir menu",
    },

    hero: {
      kicker: "PRIVACIDADE • PROTEÇÃO DE DADOS",
      title: "Política de Privacidade",
      body:
        "Como recolhemos, utilizamos, protegemos e conservamos dados pessoais no âmbito da atividade da SyncTechX.",
      updated: "ÚLTIMA ATUALIZAÇÃO / 16 AGOSTO 2026",
    },

    intro: {
      kicker: "01 / ENQUADRAMENTO",
      title:
        "Privacidade tratada com o mesmo rigor que aplicamos à segurança.",
      body:
        "A SyncTechX respeita a privacidade das pessoas com quem interage e compromete-se a tratar os dados pessoais de forma responsável, transparente e proporcional às finalidades para as quais são recolhidos.",
    },

    sections: [
      {
        title: "Introdução",
        body: [
          '1.1. A SyncTechX Lda. ("SyncTechX", "nós", "a Empresa"), sociedade sediada em Maputo, Moçambique, respeita a privacidade de todas as pessoas com quem interage — clientes, potenciais clientes, visitantes do website, colaboradores de clientes, parceiros e candidatos a emprego — e compromete-se a proteger os dados pessoais que trata no exercício da sua atividade.',

          '1.2. Esta Política de Privacidade ("Política") explica que dados pessoais recolhemos, para que fins, com que base legal, por quanto tempo os conservamos, com quem os partilhamos, e quais os direitos de que dispõe relativamente aos seus dados.',

          "1.3. Esta Política aplica-se a: (a) visitantes e utilizadores do website institucional da SyncTechX; (b) clientes e potenciais clientes que solicitem propostas ou contratem Serviços; (c) pessoas cujos dados sejam incidentalmente acedidos durante a prestação de Serviços de avaliação de cibersegurança, nos termos descritos na Secção 7; e (d) candidatos a colaborações ou emprego com a SyncTechX.",

          "1.4. Esta Política deve ser lida em conjunto com os nossos Termos e Condições, que regem a prestação de Serviços, e, quando aplicável, com o Acordo de Tratamento de Dados anexo a um Contrato de Engagement específico.",

          "1.5. Ao utilizar o nosso website, submeter um formulário de contacto, ou contratar os nossos Serviços, o titular dos dados reconhece ter tomado conhecimento desta Política.",
        ],
      },

      {
        title: "Quem Somos e Como Contactar-nos",
        body: [
          "2.1. A SyncTechX Lda. é a entidade responsável pelo tratamento dos dados pessoais descritos nesta Política, relativamente à sua própria atividade comercial (website, contactos, propostas, gestão de clientes).",

          "2.2. Nas circunstâncias descritas na Secção 7, a SyncTechX pode atuar como subcontratante/processador de dados por conta do Cliente, sendo este último o responsável pelo tratamento.",

          "2.3. Para qualquer questão relacionada com esta Política ou com o tratamento dos seus dados pessoais, pode contactar-nos através de:",

          "SyncTechX Lda.\nMaputo, Moçambique\nhello@synctechx.com\n+258 84 752 9665",
        ],
      },

      {
        title: "Que Dados Pessoais Recolhemos",
        body: [
          "Consoante a sua relação connosco, podemos recolher as seguintes categorias de dados:",

          "3.1. Dados de contacto e identificação — nome, cargo, organização, endereço de correio eletrónico profissional, número de telefone, país/cidade.",

          '3.2. Dados de comunicação — conteúdo de mensagens submetidas através do formulário de contacto ("O que quer compreender melhor?"), correspondência por e-mail, e registos de chamadas ou reuniões agendadas para conversas de descoberta.',

          "3.3. Dados comerciais e contratuais — propostas solicitadas, contratos assinados, histórico de engagements, faturação e dados de pagamento (não incluindo dados completos de cartão de crédito, que são processados diretamente por prestadores de pagamento terceiros, quando aplicável).",

          "3.4. Dados técnicos do website — endereço IP, tipo de dispositivo e navegador, páginas visitadas, tempo de permanência, e dados de interações recolhidos através de cookies e tecnologias semelhantes (ver Secção 9).",

          "3.5. Dados recolhidos durante a prestação de Serviços de cibersegurança — informação técnica sobre sistemas, redes, aplicações e configurações do Cliente, e, incidentalmente, dados pessoais de colaboradores ou clientes finais do Cliente presentes nesses sistemas (ver Secção 7).",

          "3.6. Dados de candidatura — currículo, carta de motivação, portefólio e informação de contacto submetidos por candidatos a colaborações, estágios ou emprego.",

          "3.7. Não solicitamos nem pretendemos recolher, através do website institucional, categorias especiais de dados pessoais (origem racial ou étnica, opiniões políticas, convicções religiosas, dados de saúde, orientação sexual, dados biométricos ou genéticos). Pedimos que não inclua este tipo de informação nas mensagens que nos envia através do formulário de contacto.",
        ],
      },

      {
        title: "Como Recolhemos os Dados",
        body: [
          "Recolhemos dados pessoais de três formas principais:",

          "4.1. Diretamente de si — quando preenche o formulário de contacto, solicita uma proposta, assina um contrato, envia um e-mail, ou submete uma candidatura.",

          "4.2. Automaticamente — através de cookies e tecnologias semelhantes quando visita o nosso website (ver Secção 9).",

          "4.3. No decurso da prestação de Serviços — quando, no âmbito de uma avaliação de cibersegurança autorizada pelo Cliente, acedemos a sistemas que contêm dados pessoais de terceiros (ex.: colaboradores ou clientes do Cliente), nos termos descritos na Secção 7.",
        ],
      },

      {
        title: "Finalidades e Base Legal do Tratamento",
        body: [
          "Tratamos os seus dados pessoais para as seguintes finalidades, com as respetivas bases legais:",

          "Responder a pedidos de contacto e conversas de descoberta — Consentimento / diligências pré-contratuais a pedido do titular.",

          "Elaborar e negociar propostas comerciais — Diligências pré-contratuais.",

          "Celebrar e executar contratos de prestação de Serviços — Execução de contrato.",

          "Faturação e cumprimento de obrigações fiscais — Obrigação legal.",

          "Gestão da relação comercial e comunicações de acompanhamento — Interesse legítimo da SyncTechX.",

          "Melhoria do website e da experiência do utilizador — Interesse legítimo / consentimento (cookies não essenciais).",

          "Prevenção de fraude e segurança da informação — Interesse legítimo / obrigação legal.",

          "Avaliação de candidaturas — Diligências pré-contratuais.",

          "Cumprimento de obrigações legais e regulatórias aplicáveis ao setor de cibersegurança — Obrigação legal.",

          "5.2. Quando o tratamento se basear em consentimento, este pode ser retirado a qualquer momento, sem afetar a licitude do tratamento realizado antes da retirada.",

          "5.3. Quando o tratamento se basear em interesse legítimo, garantimos que esse interesse não prevalece indevidamente sobre os direitos e liberdades fundamentais do titular dos dados.",
        ],
      },

      {
        title: "Marketing e Comunicações",
        body: [
          "6.1. Só enviaremos comunicações comerciais ou informativas (ex.: novidades sobre Serviços, conteúdos sobre cibersegurança) a pessoas que tenham fornecido o seu contacto num contexto profissional relacionado, ou que tenham dado consentimento explícito.",

          '6.2. Todas as comunicações de marketing incluirão uma forma simples de cancelar a subscrição ("opt-out"). Pode também exercer este direito a qualquer momento contactando-nos diretamente.',

          "6.3. Não enviamos comunicações de marketing a candidatos a emprego ou a pessoas cujos dados tenham sido acedidos incidentalmente no âmbito de Serviços de cibersegurança (Secção 7).",
        ],
      },

      {
        title: "Dados Pessoais Acedidos no Âmbito de Serviços de Cibersegurança",
        body: [
          "7.1. Esta secção aplica-se especificamente a dados pessoais de terceiros (colaboradores, clientes finais ou parceiros de um Cliente) que a SyncTechX possa incidentalmente aceder durante a execução de avaliações de cibersegurança, testes de penetração, ou serviços de infraestrutura contratados por um Cliente.",

          "7.2. Nestas circunstâncias, a SyncTechX atua como subcontratante/processador de dados por conta do Cliente (que é o responsável pelo tratamento), e não como responsável autónomo pelo tratamento desses dados.",

          "7.3. A SyncTechX compromete-se a:",

          "• Aceder apenas aos dados estritamente necessários para identificar, validar e documentar um Achado ou vulnerabilidade.",

          "• Não copiar, extrair ou reproduzir dados pessoais além do estritamente necessário para demonstrar um Achado num relatório.",

          "• Ofuscar, anonimizar ou minimizar a exposição de dados pessoais em evidências e relatórios sempre que tecnicamente possível, sem comprometer a validade da prova técnica.",

          "• Eliminar de forma segura quaisquer cópias temporárias de dados pessoais após conclusão e aceitação do relatório pelo Cliente, salvo obrigação legal ou contratual de retenção.",

          "• Não utilizar tais dados para qualquer finalidade além da execução do engagement especificado.",

          "• Notificar o Cliente sem atraso indevido caso identifique um Incidente de Segurança envolvendo dados pessoais durante os trabalhos.",

          "7.4. Pessoas cujos dados tenham sido acedidos nestas circunstâncias devem exercer os seus direitos de proteção de dados diretamente junto do Cliente/responsável pelo tratamento, que é o interlocutor legal apropriado. A SyncTechX colaborará com o Cliente, na medida do razoável, para dar cumprimento a tais pedidos.",
        ],
      },

      {
        title: "Partilha de Dados com Terceiros",
        body: [
          "8.1. A SyncTechX não vende, aluga, nem comercializa dados pessoais a terceiros.",

          "8.2. Podemos partilhar dados pessoais com as seguintes categorias de destinatários, apenas na medida necessária:",

          "• Prestadores de serviços tecnológicos — fornecedores de alojamento (hosting), correio eletrónico, faturação, armazenamento em cloud e ferramentas de gestão de projeto, sujeitos a obrigações contratuais de confidencialidade e segurança.",

          "• Subcontratados especializados — profissionais externos que apoiem a execução de um engagement específico, sujeitos às mesmas obrigações de confidencialidade da SyncTechX.",

          "• Autoridades competentes — quando exigido por lei, ordem judicial, ou para proteção de direitos legais da SyncTechX, dos seus Clientes ou de terceiros.",

          "• Consultores profissionais — advogados, contabilistas ou auditores, sujeitos a dever de sigilo profissional.",

          "8.3. Não transferimos dados pessoais para fora de Moçambique de forma rotineira. Quando tal ocorra (ex.: alojamento de website ou ferramentas cloud com servidores no estrangeiro), asseguramos que o destinatário oferece um nível adequado de proteção, através de cláusulas contratuais apropriadas ou outras salvaguardas equivalentes.",
        ],
      },

      {
        title: "Cookies e Tecnologias Semelhantes",
        body: [
          "9.1. O website da SyncTechX pode utilizar cookies e tecnologias semelhantes para o funcionamento técnico do site, análise de utilização, e melhoria da experiência do utilizador.",

          "9.2. Distinguimos entre:",

          "• Cookies estritamente necessários — essenciais ao funcionamento do website (ex.: preferências de idioma PT/EN, segurança do formulário de contacto). Não requerem consentimento.",

          "• Cookies analíticos e de desempenho — utilizados para compreender como os visitantes utilizam o website (ex.: páginas mais visitadas, taxa de conversão de contactos), permitindo-nos melhorar o conteúdo e a navegação. Sujeitos a consentimento, quando aplicável.",

          "9.3. Pode gerir ou desativar cookies não essenciais através das definições do seu navegador. A desativação de determinados cookies pode afetar a funcionalidade do website.",

          "9.4. Não utilizamos cookies de publicidade comportamental de terceiros, nem partilhamos dados de navegação com redes de publicidade.",
        ],
      },

      {
        title: "Conservação de Dados",
        body: [
          "10.1. Conservamos os dados pessoais apenas pelo período necessário para cumprir as finalidades descritas nesta Política, ou conforme exigido por lei.",

          "10.2. Como referência geral:",

          "• Pedidos de contacto sem conversão em cliente — até 12 (doze) meses após o último contacto, salvo pedido de eliminação anterior.",

          "• Dados contratuais e de faturação — pelo período exigido pela legislação fiscal e comercial aplicável em Moçambique (geralmente 5 a 10 anos).",

          "• Relatórios e evidências de avaliações de cibersegurança — pelo período acordado no Contrato de Engagement, findo o qual são eliminados ou devolvidos ao Cliente, salvo obrigação legal de retenção.",

          "• Dados de candidaturas não selecionadas — até 12 (doze) meses, salvo consentimento do candidato para conservação por período superior, para consideração em futuras oportunidades.",

          "• Dados de cookies analíticos — conforme definido pela ferramenta de analítica utilizada, tipicamente até 26 meses.",

          "10.3. Findo o período de conservação aplicável, os dados pessoais são eliminados de forma segura ou anonimizados de forma irreversível.",
        ],
      },

      {
        title: "Segurança dos Dados",
        body: [
          "11.1. A SyncTechX, como empresa especializada em cibersegurança, aplica aos seus próprios sistemas e dados um nível de rigor técnico consistente com as práticas que recomenda aos seus Clientes, incluindo, consoante aplicável: controlo de acesso baseado em privilégio mínimo, cifragem de dados sensíveis em repouso e em trânsito, autenticação multifator para sistemas internos críticos, e registo de acessos a informação confidencial.",

          "11.2. Apesar destas medidas, nenhum sistema é totalmente imune a risco. Caso ocorra um Incidente de Segurança que afete dados pessoais sob a nossa responsabilidade, notificaremos os titulares afetados e, quando legalmente exigido, as autoridades competentes, sem atraso indevido.",

          '11.3. O acesso interno a dados pessoais de Clientes e a Achados de engagements é restrito à equipa diretamente alocada ao projeto, com base em necessidade de conhecimento ("need-to-know").',
        ],
      },

      {
        title: "Direitos do Titular dos Dados",
        body: [
          "12.1. Sujeito à legislação aplicável, tem o direito de:",

          "• Aceder aos dados pessoais que tratamos sobre si.",

          "• Retificar dados incorretos ou incompletos.",

          "• Solicitar a eliminação dos seus dados, quando não exista fundamento legal para a sua conservação.",

          "• Opor-se ao tratamento baseado em interesse legítimo, incluindo para fins de marketing direto.",

          "• Solicitar a limitação do tratamento em determinadas circunstâncias.",

          "• Retirar o consentimento dado, a qualquer momento, sem afetar a licitude do tratamento anterior.",

          "• Apresentar reclamação junto da autoridade de proteção de dados competente em Moçambique, quando aplicável.",

          "12.2. Para exercer qualquer destes direitos, contacte-nos através dos dados indicados na Secção 2. Responderemos ao seu pedido dentro de um prazo razoável, e no máximo de 30 (trinta) dias, podendo este prazo ser prorrogado em casos de maior complexidade, com notificação prévia.",

          "12.3. Podemos solicitar informação adicional para confirmar a sua identidade antes de dar seguimento a um pedido, de forma a proteger os dados contra acessos não autorizados.",

          "12.4. Caso os seus dados tenham sido acedidos incidentalmente no âmbito de um Serviço de cibersegurança prestado a um Cliente (Secção 7), o pedido deve ser dirigido ao Cliente, na qualidade de responsável pelo tratamento.",
        ],
      },

      {
        title: "Dados de Menores",
        body: [
          "13.1. Os Serviços e o website da SyncTechX destinam-se a um público profissional e empresarial, não sendo dirigidos a menores de idade.",

          "13.2. Não recolhemos, com conhecimento, dados pessoais de menores. Caso tomemos conhecimento de que recolhemos inadvertidamente dados de um menor sem o consentimento apropriado, procederemos à sua eliminação.",
        ],
      },

      {
        title: "Ligações a Sites de Terceiros",
        body: [
          "O nosso website pode conter ligações para sites de terceiros (ex.: redes sociais, sites de parceiros). Não somos responsáveis pelas práticas de privacidade desses sites, e recomendamos a leitura das respetivas políticas de privacidade antes de fornecer dados pessoais.",
        ],
      },

      {
        title: "Alterações a Esta Política",
        body: [
          "15.1. Podemos atualizar esta Política periodicamente para refletir alterações legais, operacionais ou nos nossos Serviços.",

          '15.2. A data de "última atualização" no topo desta Política será sempre revista quando ocorram alterações. Alterações materiais que afetem significativamente os seus direitos serão comunicadas de forma destacada, quando aplicável e razoavelmente possível.',

          "15.3. Recomendamos a consulta periódica desta Política.",
        ],
      },

      {
        title: "Lei Aplicável",
        body: [
          "Esta Política é regida pelas leis da República de Moçambique, aplicando-se subsidiariamente o disposto nos Termos e Condições da SyncTechX quanto a lei aplicável e resolução de litígios.",
        ],
      },

      {
        title: "Contacto",
        body: [
          "Para questões, pedidos relativos aos seus dados pessoais, ou reclamações relacionadas com esta Política:",

          "SyncTechX Lda.\nMaputo, Moçambique\nhello@synctechx.com\n+258 84 752 9665",
        ],
      },
    ],

    closing: {
      kicker: "17 / CONTACTO",
      title: "Tem uma questão sobre os seus dados?",
      body:
        "Se pretender exercer os seus direitos, esclarecer esta Política ou colocar uma questão sobre a forma como tratamos dados pessoais, estamos disponíveis para ajudar.",
      cta: "Contactar a SyncTechX",
    },

    footer: {
      line: "Segurança com contexto. Privacidade com responsabilidade.",
      legal: "© 2026 SyncTechX Lda. Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      method: "Method",
      capabilities: "Capabilities",
      perspective: "Perspective",
      contact: "Talk to Us",
      menu: "Open menu",
    },

    hero: {
      kicker: "PRIVACY • DATA PROTECTION",
      title: "Privacy Policy",
      body:
        "How SyncTechX collects, uses, protects and retains personal data in the course of its activities.",
      updated: "LAST UPDATED / 16 AUGUST 2026",
    },

    intro: {
      kicker: "01 / FRAMEWORK",
      title: "Privacy handled with the same rigour we apply to security.",
      body:
        "SyncTechX respects the privacy of the people it interacts with and is committed to processing personal data responsibly, transparently and proportionately to the purposes for which it is collected.",
    },

    sections: [
      {
        title: "Introduction",
        body: [
          '1.1. SyncTechX Lda. ("SyncTechX", "we", "us", "the Company"), a company based in Maputo, Mozambique, respects the privacy of all people with whom it interacts — clients, prospective clients, website visitors, client employees, partners and job applicants — and is committed to protecting personal data processed in the course of its activities.',

          '1.2. This Privacy Policy ("Policy") explains what personal data we collect, why we collect it, the legal basis for processing, how long we retain it, who we share it with, and the rights available to you in relation to your data.',

          "1.3. This Policy applies to: (a) visitors and users of the SyncTechX corporate website; (b) clients and prospective clients requesting proposals or engaging our Services; (c) individuals whose data may be incidentally accessed during the provision of cybersecurity assessment Services, as described in Section 7; and (d) applicants for collaboration or employment with SyncTechX.",

          "1.4. This Policy should be read together with our Terms & Conditions governing the provision of Services and, where applicable, the Data Processing Agreement attached to a specific Engagement Contract.",

          "1.5. By using our website, submitting a contact form or engaging our Services, the data subject acknowledges having read this Policy.",
        ],
      },

      {
        title: "Who We Are and How to Contact Us",
        body: [
          "2.1. SyncTechX Lda. is the entity responsible for processing the personal data described in this Policy in relation to its own commercial activities (website, contacts, proposals and client management).",

          "2.2. In the circumstances described in Section 7, SyncTechX may act as a data processor on behalf of a Client, with the Client acting as the data controller.",

          "2.3. For questions regarding this Policy or the processing of your personal data, you may contact us at:",

          "SyncTechX Lda.\nMaputo, Mozambique\nhello@synctechx.com\n+258 84 752 9665",
        ],
      },

      {
        title: "Personal Data We Collect",
        body: [
          "Depending on your relationship with us, we may collect the following categories of data:",

          "3.1. Contact and identification data — name, role, organisation, professional email address, telephone number and country/city.",

          '3.2. Communication data — content of messages submitted through the contact form ("What do you want to understand better?"), email correspondence, and records of calls or discovery meetings.',

          "3.3. Commercial and contractual data — requested proposals, signed contracts, engagement history, invoicing and payment information (excluding complete credit-card details, which are processed directly by third-party payment providers where applicable).",

          "3.4. Website technical data — IP address, device and browser type, pages visited, time spent, and interaction data collected through cookies and similar technologies (see Section 9).",

          "3.5. Data collected during cybersecurity Services — technical information about Client systems, networks, applications and configurations, and incidentally personal data of Client employees or end customers present in those systems (see Section 7).",

          "3.6. Application data — CV, cover letter, portfolio and contact information submitted by candidates for collaborations, internships or employment.",

          "3.7. We do not request or intend to collect special categories of personal data through our corporate website. Please do not include such information in messages submitted through our contact form.",
        ],
      },

      {
        title: "How We Collect Data",
        body: [
          "We collect personal data in three main ways:",

          "4.1. Directly from you — when you complete a contact form, request a proposal, sign a contract, send an email or submit an application.",

          "4.2. Automatically — through cookies and similar technologies when you visit our website (see Section 9).",

          "4.3. During the provision of Services — when, as part of a Client-authorised cybersecurity assessment, we access systems containing personal data relating to third parties, such as Client employees or customers, as described in Section 7.",
        ],
      },

      {
        title: "Purposes and Legal Basis for Processing",
        body: [
          "We process personal data for the following purposes and legal bases:",

          "Responding to contact requests and discovery conversations — Consent / pre-contractual steps requested by the data subject.",

          "Preparing and negotiating commercial proposals — Pre-contractual steps.",

          "Entering into and performing Service contracts — Contract performance.",

          "Invoicing and compliance with tax obligations — Legal obligation.",

          "Managing commercial relationships and follow-up communications — SyncTechX legitimate interest.",

          "Improving the website and user experience — Legitimate interest / consent for non-essential cookies.",

          "Fraud prevention and information security — Legitimate interest / legal obligation.",

          "Candidate assessment — Pre-contractual steps.",

          "Compliance with legal and regulatory obligations applicable to the cybersecurity sector — Legal obligation.",

          "5.2. Where processing is based on consent, consent may be withdrawn at any time without affecting the lawfulness of processing carried out before withdrawal.",

          "5.3. Where processing is based on legitimate interest, we ensure that such interest does not improperly override the fundamental rights and freedoms of the data subject.",
        ],
      },

      {
        title: "Marketing and Communications",
        body: [
          "6.1. We will only send commercial or informational communications to individuals who have provided their contact details in a relevant professional context or who have given explicit consent.",

          '6.2. All marketing communications will include a simple unsubscribe ("opt-out") mechanism. You may also exercise this right at any time by contacting us directly.',

          "6.3. We do not send marketing communications to job applicants or individuals whose data has been incidentally accessed during cybersecurity Services.",
        ],
      },

      {
        title: "Personal Data Accessed During Cybersecurity Services",
        body: [
          "7.1. This section specifically applies to personal data relating to third parties, such as employees, end customers or partners of a Client, that SyncTechX may incidentally access while performing cybersecurity assessments, penetration testing or infrastructure Services contracted by a Client.",

          "7.2. In these circumstances, SyncTechX acts as a data processor on behalf of the Client, who remains the data controller, and not as an independent controller of such data.",

          "7.3. SyncTechX commits to:",

          "• Access only the data strictly necessary to identify, validate and document a finding or vulnerability.",

          "• Not copy, extract or reproduce personal data beyond what is strictly necessary to demonstrate a finding in a report.",

          "• Obfuscate, anonymise or minimise exposure of personal data in evidence and reports wherever technically possible without compromising technical validity.",

          "• Securely delete temporary copies of personal data after completion and acceptance of the report by the Client, unless legal or contractual retention is required.",

          "• Not use such data for any purpose other than execution of the specified engagement.",

          "• Notify the Client without undue delay if a Security Incident involving personal data is identified during the work.",

          "7.4. Individuals whose data has been accessed in these circumstances should exercise their data protection rights directly with the Client/data controller. SyncTechX will reasonably cooperate with the Client in responding to such requests.",
        ],
      },

      {
        title: "Sharing Data with Third Parties",
        body: [
          "8.1. SyncTechX does not sell, rent or commercially trade personal data to third parties.",

          "8.2. We may share personal data with the following categories of recipients, only to the extent necessary:",

          "• Technology service providers — hosting, email, invoicing, cloud storage and project-management providers subject to contractual confidentiality and security obligations.",

          "• Specialist subcontractors — external professionals supporting a specific engagement and subject to confidentiality obligations equivalent to those applicable to SyncTechX.",

          "• Competent authorities — where required by law, court order or to protect the legal rights of SyncTechX, its Clients or third parties.",

          "• Professional advisers — lawyers, accountants or auditors subject to professional confidentiality obligations.",

          "8.3. We do not routinely transfer personal data outside Mozambique. Where this occurs, such as where websites or cloud tools use servers located abroad, we ensure that the recipient provides an appropriate level of protection through appropriate contractual clauses or equivalent safeguards.",
        ],
      },

      {
        title: "Cookies and Similar Technologies",
        body: [
          "9.1. The SyncTechX website may use cookies and similar technologies for technical operation, usage analysis and improving the user experience.",

          "9.2. We distinguish between:",

          "• Strictly necessary cookies — essential to website operation, such as language preferences and contact-form security. These do not require consent.",

          "• Analytics and performance cookies — used to understand how visitors use the website and improve content and navigation. These are subject to consent where applicable.",

          "9.3. You can manage or disable non-essential cookies through your browser settings. Disabling certain cookies may affect website functionality.",

          "9.4. We do not use third-party behavioural advertising cookies or share browsing data with advertising networks.",
        ],
      },

      {
        title: "Data Retention",
        body: [
          "10.1. We retain personal data only for as long as necessary to fulfil the purposes described in this Policy or as required by law.",

          "10.2. As a general reference:",

          "• Contact requests that do not result in a client relationship — up to 12 months after the last contact, unless earlier deletion is requested.",

          "• Contractual and invoicing data — for the period required under applicable Mozambican tax and commercial legislation, generally 5 to 10 years.",

          "• Cybersecurity assessment reports and evidence — for the period agreed in the Engagement Contract, after which they are deleted or returned to the Client unless legal retention is required.",

          "• Unsuccessful application data — up to 12 months unless the candidate consents to longer retention for future opportunities.",

          "• Analytics cookie data — according to the analytics tool used, typically up to 26 months.",

          "10.3. At the end of the applicable retention period, personal data is securely deleted or irreversibly anonymised.",
        ],
      },

      {
        title: "Data Security",
        body: [
          "11.1. As a cybersecurity company, SyncTechX applies to its own systems and data a level of technical rigour consistent with the practices it recommends to Clients, including, where applicable: least-privilege access controls, encryption of sensitive data at rest and in transit, multifactor authentication for critical internal systems, and access logging for confidential information.",

          "11.2. Despite these measures, no system is completely immune to risk. If a Security Incident affects personal data under our responsibility, we will notify affected data subjects and, where legally required, competent authorities without undue delay.",

          '11.3. Internal access to Client personal data and engagement findings is restricted to the team directly assigned to the project on a "need-to-know" basis.',
        ],
      },

      {
        title: "Data Subject Rights",
        body: [
          "12.1. Subject to applicable law, you have the right to:",

          "• Access the personal data we process about you.",

          "• Correct inaccurate or incomplete data.",

          "• Request deletion of your data where there is no legal basis for retention.",

          "• Object to processing based on legitimate interest, including direct marketing.",

          "• Request restriction of processing in certain circumstances.",

          "• Withdraw consent at any time without affecting the lawfulness of previous processing.",

          "• Lodge a complaint with the competent data protection authority in Mozambique, where applicable.",

          "12.2. To exercise any of these rights, contact us using the details in Section 2. We will respond within a reasonable period and no later than 30 days, subject to extension in complex cases with prior notification.",

          "12.3. We may request additional information to verify your identity before processing a request, in order to protect data against unauthorised access.",

          "12.4. Where your data has been incidentally accessed during a cybersecurity Service provided to a Client, the request should be addressed to the Client as data controller.",
        ],
      },

      {
        title: "Children's Data",
        body: [
          "13.1. SyncTechX Services and website are intended for professional and business audiences and are not directed at children.",

          "13.2. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected a child's data without appropriate consent, we will delete it.",
        ],
      },

      {
        title: "Third-Party Websites",
        body: [
          "Our website may contain links to third-party websites, such as social networks or partner websites. We are not responsible for the privacy practices of those websites and recommend reviewing their respective privacy policies before providing personal data.",
        ],
      },

      {
        title: "Changes to This Policy",
        body: [
          "15.1. We may periodically update this Policy to reflect legal, operational or Service changes.",

          '15.2. The "last updated" date at the top of this Policy will be revised whenever changes are made. Material changes that significantly affect your rights will be communicated prominently where applicable and reasonably possible.',

          "15.3. We recommend reviewing this Policy periodically.",
        ],
      },

      {
        title: "Applicable Law",
        body: [
          "This Policy is governed by the laws of the Republic of Mozambique, with the applicable provisions of SyncTechX's Terms & Conditions applying subsidiarily regarding governing law and dispute resolution.",
        ],
      },

      {
        title: "Contact",
        body: [
          "For questions, requests concerning your personal data or complaints relating to this Policy:",

          "SyncTechX Lda.\nMaputo, Mozambique\nhello@synctechx.com\n+258 84 752 9665",
        ],
      },
    ],

    closing: {
      kicker: "17 / CONTACT",
      title: "Have a question about your data?",
      body:
        "If you wish to exercise your rights, clarify this Policy or ask how we process personal data, we are available to help.",
      cta: "Contact SyncTechX",
    },

    footer: {
      line: "Security with context. Privacy with responsibility.",
      legal: "© 2026 SyncTechX Lda. All rights reserved.",
    },
  },
};

/* -------------------------------------------------------------------------- */
/* LOGO                                                                       */
/* -------------------------------------------------------------------------- */

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/"
      aria-label="SyncTechX home"
      className="flex items-center"
    >
      <img
        src="/logo-w.png"
        alt="SyncTechX"
        className={`h-8 w-auto object-contain ${
          light ? "brightness-100" : ""
        }`}
      />
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* PRIVACY POLICY                                                             */
/* -------------------------------------------------------------------------- */

export default function PrivacyPolicy() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);

  const t = copy[locale];

  const toggleSection = (index: number) => {
    setOpenSection((current) => (current === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-white text-[#101114]">
      {/* ------------------------------------------------------------------ */}
      {/* HEADER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/10 bg-[#101114] text-white">
        <div className="container flex h-[76px] items-center justify-between">
          <Logo light />

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="/#metodo"
              className="eyebrow text-white/75 transition-colors hover:text-[#1b4fff]"
            >
              {t.nav.method}
            </a>

            <a
              href="/#capacidades"
              className="eyebrow text-white/75 transition-colors hover:text-[#1b4fff]"
            >
              {t.nav.capabilities}
            </a>

            <a
              href="/#perspetiva"
              className="eyebrow text-white/75 transition-colors hover:text-[#1b4fff]"
            >
              {t.nav.perspective}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* LANGUAGE SWITCHER */}
            <div className="hidden items-center gap-1 border border-white/25 p-1 sm:flex">
              <button
                type="button"
                onClick={() => setLocale("pt")}
                aria-label="Switch to Portuguese"
                aria-pressed={locale === "pt"}
                className={`mono px-2 py-1 text-[10px] transition-colors ${
                  locale === "pt"
                    ? "bg-[#1b4fff] text-[#101114]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                PT
              </button>

              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-label="Switch to English"
                aria-pressed={locale === "en"}
                className={`mono px-2 py-1 text-[10px] transition-colors ${
                  locale === "en"
                    ? "bg-[#1b4fff] text-[#101114]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* CONTACT */}
            <a
              href="/#contacto"
              className="hidden border border-[#1b4fff] px-4 py-2.5 text-xs font-semibold text-[#1b4fff] transition-colors hover:bg-[#1b4fff] hover:text-[#101114] sm:block"
            >
              {t.nav.contact}
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={t.nav.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="p-2 transition-colors hover:text-[#1b4fff] lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/15 bg-[#101114] px-5 py-6 lg:hidden">
            <div className="container flex flex-col gap-5">
              <a
                href="/#metodo"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-white/80 transition-colors hover:text-[#1b4fff]"
              >
                {t.nav.method}
              </a>

              <a
                href="/#capacidades"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-white/80 transition-colors hover:text-[#1b4fff]"
              >
                {t.nav.capabilities}
              </a>

              <a
                href="/#perspetiva"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-white/80 transition-colors hover:text-[#1b4fff]"
              >
                {t.nav.perspective}
              </a>

              <a
                href="/#contacto"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-[#1b4fff]"
              >
                {t.nav.contact}
              </a>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setLocale("pt")}
                  className={`mono border px-3 py-2 text-[10px] transition-colors ${
                    locale === "pt"
                      ? "border-[#1b4fff] text-[#1b4fff]"
                      : "border-white/25 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  PT-PT
                </button>

                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`mono border px-3 py-2 text-[10px] transition-colors ${
                    locale === "en"
                      ? "border-[#1b4fff] text-[#1b4fff]"
                      : "border-white/25 text-white/70 hover:border-white/50 hover:text-white"
                  }`}
                >
                  EN-GB
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ---------------------------------------------------------------- */}
        {/* HERO                                                             */}
        {/* ---------------------------------------------------------------- */}

        <section className="grain relative overflow-hidden bg-[#101114] pt-[76px] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 dark-grid opacity-20"
          />

          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <div className="eyebrow text-[#1b4fff]">
                  {t.hero.kicker}
                </div>

                <div className="mono mt-10 text-[10px] text-white/35">
                  SYNCTECHX / LEGAL / PRIVACY / 01
                </div>
              </div>

              <div>
                <h1 className="display max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[.88] tracking-[-.055em]">
                  {t.hero.title}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                  {t.hero.body}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 bg-[#1b4fff]"
                  />

                  <span className="mono text-[10px] text-white/45">
                    {t.hero.updated}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container relative z-10">
            <div className="flex items-center justify-between border-t border-white/15 py-4">
              <span className="mono text-[9px] text-white/35">
                PRIVACY / DATA PROTECTION
              </span>

              <span className="mono text-[9px] text-[#1b4fff]">
                STATUS / ACTIVE
              </span>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* INTRO                                                            */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-[#f3f5f8] py-24 md:py-32">
          <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="eyebrow text-[#1b4fff]">
                {t.intro.kicker}
              </div>

              <div className="signal-rule mt-10 text-sm text-[#101114]/50">
                Privacy framework / SyncTechX
              </div>
            </div>

            <div>
              <h2 className="display max-w-4xl text-4xl font-medium leading-[.96] md:text-6xl">
                {t.intro.title}
              </h2>

              <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#101114]/65">
                {t.intro.body}
              </p>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* DOCUMENT                                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="bg-white py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.25fr_.75fr]">
              {/* DESKTOP SIDEBAR */}
              <aside className="hidden lg:block">
                <div className="sticky top-10">
                  <div className="eyebrow text-[#1b4fff]">
                    DOCUMENT INDEX
                  </div>

                  <div className="mt-8 border-l border-[#101114]/15">
                    {t.sections.map((section, index) => (
                      <a
                        key={section.title}
                        href={`#section-${index + 1}`}
                        className="group flex gap-3 border-l-2 border-transparent px-4 py-2 transition-colors hover:border-[#1b4fff]"
                      >
                        <span className="mono text-[9px] text-[#1b4fff]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-xs leading-relaxed text-[#101114]/55 group-hover:text-[#101114]">
                          {section.title}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              {/* DOCUMENT CONTENT */}
              <article className="max-w-4xl">
                {t.sections.map((section, index) => (
                  <section
                    id={`section-${index + 1}`}
                    key={section.title}
                    className="scroll-mt-24 border-t border-[#101114]/15 py-10 md:py-12"
                  >
                    <div className="grid gap-7 md:grid-cols-[80px_1fr]">
                      <div className="mono text-[10px] text-[#1b4fff]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h2 className="display text-3xl font-medium leading-tight md:text-4xl">
                          {section.title}
                        </h2>

                        <div className="mt-6 space-y-5">
                          {section.body.map(
                            (paragraph, paragraphIndex) => (
                              <p
                                key={`${section.title}-${paragraphIndex}`}
                                className="max-w-3xl whitespace-pre-line text-[15px] leading-[1.9] text-[#101114]/65"
                              >
                                {paragraph}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* MOBILE DOCUMENT INDEX                                            */}
        {/* ---------------------------------------------------------------- */}

        <section className="border-y border-[#101114]/15 bg-[#f3f5f8] lg:hidden">
          <div className="container py-12">
            <div className="eyebrow text-[#1b4fff]">
              DOCUMENT INDEX
            </div>

            <div className="mt-6 border-t border-[#101114]/15">
              {t.sections.map((section, index) => (
                <div
                  key={section.title}
                  className="border-b border-[#101114]/15"
                >
                  <button
                    type="button"
                    onClick={() => toggleSection(index)}
                    aria-expanded={openSection === index}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="mono text-[10px] text-[#1b4fff]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="display text-lg font-medium">
                        {section.title}
                      </span>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${
                        openSection === index
                          ? "rotate-180 text-[#1b4fff]"
                          : ""
                      }`}
                    />
                  </button>

                  {openSection === index && (
                    <div className="pb-6 pl-9 pr-4">
                      {section.body.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={`${section.title}-mobile-${paragraphIndex}`}
                            className="mb-4 whitespace-pre-line text-sm leading-relaxed text-[#101114]/65 last:mb-0"
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* CLOSING CTA                                                      */}
        {/* ---------------------------------------------------------------- */}

        <section className="relative overflow-hidden bg-[#101114] py-24 text-white md:py-32">
          <div className="absolute right-10 top-12 hidden lg:block">
            <div className="mono text-[10px] text-white/40">
              PRIVACY / CLOSE
            </div>

            <div className="mt-2 h-px w-36 bg-[#1b4fff]" />

            <div className="mt-2 mono text-[9px] text-[#1b4fff]">
              STATUS / CLEAR
            </div>
          </div>

          <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="eyebrow text-[#1b4fff]">
                {t.closing.kicker}
              </div>

              <div className="mt-10 flex items-center gap-3">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.4}
                  className="text-[#1b4fff]"
                />

                <span className="mono text-[10px] text-white/45">
                  PRIVACY / TRANSPARENCY
                </span>
              </div>
            </div>

            <div>
              <h2 className="display max-w-4xl text-4xl font-medium leading-[.95] md:text-6xl">
                {t.closing.title}
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
                {t.closing.body}
              </p>

              <a
                href="/#contacto"
                className="mt-9 inline-flex items-center gap-3 bg-[#1b4fff] px-6 py-4 text-sm font-bold text-[#101114] transition-colors hover:bg-[#dbe5ff]"
              >
                {t.closing.cta}
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                             */}
      {/* ------------------------------------------------------------------ */}

      <footer className="relative overflow-hidden bg-[#101114] pt-12 text-white">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 border-b border-white/15 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-white/40">
                Security with context
              </p>

              <p className="display max-w-lg text-xl font-medium leading-[1.2] sm:text-2xl md:text-[1.7rem]">
                {t.footer.line}
              </p>
            </div>

            <div className="flex shrink-0 gap-4">
              {/* EMAIL */}
              <a
                href="mailto:hello@synctechx.com"
                aria-label="Email SyncTechX"
                className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
              >
                <Mail size={16} />
              </a>

              {/* PHONE */}
              <a
                href="tel:+258847529665"
                aria-label="Call SyncTechX"
                className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
              >
                <span
                  aria-hidden="true"
                  className="text-sm font-medium"
                >
                  ☎
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/synctechx/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SyncTechX on LinkedIn"
                className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span>{t.footer.legal}</span>

              <a
                href="tel:+258847529665"
                className="transition-colors hover:text-white"
              >
                +258 84 752 9665
              </a>

              <span className="hidden text-white/20 sm:block">
                /
              </span>

              <a
                href="/terms"
                className="transition-colors hover:text-white"
              >
                Terms &amp; Conditions
              </a>

              <a
                href="/privacy"
                className="text-[#1b4fff]"
              >
                Privacy Policy
              </a>
            </div>

            <span className="mono">
              SECURITY WITH CONTEXT / 2026
            </span>
          </div>
        </div>

        {/* BACKGROUND WORDMARK */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative mt-[-0.5rem] h-[clamp(6rem,16vw,14rem)] select-none overflow-hidden"
        >
          <div className="absolute bottom-[-0.34em] left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(5.5rem,19vw,17rem)] font-black leading-none tracking-[-0.08em] text-white/[0.055]">
            SYNCTECHX
          </div>
        </div>
      </footer>
    </div>
  );
}