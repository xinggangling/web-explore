import React from 'react';

import { Step } from '../../components/index';

import './index.less';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            steps: [
                {
                    status: 'finished',
                    title: 'step1',
                },
                {
                    status: 'active',
                    title: 'step2',
                },
                {
                    status: 'unfinished',
                    title: 'step3',
                },
                {
                    status: 'unfinished',
                    title: 'step4',
                },
            ],
            current: 1,
        };
    }

    render() {
        const { steps, current } = this.state;

        return (
            <div className="home">
                <div className="step-demo">
                    <Step steps={steps} current={current} />
                </div>
            </div>
        );
    }
}
