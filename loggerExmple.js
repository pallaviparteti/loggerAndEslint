// import logger from "./logger";
import { logger } from "./logger.js";
var name = "pallavi";
// console.log("it will give error");
function add() {
  let firstNumber = 10;
  let secondNumber = 20;
  isNaN?console.log("is not number"):
  console.log(firstNumber+secondNumber );
}
function eslintrules() {
  const age = 21;
  if (age < 18) {
  logger.error("not eligible for vote");
  } else {
  logger.info('info',"eligible for vote");
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
