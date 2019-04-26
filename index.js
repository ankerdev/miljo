"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
exports.env = function (key, fallback) {
    var env = process.env[key];
    var value = env
        ? env
        : fallback || '';
    if (typeof value === 'string') {
        if (/^(\d+(\.\d+)?)$/.test(value)) {
            return value.indexOf('.') !== -1
                ? parseFloat(value)
                : parseInt(value, 10);
        }
        if (/^(true|false)$/.test(value)) {
            return JSON.parse(value);
        }
    }
    return value;
};
