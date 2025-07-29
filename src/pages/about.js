export default function AboutUs() {
  return (
    <div className="bg-[#272c48] min-h-screen pt-20 py-12">
      <div className="flex items-center max-w-6xl mx-auto px-6 my-6 hover:scale-90 transition">
        <div className="flex-grow h-[2px] bg-[#ff7f50]"></div>
        <h1 className="text-center px-8 text-6xl text-white font-bold w-auto whitespace-nowrap">
          Über uns
        </h1>
        <div className="flex-grow h-[2px] bg-[#ff7f50]"></div>
      </div>
      <div className="max-w-4xl mx-auto bg-[#31395f] text-white shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold mb-6">Über uns</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Was macht das Unternehmen?
          </h2>
          <p className="leading-relaxed">
            Wir sind ein unabhängiges Vergleichsportal für Strom- und
            Gastarife. Unser Ziel ist es, Verbraucher dabei zu unterstützen,
            den passenden Energieanbieter zu finden – einfach, transparent und
            kostenlos. Durch unseren Tarifrechner erhalten Nutzer einen
            schnellen Überblick über verfügbare Angebote und können direkt
            wechseln.
          </p>
          <p className="mt-4 leading-relaxed">
            Zusätzlich bieten wir umfassende Informationen rund um das Thema
            Energie: von Spartipps bis hin zu Entwicklungen im Bereich
            erneuerbarer Energien. So ermöglichen wir fundierte Entscheidungen
            für eine bewusste und kosteneffiziente Energieversorgung.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Welche Werte hat das Unternehmen?
          </h2>
          <ul className="list-disc list-inside leading-relaxed space-y-2">
            <li>
              <strong>Unabhängigkeit:</strong> Wir arbeiten neutral und
              werbefrei – im Interesse der Verbraucher.
            </li>
            <li>
              <strong>Transparenz:</strong> Alle Anbieter und Preise werden
              klar und verständlich dargestellt.
            </li>
            <li>
              <strong>Energiekompetenz:</strong> Unser Team verfolgt ständig die
              Entwicklungen auf dem Energiemarkt und stellt aktuelles Wissen zur
              Verfügung.
            </li>
            <li>
              <strong>Nachhaltigkeit:</strong> Wir fördern aktiv grüne Tarife
              und umweltfreundliche Anbieter.
            </li>
          </ul>
        </section>

        <section className="mt-5">
          <h2 className="text-2xl font-semibold mb-4">
            Wer steckt dahinter?
          </h2>
          <p className="leading-relaxed">
            Hinter dem Portal steht ein erfahrenes Team aus Energieexperten,
            Redakteuren und Entwicklern. Mit Leidenschaft für digitale Lösungen
            und Verbraucheraufklärung arbeiten wir täglich daran, den
            Energiemarkt verständlicher und fairer zu machen. Unser Anspruch ist
            es, Menschen zu befähigen, die beste Wahl für ihre Energieversorgung
            zu treffen – einfach, sicher und nachhaltig.
          </p>
        </section>
      </div>
    </div>
  );
}
