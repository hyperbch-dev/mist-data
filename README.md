# mist-data

This is a collection of utilities to query MistSwap data from smartBCH. This
data has been indexed by the Graph via the subgraph the MistSwap team maintains.

## Supported Queries

The below all return a Promise that resolves with the requested results.

1. `sushi.priceUSD({¹})` Gets USD price of Mist.
2. `sushi.priceETH({¹})` Gets ETH price of Mist.
3. `blocks.latestBlock()` Gets the latest block.
4. `blocks.getBlock({¹})` Gets data for the specified block.
5. `charts.factory()` Gets data for the MistSwap factory broken down daily + weekly.
6. `charts.tokenHourly({token_address, startTime?})` Gets data for specified token broken down hourly.
7. `charts.tokenDaily({token_address})` Gets data for specified token broken down daily.
8. `charts.pairHourly({pair_address, startTime?})` Gets data for specified pair broken down hourly.
9. `charts.pairDaily({pair_address})` Gets data for specified pair broken down daily.
10. `exchange.token({¹, token_address})` Gets data for specified token.
11. `exchange.token24h({¹, token_address})` Gets 24h data for specified token.
12. `exchange.tokenHourData({², token_address})` Gets hourly data for specified token.
13. `exchange.tokenDayData({², token_address})` Gets daily data for specified token.
14. `exchange.tokens({¹})` Gets data for all tokens.
15. `exchange.tokens24h({¹})` Gets 24h data for all tokens.
16. `exchange.pair({¹, pair_address})` Gets data for specified pair.
17. `exchange.pair24h({¹, pair_address})` Gets 24h data for specified pair.
18. `exchange.pairHourData({², pair_address})` Gets hourly data for specified pair.
19. `exchange.pairDayData({{², pair_address})` Gets daily data for specified pair.
20. `exchange.pairs({¹, [pair_addresses]?})` Gets data for all / specified pairs.
21. `exchange.pairs24h({¹})` Gets 24h data for all pairs.
22. `exchange.ethPrice({¹})` Gets USD price of ETH.
23. `exchange.ethPriceHourly({²})` Gets USD price of ETH broken down hourly.
24. `exchange.factory({¹})` Gets all data for the MistSwap factory.
25. `exchange.dayData({²})` Gets data for the MistSwap factory broken down by day.
26. `exchange.twentyFourHourData({¹})` Gets 24h data for the MistSwap factory.
<!--
27. `exchange_v1.userHistory({², user_address})` Gets LP history for specified user.
28. `exchange_v1.userPositions({¹, user_address})` Gets LP positions for specified user.
-->
29. `masterchef.info({¹})` Gets MasterChef contract info.
30. `masterchef.pool({¹, pool_id, pool_address})` Gets pool info, either by pool id or by pool address.
31. `masterchef.pools({¹})` Gets pool info for all pools in MasterChef.
32. `masterchef.user({¹, user_address})` Gets user's data for all of the user's pools.
33. `masterchef.users({¹})` Gets all users and data for all of the users' pools.
34. `masterchef.apys({¹})` Gets pool info for all pools in MasterChef including APYs.
35. `masterchef.apys24h({¹})` Gets 24h pool info for all pools in MasterChef including APYs.
36. `exchange.stakedValue({¹, token_address})` Get pricing info for MasterChef pool.
37. `bar.info({¹})` Gets MistBar contract info.
38. `bar.user({¹, user_address})` Gets MistBar data for specified user.
<!--
39. `maker.info({¹})` Gets MistMaker contract info.
40. `maker.servings({²})` Gets past servings to the bar.
41. `maker.servers({¹})` Gets servers that have served Mist to the bar.
42. `maker.pendingServings({¹})` Gets data on the servings ready to be served to the bar.
43. `timelock.queuedTxs({²})` Gets queued Timelock transactions.
44. `timelock.canceledTxs({²})` Gets canceled Timelock transactions.
45. `timelock.executedTxs({²})` Gets executed Timelock transactions.
46. `timelock.allTxs({²})` Gets all Timelock transactions.
47. `lockup.user({¹, user_address})` Gets lockup data for specified user.
48. `bentobox.clones({masterAddress, chainId})` Gets Clone contracts for specified master contract.
-->

¹ `{block, timestamp}` Supports fetching at a specific block / UNIX timestamp.    
² `{minBlock, maxBlock, minTimestamp, maxTimestamp}` Supports fetching in a specific timeframe.

## Supported Subscriptions
The below all return an Observable that when subscribed to with an object.

1. `sushi.observePriceETH()` Gets an observable of the current ETH price of Mist.
2. `blocks.observeLatestBlock()` Gets an observable of the latest block.
3. `exchange.observeToken({token_address})` Gets an observable for specified token.
4. `exchange.observeTokens()` Gets an observable for the top 1000 tokens (by volume in USD).
5. `exchange.observePair({pair_address})` Gets an observable for specified pair.
6. `exchange.observePairs()` Gets an observable for the top 1000 pairs (by liquidity in USD).
7. `exchange.observeEthPrice()` Gets an observable for the current USD price of ETH.
8. `exchange.observeFactory()` Gets an observable for the MistSwap factory.
9. `bar.observeInfo()` Gets an observable for MistBar contract info.
<!--
10. `maker.observePendingServings()` Gets an observable for pending servings.
-->

## Timeseries

`mistData.timeseries({blocks = [], timestamps = [], target = targetFunction}, {targetArguments})` Returns an array of queries. Blocks / timestamps are arrays of the blocks / timestamps to query (choose one). The target is the target function, the target arguments are the arguments for the target. See example below

## Example

```javascript
const mistData = require('@mistswapdex/mist-data'); // common js
// or
import mistData from '@mistswapdex/mist-data'; // es modules

// query and log resolved results
mistData.masterchef
  .pools({block: 1782402})
  .then(pools => console.log(pools))

mistData.bar
  .user({user_address: '0xFDF3b46D029b61F4f257745DFdD99092e272Bf60'})
  .then(user => console.log(user))

mistData.exchange
  .observePairs()
  .subscribe({next: (pairs) => console.log(pairs), error: (err) => console.log(err)})

mistData
  .timeseries({blocks: [1762402, 1772402, 1782402], target: mistData.exchange.pair}, {pair_address: "0x674A71E69fe8D5cCff6fdcF9F1Fa4262Aa14b154"})
```
