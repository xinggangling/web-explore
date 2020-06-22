import React from 'react';

import Loading from '../Loading';

export default class AsyncLoader extends React.Component {
    render() {
        return <React.Suspense fallback={<Loading />}>
            {this.props.children}
        </React.Suspense>;
    }
}
