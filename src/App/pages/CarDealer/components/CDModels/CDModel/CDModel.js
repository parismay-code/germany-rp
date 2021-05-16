import * as React from 'react';
import {observer} from 'mobx-react-lite';

import cn from 'classnames';

const CDModel = ({model, setModel, el}) => {
	return <div
		className={cn('car-dealer-models-content__option', model === el.Id && 'car-dealer-models-content__option_active')}
		onClick={() => setModel(el.Id)}
	>
		{el.name}
	</div>;
};

export default observer(CDModel);