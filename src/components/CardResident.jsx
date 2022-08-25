import React from 'react'

import useFecth from '../hooks/useFecth'

const CardResident = ({ url }) => {

  const resident = useFecth(url);

  console.log(resident)

  return (
    <article>
      <div className='text1'>
        
        <img className='img' src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='circle'></div>
        <span>{resident?.status}</span>

      </div>
      <div>
        <h3> {resident?.name}</h3>
        <ul>
          <li>
            <span>Species: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
            </li>
          <li>
            <span>Eppisodes where apper: </span>
            {resident?.episode.length}
            </li>
        </ul>
      </div>
    </article>
  )
}

export default CardResident