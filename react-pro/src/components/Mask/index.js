import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as noScroll from './noscroll';
import './index.less';

class Mask extends React.Component {
    static propTypes = {
        scrollDisabled: PropTypes.bool,
        transparent: PropTypes.bool,
    };

    static defaultProps = {
        scrollDisabled: false,
        transparent: false,
    };

    componentWillUnmount() {
        const { scrollDisabled } = this.props;

        scrollDisabled && noScroll.off();
    }

    componentDidMount() {
        const { scrollDisabled } = this.props;

        scrollDisabled && noScroll.on();
    }

    componentWillReceiveProps(nextProps) {
        const { scrollDisabled: _scrollDisabled } = this.props;
        const { scrollDisabled } = nextProps;

        if (_scrollDisabled && !scrollDisabled) noScroll.off();
        if (!_scrollDisabled && scrollDisabled) noScroll.on();
    }

    render() {
        const { children, className, transparent, scrollDisabled, ...others } = this.props;
        const cls = classNames(
            {
                weui_mask: !transparent,
                weui_mask_transparent: transparent,
                'f-flex': true,
            },
            className
        );

        return (
            <div className={cls} {...others}>
                {children && <div className="f-flex-1">{children}</div>}
            </div>
        );
    }
}

export default Mask;
