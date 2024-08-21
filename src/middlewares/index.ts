import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { CORS_ORIGIN_WHITELIST } from '@constants';

import { errorHandler } from './errorHandler';
import notFound from './notFound';

export default {
  CORS: cors({
    origin: CORS_ORIGIN_WHITELIST,
  }),
  MORGAN: morgan('dev'),
  HELMET: helmet(),
  NOT_FOUND: notFound,
  ERROR_HANDLER: errorHandler,
};
