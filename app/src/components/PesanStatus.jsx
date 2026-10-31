export default function PesanStatus({ loading, error, pesanMuat = 'Memuat data...' }) {
  if (loading) return <p>{pesanMuat}</p>
  if (error) return <p role="alert">Gagal memuat: {error}</p>
  return null
}