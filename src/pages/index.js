import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-[#272c48] min-h-screen pt-20 py-12">
      {/* Hero Section */}
      <section className="text-white text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Wir helfen Ihnen, den besten Energieanbieter zu finden.
        </h1>
        <p className="text-xl mb-8">
          Vergleichen Sie Strom- und Gastarife schnell, kostenlos und unabhängig.
        </p>
        <Link
          href="/vergleich"
          className="inline-block bg-[#ff7f50] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff5722] transition active:bg-[#ff6666] active:scale-95"
        >
          Jetzt vergleichen
        </Link>
      </section>

      <div className="flex flex-col gap-20 px-6 max-w-6xl mx-auto">
        {/* So funktioniert’s */}
        <section className="bg-[#31395f] rounded-3xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">So funktioniert’s</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-xl font-bold mb-2">1. Postleitzahl eingeben</h3>
              <p>Ihre Region auswählen und Verbrauch angeben.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">2. Angebote vergleichen</h3>
              <p>Alle Tarife transparent und unabhängig vergleichen.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">3. Anbieter wechseln</h3>
              <p>Online wechseln – wir übernehmen den Rest.</p>
            </div>
          </div>
        </section>

        {/* Vorteile für den Kunden */}
        <section className="bg-[#31395f] rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl text-white font-bold mb-6 text-center">
            Ihre Vorteile mit uns
          </h2>
          <ul className="list-disc pl-8 space-y-3 text-white text-lg leading-relaxed max-w-xl mx-auto">
            <li>Kostenloser und unabhängiger Tarifvergleich</li>
            <li>Transparente und aktuelle Marktinformationen</li>
            <li>Wechselservice – wir übernehmen die Formalitäten</li>
            <li>Umweltfreundliche Ökostrom-Angebote verfügbar</li>
            <li>Kompetente Beratung bei Fragen und Anliegen</li>
          </ul>
        </section>

        {/* Über uns – Firmenvorstellung */}
        <section className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <Image
              src="/strom.jpg"
              alt="Über uns Bild"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
          <Link href="/about">
            <div className="bg-[#31395f] rounded-3xl shadow-xl p-8 w-auto h-auto lg:h-[300px] hover:scale-105 active:scale-95 transition">
              <h2 className="text-3xl text-white font-bold mb-6">
                Wer wir sind
              </h2>
              <p className="text-white leading-relaxed text-lg">
                Wir sind ein unabhängiges Vergleichsportal für Strom- und
                Gastarife. Unser Ziel ist es, Ihnen zu helfen, den passenden
                Energieanbieter zu finden – schnell, transparent und
                unkompliziert.
              </p>
            </div>
          </Link>
        </section>

        {/* Ziel und Aufgabe */}
        <section className="grid md:grid-cols-2 items-center gap-12">
          <div className="bg-[#31395f] rounded-3xl shadow-xl p-8 order-2 md:order-1 w-auto h-auto lg:h-[300px]">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Unser Ziel und unsere Aufgabe
            </h2>
            <p className="text-white leading-relaxed text-lg">
              Wir möchten den Energiemarkt für alle verständlich machen und
              Ihnen helfen, bares Geld zu sparen. Mit unserem Vergleichstool
              finden Sie in wenigen Minuten den optimalen Tarif – individuell
              auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/energy.jpg"
              alt="Mission Bild"
              width={600}
              height={400}
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
        </section>

        {/* WhatsApp Kontaktmöglichkeit */}
        <section className="bg-[#31395f] rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">
            Kontaktieren Sie uns via WhatsApp
          </h2>
          <p className="text-white text-lg mb-4">
            Sie haben Fragen oder brauchen Hilfe beim Tarifwechsel?
            <br /> Schreiben Sie uns direkt – wir sind für Sie da!
          </p>
          <a
            href="https://wa.me/4915256254164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
          >
            WhatsApp Chat starten
          </a>
        </section>
      </div>
    </div>
  );
}
