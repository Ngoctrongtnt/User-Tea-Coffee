import React from 'react'
import "./pagination.scss"

const Pagination = (props) => {
    const { currentPage, limit, tasks, handleSetCurrentPage, paginate } = props
    const endPage = Math.ceil((tasks.length) / limit)
    const pageNumbers = [];
    for (let i = 1; i <= endPage; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='panigation-wrapper'>
            <button disabled={currentPage <= 1} onClick={() => handleSetCurrentPage(currentPage - 1)}>{'<'}</button>
            {pageNumbers.map(item => (
                <button className={(item === currentPage) ? "btn--active" : ''} key={item} onClick={() => paginate(item)}>{item}</button>
            ))}
            <button disabled={currentPage >= endPage} onClick={() => handleSetCurrentPage(currentPage + 1)}>{'>'}</button>
        </div >
    )
}

export default Pagination