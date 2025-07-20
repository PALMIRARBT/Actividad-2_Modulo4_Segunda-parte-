import buhos from './data/buhos.json';

export default function BuhosList() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1rem',
        margin: '2rem 0',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {buhos.map((buho) => (
        <div
          key={buho.id}
          style={{
            border: '2px solid #4f46e5',
            borderRadius: '12px',
            padding: '1rem',
            background: '#f0f4ff',
            boxShadow: '0 2px 8px #0001',
            textAlign: 'center',
            minWidth: 0,
            width: '100%',
            maxWidth: 350,
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          <img
            src={buho.img}
            alt={buho.nombre}
            style={{
              width: '100%',
              maxWidth: 180,
              height: 'auto',
              aspectRatio: '1/1',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <h3 style={{ color: '#4f46e5', margin: '0.5rem 0' }}>{buho.nombre}</h3>
          <p style={{ fontSize: '0.95rem', color: '#333' }}>{buho.descripcion}</p>
        </div>
      ))}
    </div>
  );
}
