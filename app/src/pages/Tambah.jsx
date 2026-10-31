import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import './Tambah.css'

const AWAL = { judul: '', kategori: 'Pantai', kabupaten: '', hargaTiket: '', jamBuka: '' }

export default function Tambah() {
  const { tambah } = useKoleksi()
  const navigate = useNavigate()
  const [form, setForm] = useState(AWAL)
  const [galat, setGalat] = useState('')

  const ubah = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const simpan = (e) => {
    e.preventDefault()
    if (form.judul.trim().length < 3) {
      setGalat('Judul wajib diisi, minimal 3 karakter.')
      return
    }

    tambah({
      ...form,
      judul: form.judul.trim(),
      kabupaten: form.kabupaten.trim(),
      hargaTiket: Number(form.hargaTiket),
      jamBuka: form.jamBuka.trim(),
    })
    navigate('/koleksi')
  }

  return (
    <form className="formulir" onSubmit={simpan} noValidate>
      <h1>Tambah Tempat Destinasi Wisata Lampung</h1>

      <label htmlFor="judul">Judul Tempat Wisata</label>
      <input id="judul" name="judul" value={form.judul} onChange={ubah} placeholder="Contoh: Kyokko Beach"/>
      {galat && <p role="alert">{galat}</p>}

      <label htmlFor="kategori">Kategori</label>
      <select id="kategori" name="kategori" value={form.kategori} onChange={ubah}>
        <option>Pantai</option>
        <option>Taman</option>
        <option>Wisata Alam</option>
        <option>Air Terjun</option>
        <option>Gunung</option>
        <option>Kuliner</option>
      </select>

      <label htmlFor="kabupaten">Kabupaten/Kota</label>
      <input id="kabupaten" name="kabupaten" value={form.kabupaten} onChange={ubah} placeholder="Contoh: Bandar Lampung"/>

      <label htmlFor="hargaTiket">Harga Tiket (Rp)</label>
      <input id="hargaTiket" name="hargaTiket" type="number" min="0" value={form.hargaTiket} onChange={ubah} placeholder="Contoh: 15000"/>

      <label htmlFor="jamBuka">Jam Buka</label>
      <input id="jamBuka" name="jamBuka" value={form.jamBuka} onChange={ubah} placeholder="Contoh: 08.00 - 17.00"/>

      <button type="submit">Simpan</button>
    </form>
  )
}