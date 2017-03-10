module.exports = [

    {
        entry: {
            "widget-latestcomments": "./app/components/widget-latestcomments.vue"
        },
        output: {
            filename: "./app/bundle/[name].js"
        },
        module: {
            loaders: [
                {test: /\.vue$/, loader: "vue"},
                {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
            ]

        }
    }

];