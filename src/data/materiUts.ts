// Pembagian bab untuk UTS Manajemen Bisnis (daftar bab dari dosen pengampu)
// `topics` = nomor topik (n) pada data intisari/topics.ts
export interface BabUts {
	n: number;
	title: string;
	desc: string;
	topics: number[];
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
];

export const utsInfo = {
	date: 'Senin, 26 Oktober 2026',
	dosen: 'Moh Haris, SE, M.Si',
};
