const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.display();
  }

  //接口测试
  testAction() {
    this.body = {
      isOk: true,
      data: {
        message: '测试数据'
      }
    };
  }

  //ejs使用
  ejsAction() {
    this.assign({
      name: "thinkjs",
      data: [
        {
          name: 'yaobai',
          age: 20
        },
        {
          name: 'yaobai1',
          age: 21
        }
      ]
    });
    return this.display(think.ROOT_PATH + "/view/ejs.html");
  }

  //mysql测试
  async mysqlAction() {
    let self = this;
    let jokeModel = self.model("bill_list"); //连接这个表
    let data = await jokeModel  //查询一下这个表得数据
      .countSelect(); 
    this.body = data; //返回 
  }
};
