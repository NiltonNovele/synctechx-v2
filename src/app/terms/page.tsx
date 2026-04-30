"use client";

import {
  ArrowLeft,
  Scale,
  Handshake,
  AlertTriangle,
  Users,
  CreditCard,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function TermsOfService() {
  const lastUpdated = "Abril de 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Aceitação dos Termos",
      icon: <Handshake className="w-5 h-5" />,
      content: [
        {
          subtitle: "Acordo com os Termos",
          details: [
            "Ao acessar nosso site ou utilizar nossos serviços, você concorda com estes Termos de Serviço",
            "Estes termos constituem um acordo legalmente vinculativo entre você e a SyncTechX",
            "Caso não concorde com estes termos, por favor, não utilize nossos serviços",
            "Reservamo-nos o direito de modificar estes termos a qualquer momento mediante aviso prévio",
            "O uso contínuo após alterações constitui aceitação dos novos termos",
          ],
        },
        {
          subtitle: "Escopo do Contrato",
          details: [
            "Aplica-se a todos os serviços fornecidos pela SyncTechX",
            "Inclui website, consultoria, IA e suporte contínuo",
            "Pode ser complementado por contratos específicos",
            "Substitui acordos anteriores salvo indicação contrária",
          ],
        },
      ],
    },
    {
      id: "services",
      title: "Serviços",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "O que oferecemos",
          details: [
            "Desenvolvimento de agentes de IA personalizados",
            "Consultoria e estratégia tecnológica",
            "Integração de sistemas e automação",
            "Suporte e manutenção contínua",
            "Treinamento e capacitação",
          ],
        },
        {
          subtitle: "Limitações",
          details: [
            "Serviços baseados em contrato ou projeto",
            "Prazos são estimativas",
            "Podemos recusar projetos fora do escopo",
            "Dependente de disponibilidade e recursos",
          ],
        },
      ],
    },
    {
      id: "client-responsibilities",
      title: "Responsabilidades do Cliente",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Colaboração",
          details: [
            "Fornecer informações corretas e completas",
            "Garantir acesso necessário a sistemas",
            "Responder rapidamente a feedbacks",
            "Designar responsáveis pelo projeto",
            "Manter confidencialidade",
          ],
        },
        {
          subtitle: "Uso adequado",
          details: [
            "Uso apenas para fins legais",
            "Não copiar ou fazer engenharia reversa",
            "Respeitar propriedade intelectual",
            "Cumprir leis aplicáveis",
          ],
        },
      ],
    },
    {
      id: "payment-terms",
      title: "Pagamentos",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        {
          subtitle: "Condições",
          details: [
            "Pagamentos por marcos ou mensal",
            "Depósito inicial pode ser exigido",
            "Prazo padrão: 15 dias úteis",
            "Atrasos podem suspender serviços",
            "Pagamentos não reembolsáveis",
          ],
        },
        {
          subtitle: "Alterações",
          details: [
            "Preço depende do escopo",
            "Mudanças geram custos adicionais",
            "Aviso prévio para alterações",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Propriedade Intelectual",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          subtitle: "Direitos",
          details: [
            "Cliente mantém seus dados",
            "SyncTechX mantém metodologias",
            "Soluções pertencem ao cliente após pagamento",
            "Tecnologias de terceiros mantêm seus direitos",
          ],
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitações",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Responsabilidade",
          details: [
            "Sem garantia de resultados específicos",
            "IA depende de dados e uso",
            "Não nos responsabilizamos por decisões baseadas na IA",
            "Responsabilidade limitada ao valor pago",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 backdrop-blur-sm bg-black/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5">
              <Scale className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-white/70 uppercase tracking-wider">
                Termos legais
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Termos de Serviço
            </h1>

            <p className="text-white/60 max-w-2xl mx-auto">
              Estes termos definem como trabalhamos consigo e como os nossos serviços funcionam.
            </p>

            <div className="mt-6 flex justify-center items-center gap-2 text-sm text-white/50">
              <Clock className="w-4 h-4" />
              {lastUpdated}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.id}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    {section.icon}
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-5">
                  {section.content.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-white/10 bg-white/[0.04]"
                    >
                      <h3 className="font-medium mb-3 text-white">
                        {item.subtitle}
                      </h3>

                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex gap-3 text-white/65 text-sm">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.04] text-center">
            <h3 className="text-lg font-semibold mb-2">
              Precisa de esclarecimentos?
            </h3>
            <p className="text-white/60 mb-6 text-sm">
              Fale connosco e esclarecemos qualquer dúvida.
            </p>

            <Link href="/#contact">
              <Button className="bg-blue-500 text-black hover:bg-blue-400 rounded-full px-6">
                Falar connosco
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}