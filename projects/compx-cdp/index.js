const { sumTokens } = require("../helper/chain/algorand");


module.exports = {
  algorand: {
    tvl: getCDPVaultTokens,
    staking,
  },
};

const stakingPools = [
  // NIKO
  'XZOKYETGUQKIJJG4LSBAFYLDQRKCT6PQUO5CZJQ37VUD2VYMWRHH2LK7MI',
  // TinymanPool2.0 xMcRib-ALGO
  'RNL5YCWQDLYX4WXMM43ARQVFVNO4PSGWCLNKORUUVFCXQLR2LIURETDCDI',
  // JoeCoin
  'Y3CNVFHCAMWZP57R7S7URX366XRE6VKCHWDN57VMR7WL556OFTDXGAQZ3E',
  // xUSD
  'EW6JAJOFRIXWURIIPCOCEXJ6SQ5QW2BQ7REE5CYEL4PSNYHUSIH2G55ZRI',
  // cAlgo
  'ZKXS4SAXMCBVOHMWNGZZO7AXMRETLTLYLQRBO2KLSN2SPOGZCU4O3JABSA',
  // Compx
  'DRZ2TY3YHPRCMD6MVWCHKFIDF4PCCQ3DOUW42MGMVOPTJVGRKORJBQTZS4',
  // DOD
  "2IJMFNVFSGCMD7GCPME65MXTHPB3VPHWUVEJHVW7RWCJRR7TFIWPHL7QUQ",
  // FELI
  "XTME5AZADQ3DYJWTENDG3G6WTXK2LUWQPYTZLVLADLFNFNKLUWERDNID7I",
  // USDC/xUSD [SI] PACT LP TKN
  "M3V5ZGXQODFTA25XQ7N2JUIN5HGQS3X7TRS3NAZVXJUNOAUGNVUWP6XWAU",
   // Compx Algo Staking
  "ZKXS4SAXMCBVOHMWNGZZO7AXMRETLTLYLQRBO2KLSN2SPOGZCU4O3JABSA",
  // Compx Calgo Staking
  "Y3CNVFHCAMWZP57R7S7URX366XRE6VKCHWDN57VMR7WL556OFTDXGAQZ3E"
];


const vaults = [
  // Minting wallet
  "XN4OX5OFLZFLDBI4J36EGOIMKGR4NISEVFCQRXDTC4WT35GPBM5EJI7IOA",

  // gAlgo Vault
  "ABU4ZY2UAPJWIZPE5FZP6GWVXTIP77YNAF3KBWBNW6KNBZALKRKPZL6HLM",

  // Link Vault
  "YVQRJKC7TUD3XB3XCAA7SMY5OG7AHOTU465DI7HIOL4NQZMG52NXLBOMYA",

  // AVAX Vault
  "RQ4MNDFSG4CCCWEJMRNGE5ZRNV3F2PHZSDJZ5X266MXA65HMLRFFXNAW5Y",

  // Sol Vault
  "ODJPJKPAHL7NPRJC5XF42SWFHB37ECCQEGFJIA4TFWOXGKJQA6M7S5NL2M",

  // goBTC Vault
  "UVSJVQXX3KYYWTQVXPRTIA5QXYAM6Y26JI2P2NZP25RSJTVMP3X7ODNC5Q",

  // goETH Vault
  "DMVBFMMH3RIKCS3V77DCETWJDA2HW4LPEBURBUD7RQNVK5SKH5QZG6ZF4Q",

  // Silver Vault
  "H4437RZ3W2Q7JXIRPDIEFO65QNNTH4SICMNWT4SSEHNQ4UPIMAO63DNZGI",

  // Gold Vault
  "MJET3QJDM5MXC5ZREAPW5PUK4HN73VRYMAFGMPWG7VEIRQIHFQPSMA6CUQ",

  // mAlgo Vault
  "XXLNQOR5XNJU57W2TQ3WEJTL2RGQ2ABCSAU2CX4NSZZGPHB5WSOTT6BZXA",

  // Chips Vault
  "RJQNFSLZWSZ3W6N5TJCS2F6KNEWTXUQDFI7GXDXXCOC5UDIPYYN3W665YE",

  // Coop Vault
  "QTFSX7MJLUBP4TLCRNGMEQCOCG6Z2O5A7RAUREW5S5RYIGMGYDLDYYSMAQ",

  // Algo Vault
  "HVDIX7FCCJGH3XFJNTEAQZ22CQTD2LUD7NKN7JCY37SGFA2763A4NHUHRQ",

  // Deprecated Algo Vault
  "I4O4APZDX7R7GL26JA2G6ENO5KZHIN4ZLRJR4DANXJC6GU7A2SI6VNY6LA"
];

async function getCDPVaultTokens() {
  // Don't count xUSD
  return sumTokens({ owners: vaults, blacklistedTokens: ['760037151'] });
}

async function staking() {
  return sumTokens({
    owners: stakingPools,
    tinymanLps: [['2525037707', '2518721081']],
  });
}
