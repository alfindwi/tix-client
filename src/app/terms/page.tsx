"use client";

import { useState } from "react";

type Content = {
  title: string;
  text: string;
};

type Contents = {
  [key: string]: Content;
};

const contents: Contents = {
  Definisi: {
    title: "Selamat Datang di Tiktix Indonesia!",
    text: `Terima kasih sudah menyempatkan waktu untuk membaca dan mempelajari segala sesuatu yang berkaitan dengan Tiktix Indonesia.
  Sebelumnya, kenalan dulu yuk dengan Tiktix!
  Tiktix sendiri merupakan one stop solution untuk kebutuhan acara keren kamu, mulai dari pembuatan acara yang akan kamu jual sampai dengan pendaftaran Event Kamu di website resmi Kami. Tiktix Indonesia berkedudukan di Yogyakarta, tapi kamu jangan khawatir, kami sudah menjangkau dan berkolaborasi dengan promoter seluruh Indonesia sampai dengan luar negeri. Yuk saatnya cari atau buat event impianmu! Kami akan selalu siap membantu.
  
  Mari kita pelajari syarat dan ketentuan untuk seluruh pengguna yang melakukan transaksi di Tiktix.com:
  Dengan mengakses dan menggunakan situs ini, kamu dianggap telah membaca, memahami, dan menyetujui seluruh ketentuan yang berlaku. 
  Syarat dan ketentuan ini dibuat untuk mengatur hubungan hukum antara pengguna (kamu) dan Tiktix Indonesia selaku penyedia layanan.
  
  Istilah-istilah berikut digunakan dalam Syarat & Ketentuan ini:
  
  1. "Kami" atau "Tiktix" mengacu pada pihak penyelenggara layanan website Tiktix.com.
  2. "Kamu", "Pengguna", atau "Pengunjung" mengacu pada setiap individu yang mengakses atau menggunakan situs kami.
  3. "Layanan" berarti setiap produk, fitur, atau fasilitas yang disediakan oleh Tiktix Indonesia melalui situs web ini.
  4. "Acara" atau "Event" adalah kegiatan yang dipublikasikan dan dikelola melalui platform Tiktix.
  
  Ketentuan ini berlaku secara menyeluruh dan mengikat bagi seluruh pengguna, baik individu maupun badan hukum. 
  Kami berhak untuk melakukan pembaruan terhadap isi syarat dan ketentuan ini dari waktu ke waktu tanpa pemberitahuan sebelumnya.
  
  Dengan terus menggunakan layanan kami, kamu dianggap setuju dengan setiap perubahan yang mungkin terjadi di kemudian hari. 
  Pastikan kamu selalu membaca halaman ini secara berkala agar tetap memahami ketentuan yang berlaku.`,
  },

  "Ketentuan Umum": {
    title: "Ketentuan Umum",
    text: `1. Jika terdapat konflik atau ketidakpastian ketentuan antara kami dan pengguna, maka penyedia layanan yang akan memutuskan ketentuan mana yang akan digunakan.
  
  2. Dengan mengakses situs Tiktix.com, pengguna menyatakan telah membaca, memahami, dan menyetujui seluruh syarat serta ketentuan yang berlaku tanpa pengecualian.
  
  3. Syarat dan ketentuan ini berlaku bagi seluruh aktivitas yang dilakukan pengguna melalui platform Tiktix, termasuk namun tidak terbatas pada pembuatan akun, pembelian tiket, partisipasi dalam acara, serta kegiatan promosi atau kolaborasi lainnya.
  
  4. Pengguna wajib memberikan data yang benar, akurat, dan lengkap saat melakukan pendaftaran, pembelian tiket, atau menggunakan layanan lainnya. Kesalahan atau ketidakakuratan data bukan menjadi tanggung jawab Tiktix.
  
  5. Tiktix berhak untuk menolak, menangguhkan, atau membatalkan akses pengguna terhadap layanan apabila ditemukan pelanggaran terhadap ketentuan ini atau penggunaan layanan secara tidak semestinya.
  
  6. Tiktix dapat sewaktu-waktu memperbarui atau mengubah isi dari syarat dan ketentuan ini tanpa pemberitahuan sebelumnya. Pengguna diharapkan secara berkala memeriksa halaman ini untuk mengetahui perubahan yang mungkin berlaku.
  
  7. Setiap pembaruan yang dilakukan akan berlaku efektif sejak tanggal pembaruan tersebut diterbitkan di situs resmi Tiktix.
  
  8. Dengan tetap menggunakan layanan setelah adanya perubahan, pengguna dianggap telah menyetujui versi terbaru dari syarat dan ketentuan ini.
  
  9. Jika ada ketentuan dalam perjanjian ini yang dianggap tidak sah atau tidak dapat diterapkan, ketentuan lainnya tetap berlaku dan memiliki kekuatan hukum penuh.`,
  },

  "Pembelian, Pembayaran & E-Ticket": {
    title: "Pembelian, Pembayaran & E-Ticket",
    text: `Ketentuan Penggunaan ini dapat Kami ubah, modifikasi, tambah, hapus atau koreksi (“perubahan”) dari waktu ke waktu. Kami akan menggunakan upaya dan jangka waktu yang wajar untuk memberitahu Kamu tentang segala perubahan material 
    pada Ketentuan Penggunaan ini secara elektronik dimana Kamu dapat memilih untuk melanjutkan penggunaan Situs atau menolak untuk tunduk dengan menghentikan penggunaan Situs ini dengan segera. Namun, Kamu memahami dan setuju bahwa Kamu bertanggung jawab untuk meninjau Ketentuan Penggunaan ini secara berkala dan penggunaan Situs oleh Kamu yang berkelanjutan merupakan bentuk penerimaan Kamu terhadap setiap perubahan atas Ketentuan Penggunaan Situs.`,
  },
  "Tanggung Jawab": {
    title: "Tanggung Jawab",
    text: `1. Seluruh isi Situs, termasuk tetapi tidak terbatas pada perangkat lunak, informasi, materi, teks, dan grafis disediakan kepada Pengguna sebagaimana adanya tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat.
  
  2. Tiktix tidak bertanggung jawab atas segala bentuk kerugian yang timbul akibat penggunaan atau ketidakmampuan Pengguna dalam mengakses layanan, termasuk gangguan teknis, kesalahan sistem, atau akses tidak sah oleh pihak ketiga.
  
  3. Pengguna bertanggung jawab penuh atas seluruh aktivitas yang dilakukan melalui akun miliknya, termasuk dalam hal pengunggahan konten, pembelian tiket, maupun interaksi dengan pihak ketiga melalui platform Tiktix.
  
  4. Tiktix tidak bertanggung jawab atas isi, kualitas, atau kebenaran informasi acara yang disediakan oleh pihak penyelenggara (event organizer). Seluruh tanggung jawab atas konten acara sepenuhnya berada pada pihak penyelenggara.
  
  5. Pengguna wajib memastikan keakuratan dan keaslian data pribadi yang diberikan. Tiktix tidak bertanggung jawab atas kerugian yang timbul akibat kesalahan atau kelalaian pengguna dalam memberikan informasi.
  
  6. Tiktix berhak untuk menangguhkan atau menghentikan akses pengguna terhadap layanan apabila ditemukan adanya tindakan penyalahgunaan, pelanggaran hukum, atau pelanggaran terhadap ketentuan yang berlaku.
  
  7. Dalam hal terjadi gangguan sistem, keterlambatan, atau kesalahan teknis yang disebabkan oleh faktor di luar kendali Tiktix (force majeure), Tiktix dibebaskan dari segala tanggung jawab.
  
  8. Pengguna setuju untuk mengganti rugi dan membebaskan Tiktix, karyawan, mitra, serta afiliasinya dari segala klaim, tuntutan, atau kerugian yang timbul akibat pelanggaran terhadap ketentuan ini atau penggunaan layanan secara tidak sah.`,
  },

  "Hak Kekayaan Intelektual": {
    title: "Hak Kekayaan Intelektual",
    text: `1. Seluruh konten, desain, logo, tampilan, ikon, gambar, audio, video, kode sumber, basis data, serta elemen lain yang terdapat di situs Yesplis merupakan milik sah dari Yesplis Indonesia dan dilindungi oleh hukum hak cipta, merek dagang, dan undang-undang kekayaan intelektual yang berlaku di Indonesia.
  
  2. Pengguna tidak diperkenankan untuk menyalin, mendistribusikan, mempublikasikan, memodifikasi, menampilkan, menjual, atau menggunakan sebagian maupun seluruh konten situs untuk kepentingan komersial tanpa izin tertulis dari pihak Yesplis.
  
  3. Segala bentuk pelanggaran terhadap hak kekayaan intelektual akan ditindak sesuai dengan ketentuan hukum yang berlaku, termasuk namun tidak terbatas pada Undang-Undang Nomor 28 Tahun 2014 tentang Hak Cipta dan peraturan turunannya.
  
  4. Nama, merek, dan logo “Yesplis” adalah merek dagang terdaftar yang tidak boleh digunakan, ditiru, atau dimanipulasi oleh pihak mana pun tanpa persetujuan tertulis dari pemilik merek.
  
  5. Pengguna yang mengunggah konten atau materi apa pun ke dalam situs (termasuk foto, teks, atau materi promosi acara) menyatakan dan menjamin bahwa mereka memiliki hak atas materi tersebut serta memberikan izin non-eksklusif kepada Yesplis untuk menayangkan, memodifikasi, atau mempromosikan konten tersebut sebagai bagian dari layanan.
  
  6. Yesplis berhak menghapus atau menonaktifkan konten apa pun yang dianggap melanggar hak kekayaan intelektual pihak lain, baik berdasarkan laporan maupun kebijakan internal perusahaan.
  
  7. Jika kamu meyakini bahwa karya kamu digunakan atau ditampilkan di situs Yesplis tanpa izin, kamu dapat menghubungi tim kami melalui kanal resmi untuk mengajukan permintaan peninjauan atau penghapusan konten.`,
  },

  "Materi Pemasaran": {
    title: "Materi Pemasaran",
    text: `Kamu memberikan persetujuan kepada Yesplis Indonesia dan afiliasi atau pihak yang bekerja sama dengan Yesplis Indonesia untuk dapat mengirimkan Kamu pemasaran langsung, iklan, dan komunikasi promosi melalui aplikasi push-notification, pesan atau penempatan melalui yesplis.com, pos, panggilan telepon, layanan pesan singkat (SMS), E-Voucher, dalam tayangan Yeslive atau media streaming, dan email (“Materi Pemasaran”). Pengguna dapat memilih untuk tidak menerima komunikasi pemasaran 
    tersebut kapan saja dengan mengklik pilihan “berhenti berlangganan” yang ada dalam pesan yang bersangkutan, metode lain sebagaimana diberikan atau menghubungi Yesplis Indonesia melalui detail kontak yang tercantum “about us” atau “contact us”. Mohon perhatikan bahwa jika Pengguna memilih untuk keluar, Kami masih dapat mengirimi Pengguna pesan-pesan non-promosi, seperti tanda terima atau informasi tentang Akun Pengguna.`,
  },
  "Penyelesaian Sengketa": {
    title: "Penyelesaian Sengketa",
    text: `Segala sengketa yang timbul diantara Yesplis Indonesia dan Pengguna sehubungan dengan penggunaan Situs dan/atau pemesanan/pembelian E-Ticket, pertama-tama akan diselesaikan secara musyawarah untuk mencapai mufakat. Apabila sengketa tersebut tidak dapat diselesaikan dalam waktu 30 (tiga) 
    puluh hari kalender setelah adanya surat pemberitahuan sengketa, maka Yesplis Indonesia dan Pengguna setuju untuk menyelesaikan sengketa tersebut melalui Pengadilan Negeri Yogyakarta di Yogyakarta.`,
  },
  "Lain - Lain": {
    title: "Lain - Lain",
    text: `1. Syarat dan Ketentuan ini dibuat dalam bahasa Indonesia. Segala terjemahan ke dalam bahasa lain hanya untuk kemudahan saja dan bukan merupakan terjemahan resmi. Dalam hal terdapat perbedaan antara versi bahasa Indonesia dengan bahasa lainnya, maka versi bahasa Indonesia yang berlaku.

2. Syarat dan Ketentuan ini tunduk pada hukum Republik Indonesia.

3. Apabila ada bagian tertentu di dalam Syarat dan Ketentuan ini yang karena sebab apapun dianggap tidak sah atau tidak berlaku, maka bagian-bagian lainnya di dalam Syarat dan Ketentuan ini tetap sah dan berlaku mengikat.`,
  },
};

export default function Terms() {
  const [selected, setSelected] = useState("Definisi");

  return (
    <div>
      <div className=" max-w-7xl bg-[#112041] ">
        <div className="p-13">
          <p className=" mt-5 font-bold text-2xl text-white">
            Syarat Dan Ketentuan
          </p>
          <p className=" mt-5 font-semibold text-md text-white">
            Diperbarui: 23 September 24 • 20:00 WIB
          </p>
        </div>
      </div>

      <div className="px-5 md:px-13 py-5 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar (desktop) */}
        <div className="hidden md:block sticky top-10 self-start bg-white border border-[#d4d4d4] rounded-md max-w-[300px] w-full px-4 py-4 h-fit">
          <ul className="space-y-2 text-[16px]">
            {Object.keys(contents).map((key) => (
              <li
                key={key}
                onClick={() => setSelected(key)}
                className={`px-5 py-3 rounded-md cursor-pointer transition-all duration-200 ${
                  selected === key
                    ? "bg-[#112041] text-white"
                    : "hover:bg-[#112041] hover:text-white"
                }`}
              >
                {key}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden w-full">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full border border-[#d4d4d4] rounded-md p-3 font-semibold text-[#112041]"
          >
            {Object.keys(contents).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <div className="px-2 md:px-8 max-w-[900px] w-full">
          <h1 className="font-bold text-2xl md:text-3xl text-[#112041]">
            {contents[selected].title}
          </h1>
          <p className="mt-5 font-semibold text-[14px] whitespace-pre-line leading-relaxed text-gray-700">
            {contents[selected].text}
          </p>
        </div>
      </div>
    </div>
  );
}
