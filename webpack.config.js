const path = require('path');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),    
    require('postcss-hexrgba'),
    require('autoprefixer')
];

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,  // hotmodulereplace: allows webpack to inject new css/js to the browser memory on the fly
        port: 3000,
        host: '0.0.0.0' // allows devices on the same network to be able to access the webpacked dev server
    },
    mode: 'development',
    // watch: true, // devServer replace watch
    module: {
        rules: [
            {
                test:/\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}]
            }
        ]
    }
}