{/* Componente que devuelve una tarjeta con el texto pasado por parámetro (children) */}

import React from 'react';
import Styles from './index.module.css'

const Tarjeta = ({ children }) => {
    return (
        <div className = {Styles.Tarjeta}>
            {children}
        </div>
    )
}

export default Tarjeta