import React from 'react';

const Pagination = ({ characters, paginate }) => {
    const pageNumbers = [];

    for( let i = 1; i <= characters.length; i += 1) {
        pageNumbers.push(i);
    }

    return (
        <nav className="navigation">
            <ul className="pagination justify-content-center">
                { pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
