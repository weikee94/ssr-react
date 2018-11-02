import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export default (req, store) => {
    const content = renderToString(
        // context for error handling and redirect 
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
}
