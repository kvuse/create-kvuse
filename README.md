# create-kvuse

快速创建项目

> 📌  Vite 需要 Node.js 版本 14.18+，16+,请升级Node.js版本！

## 使用

> pnpm create kvuse 文件名

```bash
# NPM 
npm create kvuse@latest my-project

# YARN
yarn create kvuse my-project

#PNPM
pnpm create kvuse my-project
```

## 指定模板创建(快速创建)

```bash
# NPM 
npm create kvuse@latest my-project --template vite-element

# YARN
yarn create kvuse my-project --template vite-element

#PNPM
pnpm create kvuse my-project --template vite-element
```

模板支持

- `vite-element`  vite@2.0 + elementPlus + pinia
- `vite3-element` vite + elementPlus + pinia
- `vite-vant`     vite + vant@4.0 + pinia
- `vite-uniapp`   vite@2.0 + vue@3.2 + uniapp + pinia
  
## 安装依赖

```bash
cd my-project
pnpm install

pnpm dev
```
