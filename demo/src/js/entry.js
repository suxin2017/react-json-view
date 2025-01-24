import ReactDom from 'react-dom';
import Index from './index';

require('./../style/css/global.css');

const app = document.getElementById('mac-react-container');

//app entrypoint
ReactDom.render(
    <div class="app-entry">
        <Index />
    </div>,
    app
);
