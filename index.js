import Log from './pino-wrapped-logger.js';

const logger = new Log({ isDev: true });
logger.info('hi there', { value1: 'value1', value2: 'value2' });
logger.debug('debugging', { dbg1: 'debugged' });
logger.error('something horrible has happened', new Error('this is the thing'));
