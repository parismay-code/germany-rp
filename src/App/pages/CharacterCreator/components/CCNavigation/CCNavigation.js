/* global alt */
import * as React from 'react';

import './CCNavigation.scss';

const CCNavigation = ({ currentPage, setCurrentPage, gender, icon }) => {
    return <div className='character-creator-navigation'>
        <div
            className='character-creator-navigation__button'
            onClick={() => {
                if (currentPage === 0) {
                    setCurrentPage(2);
                    if ('alt' in window) {
                        alt.emit('client::characterCreator:navigation', 2);
                    }
                }
                else {
                    setCurrentPage(currentPage => currentPage - 1);
                    if ('alt' in window) {
                        alt.emit('client::characterCreator:navigation', currentPage - 1);
                    }
                }
            }}
        >
            Zurück
        </div>
        <div className='character-creator-navigation__icon'>
            <img src={icon} alt='#'/>
        </div>
        <div
            className='character-creator-navigation__button'
            onClick={() => {
                if (currentPage === 2) {
                    setCurrentPage(0);
                    if ('alt' in window) {
                        alt.emit('client::characterCreator:navigation', 0);
                    }
                }
                else {
                    setCurrentPage(currentPage => currentPage + 1);
                    if ('alt' in window) {
                        alt.emit('client::characterCreator:navigation', currentPage + 1);
                    }
                }
            }}
        >
            Nächste
        </div>
    </div>
}

export default React.memo(CCNavigation);