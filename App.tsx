import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';
import { PageState, PPDBRegistration } from './types';
import { MAJORS, TEACHERS, STUDENTS, SCHOOL_NAME } from './constants';
import { 
  ChevronRight, 
  Award, 
  BookOpen, 
  Map,
  Pickaxe,
  Search,
  Calendar,
  CheckCircle,
  Target
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// --- Sub-components tailored for App.tsx content ---

// 1. HERO SECTION
const Hero: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => (
  <div className="relative bg-blue-900 text-white overflow-hidden">
    {/* Orange Accent Circle */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

    <div className="absolute inset-0 opacity-15 bg-[url('https://picsum.photos/seed/geology/1920/1080')] bg-cover bg-center mix-blend-overlay"></div>
    
    <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center z-10">
      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg animate-fade-in-up">
        Unggul dalam Teknologi Kebumian
      </span>
      <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
        <span className="text-white">Masa Depan</span> <br/>
        <span className="text-orange-400">Dimulai Di Sini</span>
      </h1>
      <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-10 leading-relaxed">
        Pusat keunggulan pendidikan vokasi bidang <b>Geospasial</b> dan <b>Geologi Pertambangan</b> di Aceh Barat. Mencetak tenaga ahli yang kompeten dan siap kerja.
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <button 
          onClick={onCtaClick}
          className="bg-orange-500 text-white font-bold py-4 px-10 rounded-full hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2 ring-4 ring-orange-500/30"
        >
          Daftar PPDB <ChevronRight size={20} />
        </button>
        <button className="bg-blue-800/50 backdrop-blur-md border border-blue-400 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-800 transition-all">
          Jelajahi Jurusan
        </button>
      </div>
    </div>
    
    {/* Stats Strip */}
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 border-t border-blue-700 py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-10 md:gap-24 text-center">
            <div className="group cursor-default">
                <p className="text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform">2</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest mt-1">Jurusan Spesialis</p>
            </div>
            <div className="group cursor-default">
                <p className="text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform">A</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest mt-1">Akreditasi Sekolah</p>
            </div>
            <div className="group cursor-default">
                <p className="text-4xl font-bold text-orange-400 group-hover:scale-110 transition-transform">100%</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest mt-1">Lulusan Kompeten</p>
            </div>
        </div>
    </div>
  </div>
);

// 2. PROFILE SECTION
const ProfileSection: React.FC = () => (
  <div className="py-16 bg-slate-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-orange-600 font-bold tracking-wider uppercase text-sm">Tentang Kami</span>
        <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">Profil SMK Negeri 4 Meulaboh</h2>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3 mb-4">
                    <Award size={28} className="text-orange-500" /> Visi
                </h3>
                <p className="text-gray-700 leading-relaxed italic">"Menjadi SMK Pusat Keunggulan di bidang Geologi dan Geospasial yang menghasilkan tamatan berkarakter, kompeten, dan berwawasan lingkungan."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3 mb-4">
                    <Target size={28} className="text-blue-600" /> Misi
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full"></div>Menyelenggarakan pendidikan vokasi berbasis industri.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full"></div>Mengembangkan kompetensi guru dan siswa di bidang kebumian.</li>
                    <li className="flex items-start gap-2"><div className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full"></div>Membentuk karakter siswa yang disiplin dan bertanggung jawab.</li>
                </ul>
            </div>
        </div>
        <div className="relative group">
             <div className="absolute inset-0 bg-orange-500 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
             <img 
                src="https://picsum.photos/seed/school_building/600/400" 
                alt="Gedung Sekolah" 
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[450px] z-10"
            />
        </div>
      </div>

      {/* Principal Message */}
      <div className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 shadow-2xl rounded-3xl transform -skew-y-2"></div>
        <div className="relative p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10 text-white">
            <img src="https://picsum.photos/seed/principal_smk/200/200" alt="Kepala Sekolah" className="w-40 h-40 rounded-full object-cover border-4 border-orange-500 shadow-lg" />
            <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">Sambutan Kepala Sekolah</h3>
                <p className="text-orange-300 font-medium mb-6">Kepala SMK Negeri 4 Meulaboh</p>
                <p className="text-blue-50 leading-relaxed text-lg">
                    "Dengan bangga kami mempersembahkan website resmi ini. SMK Negeri 4 Meulaboh berkomitmen penuh mencetak tenaga profesional muda di bidang Geospasial dan Geologi Pertambangan yang siap bersaing di dunia industri global."
                </p>
            </div>
        </div>
      </div>
    </div>
  </div>
);

// 3. MAJORS SECTION
const MajorsSection: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch(iconName) {
            case 'Map': return <Map size={48} className="text-white" />;
            case 'Pickaxe': return <Pickaxe size={48} className="text-white" />;
            default: return <BookOpen size={48} className="text-white" />;
        }
    };

    const getBgColor = (index: number) => {
        return index % 2 === 0 ? 'bg-blue-600' : 'bg-orange-500';
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Keahlian Kami</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2">Jurusan Unggulan</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Kami fokus pada kualitas pendidikan vokasi spesifik untuk menghasilkan lulusan yang siap terjun ke industri pertambangan dan pemetaan.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {MAJORS.map((major, index) => (
                        <div key={major.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            <div className={`${getBgColor(index)} h-40 flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity"></div>
                                <div className="transform group-hover:scale-110 transition-transform duration-500">
                                    {getIcon(major.icon)}
                                </div>
                            </div>
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{major.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{major.description}</p>
                                
                                <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center text-sm font-semibold text-gray-500">
                                    <div className="text-center">
                                        <span className={`block text-xl font-bold ${index % 2 === 0 ? 'text-blue-600' : 'text-orange-500'}`}>{major.stats.students}</span>
                                        <span>Siswa Aktif</span>
                                    </div>
                                    <div className="h-8 w-px bg-gray-300"></div>
                                    <div className="text-center">
                                        <span className={`block text-xl font-bold ${index % 2 === 0 ? 'text-blue-600' : 'text-orange-500'}`}>{major.stats.graduates}</span>
                                        <span>Alumni</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 4. DATA SECTION
const DataSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'students' | 'teachers'>('students');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredStudents = STUDENTS.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const filteredTeachers = TEACHERS.filter(t => t.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const chartData = MAJORS.map(m => ({
        name: m.id, // Short ID
        Full: m.title,
        Siswa: m.stats.students,
        Lulusan: m.stats.graduates
    }));

    return (
        <div className="py-16 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Data Peserta Didik & Guru</h2>
                    <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Chart */}
                <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-700 mb-8 border-l-4 border-blue-600 pl-3">Statistik Jumlah Siswa & Alumni</h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="Full" tick={{fill: '#6b7280', fontSize: 12}} />
                                <YAxis tick={{fill: '#6b7280'}} />
                                <Tooltip 
                                    contentStyle={{backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                                    cursor={{fill: '#f9fafb'}}
                                />
                                <Legend />
                                <Bar dataKey="Siswa" fill="#2563eb" radius={[6, 6, 0, 0]} name="Siswa Aktif" />
                                <Bar dataKey="Lulusan" fill="#f97316" radius={[6, 6, 0, 0]} name="Total Alumni" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="bg-white p-1.5 rounded-xl shadow-sm border border-gray-200 inline-flex w-full md:w-auto">
                        <button 
                            onClick={() => setActiveTab('students')}
                            className={`flex-1 md:flex-none px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'students' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            Data Siswa
                        </button>
                        <button 
                            onClick={() => setActiveTab('teachers')}
                            className={`flex-1 md:flex-none px-8 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'teachers' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'}`}
                        >
                            Data Guru
                        </button>
                    </div>
                    <div className="relative w-full md:w-80">
                        <input 
                            type="text" 
                            placeholder={`Cari nama ${activeTab === 'students' ? 'siswa' : 'guru'}...`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
                        />
                        <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                    </div>
                </div>

                {/* Tables */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-600">
                            <thead className={`${activeTab === 'students' ? 'bg-blue-600' : 'bg-orange-500'} text-white uppercase font-bold tracking-wider`}>
                                <tr>
                                    {activeTab === 'students' ? (
                                        <>
                                            <th className="px-6 py-5">Nama Lengkap</th>
                                            <th className="px-6 py-5">NISN</th>
                                            <th className="px-6 py-5">Kelas</th>
                                            <th className="px-6 py-5">Jurusan</th>
                                        </>
                                    ) : (
                                        <>
                                            <th className="px-6 py-5">Foto</th>
                                            <th className="px-6 py-5">Nama Lengkap</th>
                                            <th className="px-6 py-5">NIP</th>
                                            <th className="px-6 py-5">Bidang Studi</th>
                                        </>
                                    )}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {activeTab === 'students' ? (
                                    filteredStudents.length > 0 ? (
                                        filteredStudents.map((s, idx) => (
                                            <tr key={s.id} className={`hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                                <td className="px-6 py-4 font-bold text-gray-800">{s.name}</td>
                                                <td className="px-6 py-4 font-mono">{s.nisn}</td>
                                                <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-xs font-bold">{s.grade}</span></td>
                                                <td className="px-6 py-4 text-gray-700">{s.major}</td>
                                            </tr>
                                        ))
                                    ) : <tr><td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">Data siswa tidak ditemukan.</td></tr>
                                ) : (
                                    filteredTeachers.length > 0 ? (
                                        filteredTeachers.map((t, idx) => (
                                            <tr key={t.id} className={`hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                                                <td className="px-6 py-4">
                                                    <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-100" />
                                                </td>
                                                <td className="px-6 py-4 font-bold text-gray-800">{t.name}</td>
                                                <td className="px-6 py-4 font-mono text-xs text-gray-500">{t.nip}</td>
                                                <td className="px-6 py-4 text-gray-700">{t.subject}</td>
                                            </tr>
                                        ))
                                    ) : <tr><td colSpan={4} className="px-6 py-12 text-center text-gray-400 italic">Data guru tidak ditemukan.</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 5. PPDB SECTION
const PPDBSection: React.FC = () => {
    const [form, setForm] = useState<PPDBRegistration>({
        fullName: '', nisn: '', originSchool: '', chosenMajor: '', phone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", form);
        setSubmitted(true);
    };

    return (
        <div className="py-16 bg-white">
             <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Tahun Ajaran 2024/2025</span>
                        <h2 className="text-4xl font-bold text-blue-900 mt-4 mb-4">PPDB Online</h2>
                        <p className="text-gray-500">Mari bergabung menjadi bagian dari keluarga besar SMK Negeri 4 Meulaboh.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Info Info */}
                        <div className="space-y-8">
                             <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-3 relative z-10">
                                    <div className="bg-blue-600 text-white p-2 rounded-lg"><Calendar size={20}/></div>
                                    Jadwal Pendaftaran
                                </h3>
                                <ul className="space-y-4 text-sm text-blue-900 relative z-10">
                                    <li className="flex justify-between items-center border-b border-blue-200 pb-2"><span>Gelombang 1</span> <span className="font-bold bg-blue-200 px-2 py-1 rounded text-blue-800">Mei 2024</span></li>
                                    <li className="flex justify-between items-center border-b border-blue-200 pb-2"><span>Gelombang 2</span> <span className="font-bold bg-blue-200 px-2 py-1 rounded text-blue-800">Juni 2024</span></li>
                                    <li className="flex justify-between items-center"><span>Pengumuman</span> <span className="font-bold text-orange-600">Juli 2024</span></li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                                <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center gap-3">
                                    <div className="bg-orange-500 text-white p-2 rounded-lg"><CheckCircle size={20}/></div>
                                    Syarat Dokumen
                                </h3>
                                <ul className="space-y-3 text-sm text-orange-900">
                                    {['Fotocopy Ijazah / SKL (Legalisir)', 'Fotocopy Kartu Keluarga', 'Fotocopy Akta Kelahiran', 'Pas Foto Warna 3x4 (4 Lembar)'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <div className="min-w-[6px] h-[6px] bg-orange-500 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                            <div className="mb-6 border-b border-gray-100 pb-4">
                                <h3 className="text-2xl font-bold text-gray-800">Formulir Registrasi</h3>
                                <p className="text-sm text-gray-500 mt-1">Isi data diri dengan benar dan lengkap.</p>
                            </div>

                            {submitted ? (
                                <div className="h-64 flex flex-col justify-center items-center text-center animate-fade-in-up">
                                    <div className="bg-green-100 p-4 rounded-full mb-4">
                                        <CheckCircle size={48} className="text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pendaftaran Berhasil!</h3>
                                    <p className="text-gray-500 text-sm max-w-xs mx-auto">Terima kasih. Panitia PPDB akan segera menghubungi Anda melalui WhatsApp.</p>
                                    <button 
                                        onClick={() => {setSubmitted(false); setForm({fullName: '', nisn: '', originSchool: '', chosenMajor: '', phone: ''})}}
                                        className="mt-6 text-blue-600 font-bold hover:text-blue-700 text-sm underline"
                                    >
                                        Daftar Siswa Lain
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Nama Lengkap</label>
                                        <input required name="fullName" value={form.fullName} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-500 focus:outline-none transition-all" placeholder="Contoh: Budi Santoso" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5">NISN</label>
                                        <input required name="nisn" value={form.nisn} onChange={handleChange} type="number" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-500 focus:outline-none transition-all" placeholder="Nomor Induk Siswa Nasional" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Asal Sekolah</label>
                                            <input required name="originSchool" value={form.originSchool} onChange={handleChange} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-500 focus:outline-none transition-all" placeholder="Nama SMP/MTS" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1.5">No. WhatsApp</label>
                                            <input required name="phone" value={form.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-500 focus:outline-none transition-all" placeholder="08xx-xxxx-xxxx" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1.5">Pilih Kompetensi Keahlian</label>
                                        <div className="relative">
                                            <select required name="chosenMajor" value={form.chosenMajor} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-200 focus:border-orange-500 focus:outline-none appearance-none bg-white">
                                                <option value="">-- Pilih Jurusan --</option>
                                                {MAJORS.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
                                            </select>
                                            <ChevronRight className="absolute right-4 top-3.5 text-gray-400 rotate-90" size={20}/>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4">
                                        Kirim Pendaftaran Sekarang
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageState>(PageState.HOME);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 selection:bg-orange-200 selection:text-orange-900">
      <Navbar activePage={activePage} setPage={setActivePage} />

      <main className="flex-grow">
        {activePage === PageState.HOME && (
          <>
            <Hero onCtaClick={() => setActivePage(PageState.PPDB)} />
            <div className="bg-white py-16 relative overflow-hidden">
                {/* Decorative dots */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full opacity-50 blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                     <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors group">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">Berita Terbaru</span>
                            <h4 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">Praktik Lapangan Geologi</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Siswa kelas XI melakukan pemetaan struktur batuan di kawasan pertambangan...</p>
                        </div>
                         <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 transition-colors group">
                            <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4 inline-block">Prestasi</span>
                            <h4 className="font-bold text-xl mb-3 group-hover:text-orange-600 transition-colors">Juara 1 Surveying Tingkat Provinsi</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Tim Geospasial SMKN 4 berhasil meraih medali emas dalam lomba kompetensi siswa...</p>
                        </div>
                         <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-green-200 transition-colors group">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4 inline-block">Agenda</span>
                            <h4 className="font-bold text-xl mb-3 group-hover:text-green-600 transition-colors">Sertifikasi Kompetensi BNSP</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">Uji kompetensi keahlian bagi siswa tingkat akhir akan dilaksanakan bulan depan...</p>
                        </div>
                     </div>
                </div>
            </div>
            <MajorsSection />
          </>
        )}
        {activePage === PageState.PROFILE && <ProfileSection />}
        {activePage === PageState.MAJORS && <MajorsSection />}
        {activePage === PageState.DATA && <DataSection />}
        {activePage === PageState.PPDB && <PPDBSection />}
      </main>

      <AIChatbot />
      <Footer />
    </div>
  );
};

export default App;