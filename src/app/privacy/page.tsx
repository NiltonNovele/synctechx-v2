"use client";

import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  UserCheck,
  FileText,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function PrivacyPolicy() {
  const lastUpdated = "Abril de 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Informações que coletamos",
      icon: <UserCheck className="w-5 h-5" />,
      content: [
        {
          subtitle: "Informações que você fornece",
          details: [
            "Informações de contato (nome, e-mail, número de telefone)",
            "Detalhes da empresa (nome da empresa, porte, setor, função)",
            "Requisitos de negócios e desafios de IA",
            "Especificações e preferências do projeto",
            "Preferências de comunicação e feedback",
          ],
        },
        {
          subtitle: "Informações coletadas automaticamente",
          details: [
            "Dados e análises de uso do site",
            "Endereço IP e informações do navegador",
            "Tipo de dispositivo e sistema operacional",
            "Páginas visitadas e tempo gasto no site",
            "Fontes de referência e termos de busca",
          ],
        },
      ],
    },
    {
      id: "information-use",
      title: "Como usamos suas informações",
      icon: <Eye className="w-5 h-5" />,
      content: [
        {
          subtitle: "Usos primários",
          details: [
            "Fornecer serviços de consultoria e desenvolvimento de IA",
            "Comunicar sobre os requisitos do seu projeto",
            "Agendar e conduzir chamadas de descoberta",
            "Desenvolver soluções de IA personalizadas",
            "Fornecer suporte e manutenção contínuos",
          ],
        },
        {
          subtitle: "Usos secundários",
          details: [
            "Melhorar nosso site e nossa oferta de serviços",
            "Enviar insights e atualizações relevantes do setor",
            "Analisar tendências de mercado e necessidades dos clientes",
            "Aprimorar nossas metodologias de desenvolvimento de IA",
          ],
        },
      ],
    },
    {
      id: "information-sharing",
      title: "Compartilhamento e divulgação de informações",
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: "NÃO compartilhamos suas informações com",
          details: [
            "Empresas terceirizadas de marketing",
            "Corretores ou revendedores de dados",
            "Concorrentes ou outras agências de IA",
            "Plataformas de mídia social para publicidade",
            "Quaisquer partes não autorizadas",
          ],
        },
        {
          subtitle: "Compartilhamento limitado para prestação de serviços",
          details: [
            "Parceiros técnicos confiáveis ​​(sob rigorosos acordos de confidencialidade)",
            "Provedores de infraestrutura em nuvem (AWS, Google Cloud)",
            "Consultores jurídicos quando exigido por lei",
            "Instituições financeiras para processamento de pagamentos",
          ],
        },
      ],
    },
    {
      id: "data-security",
      title: "Segurança e proteção de dados",
      icon: <Lock className="w-5 h-5" />,
      content: [
        {
          subtitle: "Salvaguardas Técnicas",
          details: [
            "Criptografia de ponta a ponta para todas as transmissões de dados",
            "Armazenamento seguro em nuvem com segurança de nível empresarial",
            "Auditorias de segurança e avaliações de vulnerabilidades regulares",
            "Autenticação multifator para acesso de toda a equipe",
            "Sistemas automatizados de backup e recuperação de desastres",
          ],
        },
        {
          subtitle: "Segurança Operacional",
          details: [
            "Acordos de confidencialidade com todos os membros da equipe",
            "Acesso limitado mediante necessidade de conhecimento",
            "Treinamento regular de segurança para nossa equipe",
            "Procedimentos de resposta a incidentes e notificação de violações",
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Seus direitos de privacidade",
      icon: <FileText className="w-5 h-5" />,
      content: [
        {
          subtitle: "Você tem o direito de",
          details: [
            "Acessar todos os dados pessoais que temos sobre você",
            "Corrigir quaisquer informações imprecisas ou incompletas",
            "Excluir seus dados pessoais (sujeito a obrigações legais)",
            "Restringir ou opor-se a certas atividades de processamento",
            "Portabilidade de dados - receba seus dados em um formato estruturado",
          ],
        },
        {
          subtitle: "Como exercer seus direitos",
          details: [
            "Envie um e-mail para legal@synctechx.com",
            "Inclua seu nome completo e endereço de e-mail",
            "Especifique qual direito você deseja exercer",
            "Responderemos em até 30 dias após sua solicitação",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-0"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium text-white/80">
                Privacidade e segurança
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Política de Privacidade
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Na SyncTechX, levamos a sua privacidade a sério. Esta política
              explica como coletamos, usamos e protegemos suas informações
              pessoais.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Clock className="w-4 h-4" />
              <span>Última atualização: {lastUpdated}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-medium text-white mb-4">
              Nosso compromisso com sua privacidade
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Como agência de desenvolvimento de IA, entendemos a importância
              crucial da privacidade e segurança de dados. Esta Política de
              Privacidade descreve nossas práticas em relação à coleta, uso e
              proteção de suas informações pessoais quando você utiliza nosso
              site ou contrata nossos serviços.
            </p>
            <p className="text-white/70 leading-relaxed">
              Ao utilizar nossos serviços, você concorda com a coleta e o uso de
              informações de acordo com esta política. Não usaremos ou
              compartilharemos suas informações, exceto conforme descrito nesta
              Política de Privacidade.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gold/10 text-gold">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-medium text-white">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="p-6 rounded-xl border border-white/10 bg-white/5"
                    >
                      <h3 className="text-lg font-medium text-white mb-4">
                        {item.subtitle}
                      </h3>
                      <ul className="space-y-2">
                        {item.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-3 text-white/70"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-2xl font-medium text-white mb-4">
              Dúvidas sobre esta política?
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Caso tenha alguma dúvida sobre esta Política de Privacidade, seus
              dados pessoais ou como lidamos com suas informações, não hesite em
              entrar em contato conosco.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Contacto</h3>
                <div className="space-y-2 text-white/70">
                  <p>
                    <strong>Email:</strong> info@synctechx.com
                  </p>
                  <p>
                    <strong>Company:</strong> SyncTechX Lda.
                  </p>
                  <p>
                    <strong>Tempo de resposta:</strong> Dentro de 48 horas
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">
                  Oficial de Proteção de Dados
                </h3>
                <p className="text-white/70">
                  Para questões específicas de privacidade ou dúvidas sobre
                  proteção de dados, você pode entrar em contato diretamente com
                  nosso Diretor de Proteção de Dados pelo e-mail acima, com
                  "Consulta de Privacidade" no assunto.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-0"
                >
                  Contate-nos sobre privacidade
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-gold/5 text-center">
            <p className="text-white/80 text-sm">
              Esta Política de Privacidade está em vigor desde {lastUpdated} e
              permanecerá em vigor, exceto no que diz respeito a quaisquer
              alterações em suas disposições no futuro, que entrarão em vigor
              imediatamente após serem publicadas nesta página.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
