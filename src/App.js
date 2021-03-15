/* global alt */
import * as React from 'react';

import Manager from "./App/pages";

const App = () => {
    React.useEffect(() => {
        if ('alt' in window) {
            alt.emit('client::browser:ready');
        }
    }, [])

    return (
        <div className="app">
          <Manager />
        </div>
    );
}

export default React.memo(App);
