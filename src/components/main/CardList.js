import React, { useState } from 'react';
import Cards from './Cards';
import data from './data';
import "./cardList.css"

function CardList() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calcula los índices de inicio y fin para las tarjetas que se mostrarán en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Renderiza las tarjetas de la página actual
    const cards = currentItems.map((item) => {
        return (
            <Cards key={item.id} items={item} />
        );
    });

    // Calcula el número total de páginas
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Maneja el cambio de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className='divCards'>
                {cards}
            </div>
            <div className='pagination'>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1} 
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CardList;
