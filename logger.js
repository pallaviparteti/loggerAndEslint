const winston = require("winston");

  const logger = winston.createLogger({
  level: "error",
  format: winston.format.json(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: "info.log", level: "info" }),
    new winston.transports.File({ filename: "combined.log" }),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "warn.log", level: "warn" }),
  ],
});

function add() {
    let firstNumber = 10;
    let secondNumber = 20;
    console.log(firstNumber+secondNumber );
  }
  function eslintrules() {
    const age = 21;
    if (age < 18) {
    logger.log('error',"not eligible for vote");
    } else {
    logger.log('info',"eligible for vote");
    }
  }
  add();
  eslintrules();
  
  // Example usage of the logger
  logger.log('info', 'This is an informational message.');
  logger.log('error', 'An error occurred.');
  logger.log('warn','this is the warning.')
  
  // You can also use log levels directly
  logger.error('An error occurred.');
  logger.info('This is an informational message.');
  logger.warn('this is warning.');
  
