export default function ImpressumDatenschutz() {
  return (
    <div className="bg-[#272c48] min-h-screen py-16 px-4 sm:px-6">
      {/* Başlık ve Çizgiler */}
      <div className="flex items-center max-w-6xl mx-auto px-2 my-6 hover:scale-90 transition">
        <div className="flex-grow h-[2px] bg-[#ff7f50]"></div>
        <h1 className="text-center px-4 text-2xl sm:text-4xl md:text-6xl text-white font-bold whitespace-nowrap">
          Impressum & Datenschutz
        </h1>
        <div className="flex-grow h-[2px] bg-[#ff7f50]"></div>
      </div>

      {/* İçerik Kutusu */}
      <div className="bg-[#31395f] w-full max-w-full sm:max-w-2xl md:max-w-3xl mx-auto p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
        <div className="text-white leading-relaxed text-sm sm:text-base">
          <section className="mb-6">
            Diese Datenschutzerklärung (“Vereinbarung”) stellt eine Vereinbarung
            zwischen CPC (“Agentur”) und ihren Kunden dar und regelt, wie die
            Agentur die vertraulichen Informationen ihrer Kunden verwendet und
            schützt. Diese Vereinbarung gilt zusätzlich zu anderen bestehenden
            Vereinbarungen zwischen den Parteien.
          </section>

          <h2 className="text-gray-400 font-bold text-lg sm:text-xl mb-3">
            Definition von Vertraulichen Informationen
          </h2>
          <section className="mb-6">
            “Vertrauliche Informationen” umfassen alle geschäftlichen,
            technischen, finanziellen oder sonstigen Informationen über das
            Unternehmen des Kunden, Kundendaten, Kunden des Kunden und
            Mitarbeiter, die schriftlich oder mündlich zwischen der Agentur und
            dem Kunden ausgetauscht werden. Dazu gehören auch Informationen, die
            zwar nicht schriftlich festgehalten sind, aber ihrer Natur nach als
            vertraulich gelten oder vernünftigerweise als vertraulich verstanden
            werden können.
          </section>

          <h2 className="text-gray-400 font-bold text-lg sm:text-xl mb-3">
            Vertraulichkeitsverpflichtung
          </h2>
          <section className="mb-6">
            Die Agentur verpflichtet sich, die vertraulichen Informationen des
            Kunden vertraulich zu behandeln. Die Agentur wird die vertraulichen
            Informationen nur im Zusammenhang mit dem Betrieb der Agentur gemäß
            den Bestimmungen dieser Vereinbarung verwenden und nur an die
            Mitarbeiter und autorisierten Vertreter der Agentur weitergeben, die
            mit den Aktivitäten der Agentur in Zusammenhang stehen. Die Agentur
            wird die vertraulichen Informationen nicht an Dritte weitergeben
            oder ohne Genehmigung nutzen.
          </section>

          <h2 className="text-gray-400 font-bold text-lg sm:text-xl mb-3">
            Ausnahmen von der Vertraulichkeit
          </h2>
          <section className="mb-6">
            Die Agentur ist berechtigt, vertrauliche Informationen unter
            folgenden Umständen offenzulegen:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Mit ausdrücklicher Zustimmung des Kunden.</li>
              <li>Zur Einhaltung geltender Gesetze oder Gerichtsbeschlüsse.</li>
              <li>Zum Schutz rechtlicher Interessen der Agentur.</li>
              <li>Mit schriftlicher Genehmigung des Kunden.</li>
            </ul>
          </section>

          <h2 className="text-gray-400 font-bold text-lg sm:text-xl mb-3">
            Schutzmaßnahmen
          </h2>
          <section className="mb-6">
            Die Agentur verpflichtet sich, angemessene Maßnahmen zu ergreifen,
            um die vertraulichen Informationen zu schützen. Diese Maßnahmen
            zielen darauf ab, unbefugten Zugriff, Offenlegung oder Veränderung
            der Informationen zu verhindern. Die Agentur kann jedoch keine
            vollständige Sicherheit der vertraulichen Informationen garantieren
            und übernimmt keine Haftung für unbefugten Zugriff oder Nutzung der
            Informationen.
          </section>

          <section>
            Für weitere Informationen oder Unterstützung bezüglich unserer
            Datenschutzpraktiken können Sie uns kontaktieren:
            <ul className="list-disc px-6 mt-4 space-y-2 text-sm sm:text-base">
              <li>
                📧 <strong>E-Mail:</strong> kundenservice@energiemarkt24.com
              </li>
              <li>
                📞 <strong>Telefon:</strong> +90 507 192 35 93
              </li>
              <li>
                📍 <strong>Adresse:</strong> ADALET MAH. MANAS BLV. NO: 39 İÇ
                KAPI NO: 3408 BAYRAKLI/İZMİR/TÜRKEI
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
