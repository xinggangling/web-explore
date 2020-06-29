import React from 'react';

import { Step, Modal, showToast, hideToast } from '../../components/index';

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

    test = () => {
        // Modal.confirm({
        //     title: '测试',
        //     children: <div>测试body</div>,
        //     onOk: () => {
        //         alert('ok');
        //     },
        //     onClose: () => {
        //         alert('close');
        //     },
        // });

        showToast({
            children: '加载中...'
        });
    }

    render() {
        const { steps, current } = this.state;

        return (
            <div className="home">
                <div className="step-demo">
                    <Step steps={steps} current={current} />
                </div>
                <button onClick={this.test}>test</button>

                {/* <Toast icon="loading" show={true}>
                    正在加载..
                </Toast> */}
            </div>
        );
    }
}
