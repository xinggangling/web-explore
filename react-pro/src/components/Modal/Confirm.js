import React from 'react';
import ReactDOM from 'react-dom';
import classname from 'classname';
import PropTypes from 'prop-types';
import Mask from '../Mask';

class Confirm extends React.Component {
    static propTypes = {
        buttons: PropTypes.array,
        show: PropTypes.bool,
        scrollDisabled: PropTypes.bool,
        title: PropTypes.any,
        highMask: PropTypes.bool,
    };

    static defaultProps = {
        buttons: [],
        show: false,
        scrollDisabled: true, // body滚动
        title: '',
        highMask: false,
        onClose: () => {},
        onOk: () => {},
    };

    _handleClose = () => {
        const modalContainer = document.getElementById('modal-container');

        ReactDOM.unmountComponentAtNode(modalContainer);

        this.props.onClose();
    };

    _handleOk = () => {
        const modalContainer = document.getElementById('modal-container');

        ReactDOM.unmountComponentAtNode(modalContainer);

        this.props.onOk();
    };

    renderButtons() {


        const buttons = [
            {
                type: 'default',
                label: '取消',
                onClick: this._handleClose,
            },
            {
                type: 'primary',
                label: '确定',
                onClick: this._handleOk,
            },
        ];
        return buttons.map((action, idx) => {
            const { className: cls, type, label, ...others } = action;
            const className = classname({
                weui_btn_dialog: true,
                default: type === 'default',
                primary: type === 'primary',
                [cls]: cls,
            });

            return (
                <div key={idx} {...others} className={className}>
                    {label}
                </div>
            );
        });
    }

    render() {
        const {
            containerClassName,
            maskClassName,
            dialogClassName,
            dialogBodyClassName,
            title,
            show,
            scrollDisabled,
            children,
        } = this.props;

        const containerCls = classname({
            weui_dialog_confirm: true,
            [containerClassName]: !!containerClassName,
        });

        const maskCls = classname({
            [maskClassName]: !!maskClassName,
        });

        const dialogCls = classname({
            weui_dialog: true,
            [dialogClassName]: !!dialogClassName,
        });

        const dialogBodyCls = classname({
            weui_dialog_bd: true,
            'f-flex': true,
            'f-hc': true,
            [dialogBodyClassName]: !!dialogBodyClassName,
        });

        return (
            <div className={containerCls}>
                <Mask
                    style={{ zIndex: 5000 }}
                    className={maskCls}
                    scrollDisabled={scrollDisabled && show}
                />
                <div className={dialogCls}>
                    <div className="weui_dialog_hd">
                        <div className="weui_dialog_title">{title}</div>
                    </div>
                    <div className={dialogBodyCls}>{children}</div>
                    <div className="weui_dialog_ft">{this.renderButtons()}</div>
                </div>
            </div>
        );
    }
}

export default Confirm;
