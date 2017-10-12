/*
* @Author: zhennann
* @Date:   2017-09-08 14:49:08
* @Last Modified by:   zhennann
* @Last Modified time: 2017-10-10 15:38:41
*/

module.exports = app => {

  class Home extends app.Service {

    async index() {
      const res1 = await this.ctx.db.insert('aaLoginTest', { name1: '3' });
      return [ res1.insertId ];
      // return this.ctx.text(this.ctx.config.message, 'zhennann');
    }
  }

  return Home;
};
