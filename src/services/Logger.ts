/* eslint-disable no-console */
const Logger = {
  log: (content: Object) => {
    console.log(content);
  },
  warn: (content: Object) => {
    console.warn(content);
  },
  error: (content: Object) => {
    console.error(content);
  },
};

export default Logger;
