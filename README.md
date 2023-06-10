# chat-bot  

_本项目基础源自https://github.com/leon-fong/ChatGPT-miniprogram，对该项目做了功能上的裁剪，只保留了最简单的调用ChatGPT聊天功能并且改为使用typescript_

## 安装

1. 克隆项目
```bash
git clone https://github.com/MartinDai/chat-bot.git
```

2. 进入项目目录
```bash
cd chat-bot
```

3. 安装依赖
```bash
npm install
```

4. 打开微信开发者工具 - 工具 - 构建npm

## 配置

1. 设置根域名 `BaseUrl` 和 `APPID`

路径：
 - miniprogram/config/development.ts [开发环境]
 - miniprogram/config/production.ts [生产环境]

> ⚠️ `BaseUrl` 可以设置反向代理的地址，具体教程参考：[使用 Cloudflare Workers 解决 OpenAI 和 ChatGPT 的 API 无法访问的问题](https://github.com/noobnooc/noobnooc/discussions/9)

2. 设置 `OPEN_API_KEY`

 路径：miniprogram/config/index.ts