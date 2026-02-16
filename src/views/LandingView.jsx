import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// --- 1. SOUS-COMPOSANT POUR LES CARTES D'ÉVÉNEMENTS ---
const EventCard = ({ title, date, image }) => (
  <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl shadow-md overflow-hidden snap-start hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-[#1e3a8a] font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-400 text-xs mb-4">{date}</p>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
        standard dummy text, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
    </div>
  </div>
);

const LandingView = () => {
  const navigate = useNavigate();

  // --- LOGIQUE DU COMPTE À REBOURS ---
  const [timeLeft, setTimeLeft] = useState({
    days: 10, hours: 12, minutes: 5, seconds: 32
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const goToAuth = () => {
    navigate("/hackathon/auth/AuthView");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* --- BARRE DE NAVIGATION --- */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white border-b sticky top-0 z-50">
        <div className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
        <div className="flex-grow flex justify-center">
          <img src="/logo-sdi.png" alt="Logo SDI" className="h-10 md:h-12 object-contain" />
        </div>
        <div className="hidden sm:block">
          <button onClick={goToAuth} className="text-[#1e3a8a] font-bold text-sm hover:text-[#f94c10] transition-colors uppercase tracking-widest">
            Commencer
          </button>
        </div>
      </nav>

      {/* --- SECTION HERO --- */}
      <header className="background-p relative flex flex-col items-center text-center py-12 md:py-20 px-4">
        <h1 className="hero--title text-3xl md:text-6xl leading-tight">
          <span className="text-[#1e3a8a]">Bienvenue à</span> <br />
          <span className="text-[#f94c10]">la Semaine de l&apos;Innovation</span>
        </h1>
        <p className="mt-6 text-gray-700 max-w-lg text-sm md:text-lg font-medium leading-relaxed">
          Rejoignez dès à présent l&apos;univers passionnant du salon de l&apos;innovation à l&apos;ESATIC.
        </p>
        <div className="mt-10 max-w-3xl w-full rounded-[40px] md:rounded-[55px] overflow-hidden shadow-2xl border-4 border-white mx-auto transition-transform hover:scale-[1.01] duration-500">
          <img src="/hero-img.jpg" alt="Innovation Brain" className="w-full h-auto object-cover" />
        </div>
        <button onClick={goToAuth} className="mt-10 btn-sdi px-12 py-4 rounded-full text-lg font-bold text-white shadow-lg">
          Decouvrir
        </button>
      </header>

      {/* --- SECTION INFOS --- */}
      <section className="max-w-6xl mx-auto py-16 px-6 bg-white rounded-t-[50px] -mt-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a]">C&apos;est quoi la SDI ?</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">
              La Semaine de l&apos;Innovation est un événement phare de l&apos;ESATIC visant à mettre en lumière les projets technologiques les plus audacieux.
            </p>
            <div className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-sm border-2 border-gray-50">
              <img src="/75607.jpg.jpeg" alt="Tech" className="w-full h-56 object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-end text-right space-y-5 md:mt-24">
            <div className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-sm border-2 border-gray-50">
              <img src="/qs.jpg.jpeg" alt="VR" className="w-full h-56 object-cover" />
            </div>
            <div className="flex flex-col items-end">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a]">Son objectif</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mt-2">
                Encourager l&apos;esprit d&apos;innovation, favoriser l&apos;insertion professionnelle et créer un pont entre étudiants et entreprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION CAROUSEL --- */}
      <section className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center font-bold text-xl uppercase tracking-widest mb-10 text-gray-800">
            Les événements au programme
          </h2>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x scrollbar-hide">
            <EventCard title="La Jetic" date="25 au 29 Janvier 2026" image="/jet.JPG.jpeg" />
            <EventCard title="Le Salon de l'Innovation" date="24 Janvier 2026" image="/Si.JPG.jpeg" />
            <EventCard title="Le Technovore Hackathon" date="25 au 29 Janvier 2026" image="/ht.JPG.jpeg" />
            <EventCard title="La Jetic" date="25 au 29 Janvier 2026" image="/jet.JPG.jpeg" />
          </div>
        </div>
      </section>

      {/* --- SECTION : THÈME & COUNTDOWN (VERSION BLANCHE) --- */}
      <section className="py-20 bg-pattern-building text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-[#f94c10] font-bold uppercase tracking-[0.3em] text-xs mb-8">Thème</h3>
          <h2 className="text-xl md:text-3xl font-bold leading-relaxed mb-16 text-[#1e3a8a] max-w-3xl mx-auto">
            Innovation numérique, talents et partenariat stratégique : 
            <br /> co-construire les solutions de demain
          </h2>

          {/* Countdown Box (Bleu SDI) */}
          <div className="bg-[#1e3a8a] inline-flex items-center gap-6 md:gap-12 p-8 md:px-14 rounded-2xl shadow-2xl mb-24 border border-blue-400/20 text-white">
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.days}</span>
              <span className="text-[10px] uppercase mt-2 opacity-70 tracking-widest">Days</span>
            </div>
            <span className="text-3xl opacity-30">:</span>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</span>
              <span className="text-[10px] uppercase mt-2 opacity-70 tracking-widest">Hours</span>
            </div>
            <span className="text-3xl opacity-30">:</span>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>
              <span className="text-[10px] uppercase mt-2 opacity-70 tracking-widest">Minutes</span>
            </div>
            <span className="text-3xl opacity-30">:</span>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-bold">{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
              <span className="text-[10px] uppercase mt-2 opacity-70 tracking-widest">Seconds</span>
            </div>
          </div>

          <h3 className="text-lg font-bold mb-12 text-[#1e3a8a]">Partenaires & Sponsors</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200"></div>
            <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200"></div>
            <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200"></div>
            <div className="h-20 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200"></div>
          </div>

          <div className="pt-10 border-t border-gray-200 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="/logo-esatic.png" alt="ESATIC" className="h-8" />
            <img src="/logo-sdi.png" alt="SDI" className="h-6" />
            <img src="/logo-jetic.png" alt="JETIC" className="h-6" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 text-center bg-white">
        <div className="flex justify-center gap-6 mb-4">
          <img src="/logo-whatsapp.png" alt="WA" className="h-5 opacity-40 hover:opacity-100 transition cursor-pointer" />
          <img src="/logo-fb.png" alt="FB" className="h-5 opacity-40 hover:opacity-100 transition cursor-pointer" />
          <img src="/logo-linkedin.png" alt="IN" className="h-5 opacity-40 hover:opacity-100 transition cursor-pointer" />
        </div>
        <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] montserrat">
          ESATIC &bull; Semaine de l&apos;innovation &bull; 2026
        </p>
      </footer>
    </div>
  );
};

export default LandingView;