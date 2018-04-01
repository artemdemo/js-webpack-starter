const ExtractTextplugin = require('extract-text-webpack-plugin');

const moduleRule = (extract = false) => {
    const rule = {
        test: /\.(pcss|css)$/,
        use: null,
    };
    if (extract) {
        rule.use = ExtractTextplugin.extract({
            fallback: 'style-loader',
            use: [
                { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                'postcss-loader',
            ],
        });
    } else {
        rule.use = [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
            'postcss-loader',
        ];
    }
    return rule;
};

const plugins = (extract = false, isProduction = false) => {
    if (extract) {
        return [
            new ExtractTextplugin({
                filename: isProduction ?
                    './css/styles-[hash].css' :
                    './css/styles.css',
                disable: false,
                allChunks: true,
            }),
        ];
    }
    return [];
};

module.exports = {
    moduleRule,
    plugins,
};
