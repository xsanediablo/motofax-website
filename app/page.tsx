export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
          Welcome to MotoFax
        </h1>
        <p style={{ fontSize: '20px', color: '#9ca3af' }}>
          Vehicle History Reports Made Simple
        </p>
      </div>
    </main>
  )
}