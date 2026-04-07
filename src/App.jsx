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
    <header className="p-4 border-b flex justify-between">
      <div onClick={() => setPage("home")} className="font-bold cursor-pointer">
        Mia Todorovic
      </div>
      <button onClick={() => setPage("contact")}>Kontakt</button>
    </header>
  );
}

function HomePage({ setPage }) {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Gestalt psihoterapija</h1>

      <div>
        <h2 className="text-xl font-semibold">Iskustva klijenata</h2>
        {testimonials.map((t, i) => (
          <div key={i} className="mt-4 p-4 border rounded">
            <p>"{t.text}"</p>
            <p className="text-sm mt-2">{t.name}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setPage("contact")}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Zakazi termin
      </button>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Kontakt</h1>
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