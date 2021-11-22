module.exports = {
    graphAPIEndpoints: {
        masterchef: 'https://thegraph.mistswap.fi/subgraphs/name/mistswap/master-chef',
        bar: 'https://thegraph.mistswap.fi/subgraphs/name/mistswap/bar',
        // timelock: 'https://thegraph.mistswap.fi/subgraphs/name/mistswap/sushi-timelock',
        // maker: 'https://thegraph.mistswap.fi/subgraphs/name/mistswap/sushi-maker',
        exchange: 'https://thegraph.mistswap.fi/subgraphs/name/mistswap/exchange',
        // exchange_v1: 'https://thegraph.mistswap.fi/subgraphs/name/jiro-ono/mistswap-v1-exchange',
        blocklytics: 'https://thegraph.mistswap.fi/subgraphs/name/blocklytics/ethereum-blocks',
        // lockup: 'https://thegraph.mistswap.fi/subgraphs/name/matthewlilley/lockup',
    },

    graphWSEndpoints: {
        bar: 'wss://thegraph.mistswap.fi/subgraphs/name/mistswap/bar',
        exchange: 'wss://thegraph.mistswap.fi/subgraphs/name/mistswap/exchange',
        blocklytics: 'wss://thegraph.mistswap.fi/subgraphs/name/blocklytics/ethereum-blocks'
    },

    barAddress: "0xc41c680c60309d4646379ed62020c534eb67b6f4",
    makerAddress: "0x7d1d91e59d1da60e3ecc5701a4bc669ab182dae8",
    chefAddress: "0x3a7b9d0ed49a90712da4e087b17ee4ac1375a5d4",
    sushiAddress: "0x5fa664f69c2a4a3ec94fac3cbf7049bd9ca73129",
    factoryAddress: "0x6008247f53395e7be698249770aa1d2bfe265ca0",

    TWENTY_FOUR_HOURS: 86400,
}
