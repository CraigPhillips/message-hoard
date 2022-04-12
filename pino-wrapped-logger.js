import beThere from 'be-there';
import Pino from 'pino';

export default class PinoWrappedLogger {
  constructor({ isDev = false, wrappedLog } = {}) {
    const newLogOptions = isDev?
      {
        level: 'debug',
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true
          },
        }
      } : {};
    const log = wrappedLog || Pino(newLogOptions);

    Object.assign(this, { log });
    beThere(this);
  }

  debug(msg, meta) { this.log.debug(meta? meta : msg, meta? msg : undefined); }
  error(msg, err) { this.log.error(err? err : msg, err? msg : undefined); }
  info(msg, meta) { this.log.info(meta? meta : msg, meta? msg : undefined); }
};
