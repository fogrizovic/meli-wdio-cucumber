/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp, printf,
} = format;

const myFormat = printf(({
  message, timestamp,
}) => `${timestamp}: ${message}`);

module.exports = createLogger({
  level: 'debug',
  format: combine(
    format.colorize(),
    timestamp({ format: 'MM-DD HH:mm:ss.SSS' }),
    myFormat,
  ),
  transports: [new transports.Console()],
});
