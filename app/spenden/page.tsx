'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Liste der aktuellen Krisengebiete
const KRISENGEBIETE = [
  'Ukraine',
  'Syrien',
  'Jemen',
  'Gaza',
  'Sudan'
];

export default function SpendenFormular() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    uebergabeart: 'geschaeftsstelle',
    adresse: '',
    plz: '',
    kleiderart: '',
    krisengebiet: KRISENGEBIETE[0]
  });

  const [plzError, setPlzError] = useState('');

  // PLZ-Validierung (erste zwei Ziffern müssen 20 sein für Hamburg)
  const validatePLZ = (plz: string) => {
    if (!plz.startsWith('20')) {
      setPlzError('Die Abholung ist nur im Hamburger Stadtgebiet (PLZ 20XXX) möglich.');
      return false;
    }
    setPlzError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // PLZ-Validierung nur bei Abholung
    if (formData.uebergabeart === 'abholung') {
      if (!validatePLZ(formData.plz)) {
        return;
      }
    }

    // Alle Formulardaten plus Zeitstempel in URL-Parameter umwandeln
    const queryParams = new URLSearchParams({
      ...formData,
      datum: new Date().toISOString()
    }).toString();
    
    // Navigation zur Bestätigungsseite mit den Daten als URL-Parameter
    router.push(`/spenden/bestaetigung?${queryParams}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4 mt-16 sm:mt-20">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-[#3D405B]">
        Kleiderspende Registrierung
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 p-6 sm:p-8 rounded-lg shadow-lg border border-[#81B29A]/20">
        {/* Persönliche Daten */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#3D405B]">Name</label>
            <input
              type="text"
              className="w-full min-h-[44px] sm:min-h-[36px] p-2 border rounded-lg
                       focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A]
                       bg-white text-[#3D405B]"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#3D405B]">E-Mail</label>
            <input
              type="email"
              className="w-full min-h-[44px] sm:min-h-[36px] p-2 border rounded-lg
                       focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A]
                       bg-white text-[#3D405B]"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#3D405B]">Telefon</label>
          <input
            type="tel"
            className="w-full min-h-[44px] sm:min-h-[36px] p-2 border rounded-lg
                     focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A]
                     bg-white text-[#3D405B]"
            value={formData.telefon}
            onChange={(e) => setFormData({...formData, telefon: e.target.value})}
            required
          />
        </div>

        {/* Übergabeart */}
        <div className="space-y-2">
          <label className="block text-sm font-medium mb-2 text-[#3D405B]">Art der Übergabe</label>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <label className="flex-1 flex items-center p-4 border rounded-lg hover:bg-[#81B29A]/10 cursor-pointer">
              <input
                type="radio"
                name="uebergabeart"
                value="geschaeftsstelle"
                checked={formData.uebergabeart === 'geschaeftsstelle'}
                onChange={(e) => setFormData({...formData, uebergabeart: e.target.value})}
              />
              <span>Übergabe an der Geschäftsstelle</span>
            </label>
            <label className="flex-1 flex items-center p-4 border rounded-lg hover:bg-[#81B29A]/10 cursor-pointer">
              <input
                type="radio"
                name="uebergabeart"
                value="abholung"
                checked={formData.uebergabeart === 'abholung'}
                onChange={(e) => setFormData({...formData, uebergabeart: e.target.value})}
              />
              <span>Abholung</span>
            </label>
          </div>
        </div>

        {/* Adresse nur bei Abholung */}
        {formData.uebergabeart === 'abholung' && (
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#3D405B]">Abholadresse</label>
              <textarea
                className="w-full min-h-[88px] p-2 border rounded-lg"
                value={formData.adresse}
                onChange={(e) => setFormData({...formData, adresse: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#3D405B]">Postleitzahl</label>
              <input
                type="text"
                pattern="[0-9]{5}"
                className="w-full min-h-[44px] sm:min-h-[36px] p-2 border rounded-lg
                         focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A]
                         bg-white text-[#3D405B]"
                value={formData.plz}
                onChange={(e) => {
                  setFormData({...formData, plz: e.target.value});
                  if (e.target.value.length === 5) {
                    validatePLZ(e.target.value);
                  }
                }}
                required
              />
              {plzError && (
                <p className="text-red-500 text-sm mt-1">{plzError}</p>
              )}
            </div>
          </div>
        )}

        {/* Art der Kleidung */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#3D405B]">Art der Kleidung</label>
          <select
            className="w-full min-h-[44px] sm:min-h-[36px] p-2 border rounded-lg
                     focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A]
                     bg-white text-[#3D405B]"
            value={formData.kleiderart}
            onChange={(e) => setFormData({...formData, kleiderart: e.target.value})}
            required
          >
            <option value="">Bitte wählen</option>
            <option value="winterkleidung">Winterkleidung</option>
            <option value="sommerkleidung">Sommerkleidung</option>
            <option value="kinderkleidung">Kinderkleidung</option>
            <option value="schuhe">Schuhe</option>
            <option value="diverses">Diverses</option>
          </select>
        </div>

        {/* Krisengebiet */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#3D405B]">Krisengebiet</label>
          <select
            className="w-full min-h-[44px] sm:min-h-[36px] p-2 border rounded-lg
                     focus:ring-2 focus:ring-[#81B29A] focus:border-[#81B29A]
                     bg-white text-[#3D405B]"
            value={formData.krisengebiet}
            onChange={(e) => setFormData({...formData, krisengebiet: e.target.value})}
            required
          >
            {KRISENGEBIETE.map((gebiet) => (
              <option key={gebiet} value={gebiet}>{gebiet}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full min-h-[44px] bg-[#81B29A] text-white py-3 px-4 rounded-lg 
                   hover:bg-[#81B29A]/90 transition-all duration-200 
                   transform hover:scale-105 font-semibold text-lg 
                   shadow-md hover:shadow-xl"
        >
          Spende registrieren
        </button>
      </form>
    </div>
  );
} 