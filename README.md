# create-kvuse

快速创建项目

> 📌  Vite 需要 Node.js 版本 14.18+，16+,请升级Node.js版本！

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

- `vue2-element`  vue@2.0 + elementUI + vuex
- `vite3-element` vite@3.0 + elementPlus + pinia
- `vite4-element` vite@4.0 + elementPlus + pinia
- `vite-vant`     vite@3.0 + vant@4.0 + pinia
- `vite-uniapp`   vite@2.0 + vue@3.2 + uniapp + pinia
  
## 安装依赖

```bash
cd my-project
pnpm install

pnpm dev
```
