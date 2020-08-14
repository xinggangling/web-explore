import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class H extends React.Component {
    render() {
        return (
            <div>
                {Array(15000)
                    .fill(1)
                    .map((item, index) => {
                        return <div>H{index + 1}</div>;
                    })}
            </div>
        );
    }
}

class G extends React.Component {
    render() {
        return (
            <div>
                <H />
            </div>
        );
    }
}

class F extends React.Component {
    render() {
        return (
            <div>
                <G />
            </div>
        );
    }
}

class E extends React.Component {
    render() {
        return (
            <div>
                <F />
            </div>
        );
    }
}

class D extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            d: 1,
        };
    }

    render() {
        return this.props.a;
    }
}

class C extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            c: 1,
        };
    }

    _handleClickC = () => {
        debugger;
        this.setState({
            c: 2,
        });
    };

    render() {
        return (
            <div
                style={{ backgroundColor: this.state.c === 1 ? 'lightblue' : 'lightgreen' }}
                onClick={this._handleClickC}
            >
                <div>C1</div>
                <div>C2</div>
            </div>
        );
    }
}

class B extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            b: 1,
        };
    }

    componentDidMount() {}

    render() {
        return <C />;
    }
}

class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
        };
    }

    render() {
        return <B />;
    }
}

ReactDOM.render(<A />, document.getElementById('react-root'));
