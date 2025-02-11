'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function Bestaetigung() {
  const searchParams = useSearchParams();
  const datum = new Date(searchParams.get('datum') || '');

  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4 mt-16 sm:mt-20">
      <div className="bg-white/90 p-8 rounded-lg shadow-lg border border-[#81B29A]/20">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#81B29A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-[#81B29A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#3D405B]">
            Vielen Dank für Ihre Kleiderspende!
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">Ihre Registrierung wurde erfolgreich gespeichert:</h2>
          
          <div className="space-y-2">
            <p><strong>Name:</strong> {searchParams.get('name')}</p>
            <p><strong>Art der Übergabe:</strong> {
              searchParams.get('uebergabeart') === 'geschaeftsstelle' 
                ? 'Übergabe an der Geschäftsstelle' 
                : 'Abholung'
            }</p>
            {searchParams.get('uebergabeart') === 'abholung' && (
              <>
                <p><strong>Adresse:</strong> {searchParams.get('adresse')}</p>
                <p><strong>PLZ:</strong> {searchParams.get('plz')}</p>
              </>
            )}
            <p><strong>Art der Kleidung:</strong> {searchParams.get('kleiderart')}</p>
            <p><strong>Krisengebiet:</strong> {searchParams.get('krisengebiet')}</p>
            <p><strong>Datum der Registrierung:</strong> {datum.toLocaleString()}</p>
          </div>

          <div className="mt-8 p-4 bg-[#81B29A]/10 rounded-lg border border-[#81B29A]/20">
            <h3 className="font-semibold mb-2 text-[#3D405B]">Nächste Schritte:</h3>
            {searchParams.get('uebergabeart') === 'geschaeftsstelle' ? (
              <p>
                Sie können Ihre Kleiderspende zu unseren Öffnungszeiten in der Geschäftsstelle abgeben.
                Bitte bringen Sie diese Bestätigung mit.
              </p>
            ) : (
              <p>
                Wir werden Sie in Kürze kontaktieren, um einen Abholtermin zu vereinbaren.
                Bitte halten Sie die Kleidung bis dahin bereit.
              </p>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-block bg-[#81B29A] text-white px-6 py-2 rounded-lg 
                       hover:bg-[#81B29A]/90 transition-all duration-200 
                       transform hover:scale-105"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 