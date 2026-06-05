import { useState, useEffect, useRef } from "react";
const PepeMuka = new URL ('/Foto_Saya.jpg', import.meta.url).href;
const PusdikminLemPol = new URL ('/Pusdikmin_Lemdiklat.png', import.meta.url).href;
const RenaPol = new URL ('/Rena_Polri.png', import.meta.url).href;

// ========================================
// 📝 TEMPLATE BIODATA MAHASISWA
// Silakan edit data di bawah ini dengan biodata kamu sendiri!
// ========================================

const biodata = {
  // --- Data Pribadi ---
  nama: "Affan Abdul Ghafar",
  namaPanggilan: "Affan",
  nim: "250141007",
  prodi: "Akuntansi",
  fakultas: "Fakultas Ekonomi dan Bisnis",
  universitas: "Universitas Widyatama",
  tempatLahir: "Bandung",
  tanggalLahir: "9 Desember 2005",
  jenisKelamin: "Laki-laki",
  agama: "Islam",
  alamat: "Aspol Pusdikmin, Bandung",
  email: "affanabdghafar@gmail.com",
  telepon: "0812-2057-0579",
  moto: "\"Dibalik gelap ada terang, dibalik terang ada gelap.\"",

  // --- Tentang Saya ---
  tentangSaya:
    "Perkenalkan, saya adalah mahasiswa semester 2 di Universitas Widyatama. Saya memiliki ketertarikan di bidang akuntansi. Saya adalah pribadi yang bersemangat untuk belajar hal-hal baru, mudah beradaptasi, dan senang berkolaborasi dengan tim. Saat ini saya fokus mendalami ilmu akuntansi.",

  // --- Pendidikan ---
  pendidikan: [
    {
      tahun: "2024 - Sekarang",
      institusi: "Universitas Widyatama",
      jurusan: "S1 Akuntansi",
      deskripsi: "Kuliah sembari bekerja",
    },
    {
      tahun: "2021 - 2024",
      institusi: "SMA Negeri 12 Bandung",
      jurusan: "IPS (Ilmu Pengetahuan Sosial)",
      deskripsi: "Lulus dengan nilai terbaik",
    },
    {
      tahun: "2018 - 2021",
      institusi: "SMP Negeri 28 Bandung",
      jurusan: "Umum",
      deskripsi: "Aktif di organisasi Paskibra",
    },
  ],

  // --- Pengalaman Kerja ---
  pengalamanKerja: [
    {
      perusahaan: "Pusdikmin Lemdiklat Polri", // Isi nama instansi kamu
      logoPerusahaan: "", // Kosongkan, nanti kamu isi sendiri dengan logo instansi
      posisi: "Bamin Dalprogar Ur Perencanaan", // Isi jabatan/posisi kamu
      bidang: "Perencanaan",
      logoBidang: "", // Kosongkan, nanti kamu isi sendiri (emoji / URL gambar)
      tahun: "2024 - Sekarang", // Isi tahun mulai kerja
      tipeKerja: "POLRI",
      deskripsi:
        "Bertugas di Pusdikmin Lemdiklat Polri. Bertanggung jawab dalam pengendalian dan pertanggungjawaban program dan anggaran.",
      tugas: [
        "Menyusun laporan seperti LAKIP, LRA dan capaian kinerja anggaran",
        "Mengusulkan revisi RKA-K/L Satker TAB",
        "Melaksanakan evaluasi manajemen Resiko",
        "Menyusun dan mengevaluasi tata kerja",
      ],
    },
  ],

  // --- Keahlian ---
  // Keterangan: "Dasar" / "Menengah" / "Mahir" / "Lanjutan"
  keahlian: [
    { nama: "HTML & CSS", icon: "🌐", keterangan: "Menengah" },
    { nama: "JavaScript", icon: "⚡", keterangan: "Menengah" },
    { nama: "React.js", icon: "⚛️", keterangan: "Dasar" },
    { nama: "Python", icon: "🐍", keterangan: "Dasar" },
    { nama: "Microsoft Office", icon: "📄", keterangan: "Mahir" },
    { nama: "Desain Grafis", icon: "🎨", keterangan: "Menengah" },
  ],

  // --- Hobi & Minat ---
  hobi: [
    { icon: "🐧", nama: "Mengulik Linux" },
    { icon: "🪟", nama: "Mengulik Windows" },
    { icon: "🤖", nama: "Mengulik Android" },
  ],

  // --- Media Sosial ---
  sosialMedia: [
    { platform: "Instagram", username: "@affanabdghafar", link: "https://www.instagram.com/affanabdghafar/", icon: "📸" },
    { platform: "LinkedIn", username: "-", link: "#", icon: "💼" },
    { platform: "GitHub", username: "woldhrd", link: "https://github.com/Woldhrd", icon: "🐙" },
    { platform: "Twitter/X", username: "@Affanabdghafar", link: "https://x.com/Affanabdghafar", icon: "🐦" },
  ],
};

// ========================================
// Komponen-komponen UI
// ========================================

// Hook untuk animasi scroll
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang" },
    { href: "#pendidikan", label: "Pendidikan" },
    { href: "#pekerjaan", label: "Pekerjaan" },
    { href: "#keahlian", label: "Keahlian" },
    { href: "#hobi", label: "Hobi" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0a2e]/90 backdrop-blur-xl shadow-lg shadow-indigo-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#beranda"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-[Playfair_Display]"
        >
          Biodata
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-indigo-400 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden glass animate-slide-down">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a2e] via-[#1a0a3e] to-[#0a0a2e]" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Profile Photo */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <div className="profile-ring">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-6xl md:text-7xl overflow-hidden">
              {/* Ganti emoji ini dengan foto kamu */}
              <img src={PepeMuka} className="w-full h-full object-cover" />
	      {/*👨‍🎓*/}
            </div>
          </div>
        </div>

        {/* Name & Info */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up font-[Playfair_Display]">
          {biodata.nama}
        </h1>
        <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up delay-200">
          <span className="w-12 h-0.5 bg-indigo-400" />
          <p className="text-lg md:text-xl text-indigo-300 font-light tracking-widest uppercase">
            {biodata.prodi}
          </p>
          <span className="w-12 h-0.5 bg-indigo-400" />
        </div>
        <p className="text-gray-400 text-base md:text-lg mb-2 animate-fade-in-up delay-300">
          {biodata.universitas}
        </p>
        <p className="text-indigo-400/70 text-sm animate-fade-in-up delay-400">
          NIM: {biodata.nim}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500">
          <a
            href="#tentang"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Tentang Saya
          </a>
          <a
            href="#kontak"
            className="px-8 py-3 border border-indigo-500/50 text-indigo-300 rounded-full font-medium hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-indigo-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// Section Title Component
function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Playfair_Display]">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3">
        <span className="w-8 h-0.5 bg-indigo-500" />
        <p className="text-indigo-400 text-sm tracking-widest uppercase">{subtitle}</p>
        <span className="w-8 h-0.5 bg-indigo-500" />
      </div>
    </div>
  );
}

// About Section
function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const infoItems = [
    { label: "Nama Panggilan", value: biodata.namaPanggilan, icon: "😊" },
    { label: "Tempat, Tgl Lahir", value: `${biodata.tempatLahir}, ${biodata.tanggalLahir}`, icon: "🎂" },
    { label: "Jenis Kelamin", value: biodata.jenisKelamin, icon: "👤" },
    { label: "Agama", value: biodata.agama, icon: "🙏" },
    { label: "Alamat", value: biodata.alamat, icon: "🏠" },
  ];

  return (
    <section id="tentang" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0f0a2e] to-[#0a0a2e]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <SectionTitle title="Tentang Saya" subtitle="Kenali Saya Lebih Dekat" />

        <div ref={ref} className="grid md:grid-cols-2 gap-10 items-start">
          {/* About Text */}
          <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl">
                  ✨
                </div>
                <h3 className="text-xl font-semibold text-white">Perkenalan</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-justify">
                {biodata.tentangSaya}
              </p>
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-l-4 border-indigo-500">
                <p className="text-indigo-300 italic text-sm">{biodata.moto}</p>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-xl">
                  📋
                </div>
                <h3 className="text-xl font-semibold text-white">Data Pribadi</h3>
              </div>
              <div className="space-y-4">
                {infoItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  >
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs text-indigo-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-200">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Education Section
function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pendidikan" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#120a3e] to-[#0a0a2e]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionTitle title="Pendidikan" subtitle="Riwayat Pendidikan" />

        <div ref={ref} className="timeline-line">
          {biodata.pendidikan.map((item, index) => (
            <div
              key={index}
              className={`relative pl-16 pb-12 last:pb-0 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-2.5 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 z-10">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>

              {/* Card */}
              <div className="glass-light rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 mb-3">
                  {item.tahun}
                </span>
                <h3 className="text-xl font-semibold text-white mb-1">{item.institusi}</h3>
                <p className="text-indigo-400 text-sm mb-2">{item.jurusan}</p>
                <p className="text-gray-400 text-sm">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Work Experience Section
function WorkExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pekerjaan" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#14082e] to-[#0a0a2e]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionTitle title="Pengalaman Kerja" subtitle="Kuliah Sambil Bekerja 💪" />

        <div ref={ref} className="grid gap-8">
          {biodata.pengalamanKerja.map((kerja, index) => (
            <div
              key={index}
              className={`glass-light rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              {/* Header with gradient bar */}
              <div className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              <div className="p-6 md:p-8">
                {/* Top Row: Company Logo + Info */}
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-purple-600/30 border border-indigo-500/20 flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-indigo-500/10 animate-pulse-glow overflow-hidden">
                    <img src={PusdikminLemPol} alt="Logo" className="w-full h-full object-contain p-2"/>
                    </div>
                  </div>

                  {/* Company & Position Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {kerja.posisi}
                      </h3>
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold w-fit
                        ${kerja.tipeKerja === "Full-time"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : kerja.tipeKerja === "Part-time"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                          : kerja.tipeKerja === "PNS / Aparatur"
                          ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          : "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {kerja.tipeKerja}
                      </span>
                    </div>

                    <h4 className="text-lg text-indigo-300 font-medium mb-1">
                      {kerja.perusahaan}
                    </h4>

                    {/* Bidang / Field with logo */}
                    <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[8px] text-purple-400/60">
		    <img src={RenaPol} alt="Logo Bidang" className="w-6 h-6 object-contain" />
		    </span>
                      )
                      <span className="px-3 py-1 rounded-lg text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/20">
                        Bidang: {kerja.bidang}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{kerja.tahun}</span>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {kerja.deskripsi}
                    </p>

                    {/* Job Tasks */}
                    <div>
                      <p className="text-xs text-indigo-400 uppercase tracking-wider font-semibold mb-3">
                        Tugas & Tanggung Jawab
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {kerja.tugas.map((tugas, tIdx) => (
                          <div
                            key={tIdx}
                            className="flex items-start gap-2 text-sm text-gray-300"
                          >
                            <span className="text-indigo-400 mt-0.5 flex-shrink-0">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span>{tugas}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote */}
        <div className="mt-12 text-center">
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-400 text-sm">
              🎓📚 Kuliah sambil bekerja — <span className="text-indigo-300 font-medium">Pengalaman berharga yang mengajarkan manajemen waktu & disiplin.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="keahlian" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0f0a2e] to-[#0a0a2e]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionTitle title="Keahlian" subtitle="Skill & Kemampuan" />

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {biodata.keahlian.map((skill, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </span>
              <p className="text-white font-medium text-sm mb-2">{skill.nama}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                skill.keterangan === "Mahir"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : skill.keterangan === "Menengah"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                  : skill.keterangan === "Lanjutan"
                  ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  : "bg-sky-500/20 text-sky-300 border border-sky-500/30"
              }`}>
                {skill.keterangan}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Hobbies Section
function HobbiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="hobi" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#120a3e] to-[#0a0a2e]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionTitle title="Hobi & Minat" subtitle="Yang Saya Sukai" />

        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {biodata.hobi.map((hobi, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 cursor-default group ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="text-4xl block mb-3 group-hover:scale-125 transition-transform duration-300">
                {hobi.icon}
              </span>
              <p className="text-gray-300 text-sm font-medium">{hobi.nama}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontak" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] via-[#0f0a2e] to-[#0a0a2e]" />
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <SectionTitle title="Kontak" subtitle="Hubungi Saya" />

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <p className="text-xs text-indigo-400 uppercase tracking-wider">Email</p>
                    <p className="text-gray-200">{biodata.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl">
                    📱
                  </div>
                  <div>
                    <p className="text-xs text-indigo-400 uppercase tracking-wider">Telepon</p>
                    <p className="text-gray-200">{biodata.telepon}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <p className="text-xs text-indigo-400 uppercase tracking-wider">Alamat</p>
                    <p className="text-gray-200">{biodata.alamat}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">Media Sosial</h3>
              <div className="space-y-4">
                {biodata.sosialMedia.map((sosmed, index) => (
                  <a
                    key={index}
                    href={sosmed.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{sosmed.icon}</span>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{sosmed.platform}</p>
                      <p className="text-gray-400 text-xs">{sosmed.username}</p>
                    </div>
                    <svg
                      className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="absolute inset-0 bg-[#0a0a2e]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {biodata.nama}. Dibuat untuk Tugas Kuliah.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Dibuat dengan ❤️ menggunakan React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

// ========================================
// Main App Component
// ========================================
export default function App() {
  return (
    <div className="bg-[#0a0a2e] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <WorkExperienceSection />
      <SkillsSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
