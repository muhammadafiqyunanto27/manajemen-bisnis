// Pembagian bab untuk UTS Manajemen Bisnis
// Bab 1–6 = daftar bab dari dosen pengampu (Moh Haris, SE, M.Si)
// Bab 7–12 = pendalaman dari file PPT lain di folder materi (kepemimpinan, DISC, dll.)
// `topics` = nomor topik (n) pada data intisari/topics.ts
export interface BabUts {
	n: number;
	title: string;
	desc: string;
	topics: number[];
	pendalaman?: boolean;
}

export const babUts: BabUts[] = [
	{
		n: 1,
		title: 'Pendahuluan',
		desc: 'Pengertian bisnis, ruang lingkup, fungsi & jenis bisnis',
		topics: [1],
	},
	{
		n: 2,
		title: 'Bisnis dan Lingkungan',
		desc: 'Lingkungan internal, eksternal mikro & makro',
		topics: [2],
	},
	{
		n: 3,
		title: 'Manajemen Bisnis (Perencanaan dan Pengorganisasian)',
		desc: 'Perencanaan strategis, struktur organisasi & pengorganisasian',
		topics: [3, 4],
	},
	{
		n: 4,
		title: 'Karakter Wirausaha',
		desc: '9 karakter wirausaha & 3 paradigma',
		topics: [10],
	},
	{
		n: 5,
		title: 'Gagasan Usaha',
		desc: 'Gagasan usaha, ATM & SWOT untuk ide bisnis kreatif',
		topics: [13, 14],
	},
	{
		n: 6,
		title: 'Bisnis Plan dengan BMC',
		desc: 'Business Model Canvas, Value Proposition Canvas & business plan',
		topics: [15],
	},
	{
		n: 7,
		title: 'Kepemimpinan (Leadership)',
		desc: 'Definisi para ahli, 5 perspektif & prinsip kepemimpinan',
		topics: [5],
		pendalaman: true,
	},
	{
		n: 8,
		title: 'Gaya-Gaya Kepemimpinan',
		desc: 'Otoriter, demokratis & laissez-faire',
		topics: [6, 7, 8],
		pendalaman: true,
	},
	{
		n: 9,
		title: 'Kepemimpinan Kontingensi',
		desc: 'Hersey & Blanchard, Path-Goal, LPC, LMX & Vroom-Yetton',
		topics: [9],
		pendalaman: true,
	},
	{
		n: 10,
		title: '7 Kebiasaan Efektif',
		desc: 'Tujuh kebiasaan Stephen R. Covey',
		topics: [11],
		pendalaman: true,
	},
	{
		n: 11,
		title: 'Karakter DISC',
		desc: 'Empat tipe kepribadian & penerapannya untuk wirausaha',
		topics: [12],
		pendalaman: true,
	},
	{
		n: 12,
		title: 'Masalah dan Hambatan Bisnis',
		desc: '10 masalah, 10 hambatan & solusinya',
		topics: [16],
		pendalaman: true,
	},
];

// Definisi/keterangan "menurut para ahli" per topik — bersumber dari file PPT materi kuliah
export const definisiAhli: Record<number, string[]> = {
	1: [
		'<strong>Mahmud Machfoedz</strong> — usaha perdagangan yang dilakukan sekelompok orang yang sudah terorganisasi untuk mendapatkan laba dengan memproduksi & menjual barang/jasa guna memenuhi kebutuhan konsumen.',
		'<strong>Bukhari Alma</strong> — jumlah usaha yang meliputi pertanian, produksi, komunikasi, konstruksi, distribusi, transportasi, usaha jasa & pemerintah yang bergerak membuat & memasarkan barang/jasa kepada konsumen dengan tujuan memperoleh laba.',
		'<strong>Kasmir & Jakfar</strong> — usaha yang dijalankan dengan tujuan utama untuk memperoleh keuntungan.',
		'<strong>Raymond E. Glos, Richard D. Steade & James R. Lowry</strong> — rangkaian aktivitas untuk menciptakan sesuatu dengan mengembangkan & mentransformasikan berbagai sumber daya menjadi barang/jasa yang diinginkan konsumen.',
		'<strong>R. D. Brown & Petrello</strong> — lembaga yang menghasilkan barang/jasa yang dibutuhkan masyarakat; mencakup usaha pemerintah maupun swasta, baik memperoleh laba atau tidak.',
		'<strong>Tonya Skinner</strong> — pertukaran barang, jasa, atau uang yang saling menguntungkan dan memberi manfaat.',
		'<strong>Steinford</strong> — segala aktivitas dalam penyediaan barang dan jasa yang dibutuhkan konsumen.',
		'<strong>Ronald J. Ebert & Ricky W. Griffin</strong> — aktivitas yang menyediakan barang/jasa yang dibutuhkan dan diinginkan oleh konsumen atau masyarakat.',
		'<strong>LR Dicksee</strong> — bentuk kegiatan yang tujuan utamanya mendapat keuntungan bagi pengusaha atau pemilik kepentingan.',
		'<strong>William Spregal</strong> — semua aktivitas yang berhubungan dengan produksi dan penjualan barang atau jasa.',
	],
	2: [
		'<strong>Keith Davis</strong> — lingkungan bisnis adalah kumpulan dari semua kondisi, peristiwa dan pengaruh yang mengelilingi dan mempengaruhinya.',
		'<strong>Andrews</strong> — lingkungan suatu perusahaan sebagai pola segala pengaruh eksternal yang mempengaruhi kehidupan dan perkembangannya.',
		'<strong>WF Glueck & Lawrence R. Jauch</strong> — faktor-faktor di luar perusahaan yang dapat menimbulkan peluang atau ancaman; yang terpenting: sosial ekonomi, teknologi, pemasok, pesaing & pemerintah.',
	],
	3: [
		'<strong>George R. Terry (1975)</strong> — pemilihan dan menghubungkan fakta-fakta, membuat serta menggunakan asumsi-asumsi berkaitan masa datang, dengan menggambarkan & merumuskan kegiatan yang diyakini perlu untuk mencapai hasil tertentu.',
		'<strong>Harold Koontz & Cyril O\'Donnel</strong> — fungsi seorang manajer yang berhubungan dengan memilih tujuan-tujuan, kebijakan-kebijakan, prosedur-prosedur & program-program dari alternatif-alternatif yang ada.',
		'<strong>T. Hani Handoko (2003:23)</strong> — penetapan/pemilihan tujuan organisasi; penentuan strategi, kebijaksanaan, proyek, program, prosedur, metode, sistem anggaran & standar untuk mencapai tujuan.',
		'<strong>Sutarto (dalam Nining Haslinda, 2008:22)</strong> — fungsi adalah sekelompok aktivitas yang tergolong pada jenis yang sama berdasarkan sifat, pelaksanaan atau pertimbangan lainnya.',
		'<strong>Robbins & Coulter</strong> — fungsi perencanaan: sebagai pengarah, minimalisasi ketidakpastian, minimalisasi pemborosan sumber daya, & penetapan standar pengawasan.',
		'<strong>Porter</strong> — daya tarik industri ditentukan 5 faktor: halangan masuk, kekuatan pelanggan, ancaman produk substitusi & persaingan dalam industri; strategi generik: diferensiasi, kepemimpinan biaya rendah, fokus.',
	],
	5: [
		'<strong>Gibson dkk (1996; 334)</strong> — upaya menggunakan berbagai jenis pengaruh yang bukan paksaan untuk memotivasi anggota organisasi mencapai tujuan tertentu.',
		'<strong>Fremont E. Kast & James E. Rosenzweig</strong> — kesanggupan membujuk orang lain dalam mencapai tujuan secara antusias.',
		'<strong>Greenberg & Bacon (2000)</strong> — suatu proses di mana seorang pemimpin mempengaruhi anggotanya untuk mencapai tujuan kelompok.',
		'<strong>McShane & Von Glinow (2000; 434)</strong> — proses mempengaruhi orang lain & menyediakan lingkungan bagi mereka untuk mencapai tujuan tim/organisasi.',
		'<strong>Stephen R. Covey (dalam Adi Sujatno, 2006)</strong> — kepemimpinan strategis adalah kepemimpinan yang berprinsip (Principle Centered Leadership).',
	],
	6: [
		'<strong>James</strong> — style of leadership adalah berbagai pola tingkah laku yang disukai pemimpin dalam proses mengarahkan & mempengaruhi pekerja.',
		'<strong>Miftah Toha</strong> — gaya kepemimpinan adalah norma perilaku yang digunakan seseorang saat mencoba mempengaruhi perilaku orang lain.',
		'<strong>Tampubolon</strong> — perilaku & strategi sebagai hasil kombinasi dari falsafah, keterampilan, sifat & sikap, yang diterapkan pemimpin saat mempengaruhi kinerja bawahannya.',
		'<strong>Goetsch & Davis</strong> — kemampuan membangkitkan semangat orang lain agar bersedia & bertanggung jawab total mencapai atau melampaui tujuan organisasi.',
		'<strong>Veithzal Rivai</strong> — teori otokratis: gaya kepemimpinan didasarkan atas perintah-perintah pemaksaan & tindakan yang agak arbitrer dalam hubungan pemimpin dengan bawahan.',
		'<strong>Duncan</strong> — otoritarian: kekuasaan mutlak dan penuh; pemimpin disebut diktator yang mengarahkan pikiran, perasaan & perilaku orang lain kepada tujuannya.',
	],
	7: [
		'<strong>G. R. Terry</strong> — pemimpin yang demokratis menganggap dirinya bagian dari kelompoknya & bersama-sama bertanggung jawab atas terlaksananya tujuan bersama; seluruh anggota ikut serta dalam kegiatan, perencanaan, penyelenggaraan, pengawasan & penilaian.',
		'<strong>Bass (dalam Harsiwi, 2003:15)</strong> — kepemimpinan demokratis diukur lewat Multifactor Leadership Questionnaire (MLQ) dengan komponen: Idealized Influence, Inspirational Motivation, Intellectual Stimulation & Individual Consideration.',
	],
	8: [
		'<strong>Flippo (1987)</strong> — pola tingkah laku yang dirancang untuk mengintegrasikan tujuan organisasi dengan tujuan individu untuk mencapai suatu tujuan tertentu.',
		'<strong>Adiwilaga (2018:68)</strong> — gaya kepemimpinan laissez faire adalah gaya kepemimpinan dengan kendali bebas.',
		'<strong>Soekarto</strong> — pemimpin yang mengkehendaki supaya bawahannya diberikan banyak kebebasan.',
		'<strong>Susanto (2017:30)</strong> — meminimalkan keterlibatan pemimpin dalam pengambilan keputusan; pengikut membuat keputusan sendiri tapi tetap bertanggung jawab atas hasil kerjanya.',
		'<strong>Hani Handoko & Reksohadiprodjo (1997)</strong> — 3 ciri: bawahan mengatur dirinya sendiri; pemimpin hanya menentukan kebijaksanaan & tujuan umum; bawahan mengambil keputusan yang relevan.',
		'<strong>Haryadi (2012:141)</strong> — bersikap seperti polisi lalu-lintas; pasif, membiarkan organisasi berjalan menurut iramanya sendiri.',
	],
	9: [
		'<strong>Hersey & Blanchard (dalam Veithzal Rivai, 2014:271)</strong> — pemimpin/manajer harus menyesuaikan responnya menurut kondisi atau tingkat perkembangan kematangan, kemampuan & minat karyawan.',
		'<strong>Fiedler (1967)</strong> — efektivitas kepemimpinan bergantung pada kecocokan gaya dengan situasi; skor LPC tinggi = relationship-oriented, rendah = task-oriented.',
		'<strong>Liden & Graen (1980)</strong> — seseorang dipilih menjadi anggota in-group karena: kompetensi/skill, kepercayaan dari pemimpin, & motivasi memikul tanggung jawab lebih besar.',
		'<strong>Blau</strong> — social exchange: aksi volunter individu yang termotivasi oleh ekspektasi return/keuntungan dari interaksi sosial tersebut.',
		'<strong>Uhl-Bien, Graen & Scandura (2000)</strong> — social exchange: interaksi awal yang diikuti pertukaran sosial di mana individu melakukan tes untuk memutuskan kelanjutannya.',
		'<strong>Dienesch & Liden (1986)</strong> — dimensi LMX: Contribution (persepsi kinerja pada tujuan bersama), Loyalty (dukungan terbuka satu sama lain), Affect (afeksi interpersonal kedua pihak).',
		'<strong>Vroom & Yetton</strong> — Leader Participation Model: tujuh gaya (A–G) pembuatan keputusan manajemen dengan 13 alternatif saran sesuai situasi.',
	],
	10: [
		'<strong>KBBI</strong> — sifat-sifat kejiwaan, akhlak atau budi pekerti yang membedakan seseorang dari yang lain.',
		'<strong>Ditjen Mandikdasmen – Kemendiknas</strong> — cara berpikir dan berperilaku yang menjadi ciri khas tiap individu untuk hidup dan bekerjasama, dalam lingkup keluarga, masyarakat, bangsa & negara.',
		'<strong>Wyne</strong> — dari bahasa Yunani "karasso" (to mark = menandai/mengukir); memfokuskan bagaimana mengaplikasikan nilai kebaikan dalam bentuk tindakan.',
		'<strong>Alwisol</strong> — penggambaran tingkah laku dengan menonjolkan nilai benar-salah & baik-buruk; berbeda dengan kepribadian yang dibebaskan dari nilai.',
		'<strong>Sean Covey</strong> — paradigma adalah cara kamu memandang sesuatu, kerangka acuanmu, atau keyakinanmu.',
	],
	11: [
		'<strong>Stephen R. Covey</strong> — 7 kebiasaan efektif terbagi 3 kelompok: kemenangan pribadi (Kebiasaan 1–3), kemenangan bersama (4–6) & pembaruan diri/renewal (7).',
	],
	12: [
		'<strong>Dr. William Moulton Marston</strong> — psikolog Amerika yang mendesain sistem DISC pada tahun 1920-an.',
	],
	13: [
		'<strong>A. H. Maslow</strong> — kebutuhan manusia berhirarki 5 tingkat: fisiologis; rasa aman & cinta kasih; sosial; harga diri; aktualisasi diri. Tiap tingkat melahirkan jenis usaha berbeda.',
		'<strong>CEIR (Center for Exhibition Industry Research, AS)</strong> — partisipasi pada pameran dagang bisa menciptakan penjualan 6× lebih besar dibandingkan media promosi penjualan lainnya.',
		'<strong>PP No. 16/1997</strong> — waralaba: perikatan di mana salah satu pihak diberi hak memanfaatkan kekayaan intelektual/ciri khas usaha milik pihak lain dengan imbalan & persyaratan yang ditetapkan.',
	],
	15: [
		'<strong>Osterwalder (2012)</strong> — BMC adalah alat strategi untuk mendeskripsikan model bisnis & menggambarkan dasar pemikiran tentang bagaimana organisasi menciptakan, memberikan, dan menangkap nilai.',
	],
};

export const utsInfo = {
	date: 'Senin, 26 Oktober 2026',
	dosen: 'Moh Haris, SE, M.Si',
};
