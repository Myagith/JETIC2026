import React, { useState, useEffect } from "react";


const EventCard = ({ title, date, image, description }) => (
  <div className="min-w-[280px] md:min-w-[320px] bg-white rounded-3xl shadow-md overflow-hidden snap-start hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 group">
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-[#1e3a8a] font-bold text-lg mb-1 group-hover:text-[#f94c10] transition-colors">{title}</h3>
      <p className="text-gray-400 text-xs mb-4 font-semibold uppercase tracking-widest">{date}</p>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{description}</p>
    </div>
  </div>
);

const LandingView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-02-26T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const goToExternalHackathon = () => {
    window.location.href = "";
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white">
      <style>
        {`
          .bg-white:before {
            content: "";
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-image: url('/aze.png');
            background-repeat: no-repeat;
            background-position: right top;
            background-size: 35% auto;
            filter: grayscale(100%) brightness(1.1);
            opacity: 0.25; 
            z-index: 0;
            pointer-events: none;
          }
          
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0px); }
          }
          .reveal { animation: slide-up 1s ease-out forwards; z-index: 10; position: relative; }
          
          .btn-shine-timer { position: relative; overflow: hidden; }
          .btn-shine-timer::after {
            content: ""; position: absolute; top: -50%; left: -60%; width: 20%; height: 200%;
            background: rgba(255, 255, 255, 0.3); transform: rotate(30deg); animation: shine 3s infinite linear;
          }
          @keyframes shine { 100% { left: 125%; } }
        `}
      </style>

     
      <nav className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b sticky top-0 z-[100] shadow-sm">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-all active:scale-90">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex-grow flex justify-center">
          <img src="/SDI.png" alt="Logo SDI" className="h-14 md:h-20 object-contain hover:scale-105 transition-transform cursor-pointer" />
        </div>
        <div className="hidden sm:block">
          <button onClick={goToExternalHackathon} className="text-[#1e3a8a] font-bold text-sm hover:text-[#f94c10] transition-all uppercase tracking-widest relative group">
            Commencer
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f94c10] transition-all group-hover:w-full"></span>
          </button>
        </div>
      </nav>

      
      <header className="relative flex flex-col items-center text-center py-12 md:py-20 px-4 reveal">
        <h1 className="text-3xl md:text-6xl leading-tight font-bold">
          <span className="text-[#1e3a8a]">Bienvenue à</span> <br />
          <span className="text-[#f94c10] ">la Semaine de l'Innovation</span>
        </h1>
        <p className="mt-6 text-gray-700 max-w-lg text-sm md:text-lg font-medium leading-relaxed">
          Rejoignez dès à présent l'univers passionnant du salon de l'innovation à l'ESATIC.
        </p>
        
        
        <div className="mt-10 max-w-3xl w-full relative">
          <div className="rounded-[40px] md:rounded-[55px] overflow-hidden shadow-2xl border-4 border-white">
            <img src="/image.png" alt="Innovation Brain" className="w-full h-auto object-cover" />
          </div>
        </div>

        
        <button 
          onClick={goToExternalHackathon} 
          className="mt-10 px-12 py-4 rounded-full text-lg font-bold text-white shadow-lg bg-[#f94c10] hover:bg-[#e0440e] transition-all transform hover:scale-110 active:scale-95"
        >
          Decouvrir
        </button>
      </header>

      {/* --- SECTION INFOS --- */}
      <section className="max-w-6xl mx-auto py-16 px-6 relative z-10 reveal">
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white/60 backdrop-blur-sm p-8 rounded-[40px] border border-white/20">
          <div className="flex flex-col space-y-5">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a]">C'est quoi la SDI ?</h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md">La Semaine de l'Innovation est un événement phare de l'ESATIC visant à mettre en lumière les projets technologiques.</p>
            <div className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-sm border-2 border-gray-50 group">
              <img src="/75607.jpg.jpeg" alt="Tech" className="w-full h-56 object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
          </div>
          <div className="flex flex-col items-end text-right space-y-5 md:mt-24">
            <div className="rounded-[30px] overflow-hidden shadow-lg w-full max-w-sm border-2 border-gray-50 group">
              <img src="/qs.jpg.jpeg" alt="VR" className="w-full h-56 object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1e3a8a]">Son objectif</h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mt-2">Favoriser l'insertion professionnelle et créer un pont entre étudiants et entreprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAROUSEL ÉVÉNEMENTS --- */}
      <section className="py-12 reveal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-bold text-xl uppercase tracking-widest mb-10 text-gray-800">Les événements au programme</h2>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x scrollbar-hide px-2">
            <EventCard title="La Jetic" date="27 fév au 02 mars 2026" image="/jet.jpeg" description="Les Journées de l'Entrepreneuriat et des TIC." />
            <EventCard title="Le Salon de l'Innovation" date="27 fév au 02 mars 2026" image="/Si.JPG.jpeg" description="Une exposition immersive des meilleurs projets." />
            <EventCard title="Le Technovore Hackathon" date="27 fév au 02 mars 2026" image="/ht.JPG.jpeg" description="Un marathon de code intense." />
            <EventCard title="Conférences" date="27 fév au 02 mars 2026" image="/conf.jpeg" description="Des experts de renom partagent leur vision." />
          </div>
        </div>
      </section>

      {/* --- THÈME ET COMPTE À REBOURS --- */}
      <section className="py-20 text-center px-6 reveal">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-md p-10 rounded-[50px]">
          <h3 className="text-[#f94c10] font-bold uppercase tracking-[0.3em] text-xs mb-8">Thème</h3>
          <h2 className="text-xl md:text-3xl font-bold leading-relaxed mb-16 text-[#1e3a8a]">
            Innovation numérique, talents et partenariat stratégique : <br /> co-construire les solutions de demain
          </h2>

          <div className="bg-[#1e3a8a] inline-flex items-center gap-6 md:gap-12 p-8 md:px-14 rounded-2xl shadow-2xl mb-24 text-white border border-blue-400/20 btn-shine-timer">
            {[ { label: "Jours", val: timeLeft.days }, { label: "Heures", val: timeLeft.hours }, { label: "Minutes", val: timeLeft.minutes }, { label: "Secondes", val: timeLeft.seconds }].map((unit, idx) => (
              <React.Fragment key={unit.label}>
                <div className="flex flex-col transform hover:scale-110 transition-transform">
                  <span className="text-3xl md:text-5xl font-bold">{unit.val < 10 ? `0${unit.val}` : unit.val}</span>
                  <span className="text-[10px] uppercase mt-2 opacity-70 tracking-widest">{unit.label}</span>
                </div>
                {idx !== 3 && <span className="text-3xl opacity-30 animate-pulse">:</span>}
              </React.Fragment>
            ))}
          </div>

        {/* --- SECTION PARTENAIRES & SPONSORS --- */}
      <section className="py-12 reveal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-10">Partenaires & Sponsors</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="w-24 h-24 md:w-40 md:h-32 bg-gray-100 rounded-2xl border-2 border-gray-50 shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

          <div className="flex flex-col items-center gap-12 mb-20">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-10">
              <img src="/Fichier 1.png" alt="ESATIC" className="h-20 md:h-32 object-contain" />
              <img src="/Fichier 2.png" alt="C2E" className="h-16 md:h-28 object-contain" />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 pt-10 border-t border-gray-100 w-full">
              <img src="/SDI.png" alt="SDI" className="h-20 md:h-28 object-contain" />
              <img src="/SI.png" alt="SI" className="h-20 md:h-28 object-contain" />
              <img src="/Technovore(1).png" alt="Technovore" className="h-20 md:h-28 object-contain" />
              <img src="/JETIC.png" alt="JETIC" className="h-20 md:h-28 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SIGNALEMENT --- */}
      <section className="py-16 px-6 reveal">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-[#1e3a8a] rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Sécurité</span>
              <h3 className="text-white font-bold text-2xl md:text-4xl mt-4">Plateforme de Signalement</h3>
              <span>Dénoncer de manière confidentielle toute suspicion de fraude ou de tricherie commise par une équipe durant l'événement.</span>
            </div>
            <button 
              onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdEFN0I8rVf699szzwQIqbYRgJuJgvAItR1-hQ3ljmn8zVbyQ/viewform?usp=publish-editor", "_blank")} 
              className="px-10 py-5 bg-white text-[#1e3a8a] rounded-2xl font-black text-lg shadow-xl hover:bg-[#f94c10] hover:text-white transition-all transform hover:-translate-y-1"
              > 
               SIGNALER
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 backdrop-blur-xl">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[40px] p-8 shadow-2xl animate-[slide-up_0.4s_ease-out]">
             <h2 className="text-2xl font-black text-gray-900 mb-6">Rapport Confidentiel</h2>
             <form className="space-y-6">
                <input type="text" placeholder="Cible" className="w-full px-5 py-4 bg-gray-50 border rounded-2xl outline-none" />
                <textarea rows="4" placeholder="Détails" className="w-full px-5 py-4 bg-gray-50 border rounded-2xl outline-none"></textarea>
                <button type="button" onClick={() => setIsModalOpen(false)} className="w-full py-5 bg-[#1e3a8a] text-white font-black rounded-2xl uppercase tracking-widest hover:bg-[#f94c10]">Soumettre</button>
             </form>
          </div>
        </div>
      )}

    

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-gray-100 text-center bg-white/80 backdrop-blur-sm reveal">
        <div className="flex justify-center items-center gap-10 mb-8">
          {[{ src: "/icons8-whatsapp-48.png", link: "https://wa.me/2250789979161" }, { src: "/insta.png", link: "#" }, { src: "/email.png", link: "mailto:contact@esatic.ci" }, { src: "/fac.png", link: "#" }, { src: "/lin.png", link: "#" }].map((social, i) => (
            <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={social.src} alt="Social" className="h-7 w-7 transition-all hover:scale-150" />
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">ESATIC &bull; 2026</p>
      </footer>
    </div>
  );
};

export default LandingView;