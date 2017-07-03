import path from 'path';
import webpack from 'webpack';

export default {
    //devtools: 'eval-source-map',
    entry: [
        path.join(__dirname, './client/index.js')
    ],
    output: {
        path: '/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders: [ 'babel-loader']
            }
        ]
    },
    resolve: {
        extensions: [ '.js' ]
    }
}
