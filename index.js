module.exports = process.env.CONNECT_RT_COV ? require('./lib-cov/connect-rt') : require('./lib/connect-rt');