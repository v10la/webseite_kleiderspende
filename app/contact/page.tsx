export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#3D405B]">
        Kontakt
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#81B29A]">
            Kontaktieren Sie uns
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-[#3D405B]">Adresse:</h3>
              <p className="text-[#3D405B]/80">
                KleiderSpende Hamburg e.V.<br />
                Musterstraße 123<br />
                20095 Hamburg
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#3D405B]">Öffnungszeiten:</h3>
              <p className="text-[#3D405B]/80">
                Montag - Freitag: 9:00 - 17:00 Uhr<br />
                Samstag: 10:00 - 14:00 Uhr<br />
                Sonntag: geschlossen
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-[#3D405B]">E-Mail:</h3>
              <a href="mailto:info@kleiderspende-hamburg.de" 
                 className="text-[#81B29A] hover:text-[#81B29A]/80">
                info@kleiderspende-hamburg.de
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#81B29A]">
            Anfahrt
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Mit öffentlichen Verkehrsmitteln:</h3>
              <p className="text-[#3D405B]/80">
                U-Bahn: U1 bis Station Musterhausen<br />
                Bus: Linie 123 bis Haltestelle Spendenzentrum
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Mit dem Auto:</h3>
              <p className="text-[#3D405B]/80">
                Kostenlose Parkplätze stehen direkt vor dem Gebäude zur Verfügung.
                Folgen Sie der Beschilderung "Kleiderspende Zentrum".
              </p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Wichtiger Hinweis:</h3>
              <p className="text-[#3D405B]/80">
                Bitte vereinbaren Sie für größere Kleidermengen telefonisch einen 
                Termin, damit wir die Annahme optimal koordinieren können.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 