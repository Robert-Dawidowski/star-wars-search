import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import ProfileCard from './ProfileCard';
import Pagination from './Pagination';

const ProfileContainer = ({ characters }) => {

    const [ currentPage, setCurrentPage ] = useState(1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let currentIndex = currentPage - 1;
    let currentChars = characters[currentIndex];

    let content = characters.length > 0 ? currentChars.map((character, index) =>
            <ProfileCard key={`profile-${index}`} profile={character} />)
        : null;

    return (
        <div className="row">
            { content }
            <div className="col-12 mt-3 text-center">
                { characters.length > 1 ?
                    <Pagination characters={characters} paginate={paginate}/>
                    : null }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    characters: state.data.characters,
})

export default connect(mapStateToProps)(ProfileContainer)
