import * as express from 'express';

import logger from '../logs';

import loginApi from './login';

function handleError(err, _, res, __) {
    logger.error(err.stack);

    res.json({ error: err.message || err.toString() });
}

export default function api(server: express.Express) {
    server.use('/api/v1/login', loginApi, handleError);
}
