import { Major, Student, Teacher } from './types';

export const SCHOOL_NAME = "SMK Negeri 4 Meulaboh";
export const SCHOOL_ADDRESS = "Jl. Sisingamangaraja, Meulaboh, Aceh Barat";
export const CONTACT_PHONE = "(0655) 123456";
export const CONTACT_EMAIL = "info@smkn4meulaboh.sch.id";

export const MAJORS: Major[] = [
  {
    id: 'GEO',
    title: 'Teknik Geospasial',
    description: 'Mempelajari ilmu survei, pemetaan bumi, sistem informasi geografis (SIG), dan penginderaan jauh untuk perencanaan wilayah.',
    icon: 'Map',
    stats: { students: 140, graduates: 350 }
  },
  {
    id: 'TGP',
    title: 'Teknik Geologi Pertambangan',
    description: 'Fokus pada eksplorasi sumber daya alam, teknik penambangan, pemetaan geologi, serta kesehatan dan keselamatan kerja pertambangan.',
    icon: 'Pickaxe',
    stats: { students: 165, graduates: 420 }
  }
];

export const TEACHERS: Teacher[] = [
  { id: 1, name: "Ir. Bambang Suherman", subject: "Produktif Geologi", nip: "197501012005011001", photo: "https://picsum.photos/seed/t1/150/150" },
  { id: 2, name: "Siti Rahmawati, S.T", subject: "Produktif Geospasial", nip: "198202022008012002", photo: "https://picsum.photos/seed/t2/150/150" },
  { id: 3, name: "Rahmat Hidayat, S.Pd", subject: "Matematika Terapan", nip: "197903032003121003", photo: "https://picsum.photos/seed/t3/150/150" },
  { id: 4, name: "Dewi Sartika, S.Pd", subject: "Bahasa Inggris Teknis", nip: "199004042015032004", photo: "https://picsum.photos/seed/t4/150/150" },
  { id: 5, name: "Teuku Umar, S.T", subject: "K3 Pertambangan", nip: "198805052010011005", photo: "https://picsum.photos/seed/t5/150/150" },
];

export const STUDENTS: Student[] = [
  { id: 1, name: "Ahmad Rizky", grade: "XII", major: "Teknik Geospasial", nisn: "0051234567" },
  { id: 2, name: "Putri Indah", grade: "XI", major: "Geologi Pertambangan", nisn: "0069876543" },
  { id: 3, name: "Doni Pratama", grade: "X", major: "Teknik Geospasial", nisn: "0075678901" },
  { id: 4, name: "Cut Meutia", grade: "XII", major: "Geologi Pertambangan", nisn: "0051122334" },
  { id: 5, name: "Fajar Sidiq", grade: "XI", major: "Teknik Geospasial", nisn: "0064455667" },
  { id: 6, name: "Lina Marlina", grade: "X", major: "Geologi Pertambangan", nisn: "0079988776" },
];

// Initial messages for the Chatbot
export const CHAT_INIT_MSG = "Halo! Saya asisten virtual SMK Negeri 4 Meulaboh. Ada yang bisa saya bantu mengenai Jurusan Geospasial, Pertambangan, atau PPDB?";