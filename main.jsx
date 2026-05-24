import React from "react";
import { createRoot } from "react-dom/client";
import { Phone, MapPin, Hammer, Home, ShieldCheck, CheckCircle, Mail, Building2, Droplets, Paintbrush, Ruler } from "lucide-react";
import { motion } from "framer-motion";
import "./style.css";

const services = [
  {
    icon: <Home className="icon" />,
    title: "Fasade i termoizolacija",
    text: "Izrada demit fasada, obnova postojećih fasada, završna obrada i termoizolacioni sistemi za stambene i poslovne objekte."
  },
  {
    icon: <Hammer className="icon" />,
    title: "Građevinski radovi",
    text: "Grubi i završni građevinski radovi, adaptacije, sanacije, dogradnje i pripremni radovi po dogovoru."
  },
  {
    icon: <Droplets className="icon" />,
    title: "Hidroizolacija",
    text: "Hidroizolacija temelja, terasa, ravnih površina, sanacija vlage i zaštita objekta od prodora vode."
  },
  {
    icon: <Building2 className="icon" />,
    title: "Krovovi i limarija",
    text: "Popravka i izrada krovova, oluci, opšivke, limarski detalji i radovi na zaštiti objekta od atmosferskih uticaja."
  },
  {
    icon: <Paintbrush className="icon" />,
    title: "Završni radovi",
    text: "Gipsarski, molerski, keramičarski i drugi završni radovi u enterijeru i eksterijeru."
  },
  {
    icon: <Ruler className="icon" />,
    title: "Procena i ponuda",
    text: "Izlazak na teren, pregled stanja, savetovanje oko rešenja i izrada jasne ponude za izvođenje radova."
  }
];

const gallery = [
  "Fasada porodične kuće",
  "Sanacija krova",
  "Hidroizolacija terase",
  "Adaptacija enterijera",
  "Limarski detalji",
  "Završni radovi"
];

function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <div>
            <div className="brand">TERMO ETRINGIT</div>
            <div className="subtitle">Građevinski radovi</div>
          </div>
          <nav className="nav">
            <a href="#usluge">Usluge</a>
            <a href="#reference">Reference</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a href="tel:+381644361611" className="callBtn">Pozovi odmah</a>
        </div>
      </header>

      <section className="hero">
        <div className="glow" />
        <div className="container heroGrid">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="pill"><ShieldCheck size={16} /> Kragujevac i okolina</div>
            <h1>Građevinski radovi, fasade, krovovi i adaptacije.</h1>
            <p className="lead">TERMO ETRINGIT izvodi građevinske, izolaterske i završne radove na stambenim, poslovnim i pomoćnim objektima. Dolazimo na teren, procenjujemo stanje i dajemo jasnu ponudu za izvođenje.</p>
            <div className="heroActions">
              <a href="#kontakt" className="primary">Zatraži ponudu</a>
              <a href="#usluge" className="secondary">Pogledaj usluge</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.12 }} className="heroCard">
            <div className="heroPanel">
              {["Fasade", "Hidroizolacija", "Krovovi", "Adaptacije", "Završni radovi"].map((item) => (
                <div key={item} className="checkItem"><CheckCircle size={20} /><span>{item}</span></div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="usluge" className="container section">
        <div className="sectionHead">
          <div className="eyebrow">Usluge</div>
          <h2>Sve što objektu treba — od sanacije do završne obrade.</h2>
        </div>
        <div className="services">
          {services.map((service) => (
            <div key={service.title} className="serviceCard">
              <div className="serviceIcon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="stepsWrap">
        <div className="container steps">
          {[["01", "Izlazak na teren"], ["02", "Procena i dogovor"], ["03", "Jasna ponuda"], ["04", "Izvođenje radova"]].map(([num, text]) => (
            <div key={num} className="step"><div>{num}</div><strong>{text}</strong></div>
          ))}
        </div>
      </section>

      <section id="reference" className="container section">
        <div className="referenceHead">
          <div>
            <div className="eyebrow">Reference</div>
            <h2>Galerija izvedenih radova</h2>
          </div>
          <p>Ovde ubaciti stvarne fotografije sa terena: pre radova, tokom izvođenja i završeno stanje. To najviše prodaje posao.</p>
        </div>
        <div className="gallery">
          {gallery.map((item, index) => (
            <div key={item} className="galleryCard"><span>Rad #{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="container ctaWrap">
        <div className="cta">
          <div>
            <h2>Treba vam procena radova?</h2>
            <p>Pošaljite slike objekta ili pozovite za dogovor oko izlaska na teren. Dajemo predlog rešenja i okvirnu cenu radova.</p>
          </div>
          <a href="tel:+381644361611">Pozovite: +381 64 436 1611</a>
        </div>
      </section>

      <footer id="kontakt" className="footer">
        <div className="container footerGrid">
          <div>
            <div className="brand">TERMO ETRINGIT</div>
            <p>Građevinski radovi, fasade, krovovi, hidroizolacija i adaptacije. Kragujevac i okolina.</p>
          </div>
          <div className="contactList">
            <div><Phone size={20} /> +381 64 436 1611</div>
            <div><Mail size={20} /> info@termoetringit.rs</div>
            <div><MapPin size={20} /> Kragujevac, Srbija</div>
          </div>
          <div className="note">
            <strong>Brza poruka</strong>
            <p>Za najbolji odgovor pošaljite: lokaciju, slike objekta, približnu kvadraturu i vrstu radova.</p>
          </div>
        </div>
        <div className="copy">© 2026 TERMO ETRINGIT. Sva prava zadržana.</div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
