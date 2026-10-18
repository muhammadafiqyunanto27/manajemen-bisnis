import { useState } from 'react';

export interface LatihanSoal {
	label: string;
	q: string;
	a: string;
}

export default function QuizKilat({ soal }: { soal: LatihanSoal[] }) {
	const [order, setOrder] = useState<number[]>(() => soal.map((_, i) => i));
	const [idx, setIdx] = useState(0);
	const [revealed, setRevealed] = useState(false);
	const [done, setDone] = useState(false);

	const current = soal[order[idx]];

	const shuffle = () => {
		const next = soal.map((_, i) => i);
		for (let i = next.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[next[i], next[j]] = [next[j], next[i]];
		}
		setOrder(next);
		setIdx(0);
		setRevealed(false);
		setDone(false);
	};

	const next = () => {
		if (idx + 1 >= order.length) {
			setDone(true);
			return;
		}
		setIdx(idx + 1);
		setRevealed(false);
	};

	if (!current) {
		return <div className="quiz">Belum ada soal tersedia.</div>;
	}

	return (
		<div className="quiz">
			<div className="quiz-head">
				<span className="tag violet">⚡ Mode Kilat</span>
				<span className="quiz-progress">
					Soal {Math.min(idx + 1, order.length)} dari {order.length}
				</span>
				<button className="quiz-btn" onClick={shuffle}>
					⤨ Acak Ulang
				</button>
			</div>

			{!done ? (
				<>
					<div className="quiz-label">{current.label}</div>
					<p className="quiz-q" dangerouslySetInnerHTML={{ __html: current.q }} />
					{revealed ? (
						<div className="quiz-a" dangerouslySetInnerHTML={{ __html: current.a }} />
					) : (
						<button className="quiz-btn primary" onClick={() => setRevealed(true)}>
							Lihat Kunci Jawaban
						</button>
					)}
					{revealed && (
						<button className="quiz-btn" onClick={next}>
							Soal Berikutnya →
						</button>
					)}
				</>
			) : (
				<div className="quiz-done">
					<p>🎉 Selesai! Ulangi lagi supaya makin hafal.</p>
					<button className="quiz-btn primary" onClick={shuffle}>
						Mulai Lagi (Acak)
					</button>
				</div>
			)}
		</div>
	);
}
