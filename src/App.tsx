import React, { useRef } from 'react';
import { Mail, MessageSquare, ChevronDown, Shield, Clock, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassForm } from './components/GlassForm';
import { PlanosGrid, Plano } from './components/PlanosGrid';

function App() {
  const [selectedPlano, setSelectedPlano] = React.useState<Plano | undefined>(undefined);
  const plansRef = useRef<HTMLDivElement>(null);

  const planos: Plano[] = [
    { id: 1,  nome: 'PLANO 1',  capital: '10.000',  quantidade: 1,  premio: '29,90' },
    { id: 2,  nome: 'PLANO 2',  capital: '15.000',  quantidade: 2,  premio: '44,85' },
    { id: 3,  nome: 'PLANO 3',  capital: '20.000',  quantidade: 3,  premio: '59,80' },
    { id: 4,  nome: 'PLANO 4',  capital: '25.000',  quantidade: 4,  premio: '74,75' },
    { id: 5,  nome: 'PLANO 5',  capital: '35.000',  quantidade: 5,  premio: '104,65' },
    { id: 6,  nome: 'PLANO 6',  capital: '50.000',  quantidade: 6,  premio: '149,50' },
    { id: 7,  nome: 'PLANO 7',  capital: '75.000',  quantidade: 7,  premio: '224,25' },
    { id: 8,  nome: 'PLANO 8',  capital: '100.000', quantidade: 8,  premio: '299,00' },
    { id: 9,  nome: 'PLANO 9',  capital: '150.000', quantidade: 9,  premio: '448,50' },
    { id: 10, nome: 'PLANO 10', capital: '200.000', quantidade: 10, premio: '598,00' },
    { id: 11, nome: 'PLANO 11', capital: '250.000', quantidade: 11, premio: '747,50' },
    { id: 12, nome: 'PLANO 12', capital: '300.000', quantidade: 12, premio: '897,00' },
    { id: 13, nome: 'PLANO 13', capital: '500.000', quantidade: 13, premio: '1.495,00' },
  ];

  const handlePlanoSelect = (plano: Plano) => {
    setSelectedPlano(plano);
    setTimeout(() => {
      plansRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50"
      >
        <MessageSquare className="w-8 h-8" />
      </a>

      {/* Hero Section Redesigned */}
      <header className="w-full min-h-[90vh] sm:min-h-[80vh] bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 relative overflow-hidden px-4 sm:px-6">
        <div className="container mx-auto h-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-12 sm:py-20">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  A melhor <span className="bg-white text-orange-600 px-3 py-1 rounded-lg inline-block transform -rotate-1">proteção</span>
                </motion.h1>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  para <span className="border-2 border-white/50 text-white px-4 py-1 rounded-full inline-block">estagiários</span>
                </motion.h2>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  e seus sonhos
                </motion.h2>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center lg:justify-start"
              >
                <button 
                  className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/80 transition-colors text-base sm:text-lg"
                  onClick={() => plansRef.current?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Quero ser protegido
                </button>
              </motion.div>
            </div>

            {/* Right Content */}
            <motion.div 
              initial={{ opacity: 0, rotate: 0, y: 20 }}
              animate={{ opacity: 1, rotate: 2, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative max-w-lg mx-auto lg:max-w-none"
            >
              <div className="bg-white p-3 sm:p-4 rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg"
                  alt="Proteção para estagiários"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                { value: '10', label: 'Anos de experiência' },
                { value: '50k+', label: 'Estagiários protegidos' },
                { value: '115', label: 'Avaliações de clientes' },
                { value: '24', label: 'Atendimento horas' }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      {/* Benefits Section - Cards Style */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Por que escolher a <span className="text-orange-600">JOB Seguros</span>?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <svg className="w-8 sm:w-10 h-8 sm:h-10 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
                title: 'Parceria Capemisa',
                desc: 'Respaldados pela Capemisa Seguradora, com mais de 65 anos de experiência no mercado — solidez e credibilidade para proteger você.'
              },
              {
                icon: <Shield className="w-8 sm:w-10 h-8 sm:h-10 text-orange-600" />,
                title: 'Cobertura Completa',
                desc: 'Proteção para estagiários conforme a Lei do Estágio (Lei nº 11.788/2008).'
              },
              {
                icon: <Clock className="w-8 sm:w-10 h-8 sm:h-10 text-orange-600" />,
                title: 'Atendimento Ágil',
                desc: 'Processo simples e pagamento rápido do benefício.'
              },
              {
                icon: <FileCheck className="w-8 sm:w-10 h-8 sm:h-10 text-orange-600" />,
                title: 'Contratação 100% Online',
                desc: 'Faça tudo pelo site, sem burocracia e com suporte dedicado.'
              }
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center border border-gray-100 flex flex-col items-center">
                <div className="flex items-center justify-center mb-4 sm:mb-6">{b.icon}</div>
                <div className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{b.title}</div>
                <div className="text-sm sm:text-base text-gray-500">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types Section - Modern Layout */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proteção completa para você</h2>
            <p className="text-gray-600 text-base sm:text-lg">Coberturas especialmente desenvolvidas para estagiários</p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-orange-600" />,
                title: 'Seguro de Vida (Acidentes Pessoais)',
                value: 'De R$ 10.000 a R$ 500.000',
                desc: 'A Lei do Estágio (Lei nº 11.788/2008) determina que a empresa ou órgão público contratante deve contratar seguro contra acidentes pessoais para o estagiário. Este seguro garante ao estudante ou seus beneficiários indenização em caso de morte ou invalidez por acidente. Vigência de 1 ano, podendo ser renovado.',
                highlights: ['Morte por acidente', 'Invalidez permanente total ou parcial por acidente', 'Pagamento único anual', 'Vigência: 1 ano renovável']
              },
              {
                icon: <FileCheck className="w-5 h-5 text-orange-600" />,
                title: 'Suporte Assistencial',
                value: 'Suporte Dedicado',
                desc: 'Em caso de um infortúnio, entre em contato com a JOB Seguros através de nossos canais aqui pelo site e te auxiliaremos em todo o processo.',
                highlights: ['Atendimento via site', 'Suporte ao beneficiário', 'Orientação no processo']
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="grid md:grid-cols-12 items-center p-6 sm:p-8">
                  {/* Icon Column */}
                  <div className="md:col-span-2 mb-4 md:mb-0 flex justify-center md:justify-start">
                    <div className="bg-orange-50 p-3 rounded-xl group-hover:bg-orange-100 transition-colors">
                      <div className="w-10 h-10 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="md:col-span-7 text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {item.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Value Column */}
                  <div className="md:col-span-3 mt-4 md:mt-0 text-center md:text-right">
                    <div className="text-orange-600 font-bold text-lg mb-2">{item.value}</div>
                    <button
                      onClick={() => plansRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 group-hover:underline"
                    >
                      Ver detalhes
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Instruction Section */}
      <section className="py-12 sm:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg" alt="Estagiários trabalhando" className="rounded-3xl shadow-lg w-full mb-6 lg:mb-0" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Contrate em poucos passos</h2>
              <ol className="space-y-4 text-base sm:text-lg text-gray-700 mb-8 list-decimal list-inside">
                <li>Escolha o plano ideal para você.</li>
                <li>Preencha o formulário de cadastro online — você está em um ambiente seguro e suas informações serão protegidas.</li>
                <li>Após o envio, você receberá um e-mail com as instruções para o pagamento e, após a confirmação, sua apólice será emitida.</li>
              </ol>
              <button 
                className="bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full font-medium hover:bg-orange-700 transition-colors text-base sm:text-lg"
                onClick={() => plansRef.current?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero ser protegido
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section Clean */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">O que dizem nossos clientes</h2>
          <div className="flex flex-col gap-8">
            {[
              {
                name: 'Ana Beatriz Costa',
                text: 'A Job Seguros transformou minha experiência como estagiária. Agora posso me dedicar aos estudos com mais tranquilidade, sabendo que estou protegida.'
              },
              {
                name: 'Lucas Mendes',
                text: 'O atendimento é incrível e o processo foi super rápido. Como estagiário, ter essa proteção faz toda diferença no meu desenvolvimento profissional.'
              },
              {
                name: 'Juliana Almeida',
                text: 'Os benefícios são excelentes e o preço cabe no bolso de qualquer estagiário. Recomendo para todos os colegas que estão começando a carreira.'
              }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-xl shadow p-6 text-center border border-gray-100"
              >
                <div className="text-gray-700 text-base mb-4">"{t.text}"</div>
                <div className="text-orange-600 font-semibold">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section Clean */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Como funciona o processo de contratação?',
                a: 'É simples e rápido! Escolha o plano ideal, preencha o formulário de cadastro online e envie seus dados. Fique tranquilo: você está em um ambiente seguro e suas informações serão protegidas.'
              },
              {
                q: 'Quanto tempo leva para o seguro começar a valer?',
                a: 'Após o envio do formulário, você receberá um e-mail com o boleto para pagamento. Realizando o pagamento, seu seguro já estará vigente por 1 ano, podendo ser renovado ao final do período caso queira.'
              },
              {
                q: 'Posso alterar meu plano depois de contratado?',
                a: 'Não é possível alterar uma apólice já emitida, pois trata-se de uma apólice única. Porém, se você considerar que o valor contratado é baixo, nada impede que você contrate uma nova apólice com capital segurado maior.'
              }
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl border border-gray-100 p-4"
              >
                <details>
                  <summary className="flex items-center cursor-pointer text-lg font-medium text-orange-700">
                    <ChevronDown className="w-5 h-5 mr-2" />
                    {faq.q}
                  </summary>
                  <div className="text-gray-600 mt-2 text-base pl-7">{faq.a}</div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section + Registration Form */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50" ref={plansRef}>
        <div className="container mx-auto px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Escolha o seu Plano</h2>
          <AnimatePresence mode="wait">
            {!selectedPlano && (
              <motion.div
                key="planos"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <PlanosGrid planos={planos} onSelect={handlePlanoSelect} selected={selectedPlano} />
              </motion.div>
            )}
            {selectedPlano && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={() => setSelectedPlano(undefined)}
                  className="mb-8 flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  Voltar e escolher outro plano
                </button>
                <GlassForm plano={selectedPlano} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 border-t border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          {/* Logo e nome */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src="/logo-jobseguros.png" alt="Job Seguros Logo" className="w-10 h-10 rounded-full bg-white shadow p-1" />
            <span className="text-gray-700 font-semibold text-base tracking-tight">JOB Seguros</span>
          </div>
          {/* Links rápidos */}
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <a href="mailto:contato@estagiarioseguro.net.br" className="hover:text-orange-600 transition-colors flex items-center gap-1" title="E-mail">
              <Mail className="w-4 h-4" /> E-mail
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors flex items-center gap-1" title="WhatsApp">
              <MessageSquare className="w-4 h-4" /> WhatsApp
            </a>
            <a href="https://instagram.com/jobseguros" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors flex items-center gap-1" title="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg> Instagram
            </a>
          </div>
          {/* Direitos autorais */}
          <div className="text-gray-400 text-xs mt-4 md:mt-0 text-center md:text-right">
            &copy; {new Date().getFullYear()} JOB Seguros. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;