import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  Linkedin,
  ShieldCheck,
  FileText,
  Scale,
} from "lucide-react";

const markImage = "/logo-w.png";

type Locale = "pt" | "en";

const copy = {
  pt: {
    nav: {
      method: "Método",
      capabilities: "Capacidades",
      perspective: "Perspetiva",
      contact: "Falar connosco",
      menu: "Menu",
      home: "Início",
    },

    hero: {
      kicker: "DOCUMENTO LEGAL • 2026",
      title: "Termos & Condições",
      body:
        "As condições que regulam o acesso, utilização e contratação dos serviços prestados pela SyncTechX Lda.",
      updated: "Última atualização: 16 de agosto de 2026",
    },

    intro: {
      kicker: "ANTES DE UTILIZAR",
      title: "Leia os termos que regulam a nossa relação profissional.",
      body:
        "Estes Termos e Condições regulam o acesso e utilização dos serviços prestados pela SyncTechX Lda., incluindo avaliações de cibersegurança, testes de penetração, revisões de arquitetura e prontidão, desenvolvimento web, desenvolvimento de aplicações móveis, infraestrutura e cloud e serviços de consultoria digital associados. Ao solicitar uma proposta, celebrar um Contrato de Engagement, efetuar um pagamento ou utilizar os Serviços da SyncTechX, o Cliente declara ter lido, compreendido e aceite estes Termos.",
    },

    sections: [
      {
        title: "Introdução e Aceitação",
        body: [
          'Estes Termos e Condições ("Termos") regem o acesso e utilização dos serviços prestados pela SyncTechX Lda. ("SyncTechX", "nós", "a Empresa"), sociedade sediada em Maputo, Moçambique, incluindo mas não limitado a: avaliações de cibersegurança, testes de penetração, revisões de arquitetura e prontidão, desenvolvimento web, desenvolvimento de aplicativos móveis, infraestrutura e cloud, e serviços de consultoria digital associados.',
          'Ao solicitar uma proposta, assinar um contrato de prestação de serviços ("Contrato de Engagement"), efetuar um pagamento, ou de qualquer forma utilizar os Serviços da SyncTechX, o Cliente ("Cliente", "você") declara ter lido, compreendido e aceite ficar vinculado a estes Termos, bem como a qualquer anexo técnico ou comercial associado ao engagement específico.',
          "Estes Termos aplicam-se a todos os Clientes, sejam pessoas coletivas, entidades públicas ou pessoas singulares que contratem Serviços em nome próprio ou de terceiros. Quando o Cliente contrata em nome de uma organização, declara ter poderes para vincular essa organização a estes Termos.",
          "Caso o Cliente não concorde com a totalidade destes Termos, deve abster-se de contratar ou utilizar os Serviços, e deve comunicar as suas objeções por escrito antes do início de qualquer engagement, para que as partes possam negociar termos alternativos.",
          "Em caso de conflito entre estes Termos e o Contrato de Engagement específico assinado por ambas as partes, prevalecem as disposições do Contrato de Engagement, sendo estes Termos aplicáveis subsidiariamente a tudo o que não esteja expressamente regulado no Contrato.",
        ],
      },

      {
        title: "Definições",
        body: [
          '"Serviços" — qualquer avaliação, teste, desenvolvimento, consultoria, manutenção ou entrega prestada pela SyncTechX ao abrigo de uma proposta ou contrato específico.',
          '"Âmbito" ("Scope") — os sistemas, ativos, aplicações, redes, ambientes cloud, contas ou pessoas expressamente identificados e autorizados a serem testados, acedidos ou trabalhados num engagement, conforme documentado por escrito.',
          '"Regras de Engagement" ("Rules of Engagement") — o documento técnico e operacional, anexo ao Contrato de Engagement, que define horários de teste permitidos, técnicas autorizadas e proibidas, contactos de emergência, protocolos de comunicação, e critérios de suspensão imediata dos trabalhos.',
          '"Achados" ("Findings") — vulnerabilidades, fragilidades, más configurações ou observações de risco identificadas durante uma avaliação.',
          '"Dados do Cliente" — qualquer informação, sistema, credencial, código-fonte ou infraestrutura pertencente ou operada pelo Cliente à qual a SyncTechX tenha acesso durante a prestação dos Serviços.',
          '"Entregáveis" — relatórios, código-fonte, documentação, dashboards, websites, aplicações ou qualquer outro produto de trabalho formalmente entregue ao Cliente no âmbito de um engagement.',
          '"Dia Útil" — dia de semana, excluindo feriados nacionais na República de Moçambique.',
          '"Incidente de Segurança" — qualquer evento que comprometa, ou possa razoavelmente comprometer, a confidencialidade, integridade ou disponibilidade de Dados do Cliente.',
          '"Subcontratado" — qualquer terceiro contratado pela SyncTechX para apoiar a prestação de Serviços, sujeito às condições da Secção 20.',
        ],
      },

      {
        title: "Autorização e Âmbito dos Serviços",
        body: [
          "Nenhum teste intrusivo, simulação de engenharia social, revisão física, ou avaliação de rede, aplicação, cloud ou pessoas será realizado sem autorização prévia por escrito do Cliente, com âmbito claramente definido e Regras de Engagement acordadas por ambas as partes antes do início de qualquer atividade técnica.",
          "O Cliente garante ter autoridade legal para autorizar testes sobre todos os sistemas, redes, aplicações e ambientes incluídos no âmbito. Caso os ativos sejam operados por terceiros, como fornecedores cloud, prestadores de serviços geridos ou parceiros de infraestrutura partilhada, o Cliente é responsável por obter as autorizações necessárias desses terceiros antes do início dos trabalhos, e por disponibilizar prova documental dessa autorização mediante pedido da SyncTechX.",
          'A carta de autorização ("Authorization Letter") assinada pelo Cliente deve identificar, no mínimo: os sistemas e ativos incluídos no âmbito; o período de validade da autorização; os representantes autorizados a alterar o âmbito durante o engagement; e a confirmação de que o Cliente possui os direitos legais necessários sobre os ativos testados.',
          'Qualquer alteração ao âmbito durante o engagement ("Change of Scope") deve ser solicitada por escrito e confirmada por ambas as partes antes de qualquer atividade técnica adicional ser realizada. Alterações verbais não são válidas nem vinculativas.',
          "A SyncTechX reserva-se o direito de recusar, suspender ou terminar qualquer engagement caso identifique que o âmbito autorizado é ambíguo, insuficiente, contraditório, ou que a autorização não pode ser razoavelmente confirmada — sem prejuízo de honorários já devidos por trabalho realizado até esse momento.",
          "O modelo de trabalho é modular: um engagement pode começar por um perímetro, aplicação ou ambiente prioritário, sem obrigação de cobrir a totalidade do ambiente do Cliente numa única fase. Fases subsequentes estão sujeitas a proposta e autorização próprias.",
          "Testes conduzidos fora do âmbito autorizado, ainda que descobertos incidentalmente, serão imediatamente interrompidos e reportados ao Cliente, não sendo explorados sem nova autorização expressa.",
        ],
      },

      {
        title: "Natureza e Limites dos Serviços de Avaliação",
        body: [
          'As avaliações de cibersegurança prestadas pela SyncTechX (externas, de aplicações, cloud, rede interna, pessoas e processos, arquitetura) representam uma amostragem de risco num determinado momento ("point-in-time assessment"), condicionada pelo âmbito, tempo e nível de acesso definidos no engagement. Não constituem uma garantia, certificação ou atestado de que o ambiente do Cliente está livre de vulnerabilidades antes, durante ou após o engagement.',
          "Novas vulnerabilidades podem surgir a qualquer momento devido a alterações no ambiente, novas ameaças, divulgação pública de novas técnicas de ataque, ou atualizações de software de terceiros. A SyncTechX não assume responsabilidade contínua pela postura de segurança do Cliente fora do período e âmbito contratados, salvo mediante contrato de monitorização contínua expressamente celebrado.",
          'Testes de caixa-preta ("black-box"), caixa-cinzenta ("grey-box") e caixa-branca ("white-box") têm níveis de acesso e visibilidade distintos, os quais serão especificados na proposta. O nível de acesso escolhido pelo Cliente afeta diretamente a profundidade e cobertura dos Achados possíveis.',
          "O relatório final constitui o núcleo da entrega da avaliação. Remediação, hardening, formação de equipas e retest são serviços distintos, sujeitos a âmbito e proposta próprios, salvo quando expressamente incluídos no contrato inicial.",
          "A SyncTechX prioriza achados com base em risco e impacto no negócio, utilizando metodologias de classificação reconhecidas no setor, como CVSS quando aplicável, combinadas com o seu julgamento técnico profissional e o contexto operacional do Cliente. Esta priorização é uma recomendação, não uma instrução vinculativa — decisões finais de remediação, aceitação de risco ou não-ação cabem exclusivamente ao Cliente.",
          "Um retest confirma se o Achado específico testado foi corrigido, dentro do âmbito e técnica original de exploração. Não constitui uma nova avaliação completa do ambiente, salvo se contratado como tal.",
        ],
      },

      {
        title: "Responsabilidades do Cliente",
        body: [
          "O Cliente compromete-se a fornecer informação precisa, completa e atempada sobre o ambiente, ativos críticos, dependências operacionais e restrições técnicas ou regulatórias relevantes.",
          'O Cliente deve designar um ponto de contacto responsável ("Engagement Owner"), disponível durante o horário acordado do engagement, com poder de decisão para autorizar alterações de âmbito e responder a incidentes.',
          "O Cliente deve garantir que sistemas de produção críticos estão devidamente salvaguardados, incluindo backups atualizados, planos de contingência e janelas de manutenção, antes de qualquer teste que possa afetar a disponibilidade.",
          "O Cliente deve notificar imediatamente a SyncTechX sobre qualquer alteração relevante ao âmbito, ambiente, ou infraestrutura durante o engagement, incluindo alterações não planeadas realizadas por outras equipas do Cliente.",
          "O Cliente não deve utilizar os Achados, metodologias, ferramentas, código-fonte ou relatórios da SyncTechX para fins que não os expressamente contratados, nem partilhar tais materiais com terceiros sem consentimento prévio por escrito.",
          "O Cliente deve assegurar que sistemas ou contas de terceiros não sejam incluídos no âmbito sem autorização documentada desses terceiros.",
          "O Cliente deve colaborar de boa-fé na disponibilização de acessos, ambientes de teste, credenciais temporárias ou documentação técnica necessária à execução do engagement dentro dos prazos acordados. Atrasos na disponibilização destes elementos podem justificar ajuste ao calendário do projeto sem penalização para a SyncTechX.",
          "O Cliente deve cumprir com as suas próprias obrigações legais e regulatórias aplicáveis ao seu setor de atividade, sendo a SyncTechX um prestador de apoio técnico e não um substituto de aconselhamento jurídico ou de compliance.",
        ],
      },

      {
        title: "Confidencialidade",
        body: [
          "Ambas as partes comprometem-se a manter confidencial toda a informação técnica, comercial ou operacional trocada no âmbito do engagement, incluindo Achados, credenciais, dados de sistemas, código-fonte, arquitetura, e conteúdo de relatórios.",
          "Os relatórios, Achados e evidências produzidos pela SyncTechX são estritamente confidenciais e destinam-se exclusivamente ao Cliente e às pessoas por si expressamente autorizadas por escrito.",
          "A SyncTechX aplicará medidas técnicas e organizacionais razoáveis para proteger a Informação Confidencial do Cliente, incluindo, quando aplicável, armazenamento cifrado de relatórios e evidências, controlo de acesso interno restrito à equipa alocada ao engagement, e eliminação segura de credenciais temporárias após conclusão do engagement.",
          "A obrigação de confidencialidade mantém-se em vigor durante e após o término da relação contratual, por um período mínimo de 3 (três) anos, salvo acordo em contrário, ou por período indefinido relativamente a credenciais, segredos técnicos e vulnerabilidades não corrigidas.",
          "Excetua-se desta obrigação informação que seja ou se torne publicamente disponível sem violação destes Termos; que já fosse conhecida pela parte recetora antes da divulgação, comprovadamente; ou cuja divulgação seja legalmente exigida por autoridade competente, mediante notificação prévia à outra parte sempre que legalmente possível e permitido.",
          "A equipa da SyncTechX alocada ao engagement encontra-se vinculada a obrigações de confidencialidade equivalentes através de acordos internos, sejam colaboradores diretos ou subcontratados.",
        ],
      },

      {
        title: "Proteção de Dados",
        body: [
          "No decurso dos Serviços, a SyncTechX poderá aceder a dados pessoais ou sensíveis existentes nos sistemas do Cliente, incluindo dados de colaboradores, clientes finais ou parceiros do Cliente. A SyncTechX compromete-se a tratar tal informação apenas na medida estritamente necessária à prestação dos Serviços, e a não a utilizar para outros fins.",
          'O Cliente permanece responsável, como responsável pelo tratamento ("Data Controller"), pelo cumprimento da legislação aplicável de proteção de dados relativamente aos dados existentes nos seus próprios sistemas, incluindo a base legal para permitir o acesso da SyncTechX durante o engagement.',
          "A SyncTechX atua, para efeitos de acesso incidental a dados pessoais durante avaliações técnicas, como subcontratante/processador de dados, obrigando-se a não copiar ou extrair dados pessoais além do estritamente necessário para demonstrar um Achado; eliminar cópias temporárias de dados pessoais após conclusão e aceitação do relatório, salvo obrigação legal de retenção; e notificar o Cliente sem atraso indevido caso identifique, no decurso dos trabalhos, um incidente de segurança envolvendo dados pessoais.",
          'Sempre que aplicável, e nomeadamente quando o volume ou sensibilidade dos dados o justifique, as partes celebrarão um acordo específico de tratamento de dados ("Data Processing Agreement") como anexo ao Contrato de Engagement, detalhando medidas de segurança, sub-processadores autorizados, e procedimentos de eliminação.',
          "Transferências internacionais de dados, caso ocorram, como armazenamento em cloud fora de Moçambique, serão comunicadas ao Cliente e sujeitas às salvaguardas contratuais aplicáveis.",
        ],
      },

      {
        title: "Notificação de Incidentes de Segurança",
        body: [
          "Caso a SyncTechX identifique, durante a prestação dos Serviços, um Incidente de Segurança ativo e em curso no ambiente do Cliente, não relacionado com os testes autorizados, notificará o Cliente com a maior brevidade possível, e em qualquer caso no prazo máximo de 24 (vinte e quatro) horas após a deteção, através do contacto de emergência definido nas Regras de Engagement.",
          "Caso ocorra um Incidente de Segurança que afete os próprios sistemas, credenciais ou infraestrutura da SyncTechX, com potencial impacto em Dados do Cliente, a SyncTechX notificará o Cliente sem atraso indevido, descrevendo a natureza do incidente, os dados potencialmente afetados, e as medidas de mitigação em curso.",
          "Nenhuma disposição desta secção substitui as obrigações legais de notificação de incidentes que recaiam diretamente sobre o Cliente perante autoridades reguladoras ou titulares de dados.",
        ],
      },

      {
        title: "Propriedade Intelectual",
        body: [
          'Metodologias, ferramentas, modelos de relatório, frameworks, scripts internos e materiais proprietários desenvolvidos pela SyncTechX antes ou independentemente do engagement ("Materiais Pré-Existentes") permanecem propriedade exclusiva da SyncTechX, mesmo quando incorporados nos Entregáveis.',
          "Salvo acordo em contrário por escrito, o Cliente adquire uma licença de uso não exclusiva, perpétua e intransmissível do relatório final e das entregas específicas do engagement, para uso interno da sua organização.",
          "Em serviços de desenvolvimento web e aplicativos móveis, a propriedade do código-fonte e dos Entregáveis finais transita para o Cliente mediante pagamento integral dos valores acordados, salvo disposição diferente no Contrato de Engagement. Até ao pagamento integral, a SyncTechX retém a propriedade dos Entregáveis, sem prejuízo do acesso do Cliente para efeitos de revisão.",
          "Bibliotecas, frameworks, componentes de código aberto ou de terceiros integrados nos Entregáveis permanecem sujeitos às respetivas licenças de origem, sendo da responsabilidade do Cliente o cumprimento continuado dessas licenças após a entrega.",
          "A SyncTechX não reivindica direitos sobre os dados, marca, conteúdo ou propriedade intelectual pré-existente do Cliente utilizados ou integrados no âmbito dos Serviços.",
        ],
      },

      {
        title: "Honorários e Pagamento",
        body: [
          "Os valores, condições e calendário de pagamento são definidos em proposta comercial específica para cada engagement, e passam a fazer parte integrante do Contrato de Engagement uma vez aceites por ambas as partes.",
          "Salvo acordo em contrário, os pagamentos são devidos nos prazos indicados na fatura. O incumprimento do prazo de pagamento por mais de 15 (quinze) dias após vencimento pode resultar em suspensão dos Serviços mediante notificação prévia de 5 (cinco) dias úteis.",
          "Poderão ser aplicados juros de mora sobre valores em atraso, à taxa legal aplicável em Moçambique, sem prejuízo de outros direitos da SyncTechX.",
          "Despesas adicionais, incluindo deslocações, licenças de software de terceiros, infraestrutura específica necessária ao teste, certificados ou ferramentas especializadas, serão comunicadas e aprovadas previamente pelo Cliente antes de incorridas, e faturadas separadamente com comprovativo.",
          "Todos os valores apresentados são líquidos de impostos aplicáveis, salvo indicação em contrário. Retenções fiscais, quando legalmente exigidas, são da responsabilidade do Cliente, devendo este fornecer os comprovativos correspondentes.",
          "Engagements de longa duração ou faseados podem ser faturados por marcos (milestones) acordados na proposta, sendo cada marco pago antes do início da fase seguinte, salvo acordo em contrário.",
        ],
      },

      {
        title: "Isenção de Garantias",
        body: [
          "Os Serviços são prestados com o nível de cuidado, competência técnica e diligência profissional esperado no setor, com base nas informações e acesso disponibilizados pelo Cliente.",
          "A SyncTechX não garante que todos os riscos, vulnerabilidades ou fragilidades existentes serão identificados, nem que o ambiente do Cliente estará imune a incidentes de segurança após a conclusão dos Serviços.",
          'Serviços de desenvolvimento são prestados "como estão" após entrega e aceitação, sujeitos a qualquer período de garantia ou suporte expressamente acordado por escrito. Findo esse período, correções, atualizações ou manutenção adicional estão sujeitas a novo âmbito e orçamento.',
          "A SyncTechX não garante compatibilidade contínua dos Entregáveis com atualizações futuras de sistemas operativos, browsers, APIs de terceiros ou plataformas cloud lançadas após a entrega, salvo contrato de manutenção contínua.",
          "Nenhuma declaração, verbal ou escrita, feita fora do Contrato de Engagement e destes Termos, constitui garantia vinculativa da SyncTechX.",
        ],
      },

      {
        title: "Limitação de Responsabilidade",
        body: [
          "Na máxima medida permitida pela lei aplicável, a responsabilidade total agregada da SyncTechX perante o Cliente, decorrente ou relacionada com os Serviços — seja em contrato, delito ou outra base legal — não excederá o valor total efetivamente pago pelo Cliente pelo engagement específico que deu origem à reclamação, nos 12 (doze) meses anteriores ao evento gerador.",
          "A SyncTechX não será responsável por danos indiretos, incidentais, consequenciais, lucros cessantes, perda de receita, perda de dados, ou perda de reputação, exceto nos casos de dolo ou negligência grave comprovada.",
          "A SyncTechX não será responsável por indisponibilidade, falhas, corrupção de dados ou danos a sistemas resultantes de testes autorizados quando o Cliente tenha sido previamente informado dos riscos inerentes descritos nas Regras de Engagement e tenha dado o seu consentimento explícito.",
          "Nenhuma limitação nesta secção exclui responsabilidade que não possa ser legalmente excluída ou limitada nos termos da lei moçambicana, incluindo em casos de dolo, fraude ou negligência grave.",
          "As limitações desta secção aplicam-se também em benefício dos colaboradores, diretores e subcontratados da SyncTechX.",
        ],
      },

      {
        title: "Indemnização",
        body: [
          "O Cliente compromete-se a indemnizar e isentar de responsabilidade a SyncTechX, os seus colaboradores e subcontratados, por quaisquer reclamações, danos, custos ou despesas, incluindo honorários legais razoáveis, resultantes de declarações falsas ou incompletas do Cliente quanto à sua autoridade legal para autorizar os testes; violação, pelo Cliente, dos direitos de terceiros ao incluir ativos não autorizados no âmbito; ou uso dos Achados ou Entregáveis pelo Cliente de forma negligente ou fora do contexto recomendado pela SyncTechX.",
          "A SyncTechX compromete-se a indemnizar o Cliente por danos diretos comprovadamente resultantes de dolo ou negligência grave da SyncTechX na execução dos Serviços, dentro dos limites definidos na Secção 12.",
        ],
      },

      {
        title: "Seguro",
        body: [
          "A SyncTechX mantém, ou compromete-se a manter, cobertura de seguro de responsabilidade civil profissional adequada à natureza dos Serviços prestados, incluindo cobertura para erros e omissões relacionados com avaliações de cibersegurança.",
          "Mediante pedido razoável do Cliente, a SyncTechX poderá disponibilizar comprovativo da apólice em vigor, sem prejuízo de informação comercialmente sensível.",
        ],
      },

      {
        title: "Testes com Potencial de Impacto Operacional",
        body: [
          "Certos testes, incluindo testes de carga, simulações de ataque de negação de serviço, testes em ambientes de produção e testes de engenharia social com potencial impacto reputacional interno, comportam risco inerente de indisponibilidade ou instabilidade temporária.",
          "Tais testes só serão realizados mediante consentimento explícito e por escrito do Cliente, com janelas de execução acordadas, planos de contingência definidos previamente, e identificação clara dos sistemas críticos a excluir ou tratar com cuidado reforçado.",
          "O Cliente pode solicitar, a qualquer momento durante o engagement, a suspensão imediata de um teste específico caso observe impacto operacional inesperado, mediante contacto direto com a equipa técnica através dos canais definidos nas Regras de Engagement. A SyncTechX interromperá a atividade em causa assim que possível após receção do pedido.",
        ],
      },

      {
        title: "Divulgação Responsável",
        body: [
          "Todos os Achados identificados durante uma avaliação são reportados exclusivamente ao Cliente, através de canais seguros e acordados, como relatório cifrado ou plataforma de partilha segura.",
          "A SyncTechX não divulgará publicamente, partilhará com terceiros, ou explorará quaisquer vulnerabilidades identificadas fora do âmbito estritamente autorizado pelo Cliente, nem após o término do engagement.",
          "Caso um Achado envolva uma vulnerabilidade em software ou serviço de um terceiro fornecedor, e não do Cliente, a SyncTechX poderá, mediante acordo prévio com o Cliente, seguir práticas de divulgação responsável coordenada com esse terceiro, sem nunca divulgar informação que identifique o Cliente sem o seu consentimento.",
        ],
      },

      {
        title: "Serviços de Desenvolvimento e Infraestrutura",
        body: [
          "O âmbito funcional, tecnológico e visual de cada projeto será definido em proposta ou documento de especificação (Escopo Técnico) acordado antes do início do desenvolvimento. Alterações de escopo solicitadas após aprovação (Change Requests) estão sujeitas a reavaliação de prazo e custo.",
          "O Cliente terá oportunidade de rever e aprovar entregas parciais (marcos de desenvolvimento). A aprovação, ou o silêncio do Cliente por mais de 10 (dez) dias úteis após notificação de entrega, será considerada aceitação tácita para efeitos de faturação de marco.",
          "Salvo acordo em contrário, é incluído um período de garantia de 30 (trinta) dias após entrega final, cobrindo correção de defeitos (bugs) que impeçam o funcionamento conforme especificado no Escopo Técnico. Este período não cobre novas funcionalidades, alterações de design, ou incompatibilidades resultantes de alterações feitas por terceiros após a entrega.",
          "Serviços de configuração, otimização e monitorização de servidores e ambientes cloud pressupõem acesso administrativo temporário concedido pelo Cliente. A SyncTechX não será responsável por custos de infraestrutura cloud incorridos pelo Cliente junto de fornecedores terceiros, sendo estes da exclusiva responsabilidade do Cliente.",
          "Serviços de manutenção contínua, monitorização ou suporte pós-entrega, quando contratados, estarão sujeitos a um Acordo de Nível de Serviço (SLA) próprio, definindo tempos de resposta, disponibilidade e canais de suporte.",
        ],
      },

      {
        title: "Uso Aceitável",
        body: [
          "O Cliente compromete-se a não utilizar os Serviços, Entregáveis ou acessos concedidos pela SyncTechX para atividades ilegais ao abrigo da legislação moçambicana ou internacional aplicável; testar ou atacar sistemas fora do âmbito autorizado; desenvolver ou distribuir malware, ferramentas de exploração maliciosa, ou conteúdo que viole direitos de terceiros; ou assediar, enganar ou prejudicar terceiros através dos Entregáveis produzidos pela SyncTechX.",
        ],
      },

      {
        title: "Publicidade e Referências",
        body: [
          "Salvo indicação em contrário por escrito do Cliente, a SyncTechX pode referir-se ao facto de ter prestado Serviços ao Cliente, incluindo nome e/ou logótipo, em materiais de marketing gerais, incluindo o website institucional, propostas comerciais e apresentações, sem revelar detalhes confidenciais do engagement, Achados específicos, ou conteúdo de relatórios.",
          "O Cliente pode, a qualquer momento, solicitar por escrito a remoção do seu nome ou logótipo de materiais públicos da SyncTechX, pedido que será atendido no prazo de 10 (dez) dias úteis.",
        ],
      },

      {
        title: "Subcontratação",
        body: [
          "A SyncTechX pode recorrer a subcontratados especializados para apoiar a execução de determinados Serviços, mantendo sempre a responsabilidade integral perante o Cliente pela qualidade e conformidade do trabalho entregue.",
          "Todos os subcontratados estão vinculados a obrigações de confidencialidade e proteção de dados equivalentes às aplicáveis à própria SyncTechX. O Cliente será informado, mediante pedido, sobre a utilização de subcontratados em engagements sensíveis.",
        ],
      },

      {
        title: "Não Aliciamento",
        body: [
          "Durante a vigência do Contrato de Engagement e por um período de 12 (doze) meses após o seu término, nenhuma das partes solicitará ativamente a contratação direta de colaboradores da outra parte que tenham estado diretamente envolvidos no engagement, sem consentimento prévio por escrito.",
        ],
      },

      {
        title: "Prazo, Suspensão e Rescisão",
        body: [
          "O contrato de cada engagement vigora pelo período definido na proposta específica, podendo ser renovado ou estendido por acordo mútuo.",
          "Qualquer das partes pode rescindir o contrato mediante aviso prévio por escrito de 15 (quinze) dias, salvo em caso de incumprimento material, situação em que a rescisão pode ser imediata, mediante notificação escrita especificando a natureza do incumprimento.",
          "A SyncTechX pode suspender imediatamente os Serviços, sem aviso prévio, caso identifique que a autorização do Cliente é inválida, que o âmbito foi excedido sem consentimento, que a continuação representa risco legal ou operacional não mitigado, ou em caso de suspeita razoável de atividade ilegal por parte do Cliente.",
          "Em caso de rescisão, o Cliente pagará pelos Serviços já prestados até à data de rescisão, incluindo trabalho em curso proporcional ao progresso realizado.",
          "As disposições relativas a Confidencialidade, Propriedade Intelectual, Limitação de Responsabilidade, Indemnização e Lei Aplicável sobrevivem à rescisão ou término do Contrato de Engagement.",
        ],
      },

      {
        title: "Força Maior",
        body: [
          "Nenhuma das partes será responsabilizada por incumprimento ou atraso resultante de circunstâncias fora do seu controlo razoável, incluindo mas não limitado a desastres naturais, falhas de infraestrutura nacional de telecomunicações ou energia, atos governamentais, pandemias, ou instabilidade civil, desde que a parte afetada notifique a outra parte sem demora injustificada e envide esforços razoáveis para mitigar o impacto.",
        ],
      },

      {
        title: "Comunicações e Notificações",
        body: [
          "Todas as notificações formais ao abrigo destes Termos devem ser feitas por escrito, através de correio eletrónico dirigido ao contacto designado por cada parte no Contrato de Engagement, considerando-se recebidas no Dia Útil seguinte ao envio, salvo prova de entrega anterior.",
          "Comunicações operacionais do dia-a-dia durante um engagement, como atualizações de progresso, podem ser feitas através dos canais definidos nas Regras de Engagement, sem prejuízo do disposto na presente secção para notificações formais.",
        ],
      },

      {
        title: "Alterações aos Termos",
        body: [
          "A SyncTechX pode atualizar estes Termos periodicamente, para refletir alterações legais, operacionais ou de serviço.",
          "Alterações materiais serão comunicadas aos Clientes com contratos ativos com pelo menos 30 (trinta) dias de antecedência.",
          "O uso continuado dos Serviços após a entrada em vigor das alterações constitui aceitação dos novos Termos; engagements já em curso mantêm-se regidos pelos Termos vigentes à data da sua assinatura, salvo acordo em contrário.",
        ],
      },

      {
        title: "Lei Aplicável e Resolução de Litígios",
        body: [
          "Estes Termos são regidos pelas leis da República de Moçambique.",
          "As partes comprometem-se a procurar resolver eventuais litígios por via amigável, através de negociação direta entre os respetivos representantes, num prazo de 30 (trinta) dias a contar da notificação do litígio.",
          "Não sendo possível a resolução amigável, as partes podem recorrer a mediação antes de qualquer ação judicial, sendo os custos partilhados equitativamente.",
          "Persistindo o litígio, este será submetido aos tribunais competentes de Maputo, Moçambique, salvo acordo em contrário que preveja arbitragem, caso em que se aplicarão as regras de arbitragem acordadas entre as partes no Contrato de Engagement.",
        ],
      },

      {
        title: "Idioma e Interpretação",
        body: [
          "Estes Termos são redigidos em português. Caso seja disponibilizada uma versão noutro idioma para conveniência do Cliente, a versão em português prevalecerá em caso de divergência de interpretação.",
          "Os títulos das secções destinam-se apenas a facilitar a leitura e não afetam a interpretação do conteúdo.",
        ],
      },

      {
        title: "Aceitação Eletrónica",
        body: [
          "A aceitação destes Termos e do Contrato de Engagement pode ser efetuada por assinatura eletrónica, confirmação por correio eletrónico, ou aceitação através de formulário digital, tendo o mesmo valor legal e vinculativo que a assinatura manuscrita, nos termos da legislação moçambicana aplicável a documentos e transações eletrónicas.",
        ],
      },

      {
        title: "Disposições Gerais",
        body: [
          "Caso alguma disposição destes Termos seja considerada inválida, ilegal ou inexequível por tribunal competente, as restantes disposições permanecem em pleno vigor, e a disposição afetada será substituída por outra que reflita, na máxima medida possível, a intenção original das partes.",
          "Estes Termos, juntamente com a proposta comercial específica e quaisquer anexos, incluindo Regras de Engagement, Carta de Autorização, Acordo de Confidencialidade, Acordo de Tratamento de Dados e SLA, constituem o acordo integral entre as partes relativamente ao objeto do engagement, substituindo quaisquer entendimentos ou comunicações anteriores sobre a mesma matéria.",
          "Nenhuma das partes pode ceder os direitos e obrigações decorrentes destes Termos sem consentimento prévio por escrito da outra parte, exceto em caso de fusão, aquisição ou reestruturação societária da SyncTechX, mediante notificação ao Cliente.",
          "A tolerância de uma das partes quanto ao incumprimento de qualquer disposição destes Termos não constitui renúncia ao direito de exigir o cumprimento futuro dessa ou de outra disposição.",
          "Nada nestes Termos cria uma relação de emprego, agência, parceria ou joint-venture entre as partes, sendo a SyncTechX um prestador de serviços independente.",
        ],
      },

      {
        title: "Contacto",
        body: [
          "Para questões relacionadas com estes Termos e Condições, proteção de dados, ou comunicação de incidentes de segurança:",
          "SyncTechX Lda.",
          "Maputo, Moçambique",
          "hello@synctechx.com",
          "+258 84 752 966",
        ],
      },
    ],

    closing: {
      kicker: "SECURITY WITH CONTEXT",
      title: "Clareza também faz parte da segurança.",
      body:
        "Os nossos termos existem para tornar claras as responsabilidades, limites e expectativas antes de começarmos qualquer trabalho.",
      cta: "Falar connosco",
    },

    footer: {
      line:
        "Think of us as a digital police team — working to protect the systems, platforms, and infrastructure that keep our region moving.",
      legal: "© 2026 SyncTechX. Todos os direitos reservados.",
    },
  },

  en: {
    nav: {
      method: "Method",
      capabilities: "Capabilities",
      perspective: "Perspective",
      contact: "Talk to us",
      menu: "Menu",
      home: "Home",
    },

    hero: {
      kicker: "LEGAL DOCUMENT • 2026",
      title: "Terms & Conditions",
      body:
        "The conditions governing access to, use of and engagement with the services provided by SyncTechX Lda.",
      updated: "Last updated: 16 August 2026",
    },

    intro: {
      kicker: "BEFORE YOU USE",
      title: "Read the terms that govern our professional relationship.",
      body:
        "These Terms and Conditions govern access to and use of the services provided by SyncTechX Lda., including cybersecurity assessments, penetration testing, architecture and readiness reviews, web development, mobile application development, infrastructure and cloud services, and related digital consultancy. By requesting a proposal, entering into an Engagement Contract, making a payment or using SyncTechX Services, the Client confirms that they have read, understood and accepted these Terms.",
    },

    sections: [
      {
        title: "Introduction and Acceptance",
        body: [
          'These Terms and Conditions ("Terms") govern access to and use of the services provided by SyncTechX Lda. ("SyncTechX", "we", "the Company"), a company based in Maputo, Mozambique, including but not limited to cybersecurity assessments, penetration testing, architecture and readiness reviews, web development, mobile application development, infrastructure and cloud services, and related digital consultancy.',
          'By requesting a proposal, signing a service agreement ("Engagement Contract"), making a payment, or otherwise using SyncTechX Services, the Client ("Client", "you") confirms that they have read, understood and agree to be bound by these Terms and any technical or commercial annex associated with the specific engagement.',
          "These Terms apply to all Clients, including companies, public entities and individuals who contract Services on their own behalf or on behalf of third parties. Where the Client contracts on behalf of an organisation, the Client represents that they have authority to bind that organisation to these Terms.",
          "If the Client does not agree to all of these Terms, they must refrain from contracting for or using the Services and must communicate their objections in writing before any engagement begins so that the parties may negotiate alternative terms.",
          "In the event of a conflict between these Terms and a specific Engagement Contract signed by both parties, the provisions of the Engagement Contract shall prevail, and these Terms shall apply supplementally to matters not expressly addressed in that Contract.",
        ],
      },

      {
        title: "Definitions",
        body: [
          '"Services" — any assessment, test, development, consultancy, maintenance or delivery provided by SyncTechX under a specific proposal or contract.',
          '"Scope" — the systems, assets, applications, networks, cloud environments, accounts or persons expressly identified and authorised to be tested, accessed or worked on during an engagement, as documented in writing.',
          '"Rules of Engagement" — the technical and operational document attached to the Engagement Contract defining permitted testing windows, authorised and prohibited techniques, emergency contacts, communication protocols and criteria for immediate suspension of work.',
          '"Findings" — vulnerabilities, weaknesses, misconfigurations or risk observations identified during an assessment.',
          '"Client Data" — any information, system, credential, source code or infrastructure owned or operated by the Client to which SyncTechX has access during the provision of Services.',
          '"Deliverables" — reports, source code, documentation, dashboards, websites, applications or any other work product formally delivered to the Client as part of an engagement.',
          '"Business Day" — a weekday excluding national public holidays in the Republic of Mozambique.',
          '"Security Incident" — any event that compromises, or could reasonably compromise, the confidentiality, integrity or availability of Client Data.',
          '"Subcontractor" — any third party engaged by SyncTechX to support the provision of Services, subject to the conditions of Section 20.',
        ],
      },

      {
        title: "Authorisation and Scope of Services",
        body: [
          "No intrusive testing, social engineering simulation, physical review, or network, application, cloud or people assessment will be performed without the Client's prior written authorisation, a clearly defined scope and Rules of Engagement agreed by both parties before any technical activity begins.",
          "The Client warrants that it has legal authority to authorise testing of all systems, networks, applications and environments included within the Scope. Where assets are operated by third parties, such as cloud providers, managed service providers or shared infrastructure partners, the Client is responsible for obtaining the necessary authorisations from those third parties before work begins and for providing documentary evidence of such authorisation upon request by SyncTechX.",
          'The authorisation letter ("Authorization Letter") signed by the Client must identify, at minimum: the systems and assets included within the Scope; the validity period of the authorisation; the representatives authorised to change the Scope during the engagement; and confirmation that the Client possesses the necessary legal rights over the assets being tested.',
          'Any change to the Scope during an engagement ("Change of Scope") must be requested in writing and confirmed by both parties before any additional technical activity is performed. Verbal changes are not valid or binding.',
          "SyncTechX reserves the right to refuse, suspend or terminate any engagement if it determines that the authorised Scope is ambiguous, insufficient, contradictory, or that the authorisation cannot reasonably be confirmed, without prejudice to fees already due for work performed up to that point.",
          "The working model is modular: an engagement may begin with a priority perimeter, application or environment without requiring the entire Client environment to be covered in a single phase. Subsequent phases are subject to their own proposal and authorisation.",
          "Testing conducted outside the authorised Scope, even if discovered incidentally, will be immediately stopped and reported to the Client and will not be further exploited without express new authorisation.",
        ],
      },

      {
        title: "Nature and Limitations of Assessment Services",
        body: [
          'Cybersecurity assessments provided by SyncTechX, including external, application, cloud, internal network, people and process, and architecture assessments, represent a point-in-time assessment of risk, subject to the Scope, time and access level defined in the engagement. They do not constitute a guarantee, certification or attestation that the Client environment is free of vulnerabilities before, during or after the engagement.',
          "New vulnerabilities may arise at any time due to environmental changes, new threats, public disclosure of new attack techniques, or third-party software updates. SyncTechX assumes no ongoing responsibility for the Client's security posture outside the contracted period and Scope unless a continuous monitoring agreement has been expressly entered into.",
          'Black-box, grey-box and white-box testing have different levels of access and visibility, which will be specified in the proposal. The access level selected by the Client directly affects the depth and coverage of possible Findings.',
          "The final report constitutes the core deliverable of an assessment. Remediation, hardening, team training and retesting are separate services subject to their own Scope and proposal unless expressly included in the initial contract.",
          "SyncTechX prioritises Findings based on risk and business impact, using recognised industry classification methodologies, such as CVSS where applicable, combined with professional technical judgement and the Client's operational context. This prioritisation is a recommendation, not a binding instruction. Final decisions regarding remediation, risk acceptance or non-action remain exclusively with the Client.",
          "A retest confirms whether the specific tested Finding has been corrected within the original Scope and exploitation technique. It does not constitute a new full assessment of the environment unless separately contracted.",
        ],
      },

      {
        title: "Client Responsibilities",
        body: [
          "The Client agrees to provide accurate, complete and timely information about the environment, critical assets, operational dependencies and relevant technical or regulatory restrictions.",
          'The Client must appoint a responsible contact ("Engagement Owner") who is available during the agreed engagement hours and has authority to approve Scope changes and respond to incidents.',
          "The Client must ensure that critical production systems are appropriately protected, including current backups, contingency plans and maintenance windows, before any testing that could affect availability.",
          "The Client must immediately notify SyncTechX of any material change to the Scope, environment or infrastructure during the engagement, including unplanned changes made by other Client teams.",
          "The Client must not use SyncTechX Findings, methodologies, tools, source code or reports for purposes other than those expressly contracted, nor share such materials with third parties without prior written consent.",
          "The Client must ensure that third-party systems or accounts are not included in the Scope without documented authorisation from those third parties.",
          "The Client must cooperate in good faith in providing access, test environments, temporary credentials or technical documentation necessary to perform the engagement within agreed timelines. Delays in providing these elements may justify an adjustment to the project schedule without penalty to SyncTechX.",
          "The Client remains responsible for its own legal and regulatory obligations applicable to its sector. SyncTechX is a technical services provider and is not a substitute for legal or compliance advice.",
        ],
      },

      {
        title: "Confidentiality",
        body: [
          "Both parties agree to keep confidential all technical, commercial or operational information exchanged as part of the engagement, including Findings, credentials, system data, source code, architecture and report contents.",
          "Reports, Findings and evidence produced by SyncTechX are strictly confidential and intended solely for the Client and persons expressly authorised by the Client in writing.",
          "SyncTechX will apply reasonable technical and organisational measures to protect Client Confidential Information, including, where applicable, encrypted storage of reports and evidence, restricted internal access limited to the team assigned to the engagement, and secure deletion of temporary credentials after completion of the engagement.",
          "The confidentiality obligation remains in effect during and after the contractual relationship for a minimum period of 3 (three) years, unless otherwise agreed, or indefinitely with respect to credentials, technical secrets and unremediated vulnerabilities.",
          "This obligation does not apply to information that becomes publicly available without breach of these Terms; was demonstrably known to the receiving party before disclosure; or is legally required to be disclosed by a competent authority, subject to prior notice to the other party where legally possible and permitted.",
          "The SyncTechX team assigned to the engagement is bound by equivalent confidentiality obligations through internal agreements, whether direct employees or subcontractors.",
        ],
      },

      {
        title: "Data Protection",
        body: [
          "During the provision of Services, SyncTechX may access personal or sensitive data existing in Client systems, including data relating to employees, end customers or Client partners. SyncTechX undertakes to process such information only to the extent strictly necessary to provide the Services and not to use it for other purposes.",
          'The Client remains responsible, as the "Data Controller", for compliance with applicable data protection legislation regarding data held in its own systems, including the legal basis for permitting SyncTechX access during the engagement.',
          "For incidental access to personal data during technical assessments, SyncTechX acts as a data processor and undertakes not to copy or extract personal data beyond what is strictly necessary to demonstrate a Finding; to delete temporary copies of personal data after completion and acceptance of the report, unless legally required to retain them; and to notify the Client without undue delay if it identifies a Security Incident involving personal data during the work.",
          'Where applicable, particularly where the volume or sensitivity of data warrants it, the parties will enter into a specific Data Processing Agreement as an annex to the Engagement Contract, detailing security measures, authorised sub-processors and deletion procedures.',
          "International transfers of data, including storage in cloud environments outside Mozambique, where applicable, will be communicated to the Client and subject to applicable contractual safeguards.",
        ],
      },

      {
        title: "Security Incident Notification",
        body: [
          "If SyncTechX identifies, during the provision of Services, an active and ongoing Security Incident within the Client environment that is unrelated to authorised testing, SyncTechX will notify the Client as soon as reasonably possible and in any event no later than 24 (twenty-four) hours after detection through the emergency contact defined in the Rules of Engagement.",
          "If a Security Incident affects SyncTechX systems, credentials or infrastructure and may impact Client Data, SyncTechX will notify the Client without undue delay, describing the nature of the incident, potentially affected data and mitigation measures underway.",
          "Nothing in this section replaces legal incident notification obligations that directly apply to the Client towards regulatory authorities or data subjects.",
        ],
      },

      {
        title: "Intellectual Property",
        body: [
          'Methodologies, tools, report templates, frameworks, internal scripts and proprietary materials developed by SyncTechX before or independently of the engagement ("Pre-Existing Materials") remain the exclusive property of SyncTechX, even where incorporated into Deliverables.',
          "Unless otherwise agreed in writing, the Client receives a non-exclusive, perpetual and non-transferable licence to use the final report and specific engagement Deliverables for internal use within its organisation.",
          "For web and mobile application development services, ownership of source code and final Deliverables transfers to the Client upon full payment of the agreed amounts, unless otherwise provided in the Engagement Contract. Until full payment, SyncTechX retains ownership of the Deliverables, without prejudice to the Client's access for review purposes.",
          "Open-source libraries, frameworks and third-party code components integrated into Deliverables remain subject to their respective original licences. The Client is responsible for continued compliance with those licences after delivery.",
          "SyncTechX does not claim rights over Client data, trademarks, content or pre-existing intellectual property used or integrated as part of the Services.",
        ],
      },

      {
        title: "Fees and Payment",
        body: [
          "Fees, payment terms and payment schedules are defined in a specific commercial proposal for each engagement and become part of the Engagement Contract once accepted by both parties.",
          "Unless otherwise agreed, payments are due by the deadlines stated on the invoice. Failure to pay more than 15 (fifteen) days after the due date may result in suspension of Services following 5 (five) Business Days' prior notice.",
          "Late payment interest may be applied at the legally applicable rate in Mozambique, without prejudice to other rights available to SyncTechX.",
          "Additional expenses, including travel, third-party software licences, infrastructure specifically required for testing, certificates or specialised tools, will be communicated to and approved by the Client before being incurred and will be invoiced separately with supporting evidence.",
          "All quoted amounts are exclusive of applicable taxes unless otherwise stated. Tax withholdings, where legally required, are the Client's responsibility, and the Client must provide the relevant supporting certificates.",
          "Long-term or phased engagements may be invoiced by agreed milestones, with each milestone payable before the start of the following phase unless otherwise agreed.",
        ],
      },

      {
        title: "Disclaimer of Warranties",
        body: [
          "Services are provided with the level of care, technical competence and professional diligence reasonably expected in the industry, based on the information and access made available by the Client.",
          "SyncTechX does not guarantee that all existing risks, vulnerabilities or weaknesses will be identified, nor that the Client environment will remain immune from security incidents following completion of the Services.",
          'Development services are provided "as is" following delivery and acceptance, subject to any warranty or support period expressly agreed in writing. After that period, corrections, updates or additional maintenance are subject to a new Scope and budget.',
          "SyncTechX does not guarantee continued compatibility of Deliverables with future operating system, browser, third-party API or cloud platform updates released after delivery, unless continuous maintenance is contracted.",
          "No statement, whether verbal or written, made outside the Engagement Contract and these Terms constitutes a binding warranty by SyncTechX.",
        ],
      },

      {
        title: "Limitation of Liability",
        body: [
          "To the maximum extent permitted by applicable law, SyncTechX's total aggregate liability to the Client arising out of or relating to the Services, whether in contract, tort or otherwise, shall not exceed the total amount actually paid by the Client for the specific engagement giving rise to the claim during the 12 (twelve) months preceding the event giving rise to the claim.",
          "SyncTechX shall not be liable for indirect, incidental or consequential damages, loss of profits, loss of revenue, loss of data or loss of reputation, except in cases of proven wilful misconduct or gross negligence.",
          "SyncTechX shall not be liable for unavailability, failures, data corruption or system damage resulting from authorised testing where the Client was previously informed of the inherent risks described in the Rules of Engagement and provided explicit consent.",
          "Nothing in this section excludes liability that cannot legally be excluded or limited under Mozambican law, including liability arising from wilful misconduct, fraud or gross negligence.",
          "The limitations in this section also apply for the benefit of SyncTechX employees, directors and subcontractors.",
        ],
      },

      {
        title: "Indemnification",
        body: [
          "The Client agrees to indemnify and hold harmless SyncTechX, its employees and subcontractors from claims, damages, costs or expenses, including reasonable legal fees, arising from false or incomplete statements by the Client regarding its legal authority to authorise testing; violation by the Client of third-party rights by including unauthorised assets within the Scope; or negligent use of Findings or Deliverables by the Client or use outside the context recommended by SyncTechX.",
          "SyncTechX agrees to indemnify the Client for direct damages demonstrably resulting from wilful misconduct or gross negligence by SyncTechX in the performance of the Services, subject to the limits defined in Section 12.",
        ],
      },

      {
        title: "Insurance",
        body: [
          "SyncTechX maintains, or undertakes to maintain, professional liability insurance appropriate to the nature of the Services provided, including coverage for errors and omissions relating to cybersecurity assessments.",
          "Upon reasonable request by the Client, SyncTechX may provide evidence of the applicable policy, without disclosing commercially sensitive information.",
        ],
      },

      {
        title: "Testing with Potential Operational Impact",
        body: [
          "Certain tests, including load testing, denial-of-service simulations, testing in production environments and social engineering tests with potential internal reputational impact, carry inherent risks of temporary unavailability or instability.",
          "Such tests will only be performed with the Client's explicit written consent, agreed execution windows, predefined contingency plans and clear identification of critical systems to be excluded or treated with heightened care.",
          "The Client may request immediate suspension of a specific test at any time during the engagement if unexpected operational impact is observed, by contacting the technical team through the channels defined in the Rules of Engagement. SyncTechX will stop the relevant activity as soon as reasonably possible after receiving the request.",
        ],
      },

      {
        title: "Responsible Disclosure",
        body: [
          "All Findings identified during an assessment are reported exclusively to the Client through secure and agreed channels, such as encrypted reports or secure sharing platforms.",
          "SyncTechX will not publicly disclose, share with third parties or exploit any vulnerabilities identified outside the Scope strictly authorised by the Client, including after the engagement has ended.",
          "Where a Finding involves a vulnerability in software or a service provided by a third party rather than the Client, SyncTechX may, with the Client's prior agreement, follow coordinated responsible disclosure practices with that third party, without disclosing information identifying the Client without its consent.",
        ],
      },

      {
        title: "Development and Infrastructure Services",
        body: [
          "The functional, technological and visual scope of each project will be defined in a proposal or specification document (Technical Scope) agreed before development begins. Scope changes requested after approval (Change Requests) are subject to reassessment of timeline and cost.",
          "The Client will have the opportunity to review and approve partial deliveries and development milestones. Approval, or the Client's silence for more than 10 (ten) Business Days after delivery notification, will be deemed acceptance for milestone invoicing purposes.",
          "Unless otherwise agreed, a 30 (thirty) day warranty period is included following final delivery, covering correction of bugs that prevent operation in accordance with the Technical Scope. This period does not cover new functionality, design changes or incompatibilities caused by third-party changes after delivery.",
          "Server and cloud configuration, optimisation and monitoring services require temporary administrative access granted by the Client. SyncTechX is not responsible for cloud infrastructure costs incurred by the Client with third-party providers, which remain the Client's sole responsibility.",
          "Continuous maintenance, monitoring or post-delivery support services, where contracted, will be subject to a separate Service Level Agreement (SLA) defining response times, availability and support channels.",
        ],
      },

      {
        title: "Acceptable Use",
        body: [
          "The Client agrees not to use the Services, Deliverables or access provided by SyncTechX for activities that are unlawful under applicable Mozambican or international law; testing or attacking systems outside the authorised Scope; developing or distributing malware, malicious exploitation tools or content that infringes third-party rights; or harassing, deceiving or harming third parties through Deliverables produced by SyncTechX.",
        ],
      },

      {
        title: "Publicity and References",
        body: [
          "Unless otherwise instructed by the Client in writing, SyncTechX may refer to the fact that it has provided Services to the Client, including the Client's name and/or logo, in general marketing materials such as its institutional website, commercial proposals and presentations, without disclosing confidential engagement details, specific Findings or report contents.",
          "The Client may request in writing at any time that its name or logo be removed from public SyncTechX materials. Such request will be fulfilled within 10 (ten) Business Days.",
        ],
      },

      {
        title: "Subcontracting",
        body: [
          "SyncTechX may use specialised subcontractors to support the delivery of certain Services while retaining full responsibility towards the Client for the quality and compliance of the work delivered.",
          "All subcontractors are bound by confidentiality and data protection obligations equivalent to those applicable to SyncTechX itself. Upon request, the Client will be informed about the use of subcontractors in sensitive engagements.",
        ],
      },

      {
        title: "Non-Solicitation",
        body: [
          "During the term of the Engagement Contract and for a period of 12 (twelve) months after its termination, neither party shall actively solicit the direct employment of employees of the other party who were directly involved in the engagement without prior written consent.",
        ],
      },

      {
        title: "Term, Suspension and Termination",
        body: [
          "Each engagement contract remains in effect for the period specified in the relevant proposal and may be renewed or extended by mutual agreement.",
          "Either party may terminate the contract upon 15 (fifteen) days' prior written notice, except in the event of material breach, in which case termination may be immediate upon written notice specifying the nature of the breach.",
          "SyncTechX may immediately suspend Services without prior notice if it determines that the Client's authorisation is invalid, the Scope has been exceeded without consent, continuation presents an unmitigated legal or operational risk, or there is reasonable suspicion of unlawful activity by the Client.",
          "Upon termination, the Client shall pay for Services performed up to the termination date, including work in progress proportionate to the progress achieved.",
          "The provisions concerning Confidentiality, Intellectual Property, Limitation of Liability, Indemnification and Governing Law survive termination or expiry of the Engagement Contract.",
        ],
      },

      {
        title: "Force Majeure",
        body: [
          "Neither party shall be liable for failure or delay caused by circumstances beyond its reasonable control, including but not limited to natural disasters, national telecommunications or power infrastructure failures, governmental actions, pandemics or civil unrest, provided that the affected party notifies the other party without undue delay and makes reasonable efforts to mitigate the impact.",
        ],
      },

      {
        title: "Communications and Notices",
        body: [
          "All formal notices under these Terms must be made in writing by email addressed to the contact designated by each party in the Engagement Contract and shall be deemed received on the next Business Day after sending unless earlier delivery can be demonstrated.",
          "Day-to-day operational communications during an engagement, including progress updates, may be conducted through the channels defined in the Rules of Engagement, without prejudice to the requirements applicable to formal notices.",
        ],
      },

      {
        title: "Changes to These Terms",
        body: [
          "SyncTechX may periodically update these Terms to reflect legal, operational or service changes.",
          "Material changes will be communicated to Clients with active contracts at least 30 (thirty) days in advance.",
          "Continued use of the Services after the changes become effective constitutes acceptance of the updated Terms. Ongoing engagements remain governed by the Terms in effect on the date of signature unless otherwise agreed.",
        ],
      },

      {
        title: "Governing Law and Dispute Resolution",
        body: [
          "These Terms are governed by the laws of the Republic of Mozambique.",
          "The parties agree to seek to resolve any disputes amicably through direct negotiation between their respective representatives within 30 (thirty) days from notification of the dispute.",
          "If an amicable resolution cannot be reached, the parties may pursue mediation before commencing court proceedings, with costs shared equally.",
          "If the dispute remains unresolved, it shall be submitted to the competent courts of Maputo, Mozambique, unless the parties agree otherwise to arbitration, in which case the arbitration rules agreed in the Engagement Contract shall apply.",
        ],
      },

      {
        title: "Language and Interpretation",
        body: [
          "These Terms are drafted in Portuguese. Where a version in another language is provided for the Client's convenience, the Portuguese version shall prevail in the event of any discrepancy in interpretation.",
          "Section headings are provided for convenience only and do not affect the interpretation of the contents.",
        ],
      },

      {
        title: "Electronic Acceptance",
        body: [
          "Acceptance of these Terms and the Engagement Contract may be made by electronic signature, email confirmation or acceptance through a digital form, having the same legal and binding effect as a handwritten signature, subject to applicable Mozambican legislation governing electronic documents and transactions.",
        ],
      },

      {
        title: "General Provisions",
        body: [
          "If any provision of these Terms is determined by a competent court to be invalid, unlawful or unenforceable, the remaining provisions shall remain in full force and effect, and the affected provision shall be replaced by one that reflects, to the maximum extent possible, the original intent of the parties.",
          "These Terms, together with the specific commercial proposal and any annexes, including Rules of Engagement, Authorisation Letter, Non-Disclosure Agreement, Data Processing Agreement and SLA, constitute the entire agreement between the parties concerning the subject matter of the engagement and supersede any prior understandings or communications concerning the same subject.",
          "Neither party may assign the rights and obligations arising from these Terms without the prior written consent of the other party, except in the event of a merger, acquisition or corporate restructuring of SyncTechX, upon notification to the Client.",
          "A party's tolerance of any breach of a provision of these Terms does not constitute a waiver of the right to require future compliance with that or any other provision.",
          "Nothing in these Terms creates an employment, agency, partnership or joint venture relationship between the parties. SyncTechX acts as an independent service provider.",
        ],
      },

      {
        title: "Contact",
        body: [
          "For questions relating to these Terms and Conditions, data protection or the reporting of Security Incidents:",
          "SyncTechX Lda.",
          "Maputo, Mozambique",
          "hello@synctechx.com",
          "+258 84 752 966",
        ],
      },
    ],

    closing: {
      kicker: "SECURITY WITH CONTEXT",
      title: "Clarity is part of security too.",
      body:
        "Our terms exist to make responsibilities, boundaries and expectations clear before any work begins.",
      cta: "Talk to us",
    },

    footer: {
      line:
        "Think of us as a digital police team — working to protect the systems, platforms, and infrastructure that keep our region moving.",
      legal: "© 2026 SyncTechX. All rights reserved.",
    },
  },
};

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/"
      className="group flex items-center gap-3"
      aria-label="SyncTechX home"
    >
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden">
        <img
          src={markImage}
          alt=""
          className="relative z-10 h-8 w-8 object-contain"
        />
      </span>

      <span
        className={`display text-xl font-semibold tracking-[-.07em] ${
          light ? "text-white" : "text-[#101114]"
        }`}
      >
        SyncTech<span className="text-[#1b4fff]">X</span>
      </span>
    </a>
  );
}

export default function TermsAndConditions() {
  const [locale, setLocale] = useState<Locale>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);

  const t = copy[locale];

  return (
    <div className="min-h-screen bg-white text-[#101114]">
      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-40 border-b border-white/10 bg-[#101114] text-white">
        <div className="container flex h-[76px] items-center justify-between">
          <Logo light />

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
            <div className="hidden items-center gap-1 border border-white/25 p-1 sm:flex">
              <button
                onClick={() => setLocale("pt")}
                className={`mono px-2 py-1 text-[10px] ${
                  locale === "pt"
                    ? "bg-[#1b4fff] text-[#101114]"
                    : "text-white/70"
                }`}
              >
                PT
              </button>

              <button
                onClick={() => setLocale("en")}
                className={`mono px-2 py-1 text-[10px] ${
                  locale === "en"
                    ? "bg-[#1b4fff] text-[#101114]"
                    : "text-white/70"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="/#contacto"
              className="hidden border border-[#1b4fff] px-4 py-2.5 text-xs font-semibold text-[#1b4fff] transition-colors hover:bg-[#1b4fff] hover:text-[#101114] sm:block"
            >
              {t.nav.contact}
            </a>

            <button
              aria-label={t.nav.menu}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 lg:hidden"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/15 bg-[#101114] px-5 py-6 lg:hidden">
            <div className="container flex flex-col gap-5">
              <a
                href="/#metodo"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-white/80"
              >
                {t.nav.method}
              </a>

              <a
                href="/#capacidades"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-white/80"
              >
                {t.nav.capabilities}
              </a>

              <a
                href="/#perspetiva"
                onClick={() => setMenuOpen(false)}
                className="eyebrow text-white/80"
              >
                {t.nav.perspective}
              </a>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => setLocale("pt")}
                  className="mono border border-[#1b4fff] px-3 py-2 text-[10px] text-[#1b4fff]"
                >
                  PT-PT
                </button>

                <button
                  onClick={() => setLocale("en")}
                  className="mono border border-white/25 px-3 py-2 text-[10px] text-white/70"
                >
                  EN-GB
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO */}
        <section className="grain relative overflow-hidden bg-[#101114] pt-[76px] text-white">
          <div className="absolute inset-0 dark-grid opacity-20" />

          <div className="container relative z-10 py-24 md:py-32 lg:py-40">
            <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
              <div>
                <div className="eyebrow text-[#1b4fff]">
                  {t.hero.kicker}
                </div>

                <div className="mono mt-10 text-[10px] text-white/35">
                  SYNCTECHX / LEGAL / 01
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
                  <span className="h-2 w-2 bg-[#1b4fff]" />
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
                TERMS / CONDITIONS
              </span>

              <span className="mono text-[9px] text-[#1b4fff]">
                STATUS / ACTIVE
              </span>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-[#f3f5f8] py-24 md:py-32">
          <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <div className="eyebrow text-[#1b4fff]">
                {t.intro.kicker}
              </div>

              <div className="signal-rule mt-10 text-sm text-[#101114]/50">
                Legal framework / SyncTechX
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

        {/* DOCUMENT */}
        <section className="bg-white py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[.25fr_.75fr]">
              {/* SIDEBAR */}
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

              {/* CONTENT */}
              <article className="max-w-4xl">
                {t.sections.map((section, index) => (
                  <section
                    id={`section-${index + 1}`}
                    key={section.title}
                    className="scroll-mt-10 border-t border-[#101114]/15 py-10 md:py-12"
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
                          {section.body.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="max-w-3xl text-[15px] leading-[1.9] text-[#101114]/65"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </article>
            </div>
          </div>
        </section>

        {/* MOBILE INDEX */}
        <section className="border-y border-[#101114]/15 bg-[#f3f5f8] lg:hidden">
          <div className="container py-12">
            <div className="eyebrow text-[#1b4fff]">DOCUMENT INDEX</div>

            <div className="mt-6 border-t border-[#101114]/15">
              {t.sections.map((section, index) => (
                <div
                  key={section.title}
                  className="border-b border-[#101114]/15"
                >
                  <button
                    onClick={() =>
                      setOpenSection(
                        openSection === index ? null : index
                      )
                    }
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
                      className={`transition-transform ${
                        openSection === index
                          ? "rotate-180 text-[#1b4fff]"
                          : ""
                      }`}
                    />
                  </button>

                  {openSection === index && (
                    <div className="pb-6 pl-9 pr-4">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mb-4 text-sm leading-relaxed text-[#101114]/65 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative overflow-hidden bg-[#101114] py-24 text-white md:py-32">
          <div className="absolute right-10 top-12 hidden lg:block">
            <div className="mono text-[10px] text-white/40">
              LEGAL / CLOSE
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
                  TERMS / TRANSPARENCY
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

      {/* FOOTER */}
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
              <a
                href="mailto:hello@synctechx.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
              >
                <Mail size={16} />
              </a>

              <a
                href="tel:+258847529665"
                aria-label="Phone"
                className="grid h-10 w-10 place-items-center border border-white/20 transition-colors hover:border-[#1b4fff] hover:text-[#1b4fff]"
              >
                <span className="text-sm font-medium">☎</span>
              </a>

              <a
                href="https://www.linkedin.com/company/synctechx/?viewAsMember=true"
                aria-label="LinkedIn"
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

              <span className="hidden text-white/20 sm:block">/</span>

              <a
                href="/terms"
                className="text-[#1b4fff]"
              >
                Terms & Conditions
              </a>

              <a
                href="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
            </div>

            <span className="mono">
              SECURITY WITH CONTEXT / 2026
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none relative mt-[-0.5rem] h-[clamp(6rem,16vw,14rem)] overflow-hidden select-none"
        >
          <div className="absolute bottom-[-0.34em] left-1/2 -translate-x-1/2 whitespace-nowrap text-[clamp(5.5rem,19vw,17rem)] font-black leading-none tracking-[-0.08em] text-white/[0.055]">
            SYNCTECHX
          </div>
        </div>
      </footer>
    </div>
  );
}