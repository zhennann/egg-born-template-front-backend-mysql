/*
* @Author: zhennann
* @Date:   2017-10-12 16:37:55
* @Last Modified by:   zhennann
* @Last Modified time: 2017-10-12 16:39:06
*/

module.exports = {
  name: {
    desc: 'project name',
  },
  description: {
    desc: 'project description',
  },
  author: {
    desc: 'project author',
  },
  keys: {
    desc: 'cookie security keys',
    default: Date.now() + '_' + random(100, 10000),
  },
};

function random(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}