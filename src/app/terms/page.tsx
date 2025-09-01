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
            "O uso contínuo após as alterações constitui a aceitação dos novos termos",
          ],
        },
        {
          subtitle: "Escopo do Contrato",
          details: [
            "Estes termos se aplicam a todos os serviços fornecidos pela SyncTechX",
            "Inclui uso do site, consultorias, desenvolvimento de IA e suporte contínuo",
            "Pode ser complementado por contratos de serviço separados para projetos específicos",
            "Substitui todos os contratos anteriores, salvo disposição em contrário",
          ],
        },
      ],
    },
    {
      id: "services",
      title: "Our Services",
      icon: <Users className="w-5 h-5" />,
      content: [
        {
          subtitle: "Serviços de desenvolvimento de IA",
          details: [
            "Desenvolvimento e implementação de agentes de IA personalizados",
            "Consultoria e planejamento de estratégia de IA",
            "Integração de sistemas e automação de fluxo de trabalho",
            "Serviços de suporte e manutenção contínuos",
            "Treinamento e transferência de conhecimento",
          ],
        },
        {
          subtitle: "Limitações de serviço",
          details: [
            "Os serviços são prestados com base em projetos ou contratos de locação",
            "Os prazos de entrega são estimativas e podem variar de acordo com a complexidade do projeto",
            "Reservamo-nos o direito de recusar serviços para projetos fora de nossa especialidade",
            "Todos os serviços estão sujeitos à disponibilidade e a restrições de recursos",
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
          subtitle: "Informação e Cooperação",
          details: [
            "Fornecer informações precisas e completas sobre as necessidades do seu negócio",
            "Conceder o acesso necessário aos sistemas e dados para a conclusão do projeto",
            "Responder às solicitações de feedback e aprovações em tempo hábil",
            "Designar as partes interessadas apropriadas para a comunicação do projeto",
            "Manter a confidencialidade das metodologias proprietárias compartilhadas",
          ],
        },
        {
          subtitle: "Uso aceitável",
          details: [
            "Utilize nossos serviços apenas para fins comerciais lícitos",
            "Não tente fazer engenharia reversa ou copiar nossas soluções proprietárias",
            "Respeite os direitos de propriedade intelectual em todos os sistemas de IA desenvolvidos",
            "Cumpra todas as leis e regulamentos aplicáveis",
            "Não utilize serviços para fins de inteligência competitiva contra outros clientes",
          ],
        },
      ],
    },
    {
      id: "payment-terms",
      title: "Pagamento e cobrança",
      icon: <CreditCard className="w-5 h-5" />,
      content: [
        {
          subtitle: "Estrutura de Pagamento",
          details: [
            "Os pagamentos do projeto são normalmente estruturados como parcelas por marco ou mensalmente",
            "O depósito inicial pode ser exigido antes do início do projeto",
            "Os prazos de pagamento são de 15 dias úteis, salvo acordo em contrário",
            "Pagamentos atrasados ​​podem incorrer em juros e suspensão do serviço",
            "Todos os pagamentos não são reembolsáveis, a menos que especificado no contrato do projeto",
          ],
        },
        {
          subtitle: "Preços e alterações",
          details: [
            "O preço é baseado no escopo e na complexidade do projeto",
            "Alterações no escopo do projeto podem resultar em custos adicionais",
            "Forneceremos um aviso por escrito sobre quaisquer alterações de preço",
            "As taxas de retenção vigentes podem ser ajustadas anualmente com 30 dias de antecedência",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Propriedade intelectual",
      icon: <Scale className="w-5 h-5" />,
      content: [
        {
          subtitle: "Direitos de propriedade",
          details: [
            "O cliente mantém a propriedade de seus dados comerciais e informações proprietárias",
            "A SyncTechX mantém a propriedade de metodologias e estruturas proprietárias",
            "As soluções de IA personalizadas desenvolvidas para os clientes pertencem ao cliente mediante pagamento integral",
            "Reservamos o direito de usar conhecimentos e técnicas gerais em projetos futuros",
            "Softwares e serviços de terceiros permanecem propriedade de seus respectivos proprietários",
          ],
        },
        {
          subtitle: "Direitos de uso",
          details: [
            "O cliente nos concede direitos limitados de uso de seus dados para a conclusão do projeto",
            "Podemos usar resultados anonimizados do projeto como estudos de caso com consentimento prévio",
            "O cliente não pode revender ou redistribuir soluções de IA a terceiros",
            "Ambas as partes respeitam as informações confidenciais e proprietárias uma da outra",
          ],
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitações e isenções de responsabilidade",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: [
        {
          subtitle: "Isenções de responsabilidade de serviço",
          details: [
            "Os sistemas de IA são fornecidos 'no estado em que se encontram', sem garantias de resultados de desempenho específicos",
            "Não podemos garantir resultados comerciais específicos ou ROI de implementações de IA",
            "O desempenho pode variar com base na qualidade dos dados, na adoção pelo usuário e em fatores externos",
            "Os sistemas de IA exigem monitoramento contínuo e podem precisar de ajustes ao longo do tempo",
            "Não nos responsabilizamos por decisões tomadas com base em recomendações de sistemas de IA",
          ],
        },
        {
          subtitle: "Limitação de responsabilidade",
          details: [
            "Nossa responsabilidade se limita ao valor pago pelo serviço específico em questão",
            "Não nos responsabilizamos por danos indiretos, consequenciais ou punitivos",
            "Eventos de força maior (desastres naturais, pandemias, etc.) podem justificar atrasos na execução",
            "O cliente é responsável pelos sistemas de backup e pelo planejamento de continuidade dos negócios",
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
              <Scale className="w-4 h-4 text-gold" />
              <span className="text-xs font-medium text-white/80">
                Termos legais
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Termos de Serviço
            </h1>

            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Estes termos regem o uso dos serviços da SyncTechX. Leia-os com
              atenção, pois contêm informações importantes sobre seus direitos e
              obrigações.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
              <Clock className="w-4 h-4" />
              <span>Última atualização: {lastUpdated}</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5">
            <h2 className="text-xl font-medium text-white mb-4">
              Bem-vindo a SyncTechX
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Estes Termos de Serviço descrevem as regras e regulamentos para o
              uso dos serviços da SyncTechX, incluindo nosso website, serviços
              de desenvolvimento de IA e suporte contínuo. Estes termos foram
              elaborados para proteger nossos clientes e nossos negócios,
              garantindo, ao mesmo tempo, expectativas claras para todas as
              partes.
            </p>
            <p className="text-white/70 leading-relaxed">
              Ao contratar nossos serviços, você reconhece que leu, entendeu e
              concorda em se comprometer com estes termos. Caso tenha alguma
              dúvida sobre estes termos, entre em contato conosco antes de
              prosseguir.
            </p>
          </div>

          {/* Terms Sections */}
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
              Dúvidas sobre esses termos?
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Se você tiver alguma dúvida sobre estes Termos de Serviço ou
              precisar de esclarecimentos sobre qualquer aspecto do nosso
              contrato de serviço, estamos aqui para ajudar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Contacto</h3>
                <div className="space-y-2 text-white/70">
                  <p>
                    <strong>Email:</strong> info@synctechx.com
                  </p>
                  <p>
                    <strong>Empresa:</strong> SyncTechX Lda.
                  </p>
                  <p>
                    <strong>Tempo de resposta:</strong> Dentro de 48 horas
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">
                  Departamento Jurídico
                </h3>
                <p className="text-white/70">
                  Para consultas jurídicas específicas ou discussões
                  contratuais, entre em contato conosco com "Consulta Jurídica"
                  no assunto e nós o conectaremos com o membro apropriado da
                  equipe.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold/90 text-black font-medium px-8 py-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-0"
                >
                  Contate-nos sobre os termos
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 p-6 rounded-xl border border-white/10 bg-gold/5 text-center">
            <p className="text-white/80 text-sm">
              Estes Termos de Serviço entram em vigor em {lastUpdated} e
              permanecerão em vigor, exceto com relação a quaisquer alterações
              em suas disposições no futuro, que entrarão em vigor imediatamente
              após serem publicadas nesta página.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
