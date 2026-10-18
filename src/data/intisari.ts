// Data intisari & kutipan tokoh (dihasilkan dari materi, disunting manual)
export interface Poin {
	n: number;
	judul: string;
	poin: string[];
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
			'<strong>Bisnis</strong> = kegiatan individu/organisasi: produksi, pembelian, penjualan, atau pertukaran barang/jasa untuk laba.',
			'Machfoedz: usaha <strong>perdagangan terorganisasi</strong> untuk laba; Kasmir & Jakfar: tujuan utama keuntungan.',
			'Ruang lingkup 3 makna: <strong>badan usaha</strong>, sektor pasar tertentu, semua aktivitas komunitas produsen.',
			'Fungsi Steinhoff: bahan baku, <strong>manufacturing</strong>, distributing; rinci: produksi, distribusi, penjualan, pemasaran.',
			'4 komponen konsep bisnis: <strong>core strategy</strong>, strategic resources, customer interface, value network.',
			'Jenis: ekstraktif, manufaktur, jasa, e-commerce, retail, <strong>franchise</strong>, startup.',
		],
	},
	{
		n: 2,
		judul: 'Lingkungan Bisnis',
		poin: [
			'Keith Davis: lingkungan bisnis = semua <strong>kondisi, peristiwa, pengaruh</strong> yang mengelilingi & mempengaruhi.',
			'Karakteristik 4: <strong>kompleks, dinamis, multi-faset</strong>, dampak jangkauan jauh.',
			'Mikro: <strong>pelanggan</strong> (terpenting), pemasok, perantara pemasaran, pesaing, masyarakat umum.',
			'Makro: politik, ekonomi, sosial, teknologi, fisik, hukum, <strong>internasional</strong>.',
			'Internal: sistem nilai, misi/visi/tujuan, struktur kepengurusan, hubungan kekuatan, <strong>SDM</strong>, citra & merek.',
			'Glueck & Jauch: faktor luar → <strong>peluang atau ancaman</strong> (sosial ekonomi, teknologi, pemasok, pesaing, pemerintah).',
		],
	},
	{
		n: 3,
		judul: 'Perencanaan Organisasi',
		poin: [
			'Terry (1975): <strong>perencanaan</strong> = memilih & menghubungkan fakta serta asumsi masa depan untuk mencapai hasil tertentu.',
			'7 langkah: misi & tujuan, analisis tujuan, lingkungan, sumber daya, <strong>kesempatan strategis</strong>, keputusan, pelaksanaan & evaluasi.',
			'3 tingkatan strategi: <strong>korporasi</strong>, unit bisnis, fungsional; 3 strategi generik Porter: diferensiasi, biaya rendah, fokus.',
			'8 jenis perencanaan: misi, tujuan, strategi, kebijakan, prosedur, aturan, program, <strong>anggaran</strong>.',
			'Hierarki: strategis (puncak), taktis (menengah), operasional (bawah); jangka panjang <strong>5–30 tahun</strong>.',
			'MBO (Peter Drucker): tujuan <strong>partisipatif</strong>; kunci partisipasi, komunikasi, komitmen manajemen puncak.',
		],
	},
	{
		n: 4,
		judul: 'Pengorganisasian & Struktur Organisasi',
		poin: [
			'Pengorganisasian = menyusun <strong>struktur organisasi</strong> sesuai tujuan, sumber daya & lingkungan.',
			'4 bentuk struktur: <strong>fungsional</strong>, divisional, matriks, komite.',
			'Matriks = fungsional + divisional; <strong>wewenang ganda</strong> — lapor ke pimpinan fungsional & proyek.',
			'Komite: <strong>Executive Committee</strong> (pimpinan) & Staff Committee (bawahan); keputusan musyawarah.',
			'Aspek: pembagian kerja, departementalisasi, rantai perintah, hierarki, rentang manajemen, <strong>kelompok informal</strong>.',
			'Formal (pola tetap, jelas) vs <strong>informal</strong> (hubungan sosial, muncul & dipilih, tergantung kebutuhan).',
		],
	},
	{
		n: 5,
		judul: 'Kepemimpinan (Leadership)',
		poin: [
			'Kepemimpinan = kemampuan <strong>mempengaruhi</strong> orang & menyediakan tempat mencapai tujuan organisasi.',
			'5 perspektif (McShane & Von Glinow): competency, behavioral, <strong>contingency</strong>, transformational, romance.',
			'4 gaya situasional: Telling, Selling, Participating, <strong>Delegating</strong>; kesiapan pengikut R1–R4.',
			'Covey 8 prinsip: belajar terus, pelayanan, energi positif, percaya orang, <strong>hidup seimbang</strong>, petualangan, sinergi, pembaharuan diri.',
			'Behavioral: dua perilaku pemimpin — <strong>people-oriented</strong> & task-oriented.',
			'Wirjana 11 prinsip: mengerti diri, keahlian teknis, tanggung jawab, <strong>role model</strong>, keputusan matang, melatih tim.',
		],
	},
	{
		n: 6,
		judul: 'Gaya Kepemimpinan Otoriter',
		poin: [
			'Otoriter (Rivai & Duncan): berbasis <strong>perintah pemaksaan</strong> & tindakan arbitrer; kekuasaan mutlak (diktator).',
			'Ciri: instruksi jelas, kepatuhan mutlak, kontrol semua keputusan, kreativitas rendah, motivasi lewat <strong>ketakutan</strong>.',
			'Efektif saat: perubahan besar, butuh <strong>keputusan cepat</strong>, tak boleh salah (mutu, rumah sakit), tekanan tinggi.',
			'Otoritatif = <strong>mentor</strong> (membimbing, umpan balik, boleh beri ide); otoriter memaksakan kehendak.',
			'Kelebihan: keputusan cepat, rantai komando jelas, cocok bawahan kurang terampil, <strong>hasil terukur</strong>.',
			'Kelemahan: resistensi & kebencian, tekanan tinggi, kreativitas rendah, <strong>turnover tinggi</strong>.',
		],
	},
	{
		n: 7,
		judul: 'Gaya Kepemimpinan Demokratis',
		poin: [
			'Terry: pemimpin demokratis = bagian kelompok, <strong>tanggung jawab bersama</strong> atas terlaksananya tujuan.',
			'Nama lain: partisipatif, kepemimpinan bersama, <strong>manajemen open-book</strong>, keputusan partisipatif.',
			'Bass/MLQ 4 komponen: Idealized Influence, Inspirational Motivation, Intellectual Stimulation, <strong>Individual Consideration</strong>.',
			'Sifat: kejujuran, kecerdasan, keberanian, kreativitas, kompetensi, <strong>rasa keadilan</strong>.',
			'Cocok industri konten kreatif, konsultasi, jasa & <strong>pendidikan</strong>.',
			'Kekurangan: diskusi runyam, suara tumpang tindih, debat kusir bila <strong>problem solving</strong> lemah.',
		],
	},
	{
		n: 8,
		judul: 'Gaya Kepemimpinan Laissez-Faire',
		poin: [
			'Laissez-faire = "biarkan mereka melakukan"; pemimpin <strong>pasif</strong>, bawahan mengatur diri sendiri (Syahrizal Abbas).',
			'Robbins (2015): gaya paling <strong>pasif</strong> & paling kurang efektif dari perilaku pemimpin.',
			'Diperkenalkan <strong>Adam Smith</strong> (Bapak Ekonomi); pemimpin hanya menentukan kebijaksanaan & tujuan umum.',
			'Kebaikan: keputusan bersama, bawahan kembangkan kreativitas & tanggung jawab, <strong>proses lebih cepat</strong>.',
			'Kelemahan: tanpa pengawasan → penyimpangan; pemimpin terpisah dari bawahan; <strong>koordinasi buruk</strong>.',
			'Indikator (Robbins & Coulter): tanpa kontrol & koreksi, tanggung jawab bersimpang siur, kebijakan di tangan <strong>anggota</strong>.',
		],
	},
	{
		n: 9,
		judul: 'Teori Kepemimpinan Kontingensi — Hersey & Blanchard',
		poin: [
			'Kontingensi: tidak ada satu gaya <strong>optimal</strong>; efektivitas tergantung variabel situasional.',
			'5 teori: Path-Goal, LPC (Fiedler), <strong>LMX</strong>, Hersey & Blanchard, Vroom & Yetton.',
			'Hersey & Blanchard: S1 Telling, S2 Selling, S3 Participating, S4 <strong>Delegating</strong>.',
			'Kesiapan pengikut: K1 tidak mau & tidak mampu → K4 <strong>mau & mampu</strong>.',
			'Path-Goal (House) 4 gaya: supportive, directive, participative, <strong>achievement-oriented</strong>.',
			'Fiedler LPC: LPC tinggi = <strong>relationship-oriented</strong>, rendah = task-oriented; 3 faktor situasi.',
		],
	},
	{
		n: 10,
		judul: 'Karakter Wirausaha',
		poin: [
			'Karakter = tatanan <strong>nilai permanen</strong>, ditunjukkan konsisten dalam kehidupan sehari-hari (KBBI; Kemendiknas).',
			'Wyne: dari bahasa Yunani <strong>karasso</strong> = menandai/mengukir; erat dengan personality.',
			'9 karakter: berani risiko, pekerja keras, komitmen, tanggung jawab, <strong>kreatif-inovatif</strong>, suka tantangan, pantang menyerah, adaptif, meyakinkan.',
			'3 paradigma (Sean Covey): terhadap <strong>diri sendiri</strong>, orang lain & kehidupan.',
			'Nilai prinsip universal: jujur, kerja keras, tanggung jawab, menolong, loyalitas, disiplin, adil, <strong>melayani</strong>.',
			'Prinsip seperti bayi: merangkak → berdiri → berjalan → berlari → jadi <strong>kebiasaan</strong> → karakter.',
		],
	},
	{
		n: 11,
		judul: '7 Kebiasaan Efektif — Stephen R. Covey',
		poin: [
			'7 kebiasaan Covey: proaktif, <strong>merujuk tujuan akhir</strong>, dahulukan yang utama, menang-menang, pahami dulu, sinergi, asah gergaji.',
			'Kebiasaan 1–3 = kemenangan pribadi; 4–6 = <strong>kemenangan bersama</strong>; 7 = renewal.',
			'4 cara berpikir: menang-kalah, kalah-menang, kalah-kalah, <strong>menang-menang</strong>.',
			'4 kuadran orang: suka menunda, <strong>yes-man</strong>, pemalas, menentukan prioritas.',
			'Kebiasaan 2: mulai dengan tujuan akhir; hidup = <strong>problem of choice</strong>.',
			'Kebiasaan 5: dengarkan dulu baru minta dipahami — beri <strong>empati</strong> & perhatian tulus.',
		],
	},
	{
		n: 12,
		judul: 'Karakter DISC',
		poin: [
			'DISC = analisis kepribadian; 4 tipe: <strong>D-Dominant</strong>, I-Influential, S-Steady, C-Compliant.',
			'Didesain Dr. William Moulton Marston (psikolog Amerika) pada <strong>1920-an</strong>.',
			'Tes: 24 pertanyaan, 4 pernyataan/soal; tanda X kolom <strong>M (Most)</strong> & L (Least); 45 menit.',
			'Hasil: <strong>Basic Style</strong> (gaya alami) & Adapted Style (menyesuaikan lingkungan) → kode perilaku.',
			'High-D: perintah, kendali, orientasi hasil; High-I: ramah, populer, <strong>people-oriented</strong>.',
			'High-S: tenang, tak suka keputusan cepat; High-C: analitis, teliti, <strong>standar tinggi</strong>.',
		],
	},
	{
		n: 13,
		judul: 'Gagasan Usaha',
		poin: [
			'Gagasan usaha = ide jenis bisnis (perdagangan, jasa, manufaktur); 5 hal spesifik: <strong>nama</strong>, jenis, ruang lingkup, barang, badan usaha.',
			'Maslow 5: fisiologis, aman & cinta kasih, sosial, harga diri, <strong>aktualisasi diri</strong>.',
			'4 tahap: rumuskan kebutuhan → jadikan barang/jasa → ubah jadi permintaan → <strong>ukur ke rencana penjualan</strong>.',
			'Permintaan riil/efektif = ability to pay DAN <strong>willing to pay</strong>; potensial belum terukur daya beli.',
			'Sumber gagasan: pameran dagang, produk lisensi, <strong>waralaba</strong>, pelanggan (komplain), distributor.',
			'Waralaba (PP No.16/1997): tipe trade name, product distribution, <strong>pure/business format</strong>.',
		],
	},
	{
		n: 14,
		judul: 'Metode ATM & SWOT — Mencari Gagasan Usaha Kreatif',
		poin: [
			'ATM = <strong>Amati, Tiru, Modifikasi</strong>; bukan plagiat karena ada proses modifikasi.',
			'Modifikasi pada 4P: <strong>Place, Price, Product, Promotion</strong>.',
			'Tiru: prinsip usaha, sistem manajemen, pola kerja, proses produksi, <strong>strategi pemasaran</strong>, pelayanan, mentalitas.',
			'SWOT = internal <strong>Strengths & Weakness</strong>, eksternal Opportunities & Threats.',
			'SWOT hanya menggambarkan situasi, <strong>bukan pemecah masalah</strong>.',
			'4 penilaian ide: pasar (STP), potensi pertumbuhan, biaya, <strong>risiko</strong>.',
		],
	},
	{
		n: 15,
		judul: 'Merancang Ide Bisnis dengan BMC',
		poin: [
			'BMC (Osterwalder, 2012): alat strategi mendeskripsikan model bisnis — <strong>menciptakan, memberikan, menangkap nilai</strong>.',
			'Noble Purpose mendahului 9 blok: visi-misi agar bermanfaat bagi <strong>masyarakat</strong>, bukan sekadar laba.',
			'9 blok: <strong>Value Proposition</strong>, Customer Segments/Relationship, Channel, Key Activities/Resources/Partners, Cost Structure, Revenue Streams.',
			'Value Proposition Canvas: Customer Jobs, <strong>Pains, Gains</strong>; Products & Services, Pain Relievers, Gain Creators.',
			'Customer Jobs: perspektif <strong>emosional, sosial, fungsional</strong>.',
			'Sistematika bisnis plan: Latar Belakang & Misi → Pasar → Produksi → <strong>Keuangan</strong> → Penutup.',
		],
	},
	{
		n: 16,
		judul: 'Masalah dan Hambatan Bisnis',
		poin: [
			'Masalah utama: <strong>keuangan</strong> — arus kas tidak lancar, pengeluaran > pemasukan; penyebab utama kegagalan.',
			'10 masalah: keuangan, pemasaran, persaingan, SDM, waktu, inovasi, layanan, <strong>skalabilitas</strong>, regulasi, ketergantungan pendapatan.',
			'Hambatan = rintangan dari kondisi internal, <strong>lingkungan eksternal</strong>, atau dinamika pasar.',
			'6 contoh hambatan: keuangan, persaingan, regulasi, <strong>teknologi</strong>, operasional, SDM.',
			'Solusi permodalan: investor, crowdfunding, pinjaman bank, jual saham, <strong>kredit</strong>.',
			'Kunci: kemampuan <strong>beradaptasi</strong>, berinovasi, dan terus belajar.',
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
		teks: 'Lingkungan bisnis adalah kumpulan dari semua kondisi, peristiwa dan pengaruh yang mengelilingi dan mempengaruhinya.',
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
		teks: 'Lebih baik gagal setelah mencoba 1000 kali daripada takut gagal dan belum mencoba, karena yang ke-1001 adalah keberhasilan. Setiap kegagalan adalah jalan yang lebih dekat ke arah keberhasilan daripada belum mencobanya.',
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
		teks: 'Ketika satu pintu tertutup maka pintu lain terbuka. Namun, kita seringkali terpaku menyesali pintu yang tertutup itu, hingga tak bisa melihat pintu lain yang terbuka bagi kita.',
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
