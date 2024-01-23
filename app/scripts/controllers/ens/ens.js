const EthJsEns = require('ethjs-ens')
const ensNetworkMap = require('ethjs-ens/lib/network-map.json')

class Ens {
  static getNetworkEnsSupport (network) {
    return Boolean(ensNetworkMap[network])
  }

  constructor ({ network, provider } = {}) {
    this._ethJsEns = new EthJsEns({
      network,
      provider,
    })
  }

  lookup (ensName) {
    return this._ethJsEns.lookup(ensName)
  }

  reverse (address) {
    return this._ethJsEns.reverse(address)
  }

  async getTextRecord(ensName, recordName) {
    const resolver = await this._ethProvider.getResolver(ensName);
    if (!resolver) { return null; }
    return resolver.getText(recordName)
  }
}

module.exports = Ens
