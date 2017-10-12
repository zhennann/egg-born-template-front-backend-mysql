/*
* @Author: zhennann
* @Date:   2017-09-18 19:03:21
* @Last Modified by:   zhennann
* @Last Modified time: 2017-10-10 15:39:17
*/

const home = require('./controller/home.js');

module.exports = [
  { method: 'get', path: 'home/index', controller: home },
];
