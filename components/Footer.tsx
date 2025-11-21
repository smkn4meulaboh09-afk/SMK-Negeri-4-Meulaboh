import React from 'react';
import { SCHOOL_NAME, SCHOOL_ADDRESS, CONTACT_EMAIL, CONTACT_PHONE } from '../constants';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-orange-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <span className="text-orange-500">SMK</span> NEGERI 4
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Mewujudkan generasi yang unggul, berkarakter, dan siap kerja di bidang teknologi kebumian. 
              Pusat keunggulan vokasi Geospasial dan Pertambangan di Aceh Barat.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-blue-600 hover:text-white text-slate-400 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-pink-600 hover:text-white text-slate-400 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-lg hover:bg-sky-500 hover:text-white text-slate-400 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Links (Example of additional column if needed, here keeping existing structure) */}
          
          {/* Contact */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
            <div>
                <h3 className="text-lg font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Hubungi Kami</h3>
                <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-4 group">
                    <div className="mt-1 bg-slate-800 p-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <MapPin size={16} />
                    </div>
                    <span className="mt-1">{SCHOOL_ADDRESS}</span>
                </li>
                <li className="flex items-center gap-4 group">
                    <div className="bg-slate-800 p-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Phone size={16} />
                    </div>
                    <span>{CONTACT_PHONE}</span>
                </li>
                <li className="flex items-center gap-4 group">
                    <div className="bg-slate-800 p-2 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Mail size={16} />
                    </div>
                    <span>{CONTACT_EMAIL}</span>
                </li>
                </ul>
            </div>

            {/* Map or Additional Info Placeholder */}
            <div>
                <h3 className="text-lg font-bold mb-6 text-white border-b border-slate-800 pb-2 inline-block">Jam Operasional</h3>
                <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex justify-between"><span>Senin - Kamis</span> <span className="text-white">07:30 - 16:00</span></li>
                    <li className="flex justify-between"><span>Jumat</span> <span className="text-white">07:30 - 11:30</span></li>
                    <li className="flex justify-between"><span>Sabtu</span> <span className="text-white">07:30 - 14:00</span></li>
                    <li className="flex justify-between"><span>Minggu</span> <span className="text-orange-500">Tutup</span></li>
                </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved. 
            <span className="hidden sm:inline"> | </span>
            <br className="sm:hidden"/>
            Developed by Tim IT SMKN 4
          </p>
        </div>
      </div>
    </footer>
  );
};