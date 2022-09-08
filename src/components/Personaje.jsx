import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../functions/functions';

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);
  console.log(personaje);

  const params = useParams();
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, [params.id]);

  return (
    <>
      {personaje !== null ? (
        <>
          <h2>Personaje con id {params.id}</h2>
          <p>Con el nombre {personaje.name}</p>
          <img src={personaje.image} alt='img' />
        </>
      ) : (
        'No Hay Personaje'
      )}
    </>
  );
};

export default Personaje;
