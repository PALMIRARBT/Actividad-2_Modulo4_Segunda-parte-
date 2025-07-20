import React, { useState } from 'react';

const amigos = [
  { nombre: 'Museo El Prado', src: process.env.PUBLIC_URL + '/buhoturisteando/buhoarmadillo.png' },
  { nombre: 'Parque El Retiro', src: process.env.PUBLIC_URL + '/buhoturisteando/buhocapibara.png' },
  { nombre: 'La Gran Via', src: process.env.PUBLIC_URL + '/buhoturisteando/buhococodrilo.png' },
  { nombre: 'Taller Parapente', src: process.env.PUBLIC_URL + '/buhoturisteando/buhocondor.png' },
  { nombre: 'Barrio Lavapies', src: process.env.PUBLIC_URL + '/buhoturisteando/buhoserpiente.png' },
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
          src={process.env.PUBLIC_URL + '/buhoturisteando/buhosolo.png'}
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
