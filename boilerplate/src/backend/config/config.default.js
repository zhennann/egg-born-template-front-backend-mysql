/*
* @Author: zhennann
* @Date:   2017-09-19 23:39:57
* @Last Modified by:   zhennann
* @Last Modified time: 2017-10-10 18:37:04
*/

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1505480866707_9889';

  // module config
  config.module = {};

  // mysql
  config.mysql = {
    clients: {
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'zhennann',
        password: 'egg-born',
        database: 'egg-born',
      },
    },
  };

  return config;
};
