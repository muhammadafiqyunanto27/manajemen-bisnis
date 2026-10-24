import type { APIRoute } from 'astro';
import { topics, chapters } from '../data/topics';
import { soalUts } from '../data/soalUts';
import { latihanSoal } from '../data/latihanSoal';
import { intisari, kutipan } from '../data/intisari';
import { babUts, definisiAhli } from '../data/materiUts';

const chapOfInti = new Map(topics.map((t) => [t.n, t.chapter]));
const intisariRecords = [
	...chapters.flatMap((c) => {
		const its = intisari.filter((t) => chapOfInti.get(t.n) === c.n);
		if (!its.length) return [];
		return [
			{
				kind: 'Intisari',
				url: `intisari/${c.n}`,
				title: `Intisari Bagian ${c.roman} — ${c.title}`,
				meta: 'Poin hafalan + istilah kunci',
				text: its
					.map(
						(t) =>
							`${t.judul}: ${t.poin.join(' ').replace(/<[^>]+>/g, '')} ` +
							t.istilah
								.map(
									(ist) =>
										`${ist.nama} ${ist.apa.replace(/<[^>]+>/g, '')} ${ist.isi
											.join(' ')
											.replace(/<[^>]+>/g, '')}`
								)
								.join(' ')
					)
					.join(' '),
			},
		];
	}),
	{
		kind: 'Intisari',
		url: 'intisari/kutipan',
		title: 'Kutipan Tokoh — Intisari & Hafalan',
		meta: 'Kutipan untuk dihafal',
		text: kutipan.map((k) => `${k.siapa}: ${k.teks}`).join(' '),
	},
];

const babUtsRecords = babUts.map((bab) => {
	const list = intisari.filter((t) => bab.topics.includes(t.n));
	return {
		kind: 'Materi UTS',
		url: `materi-uts/${bab.n}`,
		title: `Bab ${bab.n} — ${bab.title}`,
		meta: `Materi UTS · ${bab.desc}`,
		text: list
			.map(
				(t) =>
					`${t.judul}: ${t.poin.join(' ').replace(/<[^>]+>/g, '')} ` +
					t.istilah
						.map((ist) => `${ist.nama} ${ist.apa.replace(/<[^>]+>/g, '')}`)
						.join(' ') +
					' ' +
					(definisiAhli[t.n] ?? []).map((d) => d.replace(/<[^>]+>/g, '')).join(' ') +
					' ' +
					kutipan
						.filter((k) => k.topik === t.n)
						.map((k) => `${k.siapa}: ${k.teks}`)
						.join(' ')
			)
			.join(' '),
	};
});

export const GET: APIRoute = () => {
	const records = [
		...topics.map((t) => {
			const chap = chapters.find((c) => c.n === t.chapter);
			return {
				kind: 'Rangkuman',
				url: `rangkuman/${t.n}`,
				title: t.title,
				meta: chap ? `Bagian ${chap.roman} · ${chap.title}` : 'Rangkuman',
				text: t.text,
			};
		}),
		...soalUts.map((s, i) => ({
			kind: 'Soal UTS',
			url: `soal-uts/${i + 1}`,
			title: s.label,
			meta: 'Jawaban Soal UTS',
			text: s.text,
		})),
		...latihanSoal.map((s, i) => ({
			kind: 'Latihan',
			url: `latihan/${i + 1}`,
			title: s.label,
			meta: s.paketTitle,
			text: s.text,
		})),
		...intisariRecords,
		...babUtsRecords,
	];
	return new Response(JSON.stringify(records), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};
