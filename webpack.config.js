module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        path: __dirname + "/dist/js",
        filename: "bundle.js",
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.m?js$/, // uziga olish
                exclude: /(node_modules|bower_components)/, // olmaslik
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage",
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
};
