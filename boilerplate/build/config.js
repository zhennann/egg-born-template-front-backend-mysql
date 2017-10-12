/*
* @Author: zhennann
* @Date:   2017-09-20 22:54:59
* @Last Modified by:   zhennann
* @Last Modified time: 2017-09-27 23:58:10
*/

const backend = {
  port: 7002,
  hostname: '127.0.0.1',
};

const front = {
  build: {
    title: 'egg-born starter',
  },
  dev: {
    title: 'egg-born starter',
    port: 9092,
    proxyTable: {
      '/api': {
        target: `http://${backend.hostname}:${backend.port}`,
        changeOrigin: true,
      },
    },
  },
};

module.exports = {
  front,
  backend,
};
