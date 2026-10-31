import { Link, useNavigate, useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'
import PesanStatus from '../components/PesanStatus.jsx'
import BarisDetail from '../components/BarisDetail.jsx'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items, loading, hapus } = useKoleksi()
  const item = items.find((i) => String(i.id) === id)

  if (!item) {
    return (
      <section>
        <h1>Item tidak ditemukan</h1>
        <Link to="/koleksi">Kembali ke koleksi</Link>
      </section>
    )
  }

  const konfirmasiHapus = () => {
    if (window.confirm(`Hapus "${item.judul}"?`)) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <section>
      <PesanStatus loading={loading} error={null} />
      <h1>{item.judul}</h1>
      <dl>
        <BarisDetail label="Kategori" nilai={item.kategori} />
        <BarisDetail label="Kabupaten/Kota" nilai={item.kabupaten} />
        <BarisDetail label="Harga Tiket" nilai={`Rp ${Number(item.hargaTiket).toLocaleString('id-ID')}`} />
        <BarisDetail label="Jam Buka" nilai={item.jamBuka} />
      </dl>
      <div className="aksi">
        <button type="button" onClick={konfirmasiHapus}>
          Hapus
        </button>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </section>
  )
}