const CracoLessPlugin = require('craco-less');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const modifyVars = require('./modifyVars');

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: modifyVars,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
