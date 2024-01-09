import { createProjectLogger, createModuleLogger } from '@metamask/utils';

import { METAMASK_CTX } from '../context';

const colors: Record<string, string> = {
  [METAMASK_CTX.UI]: 'green',
  [METAMASK_CTX.INPAGE]: 'red',
  [METAMASK_CTX.CONTENTSCRIPT]: 'cornflowerblue',
  [METAMASK_CTX.BACKGROUND]: 'yellow',
  [METAMASK_CTX.PHISHING_WARNING_PAGE]: 'purple',
  [METAMASK_CTX.EXTERNAL]: 'grey',
};

const enabled = Boolean(process.env.METAMASK_DEBUG);

const projectLogger = createProjectLogger('message-stream');
const logPortMessage = createModuleLogger(projectLogger, 'port');
const logPostMessage = createModuleLogger(projectLogger, 'post');
logPortMessage.enabled = enabled;
logPostMessage.enabled = enabled;

export function logPortMessages(from: string, to: string) {
  return function (data: any, out: boolean) {
    logMessage(logPortMessage, from, to, data, out);
  };
}

export function logPostMessages(from: string, to: string) {
  return function (data: any, out: boolean) {
    logMessage(logPostMessage, from, to, data, out);
  };
}

function logMessage(
  logger: (...args: string[]) => void,
  from: string,
  to: string,
  data: any,
  out: boolean,
) {
  const id = data?.data?.id || 0;
  if (!id) {
    return;
  }
  logger(
    `%c(` +
      `%c${id}` +
      `%c): ` +
      `%c${from.split('metamask-')[1] || from}%c` +
      ` ${out ? '►►►' : '◄◄◄'} ` +
      `%c${to.split('metamask-')[1] || to}`,
    `color: grey;`,
    `color: goldenrod;`,
    `color: grey;`,
    `color: ${colors[from] || 'grey'};`,
    `color: grey;`,
    `color: ${colors[to] || 'grey'};`,
    data?.data || '',
  );
}
