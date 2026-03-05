import React, { useRef, useState, useEffect } from 'react';
import { Mail, MessageSquare, ChevronDown, Shield, Clock, FileCheck, CheckCircle2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassForm } from './components/GlassForm';
import { PlanosGrid, Plano } from './components/PlanosGrid';

function App() {
  const [selectedPlano, setSelectedPlano] = React.useState<Plano | undefined>(undefined);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const planos: Plano[] = [
    { id: 1,  nome: 'PLANO 1',  capital: '10.000',  quantidade: 1,  premio: '29,90' },
    { id: 2,  nome: 'PLANO 2',  capital: '15.000',  quantidade: 2,  premio: '44,85' },
    { id: 3,  nome: 'PLANO 3',  capital: '20.000',  quantidade: 3,  premio: '59,80' },
    { id: 4,  nome: 'PLANO 4',  capital: '25.000',  quantidade: 4,  premio: '74,75' },
    { id: 5,  nome: 'PLANO 5',  capital: '35.000',  quantidade: 5,  premio: '104,65' },
    { id: 6,  nome: 'PLANO 6',  capital: '50.000',  quantidade: 6,  premio: '149,50' },
    { id: 7,  nome: 'PLANO 7',  capital: '75.000',  quantidade: 7,  premio: '224,25' },
    { id: 8,  nome: 'PLANO 8',  capital: '100.000', quantidade: 8,  premio: '299,00',  popular: true },
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

  const scrollToPlans = () => plansRef.current?.scrollIntoView({ behavior: 'smooth' });

  const faqs = [
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
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Navbar ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-jobseguros-removebg-preview.png"
              alt="JOB Seguros"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Por que nós?', id: 'beneficios' },
              { label: 'Cobertura', id: 'cobertura' },
              { label: 'Planos', id: 'planos' },
              { label: 'FAQ', id: 'faq' },
            ].map(link => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`text-sm font-medium transition-colors hover:text-orange-400 ${scrolled ? 'text-gray-600' : 'text-white/90'}`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            onClick={scrollToPlans}
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow hover:shadow-orange-200 hover:shadow-md"
          >
            Contratar agora
          </button>
        </div>
      </nav>

      {/* ── WhatsApp flutuante ── */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50 flex items-center justify-center"
        title="Fale pelo WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* ── Hero ── */}
      <header className="relative min-h-[100dvh] bg-gradient-to-br from-orange-700 via-orange-600 to-amber-500 overflow-hidden flex items-center noise-bg">
        {/* Blobs decorativos */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-orange-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Esquerda */}
            <div className="space-y-7">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <span className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
                Parceria Capemisa Seguradora • +65 anos de mercado
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05]"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                O seguro certo<br />
                para o<br />
                <span className="relative inline-block">
                  <span className="relative z-10">estagiário</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-400/40 -z-0 rounded" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-white/85 text-lg leading-relaxed max-w-md"
              >
                Seguro de Acidentes Pessoais exigido pela <strong className="text-white">Lei nº 11.788/2008</strong>.
                Contratação 100% online, pagamento anual único, cobertura imediata.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-3"
              >
                <button
                  onClick={scrollToPlans}
                  className="bg-white text-orange-700 font-bold px-8 py-4 rounded-full hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl text-base"
                >
                  Ver planos e preços
                </button>
                <button
                  onClick={() => document.getElementById('cobertura')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white/50 text-white font-semibold px-7 py-4 rounded-full hover:border-white hover:bg-white/10 transition-all text-base"
                >
                  Saiba mais
                </button>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6 pt-2"
              >
                {[
                  { v: 'R$ 29,90', l: 'a partir de / ano' },
                  { v: '100%', l: 'online' },
                  { v: '1 ano', l: 'de vigência' },
                ].map(s => (
                  <div key={s.l}>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Sora', sans-serif" }}>{s.v}</div>
                    <div className="text-white/65 text-xs uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Direita — imagem */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
                <img
                  src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg"
                  alt="Estagiários protegidos pela JOB Seguros"
                  className="w-full h-[540px] object-cover rounded-3xl shadow-2xl"
                />
                {/* Card flutuante */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-2xl p-5 w-56"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Seguro ativo</div>
                      <div className="text-sm font-bold text-gray-900">Cobertura 24h</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Exigido por lei • Lei nº 11.788/2008</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-2xl p-4 w-48"
                >
                  <div className="text-xs text-gray-500 mb-1">Capital segurado</div>
                  <div className="text-xl font-bold text-orange-600" style={{ fontFamily: "'Sora', sans-serif" }}>até R$500k</div>
                  <div className="text-xs text-gray-400 mt-1">13 opções de plano</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Onda de transição */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 30C480 60 240 10 0 40L0 80Z" fill="white"/>
          </svg>
        </div>
      </header>

      {/* ── Por que escolher ── */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Diferenciais</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Por que escolher a <span className="text-orange-600">JOB Seguros</span>?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>,
                color: 'bg-orange-50 border-orange-100',
                iconBg: 'bg-orange-100',
                title: 'Parceria Capemisa',
                desc: 'Respaldados pela Capemisa Seguradora, com mais de 65 anos de experiência e solidez no mercado segurador.'
              },
              {
                icon: <Shield className="w-7 h-7 text-blue-600" />,
                color: 'bg-blue-50 border-blue-100',
                iconBg: 'bg-blue-100',
                title: 'Cobertura Completa',
                desc: 'Proteção para estagiários conforme a Lei do Estágio (Lei nº 11.788/2008), com coberturas exigidas por lei.'
              },
              {
                icon: <Clock className="w-7 h-7 text-emerald-600" />,
                color: 'bg-emerald-50 border-emerald-100',
                iconBg: 'bg-emerald-100',
                title: 'Atendimento Ágil',
                desc: 'Processo simples e pagamento rápido do benefício. Sem burocracia, sem complicação.'
              },
              {
                icon: <FileCheck className="w-7 h-7 text-violet-600" />,
                color: 'bg-violet-50 border-violet-100',
                iconBg: 'bg-violet-100',
                title: 'Contratação 100% Online',
                desc: 'Faça tudo pelo site, no conforto da sua casa, com suporte dedicado em cada etapa.'
              }
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`${b.color} border rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200`}
              >
                <div className={`${b.iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  {b.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1.5" style={{ fontFamily: "'Sora', sans-serif" }}>{b.title}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{b.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cobertura ── */}
      <section id="cobertura" className="py-20 bg-stone-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">O que está incluído</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>
              Proteção completa para você
            </h2>
            <p className="text-gray-500 mt-3">Coberturas especialmente desenvolvidas para estagiários</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {/* Card Seguro de Vida */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "'Sora', sans-serif" }}>Seguro de Acidentes Pessoais</div>
                    <div className="text-orange-100 text-sm">Exigido pela Lei nº 11.788/2008</div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <div className="text-white/70 text-xs">Capital segurado</div>
                  <div className="text-white font-bold text-xl" style={{ fontFamily: "'Sora', sans-serif" }}>R$ 10.000 – R$ 500.000</div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed mb-6">
                  A <strong className="text-gray-800">Lei do Estágio (Lei nº 11.788/2008)</strong> determina que a empresa ou órgão público contratante deve contratar seguro contra acidentes pessoais para o estagiário. Este seguro garante ao estudante ou seus beneficiários uma indenização em caso de morte ou invalidez decorrente de acidente pessoal.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Morte por acidente', detail: 'Indenização total ao beneficiário' },
                    { label: 'Invalidez permanente total ou parcial', detail: 'Por acidente pessoal' },
                    { label: 'Pagamento único anual', detail: 'Sem mensalidades' },
                    { label: 'Vigência: 1 ano', detail: 'Renovável ao término' },
                  ].map(item => (
                    <div key={item.label} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{item.label}</div>
                        <div className="text-gray-400 text-xs mt-0.5">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 sm:hidden">
                  <div className="text-gray-500 text-xs mb-1">Capital segurado</div>
                  <div className="text-orange-600 font-bold text-xl" style={{ fontFamily: "'Sora', sans-serif" }}>R$ 10.000 – R$ 500.000</div>
                </div>
              </div>
            </motion.div>

            {/* Card Suporte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-start gap-6"
            >
              <div className="bg-gray-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "'Sora', sans-serif" }}>Suporte Assistencial</h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Em caso de um infortúnio, entre em contato com a <strong className="text-gray-700">JOB Seguros</strong> através de nossos canais aqui pelo site. Nossa equipe irá te orientar em todo o processo de acionamento do seguro com agilidade e atenção.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Atendimento via site', 'Suporte ao beneficiário', 'Orientação no processo'].map(t => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Como contratar ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Processo</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-10" style={{ fontFamily: "'Sora', sans-serif" }}>Contrate em poucos passos</h2>

              <div className="space-y-0">
                {[
                  {
                    n: '01',
                    title: 'Escolha o plano',
                    desc: 'Selecione o plano com o capital segurado ideal para a sua necessidade — de R$ 10.000 a R$ 500.000.'
                  },
                  {
                    n: '02',
                    title: 'Preencha o cadastro',
                    desc: 'Complete o formulário online. Você está em um ambiente seguro e suas informações serão protegidas.'
                  },
                  {
                    n: '03',
                    title: 'Receba o boleto por e-mail',
                    desc: 'Após o envio, você receberá um e-mail com as instruções de pagamento e, depois da confirmação, sua apólice é emitida.'
                  },
                ].map((step, i, arr) => (
                  <div key={step.n} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ fontFamily: "'Sora', sans-serif" }}>
                        {step.n}
                      </div>
                      {i < arr.length - 1 && <div className="w-px bg-orange-200 flex-1 my-2" />}
                    </div>
                    <div className={`pb-8 ${i === arr.length - 1 ? '' : ''}`}>
                      <div className="font-bold text-gray-900 mb-1.5 pt-2.5" style={{ fontFamily: "'Sora', sans-serif" }}>{step.title}</div>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToPlans}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-orange-200 hover:shadow-lg mt-2"
              >
                Quero ser protegido
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Estagiários"
                className="w-full h-[480px] object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section className="py-20 bg-stone-50 border-y border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>O que dizem nossos clientes</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: 'Ana Beatriz Costa',
                role: 'Estagiária de Direito',
                text: 'A JOB Seguros transformou minha experiência como estagiária. Agora posso me dedicar aos estudos com mais tranquilidade, sabendo que estou protegida.'
              },
              {
                name: 'Lucas Mendes',
                role: 'Estagiário de Engenharia',
                text: 'O atendimento é incrível e o processo foi super rápido. Como estagiário, ter essa proteção faz toda diferença no meu desenvolvimento profissional.'
              },
              {
                name: 'Juliana Almeida',
                role: 'Estagiária de Administração',
                text: 'Os benefícios são excelentes e o preço cabe no bolso de qualquer estagiário. Recomendo para todos os colegas que estão começando a carreira.'
              }
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div>
                  <div className="font-bold text-gray-900 text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Dúvidas</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>Perguntas Frequentes</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 pr-4" style={{ fontFamily: "'Sora', sans-serif" }}>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planos ── */}
      <section id="planos" className="py-24 bg-stone-50 border-t border-gray-100" ref={plansRef}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">Planos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2" style={{ fontFamily: "'Sora', sans-serif" }}>Escolha o seu Plano</h2>
            <p className="text-gray-500 mt-3">Pagamento único anual · Vigência 1 ano · Cobertura imediata após pagamento</p>
          </div>

          <AnimatePresence mode="wait">
            {!selectedPlano && (
              <motion.div
                key="planos"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <PlanosGrid planos={planos} onSelect={handlePlanoSelect} selected={selectedPlano} />
              </motion.div>
            )}
            {selectedPlano && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35 }}
              >
                <button
                  onClick={() => setSelectedPlano(undefined)}
                  className="mb-8 flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                  Voltar e escolher outro plano
                </button>
                <GlassForm plano={selectedPlano} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-gradient-to-r from-orange-600 to-amber-500 py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
            Garanta sua proteção hoje mesmo
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            A partir de <strong className="text-white">R$ 29,90/ano</strong>. Contratação em minutos, apólice digital, suporte dedicado.
          </p>
          <button
            onClick={scrollToPlans}
            className="bg-white text-orange-700 font-bold px-10 py-4 rounded-full hover:bg-orange-50 transition-all shadow-xl text-lg"
          >
            Ver planos e contratar
          </button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-2.5 mb-4 justify-center sm:justify-start">
                <img src="/logo-jobseguros-removebg-preview.png" alt="JOB Seguros" className="h-24 w-auto object-contain brightness-0 invert" />
              </div>
              <p className="text-sm leading-relaxed">
                Corretora de seguros especializada em proteção para estagiários. Parceria com a Capemisa Seguradora, mais de 65 anos de mercado.
              </p>
            </div>

            {/* Links */}
            <div>
              <div className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>Navegação</div>
              <ul className="space-y-2.5 text-sm">
                {['Por que nós?', 'Cobertura', 'Planos', 'Perguntas Frequentes'].map(l => (
                  <li key={l}><button className="hover:text-orange-400 transition-colors">{l}</button></li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <div className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Sora', sans-serif" }}>Contato</div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:contato@estagiarioseguro.net.br" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <Mail className="w-4 h-4" /> contato@estagiarioseguro.net.br
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/jobseguros" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                    Instagram
                  </a>
                </li>
                <li className="text-xs pt-1">estagiarioseguro.net.br</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 text-xs">
            <span>&copy; {new Date().getFullYear()} JOB Seguros. Todos os direitos reservados.</span>
            <span className="text-gray-600">Parceria Capemisa Seguradora • SUSEP</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
