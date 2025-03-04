import winston from 'winston';
import settings from '../../settings/index.js';
import morgan from 'morgan';

const { combine, timestamp, json, printf, errors, colorize } = winston.format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
	return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

export const logger = winston.createLogger({
	level: settings.LOG_LEVEL || 'info',
	format: combine(
		errors({ stack: true }),
		timestamp(),
		json(),
	),
	transports: [
		// Console transport for immediate logging
		new winston.transports.Console({
			format: combine(timestamp(), logFormat, colorize({all: true})),
		}),
	],
});

process.on('uncaughtException', (err) => {
	logger.error(`Uncaught Exception: ${err.message}`, { stack: err.stack });
	process.exit(1);
});

process.on('unhandledRejection', (reason) => {
	logger.error(`Unhandled Rejection: ${reason}`);
});

export const httpLogger = morgan( ':method :url :status :response-time ms - :res[content-length]',
	{
		stream: {
			write: (message) => logger.info(message.trim()), // Send logs to Winston
		},
	}
);

// {
//   error: 0,
//   warn: 1,
//   info: 2, - - - 
//   http: 3,
//   verbose: 4,
//   debug: 5,
//   silly: 6
// }

