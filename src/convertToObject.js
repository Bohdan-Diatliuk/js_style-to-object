'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (typeof sourceString !== 'string') {
    return {};
  }

  return Object.fromEntries(
    sourceString
      .split(';')
      .map((str) => str.trim())
      .filter((str) => str.length !== 0 && str.includes(':'))
      .map((item) => {
        const idx = item.indexOf(':');
        const key = item.slice(0, idx).trim();
        const value = item.slice(idx + 1).trim();

        return key.length > 0 ? [key, value] : null;
      }),
  );
}

module.exports = convertToObject;
