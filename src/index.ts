require('dotenv').config();

export const env = (key: string, fallback?: any): any => {
  const env = process.env[key];
  const value = env
    ? env
    : fallback || '';

  if (typeof value === 'string') {
    // Cast numerical value
    if (/^(\d+(\.\d+)?)$/.test(value)) {
      return value.indexOf('.') !== -1
        ? parseFloat(value)
        : parseInt(value, 10);
    }

    // Cast boolean value
    if (/^(true|false)$/.test(value)) {
      return JSON.parse(value);
    }
  }

  return value;
};
