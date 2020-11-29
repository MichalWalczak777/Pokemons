import ReactPaginate from 'react-paginate';

const Pagination = ({pokemonsTotal, pokemonsPerPage, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(pokemonsTotal/pokemonsPerPage); i++){
        pageNumbers.push(i);
    }
    
    return (
    <ReactPaginate
    previousLabel={"previous"}
    nextLabel={"next"}
    breakLabel={"..."}
    breakClassName={"break"}
    pageCount={pageNumbers.length}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    onPageChange={paginate}
    containerClassName={"pagination-container"}
    subContainerClassName={"pagination-page"}
    activeClassName={"pagination-current-page"}
    />
    )

}

export default Pagination;