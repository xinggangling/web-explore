import React from 'react';
import classname from 'classname';

import unfinishedPng from '../../assets/images/unfinished.png';
import finishedPng from '../../assets/images/finished.png';
import activePng from '../../assets/images/active.png';

import './index.less';

export default class Step extends React.Component {

    _getIcon = (status) => {
        let icon = <img src={unfinishedPng} />;
        if (status === 'finished') {
            icon = <img src={finishedPng} />;
        } else if (status === 'active') {
            icon = <img src={activePng} />;
        }

        return icon;
    }

    render() {
        const { steps, current } = this.props;

        return (
            <div className="steps-wrap">
                <div className="steps">
                    {steps.map((step, index) => {
                        const { title, status } = step;
                        const stepItemCls = classname({
                            step: true,
                            [status]: true,
                        });

                        const lineCls = classname({
                            line: true,
                            'gray-line': index >= current,
                        });

                        const contentCls = classname({
                            content: true,
                            'gray-content': index > current,
                        });

                        return (
                            <div key={index} className={stepItemCls}>
                                <div className="icon">{this._getIcon(status)}</div>
                                <div className={lineCls}></div>
                                <div className={contentCls}>{title}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
