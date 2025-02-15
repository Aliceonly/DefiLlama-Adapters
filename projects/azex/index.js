const { sumTokensExport } = require("../helper/unwrapLPs")

const ADDRESSES = require("../helper/coreAssets.json")
const { BERA_CONTRACTS, UNICHAIN_CONTRACTS } = require("./infos")

const config = {
  berachain: {
    tokenConfig: {
      tokens: Object.values(ADDRESSES.berachain),
      owners: Object.values(BERA_CONTRACTS.addresses),
    },
  },
  unichain: {
    tokenConfig: {
      tokens: Object.values(ADDRESSES.unichain),
      owners: Object.values(UNICHAIN_CONTRACTS.addresses),
    },
  },
}

Object.keys(config).forEach((chain) => {
  const { tokenConfig } = config[chain]

  module.exports[chain] = {
    tvl: sumTokensExport(tokenConfig),
  }
})
