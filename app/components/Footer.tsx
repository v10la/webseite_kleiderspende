export default function Footer() {
  return (
    <footer className="bg-[#3D405B] text-[#F4F1DE] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rechtliche Links */}
          <div>
            <h3 className="text-[#81B29A] font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="/impressum" className="hover:text-[#81B29A] transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-[#81B29A] transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="/agb" className="hover:text-[#81B29A] transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-[#81B29A] font-semibold mb-4">Kontakt</h3>
            <address className="not-italic">
              KleiderSpende Hamburg e.V.<br />
              Musterstraße 123<br />
              20095 Hamburg<br />
              <a href="tel:+494012345678" className="hover:text-[#81B29A] transition-colors">
                Tel: 040 - 123 456 789
              </a>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#81B29A] font-semibold mb-4">Folgen Sie uns</h3>
            <div className="space-y-2">
              <p>Bleiben Sie auf dem Laufenden</p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-[#F4F1DE] hover:text-[#81B29A] transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#F4F1DE]/20 mt-8 pt-8 text-sm text-center text-[#F4F1DE]/70">
          <p>&copy; {new Date().getFullYear()} KleiderSpende Hamburg e.V. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 