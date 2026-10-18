import type { APIRoute } from 'astro';
import { topics, chapters } from '../data/topics';
import { soalUts } from '../data/soalUts';
import { latihanSoal } from '../data/latihanSoal';
import { intisari, kutipan } from '../data/intisari';

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
		{
			kind: 'Intisari',
			url: 'intisari',
			title: 'Intisari & Hafalan',
			meta: 'Poin hafalan semua topik + kutipan tokoh',
			text:
				intisari
					.map((t) => `${t.judul}: ${t.poin.join(' ').replace(/<[^>]+>/g, '')}`)
					.join(' ') +
				' ' +
				kutipan.map((k) => `${k.siapa}: ${k.teks}`).join(' '),
		},
	];
	return new Response(JSON.stringify(records), {
		headers: { 'Content-Type': 'application/json; charset=utf-8' },
	});
};
