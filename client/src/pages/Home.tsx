import { ChevronRight, Plus, Check, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Guia Interativo Moderno
 * - Poppins 800 para títulos (impacto e modernidade)
 * - Outfit para corpo (legibilidade e clareza)
 * - Cor #f83600 para CTAs e destaques
 * - Foco em combos de serviços e ticket médio
 * - Abas expandíveis tipo Notion
 */

interface ComboItem {
  id: string;
  serviço: string;
  base: string;
  categoria: string;
  items: Array<{
    titulo: string;
    descricao: string;
  }>;
  ticketBase: number;
  ticketCombo: number;
  aumento: number;
}

const combos: ComboItem[] = [
  {
    id: "oleo",
    serviço: "🔥 Cliente Veio Trocar Óleo",
    base: "O que você pode vender sem empurrar nada",
    categoria: "Cross-Sell Natural (mesmo sistema)",
    items: [
      {
        titulo: "✅ Filtro de ar do motor",
        descricao: "Melhora combustão e consumo.",
      },
      {
        titulo: "✅ Filtro de cabine",
        descricao: "Saúde + conforto (margem boa).",
      },
      {
        titulo: "✅ Filtro de combustível (se estiver no KM)",
        descricao: "Previne falha de bico.",
      },
    ],
    ticketBase: 150,
    ticketCombo: 380,
    aumento: 153,
  },
  {
    id: "lampada",
    serviço: "💡 Cliente Veio Trocar Lâmpada",
    base: "O que você pode vender com lógica (sem forçar nada)",
    categoria: "Mesmo Sistema (Iluminação)",
    items: [
      {
        titulo: "✅ Verificar lâmpada do outro lado",
        descricao: "Se uma queimou, a outra pode estar próxima.",
      },
      {
        titulo: "✅ Conferir luz de freio",
        descricao: "Altíssima taxa de conversão.",
      },
      {
        titulo: "✅ Conferir luz de placa",
        descricao: "Margem excelente, custo baixo.",
      },
      {
        titulo: "✅ Conferir setas e lanterna traseira",
        descricao: "Segurança do cliente.",
      },
      {
        titulo: "✅ Upgrade para lâmpada premium",
        descricao: "Maior durabilidade e melhor iluminação.",
      },
      {
        titulo: "✅ Polimento de farol (se estiver opaco)",
        descricao: "Margem alta. Resultado visual imediato.",
      },
      {
        titulo: "✅ Regulagem de farol",
        descricao: "Pouca oficina oferece. Alta percepção de profissionalismo.",
      },
    ],
    ticketBase: 80,
    ticketCombo: 320,
    aumento: 300,
  },
  {
    id: "pastilha",
    serviço: "🛑 Cliente Veio Ver Pastilha de Freio",
    base: "Como transformar isso em ticket alto com lógica técnica",
    categoria: "Conversão Inteligente",
    items: [
      {
        titulo: "✅ Troca do fluido de freio (se estiver velho)",
        descricao: "Fluido absorve umidade → perde ponto de ebulição.",
      },
      {
        titulo: "✅ Retífica ou troca do disco (se estiver no limite)",
        descricao: "Evita trepidação futura.",
      },
      {
        titulo: "✅ Inspeção da suspensão dianteira",
        descricao: "Freio e suspensão trabalham juntos.",
      },
      {
        titulo: "✅ Alinhamento (se houve troca de peças de suspensão)",
        descricao: "Essencial para durabilidade.",
      },
    ],
    ticketBase: 280,
    ticketCombo: 650,
    aumento: 132,
  },
  {
    id: "ar",
    serviço: "❄️ Cliente Veio Completar Gás do Ar",
    base: "Como vender com técnica (e não só recarga)",
    categoria: "Venda Consultiva",
    items: [
      {
        titulo: "✅ Higienização do sistema",
        descricao: "Alta conversão.",
      },
      {
        titulo: "✅ Troca do filtro de cabine",
        descricao: "Cliente sente resultado imediato.",
      },
      {
        titulo: "✅ Limpeza do dreno",
        descricao: "Previne odor e infiltração.",
      },
      {
        titulo: "✅ Recarga com balança (quantidade exata)",
        descricao: "Não 'no olho'.",
      },
    ],
    ticketBase: 120,
    ticketCombo: 380,
    aumento: 217,
  },
  {
    id: "correia",
    serviço: "🔧 Cliente Veio Trocar Correia Dentada",
    base: "Como estruturar isso da forma profissional (e lucrativa)",
    categoria: "Kit Completo",
    items: [
      {
        titulo: "✅ Kit completo (correia + tensor + polias)",
        descricao: "Essencial para durabilidade.",
      },
      {
        titulo: "✅ Bomba d'água (se acionada pela correia)",
        descricao: "Evita retrabalho futuro.",
      },
      {
        titulo: "✅ Retentores do comando",
        descricao: "Previne vazamento de óleo.",
      },
      {
        titulo: "✅ Retentor do virabrequim (se acessível)",
        descricao: "Proteção completa do sistema.",
      },
      {
        titulo: "✅ Fluido de arrefecimento novo (se abriu sistema)",
        descricao: "Manutenção preventiva.",
      },
    ],
    ticketBase: 400,
    ticketCombo: 950,
    aumento: 138,
  },
  {
    id: "amortecedor",
    serviço: "🚗 Cliente Veio Trocar Amortecedor",
    base: "Como transformar isso em ticket alto com lógica técnica",
    categoria: "Conversão Inteligente",
    items: [
      {
        titulo: "✅ Kit batente + coifa",
        descricao: "Essencial para proteger o amortecedor novo.",
      },
      {
        titulo: "✅ Coxim superior (se dianteiro)",
        descricao: "Muito comum estar estourado.",
      },
      {
        titulo: "✅ Bieletas",
        descricao: "Altíssima taxa de conversão.",
      },
      {
        titulo: "✅ Avaliação de pivôs e buchas",
        descricao: "Folga gera retorno rápido.",
      },
      {
        titulo: "✅ Alinhamento obrigatório após troca",
        descricao: "Essencial para durabilidade.",
      },
      {
        titulo: "✅ Avaliação de pneus (desgaste irregular?)",
        descricao: "Identifica problemas de suspensão.",
      },
    ],
    ticketBase: 350,
    ticketCombo: 820,
    aumento: 134,
  },
];

export default function Home() {
  const [expandedCombo, setExpandedCombo] = useState<string | null>(null);

  const toggleCombo = (id: string) => {
    setExpandedCombo(expandedCombo === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ORÇAMENTO <span className="text-red-600">LUCRATIVO</span>
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Guia de Combos para Aumentar Ticket
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1
            className="text-5xl font-black mb-6 text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Combos de Serviço que
            <br />
            <span className="text-red-600">Aumentam Ticket</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Veja exemplos práticos de como estruturar sua Ordem de Serviço para oferecer serviços
            complementares e aumentar o ticket médio sem empurrar venda.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-lg p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">+130%</p>
              <p className="text-gray-600 font-medium">Aumento médio em ticket</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">6</p>
              <p className="text-gray-600 font-medium">Exemplos de combos reais</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <p className="text-4xl font-bold text-red-600 mb-2">100%</p>
              <p className="text-gray-600 font-medium">Ético e consultivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Combos Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-3xl font-black mb-12 text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Clique em um Serviço para Ver os Combos
          </h2>

          <div className="space-y-3">
            {combos.map((combo) => (
              <div key={combo.id}>
                {/* Combo Header - Clickable */}
                <button
                  onClick={() => toggleCombo(combo.id)}
                  className="w-full bg-white border border-gray-200 rounded-lg p-4 hover:border-red-300 hover:bg-red-50 transition-all flex items-center justify-between"
                >
                  <div className="text-left">
                    <h3
                      className="font-bold text-gray-900"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {combo.serviço}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{combo.base}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform ${
                      expandedCombo === combo.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content - Accordion */}
                {expandedCombo === combo.id && (
                  <div className="bg-white border border-t-0 border-gray-200 rounded-b-lg p-6 space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                        {combo.categoria}
                      </p>
                      <div className="space-y-3">
                        {combo.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all"
                          >
                            <Plus className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-gray-900 font-medium">{item.titulo}</p>
                              <p className="text-sm text-gray-600 mt-1">{item.descricao}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Result Box */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                      <p className="text-sm text-gray-700 mb-4">
                        Quando o cliente aprova os serviços complementares:
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                            Ticket Base
                          </p>
                          <p className="text-2xl font-bold text-gray-900">
                            R$ {combo.ticketBase}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                            Ticket Final
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            R$ {combo.ticketCombo}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 uppercase tracking-wide mb-1">
                            Aumento
                          </p>
                          <p className="text-2xl font-bold text-green-600">
                            +{combo.aumento}%
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                        <Check className="w-4 h-4 text-green-600" />
                        <span>Sem empurrar venda. Apenas oferecendo opções.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl font-black mb-6 text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Pronto para Aumentar Sua Lucratividade?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Acesse nosso agente IA que analisa suas Ordens de Serviço, identifica oportunidades de
            aumento de ticket e sugere melhorias específicas para sua oficina.
          </p>

          <a
            href="https://pay.hotmart.com/K104322004P?checkoutMode=10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all animate-bounce">
              Acessar Agora + Análise de Ordens
            </button>
          </a>

          <p className="text-gray-600 text-sm mt-6">
            ✓ Acesso ao agente IA + Análise de suas ordens de serviço + Sugestões de otimização +
            Aumento de lucratividade
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Sobre</h4>
              <p className="text-sm">
                Guia prático baseado em casos reais de oficinas que aumentaram ticket médio
                estruturando melhor suas Ordens de Serviço.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Conteúdo</h4>
              <ul className="text-sm space-y-2">
                <li>6 Combos de Serviço</li>
                <li>Exemplos Práticos</li>
                <li>Lógica de Venda</li>
                <li>Margem e Conversão</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Créditos</h4>
              <p className="text-sm">
                Material de <span className="font-semibold">Rodrigo Saddock</span>
                <br />
                Mkt Cheio de Graxa
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 Guia OS Lucro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
