import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F1DE]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="flex flex-col items-center">
            {/* First line - splits on small screens, one line on larger screens */}
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-3 sm:mb-4">
              <span className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black
                bg-gradient-to-r from-[#81B29A] via-[#81B29A]/90 to-[#81B29A]
                text-transparent bg-clip-text
                tracking-tight leading-[1.2]
              ">
                Gemeinsam für
              </span>
              <span className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black
                bg-gradient-to-r from-[#81B29A] via-[#81B29A]/90 to-[#81B29A]
                text-transparent bg-clip-text
                tracking-tight leading-[1.2]
                relative
                pb-4
              ">
                nachhaltige
                <svg className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 md:w-56 lg:w-64
                  text-[#81B29A]/20" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <path d="M0,0 Q50,8 100,0" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </div>
            {/* Second line - always centered */}
            <span className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black
              bg-gradient-to-r from-[#81B29A] via-[#81B29A]/90 to-[#81B29A]
              text-transparent bg-clip-text
              tracking-tight leading-[1.2]
              mt-3 sm:mt-4
            ">
              Kleiderspenden
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-14 md:mb-16 text-[#3D405B]/80 text-center max-w-3xl mx-auto mt-12">
            Ihre Kleiderspende kann Menschen in Not helfen und zur Nachhaltigkeit beitragen.
          </p>
          <div className="text-center">
            <Link 
              href="/spenden"
              className="inline-block bg-[#81B29A] text-white px-10 py-5 
                       rounded-lg text-xl font-semibold
                       hover:bg-[#81B29A]/80 transition-all duration-200
                       shadow-lg hover:shadow-xl"
            >
              Registriere dich für eine Kleiderspende
            </Link>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
            <div className="text-[#81B29A] mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#3D405B]">Schnell & Einfach</h3>
            <p className="text-[#3D405B]/80">
              Registrieren Sie Ihre Spende in wenigen Minuten. Wir kümmern uns um den Rest.
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
            <div className="text-[#81B29A] mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#3D405B]">Direkte Hilfe</h3>
            <p className="text-[#3D405B]/80">
              Ihre Kleidung erreicht Menschen in Krisengebieten direkt und ohne Umwege.
            </p>
          </div>

          <div className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
            <div className="text-[#81B29A] mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#3D405B]">Nachhaltig</h3>
            <p className="text-[#3D405B]/80">
              Gemeinsam reduzieren wir Textilabfälle und schonen die Umwelt.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#3D405B]">
          Bereit zu spenden?
        </h2>
        <p className="mb-8 text-[#3D405B]/80">
          Ihre nicht mehr benötigte Kleidung kann anderen Menschen eine große Hilfe sein.
        </p>
      </div>
    </main>
  );
}

