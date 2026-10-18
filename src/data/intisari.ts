// Data intisari & kutipan tokoh (disunting manual dari materi kuliah)
export interface Istilah {
	nama: string;
	apa: string;
	isi: string[];
}

export interface Poin {
	n: number;
	judul: string;
	poin: string[];
	istilah: Istilah[];
}

export interface Kutipan {
	siapa: string;
	teks: string;
	topik: number;
}

export const intisari: Poin[] = [
	{
		n: 1,
		judul: 'Bisnis dan Ruang Lingkupnya',
		poin: [
			'<strong>Bisnis</strong> = kegiatan individu/organisasi: membuat, membeli, menjual, atau menukar barang/jasa untuk menghasilkan keuntungan.',
			'Machfoedz: usaha <strong>perdagangan terorganisasi</strong> untuk laba; Kasmir & Jakfar: tujuan utama memperoleh keuntungan.',
			'Ruang lingkup bisnis 3 makna: <strong>badan usaha</strong>, sektor pasar tertentu, semua aktivitas komunitas produsen.',
			'Tujuan bisnis: sediakan barang/jasa, sejahterakan pemilik & pihak terlibat, <strong>ciptakan lapangan kerja</strong>, dorong pertumbuhan ekonomi, tunjukkan prestise.',
			'6 tahap memulai: penelitian & perencanaan → pendanaan → <strong>pendirian perusahaan</strong> → pemasaran & promosi → pelaksanaan → pertumbuhan.',
		],
		istilah: [
			{
				nama: 'Fungsi Bisnis (Steinhoff)',
				apa: 'Steinhoff (The World of Business) menyebut bisnis punya 3 fungsi utama: mencari bahan baku, mengolahnya jadi produk jadi, lalu mendistribusikannya; keempat fungsi ini dirinci jadi 4 fungsi operasional.',
				isi: [
					'Produksi — menghasilkan barang/jasa yang dibutuhkan masyarakat',
					'Distribusi — menyalurkan barang/jasa ke lokasi yang terjangkau konsumen',
					'Penjualan — menjual barang/jasa kepada pengguna/konsumen',
					'Pemasaran — penyimpanan & pemasaran agar barang berguna di waktu tepat',
				],
			},
			{
				nama: '4 Komponen Konsep Bisnis',
				apa: 'Sebuah usaha bisa berjalan baik bila punya empat komponen inti yang saling menopang model bisnisnya.',
				isi: [
					'Strategi Inti (core strategy) — visi & misi bisnis: arah & tujuan perusahaan',
					'Sumber Daya Strategis (strategic resources) — kompetensi inti, aset strategis, proses utama: modal, SDM, teknologi',
					'Perantara Pelanggan (customer interface) — dukungan, informasi mendalam, dinamika hubungan, struktur harga',
					'Jaringan Nilai (value network) — mitra, pemasok, aliansi yang memperkuat sumber daya yang dimiliki',
				],
			},
			{
				nama: 'Jenis-Jenis Bisnis',
				apa: 'Bisnis dikelompokkan menurut aktivitas yang dijalankan dan menurut cara berjualan atau model usahanya.',
				isi: [
					'Bisnis Ekstraktif — penggalian tambang dari perut bumi: batu bara, minyak, gas, emas, tembaga',
					'Bisnis Manufaktur — berfokus produksi; mengubah bahan mentah jadi barang jadi',
					'Bisnis Jasa — penyediaan layanan: konsultan, salon, rumah sakit',
					'E-Commerce — menjual produk & jasa online lewat platform elektronik',
					'Retail/Ritel — menjual barang langsung ke konsumen akhir: supermarket, toko pakaian',
					'Franchise/Waralaba — lisensi merek, produk & sistem ke pihak ketiga: McDonald\'s, KFC',
					'Startup — bisnis baru fokus inovasi produk/layanan potensial tumbuh pesat',
				],
			},
		],
	},
	{
		n: 2,
		judul: 'Lingkungan Bisnis',
		poin: [
			'Keith Davis: lingkungan bisnis = semua <strong>kondisi, peristiwa, pengaruh</strong> yang mengelilingi & memengaruhi bisnis.',
			'Glueck & Jauch: faktor-faktor di luar perusahaan menimbulkan <strong>peluang atau ancaman</strong>.',
			'Karakteristik 4: <strong>kompleks, dinamis, multi-faset</strong>, dampak jangkauan jauh.',
			'Manfaat analisis: kenali kekuatan & kelemahan, tentukan peluang & ancaman, arahkan pertumbuhan, <strong>bangun citra</strong>, analisis persaingan.',
		],
		istilah: [
			{
				nama: 'Komponen Lingkungan Internal',
				apa: 'Komponen di dalam perusahaan yang masih bisa dikendalikan dan menentukan arah perkembangannya.',
				isi: [
					'Sistem Nilai — pemilihan bisnis, misi, visi, kebijakan & praktik bisnis',
					'Misi, Visi & Tujuan — visi pandangan luas masa depan; misi tindakan jangka pendek',
					'Struktur & Sifat Kepengurusan — dewan direksi, manajer, eksekutif',
					'Hubungan Kekuatan Internal — koordinasi timbal balik antar tingkat',
					'Sumber Daya Manusia — komponen kunci: keterampilan, kualitas, komitmen, sikap benar',
					'Citra Perusahaan & Ekuitas Merek — memengaruhi modal, merger, aliansi',
					'Aset & Fasilitas Fisik',
					'Penelitian & Pengembangan (R&D)',
					'Sumber Daya Pemasaran',
					'Faktor Keuangan — "darah kehidupan organisasi"',
				],
			},
			{
				nama: 'Lingkungan Eksternal Mikro',
				apa: 'Elemen di sekitar perusahaan yang berinteraksi langsung dengan bisnis sehingga dampaknya cepat terasa.',
				isi: [
					'Pelanggan — elemen terpenting; tujuan utama bisnis menarik & mempertahankan pelanggan',
					'Pemasok — bahan baku, komponen & mesin; harus dapat dipercaya & ramah',
					'Perantara Pemasaran — mediator antara produsen & konsumen akhir',
					'Pesaing — organisasi dengan produk serupa yang berebut pangsa pasar',
					'Masyarakat Umum — responnya memengaruhi citra, penjualan & pendapatan',
				],
			},
			{
				nama: 'Lingkungan Eksternal Makro',
				apa: 'Faktor luas di luar kendali perusahaan yang wajib dipantau karena memengaruhi seluruh jalannya bisnis.',
				isi: [
					'Politik — pemerintah, lembaga politik, kebijakan & legislasi: pajak, kontrak pemerintah',
					'Ekonomi — tingkat ekonomi, pengangguran, nilai tukar asing, inflasi & deflasi',
					'Sosial — adat & nilai masyarakat, selera, standar hidup, pendidikan',
					'Teknologi — peralatan, teknologi & teknik produksi yang ditingkatkan',
					'Fisik — bencana alam & perubahan lingkungan yang memengaruhi produksi & aset',
					'Hukum — UU Komoditas Esensial, Bobot & Ukuran, Merek Dagang',
					'Internasional — hukum & politik lintas negara, tarif, perjanjian perdagangan',
				],
			},
		],
	},
	{
		n: 3,
		judul: 'Perencanaan Organisasi',
		poin: [
			'Terry (1975): <strong>perencanaan</strong> = memilih & menghubungkan fakta serta asumsi masa depan untuk merumuskan kegiatan mencapai hasil tertentu.',
			'3 tingkatan strategi: <strong>korporasi</strong> (pasar mana), unit bisnis (bagaimana bersaing), fungsional (jalankan tiap fungsi).',
			'Di tingkat unit bisnis: 3 strategi generik Porter — <strong>diferensiasi</strong>, kepemimpinan biaya rendah, fokus; Chandler: struktur mengikuti strategi.',
			'Perencanaan menurut hierarki: strategis (manajemen puncak), taktis (menengah), <strong>operasional</strong> (tingkat bawah); jangka panjang 5–30 tahun.',
			'Manfaat perencanaan: memberi arah, mengurangi ketidakpastian, kurangi kegiatan tumpang tindih, <strong>standar untuk pengendalian</strong>.',
		],
		istilah: [
			{
				nama: 'Proses Perencanaan Strategis',
				apa: 'Perencanaan strategis adalah penetapan tujuan jangka panjang organisasi beserta pemilihan tindakan & alokasi sumber daya untuk mencapainya; dijalankan lewat 7 langkah berurutan.',
				isi: [
					'Formulasi Misi & Tujuan — berfokus pasar, dapat dicapai, memotivasi, spesifik',
					'Analisis Tujuan & Strategi Saat Ini — evaluasi apakah sudah sesuai seharusnya',
					'Analisis Lingkungan — perubahan lingkungan dianalisis jadi peluang strategis',
					'Analisis Sumber Daya — kekuatan sumber daya relatif terhadap pesaing',
					'Identifikasi Kesempatan Strategis — muncul bila ada gap hasil strategi',
					'Pengambilan Keputusan Strategis — memilih alternatif tindakan terbaik',
					'Pelaksanaan Strategi & Evaluasi/Pengendalian — pastikan pelaksanaan sesuai rencana',
				],
			},
			{
				nama: '8 Jenis Perencanaan',
				apa: 'Ada delapan jenis isi perencanaan yang lengkap dipakai menyusun rencana organisasi, dari tujuan tertinggi sampai rencana bernominal.',
				isi: [
					'Misi/Purpose — peranan & maksud keberadaan organisasi di masyarakat',
					'Tujuan — titik akhir kegiatan yang diarahkan',
					'Strategi — rencana umum/pokok mencapai tujuan',
					'Kebijakan — pernyataan umum pengarah pengambilan keputusan (cara berpikir)',
					'Prosedur — serangkaian aktivitas/tindakan (mengarahkan tindakan)',
					'Aturan — pilihan dari alternatif: dilakukan atau tidak',
					'Program — jaringan tujuan, kebijakan, prosedur, aturan, alokasi sumber daya',
					'Anggaran — rencana yang dinyatakan dalam angka',
				],
			},
			{
				nama: 'MBO (Management By Objectives)',
				apa: 'MBO adalah metode penetapan tujuan partisipatif yang dipopulerkan Peter Drucker; berangkat dari asumsi karakteristik manusia Y, dengan kunci partisipasi & komunikasi.',
				isi: [
					'Komitmen Manajemen Puncak',
					'Tujuan Jelas',
					'Partisipasi',
					'Komunikasi',
					'Otonomi',
					'Evaluasi Prestasi',
				],
			},
		],
	},
	{
		n: 4,
		judul: 'Pengorganisasian & Struktur Organisasi',
		poin: [
			'Pengorganisasian = menyusun <strong>struktur organisasi</strong> sesuai tujuan, sumber daya & lingkungan perusahaan.',
			'3 proses: pemerincian kegiatan, pembagian beban kerja per orang, <strong>mekanisme pengkoordinasian</strong> jadi kesatuan terpadu & harmonis.',
			'Aspek penting: pembagian kerja, departementalisasi, rantai perintah, hierarki, saluran komunikasi, <strong>rentang manajemen</strong>, komite, kelompok informal.',
			'Matriks kelebihan: fleksibel, seimbangkan efisiensi biaya & <strong>kecepatan respons</strong>; kelemahan: multi-komando, biaya tinggi, struktur rumit.',
			'Komite kelebihan: keputusan musyawarah, <strong>risiko otokratis kecil</strong>; kelemahan: keputusan lambat, biaya rutin tinggi, tirani mayoritas.',
		],
		istilah: [
			{
				nama: 'Bentuk-Bentuk Struktur Organisasi',
				apa: 'Ada empat bentuk utama struktur organisasi yang dipakai mengelompokkan pekerjaan; pilihannya menentukan bagaimana wewenang dan koordinasi dibagi.',
				isi: [
					'Departementalisasi Fungsional — kelompokkan fungsi sama (pemasaran, keuangan, produksi, akuntansi)',
					'Departementalisasi Divisional — berdasarkan produk, wilayah, pelanggan/langganan, atau produksi',
					'Struktur Matriks — kombinasi fungsional + divisional; wewenang ganda ke pimpinan fungsional & pimpinan proyek',
					'Struktur Komite — pimpinan kolektif sekelompok pejabat; jenis Executive Committee (pimpinan) & Staff Committee (bawahan)',
				],
			},
			{
				nama: 'Struktur Formal vs Informal',
				apa: 'Struktur formal adalah kerangka pola tetap hubungan antar fungsi, bagian, posisi & jabatan; organisasi informal terbentuk untuk memenuhi kebutuhan manusia yang tak terpuaskan oleh formal.',
				isi: [
					'Hubungan Pribadi — formal digambarkan jelas; informal tergantung kebutuhan',
					'Kepemimpinan — formal dirancang & ditentukan; informal muncul & dipilih',
					'Pengendalian Perilaku — formal lewat penghargaan & hukuman; informal lewat pemenuhan kebutuhan',
					'Ketergantungan — formal sangat saling tergantung; informal tidak saling tergantung',
				],
			},
		],
	},
	{
		n: 5,
		judul: 'Kepemimpinan (Leadership)',
		poin: [
			'Leadership = kemampuan <strong>mempengaruhi</strong> orang & menyediakan tempat bagi mereka mencapai tujuan organisasi.',
			'Gibson dkk (1996): upaya memakai berbagai pengaruh, <strong>bukan paksaan</strong>, untuk memotivasi anggota mencapai tujuan.',
			'Kast & Rosenzweig: kesanggupan <strong>membujuk</strong> orang lain dalam mencapai tujuan secara antusias.',
			'Perspektif behavioral: dua perilaku pemimpin — <strong>people-oriented</strong> & task-oriented.',
		],
		istilah: [
			{
				nama: '5 Perspektif Kepemimpinan',
				apa: 'McShane & Von Glinow membagi cara memahami kepemimpinan menjadi lima perspektif, mulai dari ciri pemimpin sampai cara kita mempersepsikannya.',
				isi: [
					'Competency (Trait) — mengidentifikasi karakteristik pemimpin yang efektif',
					'Behavioral — dua perilaku: people-oriented & task-oriented',
					'Contingency — gaya paling tepat sesuai keadaan; mis. Path-Goal → Servant Leadership',
					'Transformational — pemimpin mengubah organisasi dengan menciptakan & mengkomunikasikan visi',
					'Romance — tiga proses persepsi: attributing leadership, stereotyping leadership, need for situational control',
				],
			},
			{
				nama: '8 Prinsip Principle Centered Leadership',
				apa: 'Stephen R. Covey (dalam Adi Sujatno, 2006) merumuskan delapan prinsip kepemimpinan yang berpusat pada prinsip sebagai pondasi karakter.',
				isi: [
					'Belajar terus-menerus — membaca, berlatih, mendengarkan masukan',
					'Berorientasi pada pelayanan — hidup sebagai misi, bukan sekadar karier',
					'Memancarkan energi positif — optimis, positif, modern',
					'Mempercayai orang lain — tidak bereaksi berlebihan pada negativitas',
					'Hidup seimbang — jasmani–rohani, tradisional–modern',
					'Melihat hidup sebagai petualangan — menghargai hidup di luar zona nyaman',
					'Sinergistik — fokus pada kepentingan orang lain, membina energi organisasi',
					'Melaksanakan pembaharuan diri — karakter kuat, sehat, berdisiplin tinggi',
				],
			},
			{
				nama: '11 Prinsip Kepemimpinan Strategis',
				apa: 'Bernardine R. Wirjana (2002) menyusun sebelas prinsip kepemimpinan strategis yang menjadi pegangan pemimpin dalam menggerakkan organisasi.',
				isi: [
					'Mengerti diri & berbuat perbaikan diri',
					'Menguasai keahlian teknis',
					'Bertanggung jawab',
					'Keputusan matang & tepat waktu',
					'Menjadi role model',
					'Mengenal karyawan & kesejahteraannya',
					'Menjaga informasi',
					'Menumbuhkan tanggung jawab',
					'Menjamin tugas dimengerti',
					'Melatih anggota sebagai tim',
					'Menggunakan sepenuhnya kapabilitas organisasi',
				],
			},
		],
	},
	{
		n: 6,
		judul: 'Gaya Kepemimpinan Otoriter',
		poin: [
			'James: gaya kepemimpinan = pola tingkah laku yang disukai pemimpin saat <strong>mengarahkan & memengaruhi</strong> pekerja.',
			'Otoritatif bertindak sebagai <strong>mentor</strong>: membimbing, menawarkan arahan & umpan balik; anggota sukarela mengikuti & boleh memberi ide.',
			'Kelebihan: keputusan cepat saat stres/berbatas waktu, rantai komando jelas, cocok bawahan <strong>kurang terampil</strong>, hasil konsisten & terukur.',
			'Kelemahan: resistensi & kebencian, tekanan tinggi, kreativitas rendah, kesuksesan bergantung pemimpin, <strong>turnover tinggi</strong>.',
		],
		istilah: [
			{
				nama: 'Gaya Kepemimpinan Otoriter',
				apa: 'Menurut Veithzal Rivai & Duncan, gaya otoriter (authoritarian) berbasis perintah pemaksaan & tindakan arbitrer dengan kekuasaan mutlak ala diktator; pemimpin menegakkan ketaatan ketat dan menuntut kepatuhan tanpa pertanyaan.',
				isi: [
					'Visi pemimpin dianggap terbaik; bawahan menjadikannya visi mereka',
					'Menjabarkan visi, tujuan & tugas detail; tidak mentoleransi penyimpangan',
					'Instruksi jelas: apa, kapan, bagaimana dicapai',
					'Orientasi hasil & tugas; memaksa kepatuhan mutlak; pelaksanaan kaku',
					'Mengontrol semua keputusan; anggota hanya pelaksana',
					'Sedikit/tidak menerima saran & inisiatif; kreativitas rendah',
					'Anggota termotivasi karena "ketakutan" & "ancaman"',
					'Mengawasi ketat; hukuman keras untuk ketidakpatuhan',
				],
			},
			{
				nama: 'Kapan Otoriter Efektif',
				apa: 'Meski banyak kelemahannya, gaya otoriter justru paling dibutuhkan pada situasi tertentu yang menuntut ketegasan dan kecepatan.',
				isi: [
					'Perubahan signifikan atau ketidakpastian — ketegasan pemimpin penting',
					'Butuh keputusan cepat & akurat — mis. konstruksi & manufaktur',
					'Tidak mentoleransi kesalahan — kontrol kualitas, rumah sakit',
					'Lingkungan tekanan tinggi/darurat — konflik, perang',
				],
			},
		],
	},
	{
		n: 7,
		judul: 'Gaya Kepemimpinan Demokratis',
		poin: [
			'Seluruh anggota ikut serta dalam kegiatan, perencanaan, penyelenggaraan, <strong>pengawasan & penilaian</strong>; tiap anggota dianggap potensi berharga.',
			'Sifat pemimpin demokratis: kejujuran, kecerdasan, keberanian, kreativitas, kompetensi, <strong>rasa keadilan</strong>.',
			'Paling menguntungkan untuk industri konten kreatif (iklan, desain, film), konsultasi, jasa & <strong>pendidikan</strong>.',
			'Kelebihan: tingkatkan produktivitas, kontribusi & moral kelompok; <strong>mendorong kreativitas</strong>; ada umpan balik dua arah.',
			'Kekurangan: diskusi runyam, pemimpin jadi "wasit", keputusan terhambat bila <strong>problem solving</strong> lemah.',
		],
		istilah: [
			{
				nama: 'Gaya Kepemimpinan Demokratis',
				apa: 'Menurut G. R. Terry, pemimpin demokratis menganggap dirinya bagian dari kelompoknya dan bersama-sama bertanggung jawab atas terlaksananya tujuan bersama; gaya ini juga disebut kepemimpinan partisipatif, kepemimpinan bersama, manajemen open-book, atau pengambilan keputusan partisipatif.',
				isi: [
					'Pemimpin mengharapkan bawahan melapor mengenai progres tugas',
					'Bawahan dituntut menunjukkan kepercayaan diri & kemampuan maksimal tanpa pengawasan terus-menerus',
					'Bawahan melibatkan orang lain dalam pengambilan keputusan, tidak bertindak sendiri',
				],
			},
			{
				nama: '4 Komponen Kepemimpinan Transformasional (Bass via MLQ)',
				apa: 'Bass merumuskan empat komponen kepemimpinan transformasional yang diukur lewat instrumen MLQ (Multifactor Leadership Questionnaire).',
				isi: [
					'Idealized Influence — pemimpin karismatik: pendirian tegas, punya visi & sense of mission',
					'Inspirational Motivation — visi menarik masa depan, standar tinggi, optimis & antusias',
					'Intellectual Stimulation — dorong kreativitas bawahan, pendekatan baru yang rasional',
					'Individual Consideration — perlakukan orang sebagai individu; dengarkan, dididik & latih',
				],
			},
		],
	},
	{
		n: 8,
		judul: 'Gaya Kepemimpinan Laissez-Faire',
		poin: [
			'Nama laissez-faire berarti <strong>"biarkan mereka melakukan"</strong>; diperkenalkan Adam Smith, Bapak Ekonomi barat & filsuf Skotlandia.',
			'Robbins (2015): gaya kepemimpinan sangat pasif — <strong>paling kurang efektif</strong> dari semua perilaku pemimpin.',
			'Susanto (2017): keterlibatan pemimpin diminimalkan; pengikut putuskan sendiri tapi tetap <strong>bertanggung jawab</strong> atas hasilnya.',
			'Kebaikan: keputusan jadi bersama, bawahan kembangkan kemampuan, kreativitas & <strong>rasa tanggung jawab</strong>; proses lebih cepat.',
			'Kelemahan: potensi penyimpangan tanpa pengawasan, pemimpin terpisah dari bawahan, <strong>tidak disegani</strong>, koordinasi & pengawasan buruk.',
		],
		istilah: [
			{
				nama: 'Gaya Kepemimpinan Laissez-Faire',
				apa: 'Laissez-faire adalah gaya kendali bebas: pemimpin membiarkan staf berbuat berdasarkan kehendak sendiri dan meminimalkan keterlibatannya dalam pengambilan keputusan.',
				isi: [
					'Pemimpin membiarkan bawahan mengatur dirinya sendiri',
					'Pemimpin hanya menentukan kebijaksanaan & tujuan umum',
					'Bawahan mengambil keputusan relevan untuk mencapai tujuan',
					'Menganggap semua anggota sudah mampu',
					'Bersikap seperti polisi lalu-lintas; pasif, biarkan organisasi jalan sendiri',
					'Pengikut bebas murni mengatur tujuan; komunikasi tak teratur & tidak mendalam',
				],
			},
			{
				nama: 'Indikator Laissez-Faire (Robbins & Coulter)',
				apa: 'Robbins & Coulter merumuskan empat indikator untuk mengenali sebuah organisasi dikelola dengan gaya laissez-faire.',
				isi: [
					'Tidak memberi kontrol & koreksi',
					'Keleluasaan & tanggung jawab bersimpang siur',
					'Posisi anggota tidak merata',
					'Kebijakan institusi di tangan anggota',
				],
			},
		],
	},
	{
		n: 9,
		judul: 'Teori Kepemimpinan Kontingensi — Hersey & Blanchard',
		poin: [
			'Teori kontingensi: efektivitas kepemimpinan bergantung <strong>variabel moderator situasional</strong>; tidak ada satu gaya optimal di semua situasi.',
			'5 teori kontingensi: Path-Goal, <strong>LPC Contingency Model</strong>, Leader Member Exchange (LMX), Hersey & Blanchard, Leader Participation (Vroom & Yetton).',
			'Fiedler (1967): efektivitas = kecocokan gaya × situasi; skor <strong>LPC</strong> tinggi = relationship-oriented, rendah = task-oriented.',
			'LMX membedakan <strong>in-group</strong> (bawahan terpercaya, tanggung jawab lebih) & out-group (hubungan formal, tugas rutin).',
			'Vroom & Yetton: 4 prosedur keputusan — <strong>otokratik</strong>, konsultasi, bersama, delegasi.',
		],
		istilah: [
			{
				nama: '4 Gaya Kepemimpinan (Hersey & Blanchard)',
				apa: 'Hersey & Blanchard (dalam Veithzal Rivai, 2014) berpendapat manajer harus menyesuaikan responnya menurut kematangan, kemampuan & minat karyawan; perilaku pemimpin = kombinasi pengarahan (task), dukungan (relationship) & kesiapan bawahan.',
				isi: [
					'S1: Telling (Pemberitahu) — pengarahan tinggi, dukungan rendah; untuk R1',
					'S2: Selling (Penjual) — pengarahan tinggi, dukungan tinggi; untuk R2',
					'S3: Participating (Partisipatif) — pengarahan rendah, dukungan tinggi; untuk R3',
					'S4: Delegating (Pendelegasian) — pengarahan rendah, dukungan rendah; untuk R4',
				],
			},
			{
				nama: '4 Tingkat Kematangan/Kesiapan Pengikut',
				apa: 'Tingkat kesiapan pengikut menentukan gaya yang dipakai pemimpin; kematangan tinggi = K4, sedang = K2 & K3, rendah = K1.',
				isi: [
					'K1 / R1 — Tidak mau & tidak mampu; tidak ada kompetensi & percaya diri',
					'K2 / R2 — Mau tetapi tidak mampu; motivasi kuat tanpa keterampilan memadai',
					'K3 / R3 — Tidak mau tetapi mampu; keterampilan memadai tapi tidak mau melaksanakan',
					'K4 / R4 — Mau & mampu; pengetahuan, keterampilan & kemauan kuat',
				],
			},
			{
				nama: 'Path-Goal Theory (House)',
				apa: 'House berasumsi perilaku pemimpin menggerakkan bawahan bila menjadi sumber kepuasan bagi mereka; efektivitas = interaksi perilaku pemimpin dengan karakteristik tugas & bawahan.',
				isi: [
					'Supportive — perhatian pada kebutuhan & kesejahteraan; efektif saat tugas stressful/membosankan',
					'Directive — beritahu harapan, pedoman spesifik, aturan & prosedur; efektif saat tugas kompleks & bawahan tak berpengalaman',
					'Participative — berkonsultasi & mempertimbangkan opini bawahan; efektif saat tugas tidak terstruktur',
					'Achievement-Oriented — tujuan menantang, standar tinggi; efektif saat tugas tidak terstruktur',
				],
			},
		],
	},
	{
		n: 10,
		judul: 'Karakter Wirausaha',
		poin: [
			'KBBI: karakter = <strong>sifat-sifat kejiwaan</strong>, akhlak atau budi pekerti yang membedakan seseorang dari yang lain.',
			'Wyne: dari bahasa Yunani <strong>karasso</strong> = menandai/mengukir — fokus mengaplikasikan nilai kebaikan dalam tindakan.',
			'Alwisol: karakter menonjolkan nilai benar-salah & baik-buruk, <strong>berbeda dengan kepribadian</strong> yang dibebaskan dari nilai.',
			'Motivasi materi: lebih baik gagal setelah mencoba 1000 kali daripada takut gagal & belum mencoba — <strong>yang ke-1001 adalah keberhasilan</strong>.',
			'Prinsip melangkah seperti bayi: nilai prinsip dipraktikkan setahap demi setahap sampai jadi <strong>kebiasaan</strong> & akhirnya karakter.',
		],
		istilah: [
			{
				nama: '9 Karakter Wirausaha',
				apa: 'Karakter adalah tatanan nilai permanen yang ditunjukkan konsisten sehari-hari; ada sembilan karakter wirausaha yang penting untuk mengelola bisnis.',
				isi: [
					'Keberanian mengambil risiko — peluang usaha takkan terjawab tanpa berani ambil risiko',
					'Pekerja keras — bisnis menuntut kerja nyata, bukan sekadar rencana',
					'Komitmen tinggi terhadap pekerjaan — konsisten sampai tujuan tercapai',
					'Bertanggung jawab atas setiap keputusan — siap mempertanggungjawabkan setiap akibat',
					'Berpikir kreatif & inovatif — menghadirkan solusi baru agar tetap kompetitif',
					'Menyukai tantangan & selalu maju — tumbuh di zona perjuangan, bukan zona nyaman',
					'Pantang menyerah — kegagalan bukan akhir, melainkan jalan lebih dekat ke keberhasilan',
					'Cepat beradaptasi — lingkungan bisnis dinamis menuntut kegesitan menyesuaikan diri',
					'Mudah meyakinkan orang — penting menjual gagasan, produk & membangun jaringan',
				],
			},
			{
				nama: '3 Paradigma (Sean Covey)',
				apa: 'Sean Covey mendefinisikan paradigma sebagai cara kamu memandang sesuatu, kerangka acuan, atau keyakinanmu; ada tiga paradigma utama yang membentuk karakter.',
				isi: [
					'Paradigma terhadap Diri Sendiri — cara pandang diri menentukan arah; yakin tiap orang bisa berubah & merubah nasib',
					'Paradigma terhadap Orang Lain — berprasangka baik & mencari tahu karena informasi sering tak lengkap',
					'Paradigma Kehidupan — berpegang nilai prinsip: jujur, kerja keras, bertanggung jawab, menolong, loyalitas, disiplin, adil, melayani',
				],
			},
		],
	},
	{
		n: 11,
		judul: '7 Kebiasaan Efektif — Stephen R. Covey',
		poin: [
			'Kebiasaan 4 — Berpikir Menang-Menang: <strong>menang tanpo ngasorake</strong> (menang tanpa mempermalukan lawan) & nglurug tanpa bala.',
			'4 cara berpikir: menang-kalah, kalah-menang, kalah-kalah, <strong>menang-menang</strong>.',
			'4 kuadran orang (Kebiasaan 3): suka menunda, <strong>yes-man</strong>, pemalas, menentukan prioritas.',
			'Kebiasaan 6 — Sinergi: 4 orang kerja sendiri = 4; bersinergi = <strong>1111</strong> bahkan 4444.',
			'Will Durant (mengutip Aristoteles): keunggulan bukan tindakan, melainkan <strong>kebiasaan</strong>.',
		],
		istilah: [
			{
				nama: '7 Kebiasaan Efektif',
				apa: 'Stephen R. Covey membagi tujuh kebiasaan menjadi tiga kelompok: Kebiasaan 1–3 membangun kemenangan pribadi, 4–6 kemenangan bersama, dan 7 pembaruan diri (renewal).',
				isi: [
					'Berpikir Proaktif (Kebiasaan 1) — bertanggung jawab atas pilihan; berpikir & berbuat berdasarkan nilai sebelum bertindak',
					'Merujuk pada Tujuan Akhir (Kebiasaan 2) — tahu dari mana berasal, untuk apa ada, kemana menuju; nyatakan visi & misi',
					'Dahulukan yang Utama (Kebiasaan 3) — pilih aktivitas dengan dampak besar di masa depan',
					'Berpikir Menang-Menang (Kebiasaan 4) — "Saya menang, yang lain tidak kalah"',
					'Berusahalah Memahami Terlebih Dahulu, Baru Dipahami (Kebiasaan 5) — dengarkan dulu; beri empati & perhatian tulus',
					'Wujudkan Sinergi (Kebiasaan 6) — berbagi sumber daya dengan fokus pada keunggulan masing-masing',
					'Asahlah Gergajimu / Renewal (Kebiasaan 7) — potensi tak diasah akan terabaikan; mulai cepat karena umur ada batasnya',
				],
			},
			{
				nama: '4 Cara Berpikir (Kebiasaan 4)',
				apa: 'Dalam kehidupan, Covey melihat empat cara berpikir dalam menghadapi orang lain; hanya satu yang membangun hubungan sekaligus kemenangan.',
				isi: [
					'Menang-Kalah — menang harus mengalahkan lawan; rakus, egois, menghalalkan segala cara',
					'Kalah-Menang — merasa tidak mampu bersaing; membiarkan orang lain menang',
					'Kalah-Kalah — "kalau saya tidak dapat, dia pun tidak boleh dapat"',
					'Menang-Menang — menang tanpa membuat pihak lain kalah',
				],
			},
			{
				nama: '4 Kuadran Orang (Kebiasaan 3)',
				apa: 'Covey mengelompokkan orang ke dalam empat kuadran berdasarkan cara mereka mengelola aktivitas dan tanggung jawab.',
				isi: [
					'Suka Menunda — "besok saja"; tenang di awal, tertekan saat masalah menumpuk',
					'Yes-Man — sulit menolak ajakan; orientasi hubungan kuat, tugas diabaikan',
					'Pemalas — membuang waktu & uang; tidak bertanggung jawab; rasa bersalah',
					'Menentukan Prioritas — teliti, penuh perhitungan bertanggung jawab, alokasi sumber daya matang',
				],
			},
		],
	},
	{
		n: 12,
		judul: 'Karakter DISC',
		poin: [
			'Tujuan tes DISC: kenalilah dirimu — memetakan <strong>potensi karakter</strong> berwirausaha.',
			'Didesain psikolog Amerika Dr. William Moulton Marston pada <strong>1920-an</strong>.',
			'High-D bekerja baik dengan High-C & <strong>High-S</strong>; High-S bermitra baik dengan High-D & High-I.',
			'High-C perlu berjuang jadi <strong>excellence, bukan perfection</strong>; minta opini orang & putuskan lebih cepat.',
			'Penerapan: pilih bisnis sesuai karakter — Dedikasi/Pelayanan (S), Dominasi (D), <strong>Produksi</strong> (C), Distribusi (I).',
		],
		istilah: [
			{
				nama: 'DISC',
				apa: 'DISC adalah analisis kepribadian untuk memprediksi perilaku individu saat bekerja sendiri maupun dengan orang lain; sistem ini menempatkan orang ke dalam empat tipe.',
				isi: [
					'High-D (Dominan) — suka memberi perintah & memegang kendali, pelopor inovatif, berorientasi hasil, tidak suka detail',
					'High-I (Influenzial) — senang bergembira & populer, sangat ramah, ingin berteman dengan semua orang, tidak suka detail',
					'High-S (Steady) — mantap/tenang, tidak suka hal mendesak & keputusan cepat, memikirkan matang sebelum mulai',
					'High-C (Compliant) — mengumpulkan data, fakta & gambar; standar sendiri sangat tinggi; pendiam & task-oriented',
				],
			},
			{
				nama: 'Format Tes DISC',
				apa: 'Tes DISC dijalankan lewat lembar isian berisi pertanyaan pilihan ganda; hasilnya dihitung menjadi skor gaya alami dan gaya adaptif seseorang.',
				isi: [
					'24 Pertanyaan — tiap soal memuat 4 pernyataan (A–D)',
					'Kolom M (Most) & L (Least) — tanda X pada yang paling banyak/sedikit ada pada diri Anda',
					'Waktu 45 Menit',
					'Basic Style & Adapted Style — gaya alami & gaya menyesuaikan lingkungan',
					'Kode Perilaku — mis. Implementor #9, Conductor #27, Analyzer #7, Persuader #12',
				],
			},
			{
				nama: 'Manfaat Tes DISC untuk Berwirausaha',
				apa: 'DISC membantu wirausaha mengenali diri dan orang lain sehingga bisa mengatur tim dan memilih jenis usaha yang paling sesuai.',
				isi: [
					'Tahu kecenderungan dalam diri — gaya alami maupun performa sekarang',
					'Mengukur kedalaman fokus — cenderung tugas atau hubungan',
					'Tahu gaya kepemimpinan yang lebih efektif sesuai karakter',
					'Tahu mengenai orang lain/bawahan & cara mengaturnya',
					'Tahu daerah kelemahan sehingga bisa diinterferensikan sesuai tipe karakternya',
				],
			},
		],
	},
	{
		n: 13,
		judul: 'Gagasan Usaha',
		poin: [
			'Gagasan usaha = ide jenis bisnis — perdagangan, jasa, atau manufaktur; jangan <strong>mencampur banyak jenis usaha</strong> dalam satu usaha.',
			'Kejelasan usaha memudahkan <strong>positioning produk</strong> di pasar (contoh "Toko Berkah" pecah jadi 3 usaha).',
			'Maslow: tiap tingkat kebutuhan melahirkan <strong>jenis usaha berbeda</strong> — fisiologis → warung, aktualisasi diri → barang antik.',
			'Syarat barang/jasa layak: harus punya <strong>nilai ekonomi</strong> — untuk mendapatkannya harus mengorbankan sejumlah uang.',
			'Sumber gagasan: pameran dagang, produk lisensi & waralaba, <strong>keluhan pelanggan</strong>, masukan distributor.',
		],
		istilah: [
			{
				nama: 'Gagasan Usaha',
				apa: 'Gagasan usaha adalah ide tentang jenis bisnis apa yang akan digeluti; seorang wirausaha harus memilih kejelasan usaha tertentu, tidak mengambang atau campur antar jenis.',
				isi: [
					'Nama Usaha — identitas agar pelanggan mengenal, menghubungi & mengingat',
					'Jenis Usaha',
					'Ruang Lingkup Usaha',
					'Jenis Barang yang dibisniskan',
					'Jenis Badan Usaha',
				],
			},
			{
				nama: '4 Tahap Mendapatkan Gagasan Produk',
				apa: 'Urutan empat tahap yang dilalui untuk mengubah kebutuhan manusia menjadi sebuah rencana penjualan yang terukur.',
				isi: [
					'Tahap 1 — Merumuskan Kebutuhan: kebutuhan berhirarki menurut Maslow (fisiologis, aman & cinta kasih, sosial, harga diri, aktualisasi diri)',
					'Tahap 2 — Menurunkan Kebutuhan jadi Barang & Jasa: pilih yang layak dipasarkan & bernilai ekonomi',
					'Tahap 3 — Mengubah Kebutuhan jadi Permintaan: bedakan permintaan potensial & riil/efektif',
					'Tahap 4 — Mengukur Permintaan Riil jadi Rencana Penjualan: lewat segmentasi pasar & penempatan produk',
				],
			},
			{
				nama: 'Tipe Waralaba (PP No.16/1997)',
				apa: 'Waralaba/franchise adalah perikatan pemberian hak memanfaatkan kekayaan intelektual atau ciri khas usaha pihak lain dengan imbalan; ada tiga tipe hak yang bisa diambil.',
				isi: [
					'Trade Name — hak memproduksi; contoh PT Great River memproduksi Triumph (lisensi Jerman)',
					'Product Distribution — hak distribusi wilayah; contoh Coca-Cola, Sprite, mobil besar, elektronik',
					'Pure/Business Format — hak seluruhnya: trademark, penjualan, peralatan, metode, strategi, QC; contoh restoran, fast food, pendidikan, konsultan',
				],
			},
		],
	},
	{
		n: 14,
		judul: 'Metode ATM & SWOT — Mencari Gagasan Usaha Kreatif',
		poin: [
			'ATM = <strong>Amati, Tiru, Modifikasi</strong> — bukan plagiat karena ada modifikasi yang mencari kelemahan lalu mengganti/menambah.',
			'Amati ≈ menganalisa & menyimpulkan hasil pengamatan sebagai <strong>referensi</strong> ke langkah Tiru.',
			'Yang ditiru: prinsip usaha, sistem manajemen, pola kerja, proses produksi, peralatan, strategi pemasaran, standar pelayanan, <strong>fighting spirit</strong>, mentalitas.',
			'Analisis SWOT hanya menggambarkan kondisi & mengevaluasi ide, <strong>bukan pemecah masalah</strong>.',
			'Ide bagus belum tentu peluang (ada "Japan Invention Unusefulness"); jadi peluang saat lolos <strong>4 penilaian</strong>: pasar, potensi pertumbuhan, biaya, risiko.',
		],
		istilah: [
			{
				nama: 'Metode ATM (Amati – Tiru – Modifikasi)',
				apa: 'ATM adalah metode mencari gagasan usaha kreatif dengan mengamati usaha yang sudah ada, menirunya, lalu memodifikasinya; modifikasi dilakukan dengan sentuhan karakter & kondisi sendiri.',
				isi: [
					'Mempelajari bisnis yang sudah ada',
					'Mengkaji input & output suatu bisnis',
					'Menganalisa tren populasi & data demografi',
					'Mengkaji tren ekonomi',
					'Meniru & memodifikasi',
				],
			},
			{
				nama: 'Modifikasi 4P',
				apa: 'Amati & Tiru saja membuat bisnis membosankan, monoton & tidak kreatif; karenanya modifikasi dilakukan pada bauran pemasaran 4P.',
				isi: [
					'Place — tempat/lokasi/distribusi',
					'Price — harga',
					'Product — produk: fitur, kualitas, kemasan',
					'Promotion — promosi',
				],
			},
			{
				nama: 'Analisis SWOT',
				apa: 'SWOT adalah metode menggambarkan kondisi & mengevaluasi masalah, proyek, atau konsep bisnis berdasarkan faktor internal dan eksternal.',
				isi: [
					'Strengths — kekuatan (faktor internal)',
					'Weaknesses — kelemahan (faktor internal)',
					'Opportunities — peluang (faktor eksternal)',
					'Threats — ancaman (faktor eksternal)',
				],
			},
		],
	},
	{
		n: 15,
		judul: 'Merancang Ide Bisnis dengan BMC',
		poin: [
			'Noble Purpose (Tujuan Mulia): nyatakan visi & misi agar usaha bermanfaat bagi khalayak — arah tak hanya <strong>memupuk keuntungan</strong> semena-mena.',
			'Manfaat BMC: strategi perencanaan & pengembangan bisnis, orientasi ke depan jelas, konsep rumit jadi <strong>sederhana</strong>.',
			'Kelemahan umum menyusun business plan: tak ada goal nyata, gagal antisipasi kendala, kurang <strong>komitmen</strong>, gagal belajar dari pengalaman.',
			'Bobot penilaian proposal PWMV 2021: Sasaran Pelanggan 20% & Informasi Produk/Jasa 20% jadi bagian <strong>terbesar</strong>.',
		],
		istilah: [
			{
				nama: 'BMC (Business Model Canvas)',
				apa: 'BMC adalah alat strategi visual buatan Osterwalder (2012) untuk mendeskripsikan model bisnis: bagaimana sebuah organisasi menciptakan, memberikan, dan menangkap nilai; konsepnya diuraikan jadi sembilan blok yang saling terkait.',
				isi: [
					'Value Proposition — nilai jual produk/jasa sehingga konsumen memilih Anda',
					'Customer Segmen — target konsumen per segmen: usia, gender, hobi, tingkat konsumerisme',
					'Customer Relationship — cara mendekati & berinteraksi dengan konsumen',
					'Channel — tempat pertemuan dengan konsumen: sosmed, radio, event, TV, billboard, Instagram, koran',
					'Key Activities — aktivitas sehari-hari untuk mencapai value proposition',
					'Key Resources — aset pendukung: komputer, ruang kerja, karyawan, kendaraan, listrik',
					'Key Partners — mitra pendukung seperti supplier bahan kue segar & agensi desain',
					'Cost Structure — skema finansial operasional: biaya harian, biaya sumber daya, harga pemasaran',
					'Revenue Streams — aliran pendapatan seperti hasil penjualan & dividen',
				],
			},
			{
				nama: 'Value Proposition Canvas',
				apa: 'Ini alat untuk memahami perilaku konsumen secara lebih detail: membandingkan sisi pelanggan dengan sisi produk yang ditawarkan.',
				isi: [
					'Customer Jobs — pekerjaan yang ingin diselesaikan konsumen: perspektif emosional, sosial, fungsional',
					'Pains — hal yang mengganggu/mencegah konsumen menyelesaikan pekerjaannya',
					'Gains — hal yang membuat konsumen bahagia & mempermudah hidup/pekerjaannya',
					'Products & Services — produk & jasa yang ditawarkan (premium/standar)',
					'Pain Relievers — cara produk menghilangkan penderitaan/pandangan negatif konsumen',
					'Gain Creators — nilai ekstra/unik yang menambah pengalaman konsumen',
				],
			},
			{
				nama: 'Sistematika Business Plan',
				apa: 'Rangkaian bagian yang harus ada saat menyusun proposal bisnis, diurutkan dari sampul sampai lampiran.',
				isi: [
					'Halaman Judul',
					'Daftar Isi',
					'Abstraksi',
					'Bab I Latar Belakang & Misi Usaha',
					'Bab II Analisis Pasar & Pemasaran',
					'Bab III Analisis Produksi & Operasi',
					'Bab IV Bentuk Usaha & Organisasi Manajemen',
					'Bab V Analisis Keuangan',
					'Bab VI Penutup',
					'Lampiran',
				],
			},
		],
	},
	{
		n: 16,
		judul: 'Masalah dan Hambatan Bisnis',
		poin: [
			'Hambatan = tantangan/rintangan yang menghambat pertumbuhan & keberhasilan usaha; berasal dari <strong>internal perusahaan</strong>, lingkungan eksternal, atau dinamika pasar.',
			'6 contoh hambatan: keuangan (modal kurang), persaingan, regulasi, teknologi, <strong>operasional</strong>, SDM.',
			'Kunci mengatasi: kemampuan <strong>beradaptasi</strong>, berinovasi, dan terus belajar — setiap hambatan dapat diatasi.',
		],
		istilah: [
			{
				nama: '10 Masalah Utama Bisnis',
				apa: 'Sepuluh masalah yang paling sering dihadapi bisnis beserta solusi singkatnya; masalah keuangan disebut penyebab utama kegagalan bisnis.',
				isi: [
					'Masalah keuangan — arus kas tidak lancar, pengeluaran > pemasukan; manajemen keuangan baik & anggaran realistis',
					'Kurangnya strategi pemasaran — sosial media & digital marketing, promo & program loyalitas, SEO & iklan berbayar',
					'Persaingan ketat — keunikan & nilai jual, bangun loyalitas, harga kompetitif, inovasi berkelanjutan, pelayanan lebih baik',
					'Sulit mencari & mempertahankan karyawan berkualitas — kompetitif, lingkungan nyaman, pelatihan, insentif berbasis kinerja',
					'Manajemen waktu buruk — kalender digital, prioritaskan urgensi, delegasi, hindari multitasking, metode Pomodoro',
					'Kurangnya inovasi produk/layanan — riset pasar rutin, umpan balik, investasi pengembangan, kolaborasi dengan startup/influencer',
					'Layanan pelanggan buruk — respons cepat, dengarkan dengan empati, chatbot/sistem tiket, komunikasi via email & media sosial',
					'Kesulitan skalabilitas — rencana ekspansi matang (LRAC & SRAC minimum), automasi proses, cari investor',
					'Regulasi & perizinan rumit — konsultasi ahli hukum, dokumen & pajak patuh, ikuti perubahan regulasi',
					'Ketergantungan satu sumber pendapatan — diversifikasi produk/layanan jadi multiple aliran pendapatan',
				],
			},
			{
				nama: '10 Hambatan Bisnis',
				apa: 'Berbeda dari masalah, hambatan adalah rintangan yang menghambat pertumbuhan & keberhasilan usaha; berikut sepuluh hambatan beserta solusi singkatnya.',
				isi: [
					'Permodalan terbatas — investor, crowdfunding, pinjaman bank, jual saham, kredit menguntungkan',
					'Persaingan ketat — analisis kompetitor, diferensiasi, pemasaran digital',
					'Perubahan tren pasar — survei & analisis pasar, adaptif pada teknologi, tambah produk/layanan baru',
					'Kendala regulasi — pelajari peraturan, jasa konsultan hukum/akuntan, kerjasama asosiasi industri',
					'Manajemen SDM — rekrutmen baik, investasi pelatihan, kebijakan adil & motivasi',
					'Ketidakstabilan ekonomi — diversifikasi pendapatan & pasar, rencana keuangan fleksibel',
					'Gangguan pasokan — multiple pemasok, rencana darurat, efisiensi logistik',
					'Manajemen kurang efektif — pelatihan kepemimpinan & perencanaan strategis, mentoring profesional',
					'Perkembangan teknologi cepat — investasi perangkat keras & lunak terbaru, anggaran khusus teknologi',
					'Ketergantungan satu sumber pendapatan — diversifikasi untuk multiple aliran pendapatan',
				],
			},
		],
	},
];

export const kutipan: Kutipan[] = [
	{
		siapa: 'Peter F. Drucker',
		teks: 'The best way to predict the future is to create it. — Cara terbaik memprediksi masa depan adalah dengan menciptakannya.',
		topik: 1,
	},
	{
		siapa: 'Bill Gates',
		teks: 'Your most unhappy customers are your greatest source of learning. — Pelanggan yang paling tidak puas adalah sumber belajar terbesarmu (mengapa analisis lingkungan penting).',
		topik: 2,
	},
	{
		siapa: 'Keith Davis',
		teks: 'Lingkungan bisnis adalah kumpulan dari semua kondisi, peristiwa dan pengaruh yang mengelilingi dan mempengaruhinya. — Kutipan resmi dari materi kuliah.',
		topik: 2,
	},
	{
		siapa: 'Abraham Lincoln',
		teks: 'Give me six hours to cut down a tree and I will spend the first four sharpening the axe. — Berikan aku 6 jam menebang pohon, dan 4 jam pertama akan kugunakan untuk mengasah kapak. (Ilustrasi mengapa perencanaan itu penting.)',
		topik: 3,
	},
	{
		siapa: 'Sun Tzu',
		teks: 'Every battle is won before it is fought. — Setiap pertempuran dimenangkan jauh sebelum pertempuran itu dimulai (perencanaan menentukan kemenangan).',
		topik: 3,
	},
	{
		siapa: 'Henry Ford',
		teks: 'Coming together is a beginning, keeping together is progress, working together is success. — Datang bersama adalah awal, bertahan bersama adalah kemajuan, bekerja bersama adalah keberhasilan.',
		topik: 4,
	},
	{
		siapa: 'Ken Blanchard',
		teks: 'The key to successful leadership today is influence, not authority. — Kunci kepemimpinan yang sukses saat ini adalah pengaruh, bukan otoritas.',
		topik: 5,
	},
	{
		siapa: 'Lao Tzu',
		teks: 'He who controls others may be powerful, but he who has mastered himself is mightier still. — Yang menguasai orang lain mungkin berkuasa, tapi yang menguasai dirinya jauh lebih perkasa.',
		topik: 6,
	},
	{
		siapa: 'Mary Kay Ash',
		teks: 'People will forget what you said, people will forget what you did, but people will never forget how you made them feel. — Orang akan melupakan apa yang kau katakan & lakukan, tapi takkan pernah melupakan bagaimana kau membuat mereka merasa.',
		topik: 7,
	},
	{
		siapa: 'Peter Drucker',
		teks: 'The greatest danger in times of turbulence is not the turbulence; it is to act with yesterday\'s logic. — Bahaya terbesar di masa gejolak bukanlah gejolaknya, bertindak dengan logika kemarin.',
		topik: 9,
	},
	{
		siapa: 'Peter Drucker',
		teks: 'Management is doing things right; leadership is doing the right things. — Manajemen adalah mengerjakan sesuatu dengan benar; kepemimpinan adalah mengerjakan hal yang benar.',
		topik: 9,
	},
	{
		siapa: 'Motivasi dari materi',
		teks: 'Lebih baik gagal setelah mencoba 1000 kali daripada takut gagal dan belum mencoba, karena yang ke-1001 adalah keberhasilan. Setiap kegagalan adalah jalan yang lebih dekat ke arah keberhasilan daripada belum mencobanya. — BAB III Karakter Wirausaha',
		topik: 10,
	},
	{
		siapa: 'Stephen R. Covey',
		teks: 'Begin with the end in mind. — Mulailah dengan mengakhiri dalam pikiran (Kebiasaan 2).',
		topik: 11,
	},
	{
		siapa: 'Will Durant (mengutip Aristoteles)',
		teks: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Kita adalah apa yang kita lakukan berulang kali. Keunggulan bukan tindakan, melainkan kebiasaan.',
		topik: 11,
	},
	{
		siapa: 'Socrates',
		teks: 'Know thyself. — Kenalilah dirimu sendiri — tujuan utama penggunaan tes DISC: memetakan potensi karakter berwirausaha.',
		topik: 12,
	},
	{
		siapa: 'Alexander Graham Bell',
		teks: 'Ketika satu pintu tertutup maka pintu lain terbuka. Namun, kita seringkali terpaku menyesali pintu yang tertutup itu, hingga tak bisa melihat pintu lain yang terbuka bagi kita. — Kutipan penutup materi Mencari Gagasan Usaha Kreatif.',
		topik: 13,
	},
	{
		siapa: 'Simon Sinek',
		teks: 'People don\'t buy what you do; they buy why you do it. — Orang tidak membeli apa yang Anda lakukan; mereka membeli mengapa Anda melakukannya (inilah Noble Purpose).',
		topik: 15,
	},
	{
		siapa: 'Warren Buffett',
		teks: 'Price is what you pay. Value is what you get. — Harga adalah yang Anda bayar; nilai adalah yang Anda dapat (inti Value Proposition).',
		topik: 15,
	},
	{
		siapa: 'Richard Branson',
		teks: 'Business opportunities are like buses, there\'s always another one coming. — Peluang bisnis seperti bus: selalu ada bus berikutnya yang datang (tetap semangat beradaptasi).',
		topik: 16,
	},
];
