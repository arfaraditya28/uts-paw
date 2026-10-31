import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, kabupaten, hargaTiket, jamBuka } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>{kategori}</p>
      <p>{kabupaten}</p>
      <p>Rp {Number(hargaTiket).toLocaleString('id-ID')}</p>
      <p>{jamBuka}</p>
    </article>
  )
}