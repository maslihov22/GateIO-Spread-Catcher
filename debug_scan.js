import { GateioWrapper } from './src/exchanges/gateio.js';

const exchange = new GateioWrapper();

console.log('Loading markets...');
await exchange.exchange.loadMarkets();

// Берем первые 10 символов
const testSymbols = ['BTC/USDT', 'ETH/USDT', 'XRP/USDT', 'DOGE/USDT', 'SOL/USDT'];

console.log('\n=== Testing fetchAllPrices ===');
const { spotTickers, swapTickers } = await exchange.fetchAllPrices(testSymbols);

console.log('\nSpot tickers keys:', Object.keys(spotTickers).slice(0, 10));
console.log('Swap tickers keys:', Object.keys(swapTickers).slice(0, 10));

console.log('\nBTC spot:', spotTickers['BTC/USDT']?.last);
console.log('BTC swap:', swapTickers['BTC/USDT:USDT']?.last);

console.log('\n=== Testing fetchAllFundingRates ===');
const fundingRates = await exchange.fetchAllFundingRates(testSymbols);

console.log('\nFunding rates keys:', Object.keys(fundingRates));
console.log('BTC funding:', fundingRates['BTC/USDT']);
console.log('ETH funding:', fundingRates['ETH/USDT']);
