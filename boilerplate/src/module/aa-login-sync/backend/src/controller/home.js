/*
* @Author: zhennann
* @Date:   2017-09-08 14:48:59
* @Last Modified by:   zhennann
* @Last Modified time: 2017-10-10 15:39:26
*/

module.exports = app => {
  class HomeController extends app.Controller {

    async index() {
      const message = await this.service.home.index();
      this.ctx.success(message);
    }

  }
  return HomeController;
};
