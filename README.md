# create-kvuse

快速创建项目

> 📌  Vite 需要 Node.js 版本 18+，20+， 请升级Node.js版本！

## 使用

> pnpm create kvuse 文件名

```bash
#PNPM
pnpm create kvuse my-project
```

## 指定模板创建(快速创建)

```bash
#PNPM
pnpm create kvuse my-project --template vite-element
```

模板支持

- `vue2-element`  vue@2.0 + elementUI + vuex + eslint + stylelint
- `vite-element` vite + elementPlus + pinia + eslint + stylelint
- `vite-pages` vite + elementPlus + pinia + unplugin-vue-router + eslint + stylelint
- `vite-vant`     vite + vant@4.0 + pinia + eslint + stylelint
- `vite-uniapp`   vite@4.0 + vue@3.2 + uniapp + pinia + eslint + stylelint
  
## 安装依赖

```bash
cd my-project
pnpm install

pnpm dev
```
