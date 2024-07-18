const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@app_components': path.resolve(__dirname, 'src/components/app'),
      '@marketing_components': path.resolve(__dirname, 'src/components/marketing'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@pages': path.resolve(__dirname, 'src/components/pages/app'),
      '@marketing_pages': path.resolve(__dirname, 'src/components/pages/marketing'),
      '@styles': path.resolve(__dirname, 'src/stylesheets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/utils/constants'),
      '@rest_utils': path.resolve(__dirname, 'src/utils/restUtils'),
    }
  },
};
