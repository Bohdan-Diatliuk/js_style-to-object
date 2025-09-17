'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((str) => str.trim())
      .filter((str) => str.length !== 0 && str.includes(':'))
      .map((item) => {
        const [key, value] = item.split(':');

        return [key.trim(), value.trim()];
      }),
  );
}

module.exports = convertToObject;
