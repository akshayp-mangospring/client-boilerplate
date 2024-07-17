const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@styles': path.resolve(__dirname, 'src/stylesheets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
      '@rest_utils': path.resolve(__dirname, 'src/utils/restUtils'),
    }
  },
};
