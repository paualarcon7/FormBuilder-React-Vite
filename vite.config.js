import reactPlugin from 'vite-plugin-react';
const path = require('path');

const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@mui': '@mui/material',
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@mui/material': '@mui/material/esm',
      '@mui/styled-components': '@mui/styled-components-sc',
    },
  },
};

export default config;
