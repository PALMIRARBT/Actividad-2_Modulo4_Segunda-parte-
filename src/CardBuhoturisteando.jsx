import React, { useState } from 'react';

const amigos = [
  { nombre: 'Museo El Prado', src: '/buhoturisteando/buhoarmadillo.png' },
  { nombre: 'Parque El Retiro', src: '/buhoturisteando/buhocapibara.png' },
  { nombre: 'La Gran Via', src: '/buhoturisteando/buhococodrilo.png' },
  { nombre: 'Taller Parapente', src: '/buhoturisteando/buhocondor.png' },
  { nombre: 'Barrio Lavapies', src: '/buhoturisteando/buhoserpiente.png' },
];

function CardBuhoturisteando() {
  const [mostrarAmigos, setMostrarAmigos] = useState(false);

  const handleClick = () => {
    setMostrarAmigos(true);
  };

  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <div className="buhocard" onClick={handleClick}>
        <img
          src={'/buhoturisteando/buhosolo.png'}
          alt="Buho solo"
        />
        <p>Haz click en el búho para ver a sus amigos</p>
      </div>
      {mostrarAmigos && (
        <div className="amigos-galeria">
          {amigos.map((amigo) => (
            <div className="amigo-card" key={amigo.nombre}>
              <img src={amigo.src} alt={amigo.nombre} />
              <p>{amigo.nombre}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardBuhoturisteando;
