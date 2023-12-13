module.exports = {
    resolve: {
        fallback: { process: require.resolve('process/browser') },
        fallback: { "path": require.resolve("path-browserify") },
        fallback: { "zlib": require.resolve("browserify-zlib") },
        fallback: { "querystring": require.resolve("querystring-es3") },
        fallback: { "crypto": require.resolve("crypto-browserify") },
        fallback: { "http": require.resolve("stream-http") },
        //fallback: { "http": require.resolve("stream-http") },
    },
};