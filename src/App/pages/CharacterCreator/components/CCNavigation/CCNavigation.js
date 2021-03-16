import * as React from 'react';

import './CCNavigation.scss';

const CCNavigation = ({ currentPage, setCurrentPage, gender, icon }) => {
    return <div className='character-creator-navigation'>
        <div
            className='character-creator-navigation__button'
            onClick={() => {
                if (currentPage === 0) setCurrentPage(2);
                else setCurrentPage(currentPage => currentPage - 1);
            }}
        >
            Back
        </div>
        <div className='character-creator-navigation__icon'>
            <img src={icon} alt='#'/>
        </div>
        <div
            className='character-creator-navigation__button'
            onClick={() => {
                if (currentPage === 2) setCurrentPage(0);
                else setCurrentPage(currentPage => currentPage + 1);
            }}
        >
            Next
        </div>
    </div>
}

export default React.memo(CCNavigation);