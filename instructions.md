#### Instructions

1. Create a **single** file that contains all `imports` 
2. Use webpack to bundle everything into a single `app.dante3.js` file
3. Make sure it works in vanilla js

```
// below is just an example JS to give you an idea

let dante = new DanteEditor({
  ... some options
});
```

Here is a `webpack.config.js` to give you an idea of how to bundle it into a sinle file

```
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './package/Dante.cjs.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.dante3.js',
    },
    module: {
        rules: [
            {
                test: /\.?jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            },
        ]
    },
  };
```