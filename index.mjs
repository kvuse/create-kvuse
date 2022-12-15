import {
  fs, argv, chalk, $, path,
} from 'zx';
import prompts from 'prompts';
import validate from 'validate-npm-package-name';
import { fileURLToPath } from 'url';

// 判断是否快捷创建
let templateType;
if (argv.template) templateType = argv.template;
else {
  const { templateName } = await prompts([
    {
      type: 'select',
      name: 'templateName',
      message: '选择需要使用的模板?',
      choices: [
        { title: 'vite-elementPlus', description: 'vite2 + elementPlus + pinia', value: 'vite-element' },
        { title: 'vite3-elementPlus', description: 'vite3 + elementPlus + pinia', value: 'vite3-element' },
        { title: 'vite4-elementPlus', description: 'vite4 + elementPlus + pinia', value: 'vite4-element' },
        { title: 'vite-vant', description: 'vite3 + vant + pinia', value: 'vite-vant' },
        { title: 'vite-uniapp', description: 'vite2 + uniapp + pinia', value: 'vite-uniapp' },
      ],
      initial: 0,
    },
  ]);
  templateType = templateName;
}

if (templateType) {
  const targetDir = argv._[0];
  const isExists = await fs.existsSync(targetDir);
  const nodeVersion = await $`node -v`;
  const MIN_VERSION = 'v14.18.0';
  if (!validate(targetDir)?.validForNewPackages) {
    console.log(chalk.red(`📌 不规范的项目名称: ${targetDir}`));
  } else if (nodeVersion.stdout < MIN_VERSION) {
    console.log(chalk.red('📌 Vite 需要 Node.js 版本 14.18+，16+,请升级Node.js版本！'));
  } else if (isExists) {
    console.log(chalk.red('📌 目录已经存在'));
  } else {
    // copy template
    const src = path.resolve(
      fileURLToPath(import.meta.url),
      '..',
      `templates/${templateType}`,
    );

    console.log(`⏳ Creating project in ${chalk.yellow(src)}.`);
    await fs.copy(src, targetDir);
    // edit package.json name
    const pkg = fs.readJsonSync(path.resolve(process.cwd(), `${targetDir}/package.json`));
    pkg.name = targetDir;
    await fs.writeFileSync(path.resolve(process.cwd(), `${targetDir}/package.json`), JSON.stringify(pkg, null, 2));

    console.log(`✨  Successfully created project ${chalk.yellow(targetDir)}.\n\n`);
    console.log('👉  Get started with the following commands:');
    console.log(chalk.cyan(`${chalk.gray('$')} cd ${targetDir}`));
    console.log(chalk.cyan(`${chalk.gray('$')} pnpm install \n`));
    console.log(chalk.cyan(`🚀 ${chalk.bgCyanBright('started project：')} pnpm dev`));
  }
}
