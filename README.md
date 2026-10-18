# 📚 Persiapan UTS — Manajemen Bisnis

Website studi untuk mata kuliah **Manajemen Bisnis** (Dosen: Moh Haris, SE, M.Si), disusun dari
19 file materi kuliah (PPT/Excel). Berisi rangkuman lengkap, quote para tokoh, jawaban soal UTS,
dan paket latihan soal interaktif.

## Stack

- **[Astro](https://astro.build)** — framework utama (static site, zero-JS by default)
- **React** (`@astrojs/react`) — island interaktif "⚡ Mode Kilat"
  (kuis acak jawaban soal, hydration on-demand di halaman Latihan & Soal UTS)

> Catatan: rencana awal memakai integrasi Astro + Next.js (`@astrojs/next`), tetapi package
> tersebut sudah dihapus dari npm registry sejak Astro 7 — dan untuk hosting statis GitHub
> Pages, Next.js server juga tidak dapat berjalan. React islands memberikan fungsionalitas
> yang sama dengan jauh lebih ringan.

## Halaman

| Route         | Isi                                                                          |
| ------------- | ---------------------------------------------------------------------------- |
| `/`           | Beranda — hero + daftar isi 16 topik                                          |
| `/rangkuman`  | Rangkuman seluruh materi (16 topik, dari Bisnis & Ruang Lingkupnya s.d. BMC)  |
| `/soal-uts`   | Jawaban lengkap 8 soal UTS (4 bagian a & b) + Mode Kilat                      |
| `/latihan`    | 12 soal latihan serupa + kunci jawaban + Mode Kilat                           |

## Perintah

```bash
npm install        # install dependensi
npm run dev        # dev server (http://localhost:4321/manajemen-bisnis/)
npm run build      # build produksi ke dist/
npm run preview    # preview hasil build
```

## Deploy (GitHub Pages)

Repo ini sudah menyertakan workflow `.github/workflows/deploy.yml` yang build & deploy otomatis
ke GitHub Pages setiap push ke `main`.

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push ke `main` (atau jalankan workflow manual dari tab Actions)

> ⚠️ Base path site di-set ke `/manajemen-bisnis` (project pages).
> Kalau pakai custom domain, hapus `base` di `astro.config.mjs`.
