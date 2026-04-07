import React, { useState } from "react";

const testimonials = [
  {
    text: "Osetila sam sigurnost i razumevanje već od prvog susreta.",
    name: "M., 34",
  },
  {
    text: "Pomoglo mi je da bolje razumem sebe.",
    name: "J., 29",
  },
];

function Header({ setPage }) {
  return (
    <header style={{ padding: 16, borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between" }}>
      <div onClick={() => setPage("home")} style={{ fontWeight: "bold", cursor: "pointer" }}>
        Mia Todorovic
      </div>
      <button onClick={() => setPage("contact")}>Kontakt</button>
    </header>
  );
}

function HomePage({ setPage }) {
  return (
    <div style={{ padding: 24 }}>
      <h1>Gestalt psihoterapija</h1>

      <div style={{ marginTop: 24 }}>
        <h2>Iskustva klijenata</h2>
        {testimonials.map((t, i) => (
          <div key={i} style={{ marginTop: 16, padding: 16, border: "1px solid #ddd", borderRadius: 8 }}>
            <p>"{t.text}"</p>
            <p style={{ fontSize: 14, marginTop: 8 }}>{t.name}</p>
          </div>
        ))}
      </div>

      <button onClick={() => setPage("contact")} style={{ marginTop: 24 }}>
        Zakazi termin
      </button>
    </div>
  );
}

function ContactPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Kontakt</h1>
      <p>Telefon: +381 66 553 1509</p>
      <p>Email: mia.m.todorovic@gmail.com</p>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Header setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "contact" && <ContactPage />}
    </div>
  );
}
