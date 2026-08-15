/* SyncTechX Signal Noir: asymmetric editorial landing page, navy field, ivory surfaces, chartreuse signals, bilingual PT-PT/EN-GB. */
import { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, Menu, X, ShieldCheck, Radar, Wrench, Users, RefreshCw, LockKeyhole, Activity, MapPin, Mail, Linkedin, ArrowRight, Code2, Smartphone, CloudCog } from 'lucide-react';
import { toast } from 'sonner';

const heroImage = '/hero.webp';
const operatingImage = '/diagrama.webp';
const layersImage = '/layers.webp';
const evidenceImage = '/evidence.webp';
const opsImage = '/walk.webp';
const networkImage = '/mapa.webp';
const markImage = '/logo-w.png';

type Locale = 'pt' | 'en';

const copy = {
  pt: {
    nav: { method: 'Método', capabilities: 'Capacidades', perspective: 'Perspetiva', contact: 'Falar connosco', menu: 'Menu' },
    hero: { kicker: 'CIBERSEGURANÇA • MAPUTO / REGIÃO', title: 'Veja o risco antes que ele chegue a si.', body: 'A SyncTechX combina avaliação ofensiva, engenharia defensiva e remediação prática para transformar incerteza digital em decisões claras.', primary: 'Mapear o risco', secondary: 'Conhecer o método' },
    metrics: [{ value: '01', label: 'ponto de partida', text: 'Uma avaliação autorizada, desenhada para a realidade do seu ambiente.' }, { value: '06', label: 'camadas de análise', text: 'Pessoas, perímetro, aplicações, rede, cloud e operação.' }, { value: '∞', label: 'melhoria contínua', text: 'O relatório abre o caminho para corrigir, testar e endurecer.' }],
    signal: { kicker: 'A LÓGICA DE TRABALHO', title: 'Não entregamos uma lista de alertas. Entregamos um caminho para agir.', body: 'Um scanner pode dizer que existem problemas. O nosso trabalho é separar ruído de risco real, explicar o impacto no negócio e acompanhar a correção até que possa ser verificada.', cta: 'Explorar a abordagem' },
    problem: { kicker: 'O QUE ESTÁ EM JOGO', title: 'A superfície de ataque cresce mais depressa do que a visibilidade.', intro: 'Credenciais expostas, permissões excessivas, configurações frágeis e processos pouco testados criam caminhos que não aparecem num organigrama. A questão não é se existe risco. É saber onde ele está e o que fazer primeiro.', cards: [{ title: 'Direção sem mapa', text: 'A liderança precisa de uma leitura priorizada, não de centenas de achados sem contexto.' }, { title: 'Equipa sem tempo', text: 'As equipas técnicas conhecem sintomas dispersos, mas precisam de uma visão independente do todo.' }, { title: 'Correção sem prova', text: 'Corrigir não basta. É preciso testar de novo e demonstrar que a melhoria se mantém.' }] },
    method: { kicker: 'O CICLO SYNCTECHX', title: 'Do primeiro sinal à postura mais forte.', steps: [{ n: '01', title: 'Descobrir', text: 'Definir âmbito, autorização, ativos críticos e hipóteses de ataque realistas.' }, { n: '02', title: 'Priorizar', text: 'Validar evidências e ligar vulnerabilidades ao impacto operacional e financeiro.' }, { n: '03', title: 'Corrigir', text: 'Remediar configurações, acessos, código e controlos com um plano executável.' }, { n: '04', title: 'Verificar', text: 'Retestar, treinar as pessoas e transformar as aprendizagens em rotina.' }] },
    capabilities: { kicker: 'CAPACIDADES MODULARES', title: 'A profundidade certa para a pergunta certa.', body: 'Cada engagement começa por uma conversa de descoberta. A partir daí, combinamos módulos que fazem sentido para o seu ambiente — sem prometer testes que não acrescentam decisão.', items: [{ icon: Radar, title: 'Externo & attack surface', text: 'Domínios, IPs públicos, serviços expostos, acesso remoto e perímetro.' }, { icon: ShieldCheck, title: 'Aplicações & APIs', text: 'Autenticação, autorização, sessões, validação e lógica de negócio.' }, { icon: LockKeyhole, title: 'Cloud & configurações', text: 'Identidade, armazenamento, permissões, logging e hardening.' }, { icon: Activity, title: 'Rede interna & wireless', text: 'Segmentação, endpoints, Wi-Fi empresarial e controlos de acesso.' }, { icon: Users, title: 'Pessoas & processos', text: 'Simulações autorizadas, awareness e comportamentos de risco.' }, { icon: Wrench, title: 'Arquitetura & prontidão', text: 'Backups, resposta a incidentes, desenho de rede e resiliência.' }] },
    report: { kicker: 'O RELATÓRIO COMO PRODUTO', title: 'Clareza executiva. Evidência técnica. Próximos passos.', body: 'A direção recebe o que precisa para decidir. A equipa recebe o que precisa para corrigir. Cada entrega é construída para poder ser usada no dia seguinte, não arquivada numa pasta.', list: ['Resumo executivo em linguagem de negócio', 'Mapa de risco e registo de findings', 'Narrativas de attack path com evidência', 'Roadmap de remediação por prioridade e owner', 'Retest status e oportunidades de hardening'], cta: 'Ver o que uma entrega inclui' },
    regional: { kicker: 'CONHECIMENTO LOCAL, PADRÃO REGIONAL', title: 'Construir confiança digital a partir de Maputo.', body: 'A SyncTechX nasce perto das operações que quer proteger: empresas em transformação, instituições, equipas distribuídas e infraestruturas que não podem parar. O nosso foco é combinar rigor internacional com contexto local — para que a segurança seja praticável, não apenas aspiracional.', location: 'Maputo, Moçambique', note: 'Disponível para engagements em Moçambique e na região.' },
    faq: { kicker: 'PERGUNTAS FREQUENTES', title: 'Antes de começarmos, alinhamos o essencial.', items: [{ q: 'A avaliação exige autorização formal?', a: 'Sim. Qualquer teste intrusivo, simulação humana ou revisão física é realizado apenas com autorização escrita, âmbito definido e regras de engagement acordadas.' }, { q: 'Trabalham apenas com empresas grandes?', a: 'Não. O modelo é modular e pode começar por um perímetro, aplicação ou ambiente prioritário, evoluindo conforme as necessidades e capacidade da organização.' }, { q: 'O relatório inclui remediação?', a: 'O relatório é o núcleo da avaliação. A remediação, hardening, formação e retest são etapas posteriores que podem ser contratadas com âmbito próprio.' }] },
    contact: { kicker: 'PRÓXIMO PASSO', title: 'A visibilidade começa com uma conversa de 30 minutos.', body: 'Partilhe o contexto. Nós ajudamos a definir o primeiro âmbito, as perguntas certas e o caminho mais útil para a sua organização.', name: 'Nome', org: 'Organização', email: 'Email profissional', message: 'O que quer compreender melhor?', submit: 'Pedir uma conversa', privacy: 'Ao enviar, concorda com um contacto inicial sobre este pedido.' },
    footer: { line: 'Descobrir. Explicar. Corrigir. Verificar.', legal: '© 2026 SyncTechX. Todos os direitos reservados.' }
  },
  en: {
    nav: { method: 'Method', capabilities: 'Capabilities', perspective: 'Perspective', contact: 'Talk to us', menu: 'Menu' },
    hero: { kicker: 'CYBERSECURITY • MAPUTO / REGION', title: 'See risk before it finds your business.', body: 'SyncTechX combines offensive assessment, defensive engineering and practical remediation to turn digital uncertainty into clear decisions.', primary: 'Map the risk', secondary: 'Explore the method' },
    metrics: [{ value: '01', label: 'starting point', text: 'An authorized assessment shaped around the reality of your environment.' }, { value: '06', label: 'analysis layers', text: 'People, perimeter, applications, network, cloud and operations.' }, { value: '∞', label: 'continuous improvement', text: 'The report opens the path to fix, test and harden.' }],
    signal: { kicker: 'HOW WE WORK', title: 'We do not deliver a list of alerts. We deliver a path to act.', body: 'A scanner can tell you there are problems. Our work is to separate noise from real risk, explain business impact and stay with the fix until it can be verified.', cta: 'Explore our approach' },
    problem: { kicker: 'WHAT IS AT STAKE', title: 'Attack surface grows faster than visibility.', intro: 'Exposed credentials, excessive permissions, fragile configurations and untested processes create paths that do not show up on an org chart. The question is not whether risk exists. It is where it sits and what to do first.', cards: [{ title: 'Direction without a map', text: 'Leadership needs a prioritized read, not hundreds of contextless findings.' }, { title: 'Teams without time', text: 'Technical teams know scattered symptoms but need an independent view of the whole.' }, { title: 'Fixes without proof', text: 'Fixing is not enough. You need to test again and prove the improvement holds.' }] },
    method: { kicker: 'THE SYNCTECHX CYCLE', title: 'From the first signal to a stronger posture.', steps: [{ n: '01', title: 'Discover', text: 'Set scope, authorization, critical assets and realistic attack hypotheses.' }, { n: '02', title: 'Prioritize', text: 'Validate evidence and connect vulnerabilities to operational and financial impact.' }, { n: '03', title: 'Fix', text: 'Remediate configurations, access, code and controls with an executable plan.' }, { n: '04', title: 'Verify', text: 'Retest, train people and turn learning into routine.' }] },
    capabilities: { kicker: 'MODULAR CAPABILITIES', title: 'The right depth for the right question.', body: 'Every engagement starts with a discovery conversation. From there, we combine modules that make sense for your environment — without promising tests that do not improve a decision.', items: [{ icon: Radar, title: 'External & attack surface', text: 'Domains, public IPs, exposed services, remote access and perimeter.' }, { icon: ShieldCheck, title: 'Applications & APIs', text: 'Authentication, authorization, sessions, validation and business logic.' }, { icon: LockKeyhole, title: 'Cloud & configuration', text: 'Identity, storage, permissions, logging and hardening.' }, { icon: Activity, title: 'Internal network & wireless', text: 'Segmentation, endpoints, enterprise Wi-Fi and access controls.' }, { icon: Users, title: 'People & process', text: 'Authorized simulations, awareness and risk behaviors.' }, { icon: Wrench, title: 'Architecture & readiness', text: 'Backups, incident response, network design and resilience.' }] },
    report: { kicker: 'THE REPORT AS A PRODUCT', title: 'Executive clarity. Technical evidence. Next steps.', body: 'Leadership gets what it needs to decide. Teams get what they need to fix. Every deliverable is built to be used the next day, not archived in a folder.', list: ['Executive summary in business language', 'Risk map and finding register', 'Attack-path narratives with evidence', 'Remediation roadmap by priority and owner', 'Retest status and hardening opportunities'], cta: 'See what a deliverable includes' },
    regional: { kicker: 'LOCAL KNOWLEDGE, REGIONAL STANDARD', title: 'Build digital trust from Maputo.', body: 'SyncTechX is born close to the operations it aims to protect: transforming businesses, institutions, distributed teams and infrastructure that cannot stop. We combine international rigor with local context so security becomes practical, not aspirational.', location: 'Maputo, Mozambique', note: 'Available for engagements across Mozambique and the region.' },
    faq: { kicker: 'FREQUENTLY ASKED', title: 'Before we start, we align on what matters.', items: [{ q: 'Does an assessment require formal authorization?', a: 'Yes. Any intrusive test, human simulation or physical review is performed only with written authorization, defined scope and agreed rules of engagement.' }, { q: 'Do you only work with large companies?', a: 'No. The model is modular and can start with a priority perimeter, application or environment, then expand as needs and capacity evolve.' }, { q: 'Does the report include remediation?', a: 'The report is the core assessment deliverable. Remediation, hardening, training and retesting are subsequent steps that can be commissioned with their own scope.' }] },
    contact: { kicker: 'NEXT STEP', title: 'Visibility starts with a 30-minute conversation.', body: 'Share the context. We will help define the first scope, the right questions and the most useful path for your organization.', name: 'Name', org: 'Organization', email: 'Work email', message: 'What do you want to understand better?', submit: 'Request a conversation', privacy: 'By submitting, you agree to an initial contact about this request.' },
    footer: { line: 'Discover. Explain. Fix. Verify.', legal: '© 2026 SyncTechX. All rights reserved.' }
  }
} as const;

const expandedCopy = {
  pt: {
    explainer: { kicker: 'EM TERMOS SIMPLES', title: 'A SyncTechX ajuda a sua organização a saber onde está exposta — e o que fazer a seguir.', body: 'Começamos por compreender o seu ambiente, validamos o que um atacante poderia explorar e traduzimos cada descoberta para impacto no negócio. Depois, ajudamos a corrigir, formar as equipas e confirmar se as melhorias funcionam.', labels: ['Pessoas', 'Aplicações', 'Rede', 'Cloud', 'Operação'] },
    operating: { kicker: 'COMO OPERAMOS', title: 'Um engagement com princípio, meio e prova.', body: 'O nosso trabalho é estruturado para que cada fase produza uma decisão útil. O âmbito define o que pode ser testado, a evidência define o que importa, e o retest mostra o que mudou.', caption: 'CICLO DE MELHORIA / 06 ETAPAS' },
    layers: { kicker: 'UMA LEITURA COMPLETA', title: 'O risco não vive num único lugar.', body: 'Uma configuração segura pode falhar quando uma identidade tem permissões a mais. Uma aplicação pode estar corrigida, mas exposta por uma rede mal segmentada. Avaliamos as ligações entre camadas, porque é aí que surgem os caminhos de ataque mais relevantes.', caption: 'MODELO DE SUPERFÍCIE / VERSÃO 01' },
    evidence: { kicker: 'DA EVIDÊNCIA À DECISÃO', title: 'O detalhe técnico só tem valor quando orienta uma ação.', body: 'Recolhemos evidência suficiente para explicar o problema sem transformar o relatório num arquivo inacessível. Cada finding vem acompanhado de contexto, prioridade, owner recomendado e próximo passo.', caption: 'EVIDENCE NOTE / PRIORITY FINDING' }
  },
  en: {
    explainer: { kicker: 'IN PLAIN TERMS', title: 'SyncTechX helps your organization understand where it is exposed — and what to do next.', body: 'We start by understanding your environment, validate what an attacker could realistically exploit, and translate each discovery into business impact. Then we help fix, train teams and verify that improvements hold.', labels: ['People', 'Applications', 'Network', 'Cloud', 'Operations'] },
    operating: { kicker: 'HOW WE OPERATE', title: 'An engagement with a beginning, a middle and proof.', body: 'Our work is structured so every phase produces a useful decision. Scope defines what can be tested, evidence defines what matters, and retesting shows what changed.', caption: 'IMPROVEMENT CYCLE / 06 STAGES' },
    layers: { kicker: 'A COMPLETE READ', title: 'Risk does not live in one place.', body: 'A secure configuration can fail when an identity has too much access. An application can be patched but still exposed by a poorly segmented network. We assess the connections between layers, because that is where meaningful attack paths emerge.', caption: 'SURFACE MODEL / VERSION 01' },
    evidence: { kicker: 'FROM EVIDENCE TO DECISION', title: 'Technical detail only matters when it points to an action.', body: 'We collect enough evidence to explain the problem without turning the report into an inaccessible archive. Every finding includes context, priority, a recommended owner and a next step.', caption: 'EVIDENCE NOTE / PRIORITY FINDING' }
  }
} as const;

const additionalCopy = {
  pt: {
    stats: { kicker: 'SINAIS DE EXPERIÊNCIA', title: 'Experiência que se mede no trabalho entregue.', items: [{ value: '+2', label: 'anos no mercado', text: 'A construir capacidade de segurança e tecnologia a partir de Moçambique.' }, { value: '+30', label: 'relatórios produzidos', text: 'Entregas estruturadas para decisão executiva e ação técnica.' }, { value: '+70', label: 'vulnerabilidades encontradas', text: 'Achados validados, priorizados e traduzidos em próximos passos.' }] },
    services: { kicker: 'CAPACIDADES DIGITAIS', title: 'Tecnologia que completa a segurança.', items: [{ icon: Code2, title: 'Desenvolvimento Web', text: 'Websites modernos, rápidos e responsivos para o seu negócio.' }, { icon: Smartphone, title: 'Aplicativos Móveis', text: 'Apps intuitivos para Android e iOS, ligados aos seus clientes.' }, { icon: CloudCog, title: 'Infraestrutura & Cloud', text: 'Configuração, otimização e monitoramento de servidores e cloud.' }] },
    partners: { kicker: 'CLIENTES & PARCEIROS', title: 'Uma rede em construção, com espaço para os vossos logótipos.', note: 'Os logótipos abaixo são espaços reservados e serão substituídos pelos assets reais dos clientes e parceiros autorizados.' }
  },
  en: {
    stats: { kicker: 'EXPERIENCE SIGNALS', title: 'Experience measured in delivered work.', items: [{ value: '+2', label: 'years in market', text: 'Building security and technology capability from Mozambique.' }, { value: '+30', label: 'reports produced', text: 'Structured deliverables for executive decisions and technical action.' }, { value: '+70', label: 'vulnerabilities found', text: 'Validated findings translated into prioritized next steps.' }] },
    services: { kicker: 'DIGITAL CAPABILITIES', title: 'Technology that completes security.', items: [{ icon: Code2, title: 'Web Development', text: 'Modern, fast and responsive websites for your business.' }, { icon: Smartphone, title: 'Mobile Applications', text: 'Intuitive Android and iOS apps connected to your customers.' }, { icon: CloudCog, title: 'Infrastructure & Cloud', text: 'Configuration, optimization and monitoring for servers and cloud.' }] },
    partners: { kicker: 'CLIENTS & PARTNERS', title: 'A growing network, with room for your real logos.', note: 'The marks below are clearly labeled placeholders and will be replaced with approved client and partner assets.' }
  }
} as const;

function Logo({ light = false }: { light?: boolean }) {
  return <a href="#top" className="group flex items-center gap-3" aria-label="SyncTechX home"><span className="relative grid h-10 w-10 place-items-center overflow-hidden border border-[#1b4fff]/70 bg-[#1b4fff]/10"><span className="absolute h-px w-8 rotate-45 bg-[#1b4fff]/60 transition-transform duration-300 group-hover:rotate-0"/><span className="absolute h-px w-8 -rotate-45 bg-[#1b4fff]/60 transition-transform duration-300 group-hover:rotate-0"/><img src={markImage} alt="" className="relative z-10 h-8 w-8 object-contain" /></span><span className={`display text-xl font-semibold tracking-[-.07em] ${light ? 'text-[#ffffff]' : 'text-[#101114]'}`}>SyncTech<span className={light ? 'text-[#1b4fff]' : 'text-[#1b4fff]'}>X</span></span></a>
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const t = copy[locale];
  const x = expandedCopy[locale];
  const a = additionalCopy[locale];
  const switchLocale = (next: Locale) => setLocale(next);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); toast.success(locale === 'pt' ? 'Pedido preparado. Ligaremos em breve.' : 'Request prepared. We will be in touch shortly.'); };

  return <div id="top" className="min-h-screen bg-[#ffffff] text-[#101114]">
    <header className="absolute inset-x-0 top-0 z-40 border-b border-white/10 text-white"><div className="container flex h-[76px] items-center justify-between"><Logo light /><nav className="hidden items-center gap-8 lg:flex"><a href="#metodo" className="eyebrow text-white/75 transition-colors hover:text-[#1b4fff]">{t.nav.method}</a><a href="#capacidades" className="eyebrow text-white/75 transition-colors hover:text-[#1b4fff]">{t.nav.capabilities}</a><a href="#perspetiva" className="eyebrow text-white/75 transition-colors hover:text-[#1b4fff]">{t.nav.perspective}</a></nav><div className="flex items-center gap-3"><div className="hidden items-center gap-1 border border-white/25 p-1 sm:flex"><button onClick={() => switchLocale('pt')} className={`mono px-2 py-1 text-[10px] ${locale === 'pt' ? 'bg-[#1b4fff] text-[#101114]' : 'text-white/70'}`}>PT</button><button onClick={() => switchLocale('en')} className={`mono px-2 py-1 text-[10px] ${locale === 'en' ? 'bg-[#1b4fff] text-[#101114]' : 'text-white/70'}`}>EN</button></div><a href="#contacto" className="btn-press hidden border border-[#1b4fff] px-4 py-2.5 text-xs font-semibold text-[#1b4fff] transition-colors hover:bg-[#1b4fff] hover:text-[#101114] sm:block">{t.nav.contact}</a><button aria-label={t.nav.menu} onClick={() => setMenuOpen(!menuOpen)} className="p-2 lg:hidden">{menuOpen ? <X /> : <Menu />}</button></div></div>{menuOpen && <div className="border-t border-white/15 bg-[#101114] px-5 py-6 lg:hidden"><div className="container flex flex-col gap-5"><a href="#metodo" onClick={() => setMenuOpen(false)} className="eyebrow text-white/80">{t.nav.method}</a><a href="#capacidades" onClick={() => setMenuOpen(false)} className="eyebrow text-white/80">{t.nav.capabilities}</a><a href="#perspetiva" onClick={() => setMenuOpen(false)} className="eyebrow text-white/80">{t.nav.perspective}</a><div className="flex items-center gap-2 pt-2"><button onClick={() => switchLocale('pt')} className="mono border border-[#1b4fff] px-3 py-2 text-[10px] text-[#1b4fff]">PT-PT</button><button onClick={() => switchLocale('en')} className="mono border border-white/25 px-3 py-2 text-[10px] text-white/70">EN-GB</button></div></div></div>}</header>

    <main>
      <section className="grain relative min-h-[620px] overflow-hidden bg-[#101114] text-[#ffffff]"><div className="absolute inset-0 dark-grid opacity-20"/><div className="container relative z-10 flex min-h-[620px] items-center py-28 lg:py-24"><div className="grid w-full items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16"><div className="max-w-2xl"><div className="reveal eyebrow mb-6 text-[#1b4fff]">{t.hero.kicker}</div><h1 className="reveal reveal-d1 display max-w-xl text-[clamp(3rem,6vw,6.2rem)] font-medium leading-[.92]">{t.hero.title}</h1><p className="reveal reveal-d2 mt-7 max-w-lg text-base leading-relaxed text-white/72 md:text-lg">{t.hero.body}</p><div className="reveal reveal-d3 mt-8 flex flex-wrap items-center gap-5"><a href="#contacto" className="btn-press inline-flex items-center gap-3 bg-[#1b4fff] px-6 py-4 text-sm font-bold text-[#101114] hover:bg-[#dbe5ff]">{t.hero.primary}<ArrowUpRight size={17}/></a><a href="#metodo" className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm text-white/80 hover:border-[#1b4fff] hover:text-[#1b4fff]">{t.hero.secondary}<ArrowRight size={15}/></a></div></div><div className="relative"><div className="border border-white/20 bg-white/5 p-3 shadow-2xl shadow-black/20"><img src={heroImage} alt="Ilustração compacta de uma superfície de ataque digital" className="aspect-[4/3] w-full object-cover"/><div className="flex items-center justify-between border-t border-white/15 px-2 pt-3"><span className="mono text-[10px] text-white/50">SYS/01 — EXPOSURE MAP</span><span className="flex items-center gap-2 mono text-[10px] text-[#1b4fff]"><span className="h-2 w-2 rounded-full bg-[#1b4fff]"/>SCAN / READY</span></div></div><div className="mono mt-3 text-right text-[10px] text-white/45">— visibility before velocity</div></div></div></div></section>

      <section className="border-b border-[#101114]/15 bg-[#ffffff]"><div className="container grid divide-y divide-[#101114]/15 md:grid-cols-3 md:divide-x md:divide-y-0">{t.metrics.map((m, i) => <div key={m.label} className="flex gap-5 py-8 md:px-7 md:first:pl-0 md:last:pr-0"><div className="display text-4xl font-medium text-[#1b4fff]">{m.value}</div><div><div className="mono mb-2 text-[10px] uppercase tracking-[.15em] text-[#101114]/50">{m.label}</div><p className="max-w-xs text-sm leading-relaxed text-[#101114]/65">{m.text}</p></div></div>)}</div></section>

      <section className="bg-[#f3f5f8] py-24 md:py-32"><div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div><div className="eyebrow text-[#1b4fff]">{x.explainer.kicker}</div><h2 className="display mt-8 max-w-2xl text-4xl font-medium leading-[.98] md:text-6xl">{x.explainer.title}</h2><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#101114]/65">{x.explainer.body}</p><div className="mt-9 flex flex-wrap gap-2">{x.explainer.labels.map((label, i) => <span key={label} className="mono border border-[#101114]/20 bg-white px-3 py-2 text-[10px] uppercase"><span className="mr-2 text-[#1b4fff]">0{i + 1}</span>{label}</span>)}</div></div><div className="relative"><img src={layersImage} alt="Diagrama ilustrativo das camadas de risco" className="w-full object-cover"/><div className="absolute bottom-4 left-4 bg-white/90 px-4 py-3 backdrop-blur"><div className="mono text-[9px] text-[#1b4fff]">LAYERED VIEW / 05</div><div className="mt-1 text-xs text-[#101114]/65">A organização como sistema conectado.</div></div></div></div></section>

      <section className="bg-[#101114] py-20 text-[#ffffff] md:py-24"><div className="container"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="eyebrow text-[#1b4fff]">{a.stats.kicker}</div><h2 className="display mt-6 max-w-2xl text-4xl font-medium leading-[.98] md:text-5xl">{a.stats.title}</h2></div><div className="mono text-[10px] text-white/45">FIELD RECORD / 2026</div></div><div className="grid gap-px bg-white/15 md:grid-cols-3">{a.stats.items.map((item) => <div key={item.label} className="bg-[#101114] p-6 md:p-8"><div className="display text-6xl font-medium text-[#1b4fff]">{item.value}</div><div className="mono mt-4 text-[10px] uppercase tracking-[.12em] text-white/65">{item.label}</div><p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">{item.text}</p></div>)}</div></div></section>

      <section className="border-b border-[#101114]/15 bg-[#ffffff] py-20 md:py-24">
  <div className="container">
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <div className="eyebrow text-[#1b4fff]">{a.partners.kicker}</div>

        <h2 className="display mt-5 max-w-2xl text-3xl font-medium leading-tight md:text-4xl">
          {a.partners.title}
        </h2>
      </div>

      <p className="max-w-md text-sm leading-relaxed text-[#101114]/55">
        {a.partners.note}
      </p>
    </div>

    <div className="logo-marquee overflow-hidden border-y border-[#101114]/15 py-4">
      <div className="logo-track flex min-w-max gap-3">
        {[
          {
            src: "/clientes/pd.png",
            alt: "Client 01",
          },
          {
            src: "/clientes/amecc.png",
            alt: "Partner 02",
          },
          {
            src: "/clientes/ejem.png",
            alt: "Client 03",
          },
          {
            src: "/clientes/cacep.png",
            alt: "Partner 04",
          },
          {
            src: "/clientes/chairman.png",
            alt: "Client 05",
          },
        ]
          .concat([
            {
              src: "/clientes/m.png",
              alt: "Client 01",
            },
            {
              src: "/clients/bander.jpg",
              alt: "Partner 02",
            },
            {
              src: "/clientes/bac.png",
              alt: "Client 03",
            },
            {
              src: "/clientes/misau.png",
              alt: "Partner 04",
            },
          ])
          .map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex h-20 w-48 items-center justify-center border border-[#101114]/15 bg-[#f3f5f8] px-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  </div>
</section>

      <section id="perspetiva" className="relative overflow-hidden bg-[#ffffff] py-24 md:py-36"><div className="absolute right-10 top-14 hidden text-right lg:block"><div className="mono text-[10px] text-[#101114]/35">DOSSIER / 01</div><div className="mt-2 h-px w-24 bg-[#101114]/20"/><div className="mt-2 mono text-[9px] text-[#1b4fff]">SIGNAL / CLEAR</div></div><div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><div className="eyebrow text-[#1b4fff]">{t.signal.kicker}</div><div className="signal-rule mt-10 text-sm text-[#101114]/55">Operar com clareza é uma vantagem competitiva.</div></div><div className="max-w-4xl"><h2 className="display text-4xl font-medium leading-[.98] md:text-6xl">{t.signal.title}</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#101114]/65">{t.signal.body}</p><a href="#metodo" className="mt-9 inline-flex items-center gap-2 border-b border-[#101114] pb-2 text-sm font-semibold">{t.signal.cta}<ArrowRight size={16}/></a></div></div></section>

      <section className="bg-[#ffffff] py-24 text-[#101114] md:py-32"><div className="container grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow text-[#1b4fff]">{t.problem.kicker}</div><h2 className="display mt-8 text-4xl font-medium leading-tight md:text-6xl">{t.problem.title}</h2><p className="mt-8 max-w-md text-base leading-relaxed text-[#101114]/65">{t.problem.intro}</p></div><div className="grid gap-px bg-[#101114]/15 sm:grid-cols-3">{t.problem.cards.map((c, i) => <div key={c.title} className="bg-[#ffffff] p-6 md:p-8"><div className="mono mb-16 text-[10px] text-[#1b4fff]">0{i + 1} / 03</div><h3 className="display text-2xl font-medium">{c.title}</h3><p className="mt-4 text-sm leading-relaxed text-[#101114]/60">{c.text}</p></div>)}</div></div></section>

      <section id="metodo" className="relative overflow-hidden bg-[#f3f5f8] py-24 md:py-32"><div className="absolute bottom-10 right-10 hidden lg:block"><div className="mono text-[10px] text-[#101114]/35">TRACE / 04—VERIFY</div><div className="mt-3 flex items-center gap-2"><span className="h-2 w-2 bg-[#1b4fff]"/><span className="h-px w-24 bg-[#101114]/25"/><span className="h-2 w-2 border border-[#1b4fff]"/></div></div><div className="container"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><div className="eyebrow text-[#1b4fff]">{t.method.kicker}</div><h2 className="display mt-8 max-w-md text-4xl font-medium leading-[.98] md:text-6xl">{t.method.title}</h2></div><div className="grid border-l border-[#101114]/20">{t.method.steps.map(s => <div key={s.n} className="group grid gap-5 border-b border-[#101114]/20 p-6 pl-7 transition-colors hover:bg-[#ffffff] md:grid-cols-[90px_1fr] md:p-8"><div className="mono text-xs text-[#1b4fff]">{s.n}</div><div><h3 className="display text-2xl font-medium">{s.title}</h3><p className="mt-3 max-w-lg text-sm leading-relaxed text-[#101114]/60">{s.text}</p></div></div>)}</div></div></div></section>

      <section className="bg-[#ffffff] py-24 md:py-32"><div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]"><div className="relative order-2 lg:order-1"><img src={operatingImage} alt="Diagrama ilustrativo do ciclo de operação da SyncTechX" className="w-full object-cover"/><div className="absolute bottom-5 left-5 mono bg-[#101114] px-3 py-2 text-[10px] text-white">{x.operating.caption}</div></div><div className="order-1 lg:order-2"><div className="eyebrow text-[#1b4fff]">{x.operating.kicker}</div><h2 className="display mt-8 max-w-xl text-4xl font-medium leading-[.98] md:text-6xl">{x.operating.title}</h2><p className="mt-8 max-w-xl text-base leading-relaxed text-[#101114]/65">{x.operating.body}</p><div className="mt-9 grid grid-cols-2 gap-px bg-[#101114]/15"><div className="bg-[#ffffff] p-5"><div className="mono text-[10px] text-[#1b4fff]">01—03</div><div className="mt-5 text-sm font-semibold">Compreender e testar</div></div><div className="bg-[#ffffff] p-5"><div className="mono text-[10px] text-[#1b4fff]">04—06</div><div className="mt-5 text-sm font-semibold">Corrigir e confirmar</div></div></div></div></div></section>

      <section id="capacidades" className="relative overflow-hidden bg-[#ffffff] py-24 md:py-32"><div className="absolute left-8 top-9 hidden lg:block"><div className="mono text-[10px] text-[#101114]/35">CAPABILITY REGISTER / 06</div><div className="mt-2 h-px w-36 bg-[#101114]/20"/></div><div className="container"><div className="mb-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><div className="eyebrow text-[#1b4fff]">{t.capabilities.kicker}</div></div><div><h2 className="display max-w-3xl text-4xl font-medium leading-[.98] md:text-6xl">{t.capabilities.title}</h2><p className="mt-7 max-w-2xl text-base leading-relaxed text-[#101114]/65">{t.capabilities.body}</p></div></div><div className="grid gap-px bg-[#101114]/15 sm:grid-cols-2 lg:grid-cols-3">{t.capabilities.items.map((item, i) => { const Icon = item.icon; return <div key={item.title} className="group min-h-[230px] bg-[#ffffff] p-7 transition-colors hover:bg-[#f3f5f8]"><div className="flex items-start justify-between"><Icon size={23} strokeWidth={1.4} className="text-[#1b4fff]"/><span className="mono text-[10px] text-[#101114]/40">0{i + 1}</span></div><h3 className="display mt-14 text-xl font-medium">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#101114]/60">{item.text}</p></div>})}</div></div></section>

      <section className="bg-[#f3f5f8] py-24 md:py-28"><div className="container"><div className="mb-12 grid gap-8 lg:grid-cols-[.75fr_1.25fr]"><div><div className="eyebrow text-[#1b4fff]">{a.services.kicker}</div></div><div><h2 className="display max-w-2xl text-4xl font-medium leading-[.98] md:text-5xl">{a.services.title}</h2></div></div><div className="grid gap-px bg-[#101114]/15 md:grid-cols-3">{a.services.items.map((item, i) => { const Icon = item.icon; return <div key={item.title} className="bg-[#f3f5f8] p-6 md:p-8"><div className="flex items-start justify-between"><Icon size={22} strokeWidth={1.5} className="text-[#1b4fff]"/><span className="mono text-[10px] text-[#101114]/40">0{i + 1}</span></div><h3 className="display mt-12 text-2xl font-medium">{item.title}</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-[#101114]/60">{item.text}</p></div>})}</div></div></section>

      <section className="bg-[#f3f5f8] py-24 text-[#101114] md:py-32"><div className="container grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]"><div className="relative overflow-hidden"><img src={networkImage} alt="Mapa conceptual de caminhos de ataque e remediação" className="h-[420px] w-full object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"/><div className="absolute bottom-6 left-6 mono text-[10px] text-[#1b4fff]">MODEL / ATTACK PATH / 04</div></div><div><div className="eyebrow text-[#1b4fff]">{t.report.kicker}</div><h2 className="display mt-8 text-4xl font-medium leading-[.98] md:text-6xl">{t.report.title}</h2><p className="mt-8 text-base leading-relaxed text-[#101114]/65">{t.report.body}</p><ul className="mt-8 space-y-3 border-t border-[#101114]/15 pt-6">{t.report.list.map(item => <li key={item} className="flex items-start gap-3 text-sm text-[#101114]/75"><Check size={16} className="mt-0.5 shrink-0 text-[#1b4fff]"/>{item}</li>)}</ul><a href="#contacto" className="mt-9 inline-flex items-center gap-2 border-b border-[#1b4fff] pb-2 text-sm font-semibold text-[#1b4fff]">{t.report.cta}<ArrowRight size={16}/></a></div></div></section>

      <section className="bg-[#ffffff] py-24 md:py-32"><div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]"><div className="relative"><img src={evidenceImage} alt="Mesa de trabalho com diagramas e evidência de avaliação" className="w-full object-cover grayscale-[35%]"/><div className="absolute left-5 top-5 border border-white/70 bg-black/40 px-3 py-2 mono text-[10px] text-white">{x.evidence.caption}</div></div><div><div className="eyebrow text-[#1b4fff]">{x.evidence.kicker}</div><h2 className="display mt-8 max-w-xl text-4xl font-medium leading-[.98] md:text-6xl">{x.evidence.title}</h2><p className="mt-8 max-w-xl text-base leading-relaxed text-[#101114]/65">{x.evidence.body}</p><div className="mt-8 border-l-2 border-[#1b4fff] pl-5 text-sm leading-relaxed text-[#101114]/65">A nossa entrega liga evidência, impacto, prioridade e ação — para que a segurança possa avançar dentro da operação.</div></div></div></section>

      <section className="bg-[#f4f6fa] py-24 md:py-32"><div className="container grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]"><div><div className="eyebrow text-[#1b4fff]">{t.regional.kicker}</div><h2 className="display mt-8 max-w-3xl text-4xl font-medium leading-[.98] md:text-6xl">{t.regional.title}</h2><p className="mt-8 max-w-xl text-lg leading-relaxed text-[#101114]/65">{t.regional.body}</p><div className="mt-10 flex flex-wrap gap-3"><span className="mono border border-[#101114]/25 px-4 py-3 text-[10px] uppercase"><MapPin size={13} className="mr-2 inline text-[#1b4fff]"/>{t.regional.location}</span><span className="mono border border-[#101114]/25 px-4 py-3 text-[10px] uppercase">{t.regional.note}</span></div></div><div className="relative"><img src={opsImage} alt="Equipa de operações de segurança a analisar dados" className="aspect-[4/5] w-full object-cover grayscale-[55%] contrast-105"/><div className="absolute inset-4 border border-white/40"/><div className="absolute left-7 top-7 mono text-[10px] text-white drop-shadow">MAPUTO / FIELD UNIT 01</div><div className="absolute right-7 top-7 flex items-center gap-2 mono text-[10px] text-[#1b4fff]"><span className="h-2 w-2 rounded-full bg-[#1b4fff]"/>SYNC</div><div className="absolute -bottom-5 -left-5 bg-[#1b4fff] p-5 text-[#101114] md:-left-8"><div className="mono text-[10px]">FIELD NOTE / 001</div><div className="display mt-3 text-2xl font-medium">Security is a practice.</div></div></div></div></section>

      <section className="bg-[#ffffff] py-24 md:py-32"><div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><div className="eyebrow text-[#1b4fff]">{t.faq.kicker}</div><h2 className="display mt-8 text-4xl font-medium leading-tight md:text-5xl">{t.faq.title}</h2></div><div className="border-t border-[#101114]/20">{t.faq.items.map((item, i) => <div key={item.q} className="border-b border-[#101114]/20"><button onClick={() => setFaq(faq === i ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left"><span className="display text-xl font-medium">{item.q}</span><ChevronDown size={20} className={`shrink-0 transition-transform ${faq === i ? 'rotate-180 text-[#1b4fff]' : ''}`}/></button>{faq === i && <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-[#101114]/65">{item.a}</p>}</div>)}</div></div></section>

      <section id="contacto" className="relative overflow-hidden bg-[#101114] py-24 text-[#ffffff] md:py-32"><div className="absolute right-10 top-12 hidden lg:block"><div className="mono text-[10px] text-white/40">CONTACT / INTAKE</div><div className="mt-2 h-px w-36 bg-[#1b4fff]"/><div className="mt-2 mono text-[9px] text-[#1b4fff]">STATUS / OPEN</div></div><div className="container grid gap-12 lg:grid-cols-[.85fr_1.15fr]"><div><div className="eyebrow text-[#1b4fff]">{t.contact.kicker}</div><h2 className="display mt-8 max-w-xl text-5xl font-medium leading-[.93] md:text-7xl">{t.contact.title}</h2><p className="mt-8 max-w-md text-base leading-relaxed text-white/65">{t.contact.body}</p><div className="signal-rule mt-10 text-sm text-white/50">A primeira decisão é definir o que precisa de ser visto.</div></div><form onSubmit={handleSubmit} className="border-t border-white/20 pt-2"><label className="block border-b border-white/20 py-5"><span className="mono text-[10px] uppercase text-white/50">{t.contact.name}</span><input required className="mt-2 block w-full bg-transparent text-lg text-white outline-none placeholder:text-white/35" placeholder="Ada Lovelace" /></label><label className="block border-b border-white/20 py-5"><span className="mono text-[10px] uppercase text-white/50">{t.contact.org}</span><input required className="mt-2 block w-full bg-transparent text-lg text-white outline-none placeholder:text-white/35" placeholder="Organization" /></label><label className="block border-b border-white/20 py-5"><span className="mono text-[10px] uppercase text-white/50">{t.contact.email}</span><input required type="email" className="mt-2 block w-full bg-transparent text-lg text-white outline-none placeholder:text-white/35" placeholder="you@company.com" /></label><label className="block border-b border-white/20 py-5"><span className="mono text-[10px] uppercase text-white/50">{t.contact.message}</span><textarea required rows={3} className="mt-2 block w-full resize-none bg-transparent text-lg text-white outline-none placeholder:text-white/35" placeholder="..." /></label><div className="flex flex-wrap items-center justify-between gap-5 pt-7"><button type="submit" className="btn-press inline-flex items-center gap-3 bg-[#1b4fff] px-6 py-4 text-sm font-bold text-[#101114] hover:bg-[#dbe5ff]">{t.contact.submit}<ArrowUpRight size={17}/></button><span className="max-w-xs text-[11px] leading-relaxed text-white/45">{t.contact.privacy}</span></div></form></div></section>
    </main>

   <footer className="relative overflow-hidden bg-[#101114] pt-12 text-[#ffffff]">
  <div className="container relative z-10">
    <div className="flex flex-col gap-10 border-b border-white/15 pb-10 md:flex-row md:items-end md:justify-between">
      <div className="max-w-xl">
        <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-white/40">
          Security with context
        </p>

        <p className="display max-w-lg text-xl font-medium leading-[1.2] sm:text-2xl md:text-[1.7rem]">
          Think of us as a digital police team — working to protect the
          systems, platforms, and infrastructure that keep our region moving.
        </p>
      </div>

      <div className="flex shrink-0 gap-4">
        <a
          href="mailto:hello@synctechx.com"
          aria-label="Email"
          className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
        >
          <Mail size={16} />
        </a>

        <a
          href="#top"
          aria-label="LinkedIn"
          className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </div>

    <div className="flex flex-col gap-3 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
      <span>{t.footer.legal}</span>

      <span className="mono">
        SECURITY WITH CONTEXT / 2026
      </span>
    </div>
  </div>

  {/* Oversized bottom wordmark */}
  <div
    aria-hidden="true"
    className="pointer-events-none relative mt-[-0.5rem] h-[clamp(6rem,16vw,14rem)] overflow-hidden select-none"
  >
    <div
      className="absolute bottom-[-0.34em] left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(5.5rem,19vw,17rem)] font-black leading-none tracking-[-0.08em] text-white/[0.055]"
    >
      SYNCTECHX
    </div>
  </div>
</footer>
  </div>
}
