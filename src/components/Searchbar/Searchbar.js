import React from 'react';
import MagnifyingGlass from '../../assets/SVG/loupe.svg';

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className='searchbar-box'>
        <input className='searchbar-box__input' type='text' placeholder='Buscar notas'/>
        <MagnifyingGlass className='searchbar-box__icon'/>
      </div>
    </div>
    )
};

export default Searchbar;
