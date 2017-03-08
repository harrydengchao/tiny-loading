// import { Indicator } from 'mint-ui';
import Toast from 'mint-ui/lib/indicator';

class Load {
  constructor() {
    this.config = {
      text: '加载中...'
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
