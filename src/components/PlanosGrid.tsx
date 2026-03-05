import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export type Plano = {
  id: number;
  nome: string;
  capital: string;
  quantidade: number;
  premio: string;
  popular?: boolean;
};

interface PlanosGridProps {
  planos: Plano[];
  onSelect: (plano: Plano) => void;
  selected?: Plano;
}

export const PlanosGrid: React.FC<PlanosGridProps> = ({ planos, onSelect, selected }) => (
  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
    {planos.map((plano, i) => (
      <motion.button
        key={plano.id}
        onClick={() => onSelect(plano)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.04, duration: 0.35 }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        className={`relative text-left rounded-2xl p-6 border-2 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
          selected?.id === plano.id
            ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-100'
            : plano.popular
            ? 'border-orange-300 bg-white shadow-md'
            : 'border-gray-200 bg-white hover:border-orange-200 hover:shadow-md'
        }`}
      >
        {/* Badge popular */}
        {plano.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow whitespace-nowrap" style={{ fontFamily: "'Sora', sans-serif" }}>
            Mais escolhido
          </div>
        )}

        {/* Número do plano */}
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{plano.nome}</div>

        {/* Capital */}
        <div className="mb-1">
          <span className="text-xs text-gray-500">Capital Segurado</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-4 leading-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          R$ {plano.capital}
        </div>

        {/* Divisor */}
        <div className={`h-px mb-4 ${plano.popular ? 'bg-orange-100' : 'bg-gray-100'}`} />

        {/* Prêmio */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Prêmio anual</span>
          <span className={`font-bold text-base ${plano.popular ? 'text-orange-600' : 'text-gray-800'}`} style={{ fontFamily: "'Sora', sans-serif" }}>
            R$ {plano.premio}
          </span>
        </div>

        {/* Vigência */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs text-gray-500">Vigência</span>
          <span className="text-xs font-medium text-gray-700">1 ano</span>
        </div>

        {/* Coberturas */}
        <div className="space-y-1.5">
          {['Morte por acidente', 'Invalidez permanente'].map(c => (
            <div key={c} className="flex items-center gap-2">
              <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${plano.popular ? 'text-orange-500' : 'text-gray-400'}`} />
              <span className="text-xs text-gray-500">{c}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-5 w-full py-2.5 rounded-xl text-sm font-semibold text-center transition-colors ${
          selected?.id === plano.id
            ? 'bg-orange-600 text-white'
            : plano.popular
            ? 'bg-orange-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-orange-600 hover:text-white'
        }`} style={{ fontFamily: "'Sora', sans-serif" }}>
          {selected?.id === plano.id ? '✓ Selecionado' : 'Selecionar plano'}
        </div>
      </motion.button>
    ))}
  </div>
);
