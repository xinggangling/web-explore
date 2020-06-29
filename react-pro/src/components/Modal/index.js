import React from 'react';
import ReactDOM from 'react-dom';

import Confirm from './Confirm';

import '../../assets/styles/dialog.less';

const confirm = confirmProps => {
    let modalContainer = document.getElementById('modal-container');

    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'modal-container';
        document.body.appendChild(modalContainer);
    }

    ReactDOM.render(<Confirm {...confirmProps} />, modalContainer);
};

export default { confirm };
