# WisaLam

**Nama**: MUHAMMAD ARFA RADITYA

**NIM**: 124140015

**Kelas**: RB

**Tema**: Destinasi Wisata Lampung

**Deployment**: https://arfaraditya28.github.io/uts-paw/

## Screenshot

1. **Tampilan Page Beranda**

![Tangkapan layar beranda](docs/beranda.png)

2. **Tampilan Page Koleksi**

![Tangkapan layar koleksi](docs/koleksi.png)

3. **Tampilan Page Tambah**

![Tangkapan layar tambah](docs/tambah.png)

4. **Tampilan Page Statistik**

![Tangkapan layar statistik](docs/statistik.png)

5. **Tampilan Page Tentang**

![Tangkapan layar tentang](docs/tentang.png)

6. **Tampilan Page Error 404**

![Tangkapan layar error](docs/tidak-ditemukan.png)

## Fitur

- **Beranda** — menampilkan judul aplikasi, tema, serta ringkasan jumlah destinasi dan jumlah kategori.
- **Koleksi** — menampilkan seluruh destinasi dalam bentuk kartu (kategori, kabupaten/kota, harga tiket, jam buka), dilengkapi pencarian berdasarkan judul dan filter per kategori.
- **Tambah** — menambahkan tempat destinasi wisata dengan memasukkan judul, kategori, kabupaten/kota, harga tiket, dan jam buka
- **Statistik** — tabel jumlah destinasi per kategori beserta total keseluruhan.
- **Tentang** — menampilkan biodata (nama, NIM, kelas, tema) yang dibaca dari `mahasiswa.json` serta tautan ke repositori.
- **Halaman 404** — ditampilkan otomatis ketika pengguna membuka alamat yang tidak terdaftar pada routing, berisi kode kesalahan, keterangan singkat bahwa halaman tidak ditemukan, serta tautan untuk kembali ke beranda.

## Menjalankan secara lokal

```bash
cd app
npm install
npm run dev
```

## Konsep React yang Dipakai

- **useState** — menyimpan state lokal seperti isi form dan pesan galat di halaman Tambah, serta kata kunci pencarian dan kategori terpilih di halaman Koleksi.
- **useEffect** — mengambil data awal dengan `fetch` saat aplikasi pertama dimuat, lalu menyimpan setiap perubahan data ke `localStorage`.
- **Context dan custom hook** — `KoleksiProvider` membagikan data koleksi ke semua halaman lewat `KoleksiContext`, dan diakses dengan hook `useKoleksi` serta `useLocalStorage` tanpa perlu mengoper props berlapis-lapis.
- **React Router** — `Routes` dan `Route` mengatur enam halaman, `Outlet` dipakai untuk layout bersama, `Link`/`NavLink` untuk navigasi, `useParams` untuk membaca id di halaman detail, dan `useNavigate` untuk berpindah halaman setelah data disimpan atau dihapus.
- **Rendering kondisional dan daftar** — pesan memuat, pesan galat, dan notifikasi validasi hanya muncul sesuai kondisi, sedangkan kartu destinasi, menu, dan isi tabel dibangun dengan `.map()` serta `key` yang unik.