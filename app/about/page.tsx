export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-[#3D405B]">
        Über Uns
      </h1>
      
      <div className="space-y-8">
        <section className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#81B29A]">
            Unsere Geschichte
          </h2>
          <p className="text-[#3D405B]/80 leading-relaxed">
            Seit 2020 setzen wir uns dafür ein, dass gebrauchte Kleidung dort ankommt, 
            wo sie am dringendsten gebraucht wird. Was als kleine Initiative in Hamburg begann, 
            ist heute ein deutschlandweites Netzwerk von Kleidersammelstellen.
          </p>
        </section>

        <section className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#81B29A]">
            Unsere Mission
          </h2>
          <p className="text-[#3D405B]/80 leading-relaxed mb-4">
            Wir glauben an eine Welt, in der Kleidung nachhaltig genutzt wird und Menschen in Not 
            Zugang zu hochwertiger Kleidung haben. Unsere Mission ist es, diese beiden Ziele zu vereinen.
          </p>
          <ul className="list-disc list-inside text-[#3D405B]/80 space-y-2">
            <li>Nachhaltige Nutzung von Textilien</li>
            <li>Unterstützung bedürftiger Menschen</li>
            <li>Reduzierung von Textilabfällen</li>
            <li>Förderung des sozialen Zusammenhalts</li>
          </ul>
        </section>

        <section className="bg-white/90 p-6 rounded-lg shadow-md border border-[#81B29A]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#81B29A]">
            Unser Team
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg hover:bg-[#81B29A]/10 transition-colors">
              <h3 className="font-semibold text-lg mb-2 text-[#3D405B]">Maria Schmidt</h3>
              <p className="text-[#3D405B]/70">Gründerin & Geschäftsführerin</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Thomas Weber</h3>
              <p className="text-gray-600">Logistik-Koordinator</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Sarah Meyer</h3>
              <p className="text-gray-600">Partnerschaften & Kooperationen</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Michael Bauer</h3>
              <p className="text-gray-600">Qualitätssicherung</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 