export interface Teacher {
  id: number;
  name: string;
  subject: string;
  nip: string;
  photo: string;
}

export interface Student {
  id: number;
  name: string;
  grade: string;
  major: string; // Jurusan
  nisn: string;
}

export interface Major {
  id: string;
  title: string;
  description: string;
  icon: string; // Name of the Lucide icon or image url
  stats: {
    students: number;
    graduates: number;
  };
}

export interface PPDBRegistration {
  fullName: string;
  nisn: string;
  originSchool: string;
  chosenMajor: string;
  phone: string;
}

export enum PageState {
  HOME = 'HOME',
  PROFILE = 'PROFILE',
  MAJORS = 'MAJORS',
  DATA = 'DATA',
  PPDB = 'PPDB'
}