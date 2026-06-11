import { useState, useEffect } from 'react'
import AboutUsSection from '@/components/ui/about-us-section'
import ContactComponent from '@/components/ui/contact-section'
import KeunggulanSection from '@/components/ui/keunggulan-section'
import ProdukSection from '@/components/ui/produk-section'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#about-section', label: 'Tentang' },
    { href: '#produk', label: 'Produk' },
    { href: '#keunggulan', label: 'Keunggulan' },
    { href: '#dokumen', label: 'Dokumen' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <div className="font-sans text-text leading-relaxed overflow-x-hidden">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-white/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3' : ''}`}>
        <a href="#beranda" className={`text-xl font-bold no-underline transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
          CV. Wahyu Jaya Lestari
        </a>
        <ul className={`hidden md:flex gap-8 list-none ${menuOpen ? '!flex absolute top-full left-0 right-0 bg-white flex-col p-6 gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]' : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`no-underline text-sm font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${scrolled ? 'text-text' : 'text-white/90'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-primary' : 'bg-white'}`}></span>
          <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-primary' : 'bg-white'}`}></span>
          <span className={`w-6 h-0.5 transition-all ${scrolled ? 'bg-primary' : 'bg-white'}`}></span>
        </button>
      </nav>

      {/* HERO */}
      <section id="beranda" className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center brightness-[0.4]" style={{ backgroundImage: "url('/images/hero-aerial.png')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-dark/85"></div>
        <div className="relative z-[2] max-w-[800px] p-8">
          <div className="inline-block px-5 py-1.5 border border-accent/50 rounded-full text-accent text-xs font-medium tracking-[2px] uppercase mb-6">
            Pengolahan Kelapa Sawit
          </div>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold text-white leading-[1.15] mb-4">
            CV. Wahyu Jaya <span className="text-accent">Lestari</span>
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-[600px] mx-auto mb-10 leading-relaxed">
            Pengolahan Kelapa Sawit Terintegrasi di Kabupaten Kampar, Riau. 
            Kami memproses tandan buah segar menjadi CPO berkualitas dengan fasilitas 
            yang terverifikasi dan legalitas yang jelas.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#about-section" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-accent text-primary no-underline transition-all hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,164,74,0.3)]">
              Pelajari Lebih Lanjut
            </a>
            <a href="#kontak" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-transparent text-white border border-white/40 no-underline transition-all hover:border-white hover:bg-white/10 hover:-translate-y-0.5">
              Hubungi Kami
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] text-white/60 text-xs tracking-[2px] uppercase flex flex-col items-center gap-2">
          Scroll
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* ABOUT US SECTION (21st.dev) */}
      <AboutUsSection />

      {/* PRODUK & LAYANAN */}
      <ProdukSection />

      {/* KEUNGGULAN KOMPETITIF */}
      <KeunggulanSection />

      {/* DOKUMEN PERUSAHAAN */}
      <section id="dokumen" className="py-24 px-8 bg-bg-alt">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-accent text-xs font-semibold tracking-[3px] uppercase mb-3">Dokumen Perusahaan</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-4">Unduh Dokumen Legalitas</h2>
            <p className="text-base text-text-light max-w-[650px] mx-auto leading-relaxed">
              Kami menyediakan dokumen resmi perusahaan untuk keperluan due diligence 
              oleh investor, calon mitra, dan lembaga keuangan.
            </p>
          </div>
          <div className="flex flex-col gap-4 max-w-[800px] mx-auto">
            {[
              { title: 'Profil Perusahaan', desc: 'Dokumen profil lengkap perusahaan mencakup visi, misi, fasilitas, dan informasi operasional.', tags: ['PDF', 'Company Profile'], file: '/documents/Company-Profile-CV-Wahyu-Jaya-Lestari.pdf', featured: true },
              { title: 'Akta Pendirian Perusahaan', desc: 'Akta Notaris Nomor 02 tanggal 02 Oktober 2023, dibuat di hadapan Notaris Franderico Aseanto, S.H., M.Kn.', tags: ['PDF', 'Resmi'], file: '/documents/Akta-Pendirian-CV-Wahyu-Jaya-Lestari.pdf' },
              { title: 'Pengesahan Kemenkumham', desc: 'Surat pengesahan dari Kementerian Hukum dan HAM RI dengan nomor registrasi AHU-0061144-AH.01.14 Tahun 2023.', tags: ['PDF', 'Resmi'], file: '/documents/Pengesahan-Kemenkumham-AHU-0061144.pdf' },
            ].map(doc => (
              <div key={doc.title} className={`flex items-center gap-6 p-6 md:p-8 rounded-2xl transition-all duration-300 ${doc.featured ? 'bg-gradient-to-r from-[#1a3d2b] to-[#2d5a3f] border-2 border-[#c9a44a] shadow-[0_8px_40px_rgba(201,164,74,0.2)]' : 'bg-white border border-gray-200 hover:border-accent hover:shadow-[0_8px_30px_rgba(201,164,74,0.1)]'}`}>
                <div className={`shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white ${doc.featured ? 'bg-[#c9a44a]' : 'bg-gradient-to-br from-primary to-primary-light'}`}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`text-base font-bold ${doc.featured ? 'text-white' : 'text-primary'}`}>{doc.title}</h3>
                    {doc.featured && <span className="px-2 py-0.5 bg-[#c9a44a] text-[#1a3d2b] text-[9px] font-bold uppercase tracking-wider rounded-full">Featured</span>}
                  </div>
                  <p className={`text-sm leading-relaxed mb-2 ${doc.featured ? 'text-white/70' : 'text-text-light'}`}>{doc.desc}</p>
                  <div className="flex gap-2 flex-wrap">
                    {doc.tags.map(tag => (
                      <span key={tag} className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${doc.featured ? 'bg-white/15 text-white' : 'bg-bg-alt text-primary'}`}>{tag}</span>
                    ))}
                  </div>
                </div>
                {doc.featured ? (
                  <a href={doc.file} download className="botao-download shrink-0 no-underline relative">
                    <span className="texto-download">Unduh</span>
                    <svg className="svg-download" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </a>
                ) : (
                  <a href={doc.file} download className="shrink-0 w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center no-underline transition-all duration-300 hover:bg-primary hover:text-accent hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(26,61,43,0.2)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10 p-6 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-sm text-text-light">
              <strong>Catatan:</strong> Jika Anda memerlukan dokumen tambahan atau salinan resmi lainnya, silakan{' '}
              <a href="#kontak" className="text-primary font-semibold underline">hubungi kami</a> langsung untuk permintaan khusus.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <ContactComponent />

      {/* FOOTER */}
      <footer className="bg-dark text-white/50 py-12 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <div>
            <div className="text-lg font-bold text-white">CV. Wahyu Jaya <span className="text-accent">Lestari</span></div>
            <p className="text-sm mt-1">Pengolahan Kelapa Sawit Terintegrasi</p>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} CV. Wahyu Jaya Lestari. Seluruh hak cipta dilindungi.</p>
          <ul className="flex gap-6 list-none">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="text-white/50 no-underline text-sm transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default App
