import React, {useState, useEffect} from "react";

const Pagination = ({pokemonsTotal, pokemonsPerPage, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pokemonsTotal/pokemonsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
        <nav className = "pagination-nav">
            <ul className="pagination-list">
                {pageNumbers.map(number => 
                    <li key={number} className="pagination-item">
                        <a onClick ={paginate(number)} href="#" className="pagination-link">
                            {number}
                        </a>
                    </li>)}
            </ul>
        </nav>
    )
}

export default Pagination;