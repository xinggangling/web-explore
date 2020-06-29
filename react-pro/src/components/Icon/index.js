import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

class Icon extends React.Component {
    static propTypes = {
        value: PropTypes.string,
        size: PropTypes.string,
    };

    static defaultProps = {
        value: 'success',
        size: 'small',
    };

    render() {
        const { value, size, className, loadingIconStyle = {}, ...others } = this.props;
        const cls = classname({
            [`weui_icon_${value}`]: true,
            weui_icon_msg: size === 'large',
            [className]: className,
        });

        if (value === 'loading') {
            return (
                <div className="weui_loading" style={loadingIconStyle}>
                    {[...Array(12)].map((x, i) => {
                        return (
                            <div key={i} className={`weui_loading_leaf weui_loading_leaf_${i}`} />
                        );
                    })}
                </div>
            );
        }

        return <i {...others} className={cls} />;
    }
}

export default Icon;
