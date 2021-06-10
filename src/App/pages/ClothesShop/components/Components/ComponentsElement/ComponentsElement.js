import * as React from 'react';
import cn from 'classnames';

const ComponentsElement = ({ icon, select, currentComponent, setComponent }) => {
    return <div
        className={cn('clothes-shop-component__option', currentComponent === select && 'clothes-shop-component__option_active')}
        onClick={() => setComponent(select)}
    >
        <img src={icon} alt='#'/>
    </div>
}

export default React.memo(ComponentsElement);