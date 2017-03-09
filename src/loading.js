// import 'lib-flexible';
// 不主动引入 lib-flexible，避免混乱开发者的 viewport 设置
// 推荐开发者 自行引入 lib-flexible
import './scss/loading.scss';
import { Indicator } from 'mint-ui';

class Load {
  constructor() {
    this.config = {
      text: 'loading...'
    }
  }

  open(args) {
    // 参数为空时
    if (!args) {}
    else if (args.constructor === String) {
      this.config.text = args;
    }
    else if (args.constructor === Object) {
      Object.assign(this.config, args)
    }
    Indicator.open(this.config)
  }

  close() {
    Indicator.close()
  }
}

const Loading = new Load();

export default Loading
