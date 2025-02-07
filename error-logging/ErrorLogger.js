"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorLogger = void 0;

var _computeStackTrace = require("./computeStackTrace");

var _envGetters = require("../embed-script-context/envGetters");

//@ts-expect-error untyped-file
const URL = 'https://exceptions.hubspot.com/api/1/store/?sentry_key=7ab6425e7a7c4b01b71fdb51e76514bf&sentry_version=7';
const XHR_DONE_STATE = 4;

function getTimestampWithMS() {
  return Date.now() / 1000;
}

function uuid4() {
  const crypto = window.crypto || window.msCrypto;

  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const arr = new Uint16Array(8);
    crypto.getRandomValues(arr);
    arr[3] = arr[3] & 0xfff | 0x4000;
    arr[4] = arr[4] & 0x3fff | 0x8000;

    const pad = function pad(num) {
      let v = num.toString(16);
      while (v.length < 4) {
        v = `0${v}`;
      }
      return v;
    };

    return pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]);
  } else {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  }
}

function logSentryError(data) {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== XHR_DONE_STATE) {
      return;
    }
    if (request.status >= 300) {
      console.warn('Failed logging HSConversations error');
    }
  });
  request.open('POST', URL);
  request.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
  request.send(JSON.stringify(data));
}

class ErrorLogger {
  constructor() {
    this.config = {
      environment: (0, _envGetters.getMessagesEnv)(),
      tags: {
        portalId: (0, _envGetters.getPortalId)(),
        env: (0, _envGetters.getMessagesEnv)(),
        project: 'conversations-embed'
      },
      logger: 'javascript',
      platform: 'javascript',
      request: {
        headers: {
          'User-Agent': navigator.userAgent
        },
        url: window.location.href
      }
    };
    this.logError = this.logError.bind(this);
  }

  logError(message) {
    const timestamp = getTimestampWithMS();
    logSentryError(Object.assign({}, this.config, {
      event_id: uuid4(),
      transaction: 'conversations embed error',
      level: 'error',
      exception: {
        values: [{
          mechanism: {
            handled: true,
            type: 'generic'
          },
          type: message,
          value: message
        }]
      },
      timestamp
    }));
  }

  captureErrors(closure) {
    try {
      closure();
    } catch (error) {
      const timestamp = getTimestampWithMS();
      if (error instanceof Error && error.message !== 'Aborting: redirection in progress') {
        const stacktrace = (0, _computeStackTrace.computeStackTrace)(error);
        logSentryError(Object.assign({}, this.config, {
          event_id: uuid4(),
          transaction: stacktrace.stack[0].filename,
          level: 'error',
          exception: {
            values: [{
              mechanism: {
                handled: true,
                type: 'generic'
              },
              type: stacktrace.name,
              value: stacktrace.message,
              stacktrace: {
                frames: stacktrace.stack.reverse()
              }
            }]
          },
          timestamp
        }));
      }
      throw error;
    }
  }
}

exports.ErrorLogger = ErrorLogger;