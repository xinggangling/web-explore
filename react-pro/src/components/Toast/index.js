import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Mask from '../Mask';
import Icon from '../Icon';

import './index.less';

class Toast extends React.Component {
    static propTypes = {
        icon: PropTypes.string,
        iconSize: PropTypes.string,
        show: PropTypes.bool,
    };

    static defaultProps = {
        icon: 'toast',
        show: false,
    };

    render() {
        const { icon, type = '', show, children, iconSize, loadingIconStyle = {} } = this.props;

        return (
            <div
                className={icon === 'loading' ? 'weui_loading_toast' : ''}
                style={{ display: show ? 'block' : 'none' }}
            >
                <Mask transparent={true} />
                <div className="weui_toast">
                    <Icon
                        value={icon}
                        className={type}
                        size={iconSize}
                        loadingIconStyle={loadingIconStyle}
                    />
                    <p className="weui_toast_content">{children}</p>
                </div>
            </div>
        );
    }
}

const showToast = toastProps => {
    let toastContainer = document.getElementById('toast-container');

    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }

    toastProps.show = true;
    toastProps.icon = 'loading';

    ReactDOM.render(<Toast {...toastProps} />, toastContainer);
};

const hideToast = () => {
    const toastContainer = document.getElementById('toast-container');

    if (toastContainer) {
        ReactDOM.unmountComponentAtNode(toastContainer);
    }
};

export { Toast, showToast, hideToast };
