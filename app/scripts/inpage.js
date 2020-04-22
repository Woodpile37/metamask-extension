const harden = require('@agoric/harden')
import ObjectMultiplex from 'obj-multiplex'
import pump from 'pump'

/*global Web3*/

// need to make sure we aren't affected by overlapping namespaces
// and that we dont affect the app with our namespace
// mostly a fix for web3's BigNumber if AMD's "define" is defined...
let __define

/**
 * Caches reference to global define object and deletes it to
 * avoid conflicts with other global define objects, such as
 * AMD's define function
 */
const cleanContextForImports = () => {
  __define = global.define
  try {
    global.define = undefined
  } catch (_) {
    console.warn('MetaMask - global.define could not be deleted.')
  }
}

/**
 * Restores global define object from cached reference
 */
const restoreContextAfterImports = () => {
  try {
    global.define = __define
  } catch (_) {
    console.warn('MetaMask - global.define could not be overwritten.')
  }
}

cleanContextForImports()

import log from 'loglevel'
import LocalMessageDuplexStream from 'post-message-stream'
const makeCapTpFromStream = require('captp-stream');

restoreContextAfterImports()

log.setDefaultLevel(process.env.METAMASK_DEBUG ? 'debug' : 'warn')

const metamaskStream = new LocalMessageDuplexStream({
  name: 'inpage',
  target: 'contentscript',
})

console.log('INJECTING PROVIDER!')
const cProvider = makeCapTpFromStream('client', metamaskStream, harden({}));
window.cProvider = cProvider

