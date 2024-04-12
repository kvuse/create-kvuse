import {
  fs, argv, chalk, $, path,
} from 'zx';
import prompts from 'prompts';
import validate from 'validate-npm-package-name';
import { fileURLToPath } from 'url';

async function getTemplateType() {
  if (argv.template) return argv.template;
  const { templateName } = await prompts([
    {
      type: 'select',
      name: 'templateName',
      message: '选择需要使用的模板?',
      choices: [
        {
          title: 'vue2-element',
          description: 'vue2 + elementUI + vuex',
          value: 'vue2-element',
        },
        {
          title: 'vite-elementPlus',
          description: 'vite + elementPlus + pinia',
          value: 'vite-element',
        },
        {
          title: 'vite-pages',
          description: 'vite + elementPlus + pinia + unplugin-vue-router',
          value: 'vite-pages',
        },
        {
          title: 'vite-vant',
          description: 'vite + vant + pinia',
          value: 'vite-vant',
        },
        {
          title: 'vite-uniapp',
          description: 'vite + uniapp + pinia',
          value: 'vite-uniapp',
        },
        {
          title: 'vite-workspaces-admin',
          description: 'vite + elementPlus + pinia + pnpm workspace',
          value: 'workspaces-admin',
        },
        {
          title: 'vite-workspaces-h5',
          description: 'vite + vant + pinia + pnpm workspace',
          value: 'workspaces-h5',
        },
      ],
      initial: 0,
    },
  ]);
  return templateName;
}

async function copyTemplate(templateType, targetDir) {
  console.log('templateType: ', templateType);
  const relovePath = templateType.includes('workspaces') ? `workspaces/${templateType}` : `templates/${templateType}`;
  const src = path.resolve(fileURLToPath(import.meta.url), '..', relovePath);

  console.log(`⏳ Creating project in ${chalk.yellow(src)}.`);
  await fs.copy(src, targetDir);
}

async function editPackageJsonName(targetDir) {
  const pkg = fs.readJsonSync(
    path.resolve(process.cwd(), `${targetDir}/package.json`),
  );
  pkg.name = targetDir;
  await fs.writeFileSync(
    path.resolve(process.cwd(), `${targetDir}/package.json`),
    JSON.stringify(pkg, null, 2),
  );
}

function printSuccessMessage(targetDir) {
  console.log(
    `✨  Successfully created project ${chalk.yellow(targetDir)}.\n\n`,
  );
  console.log('👉  Get started with the following commands:');
  console.log(chalk.cyan(`${chalk.gray('$')} cd ${targetDir}`));
  console.log(chalk.cyan(`${chalk.gray('$')} pnpm install \n`));
  console.log(chalk.cyan(`🚀 ${chalk.bgCyanBright('started project：')} pnpm dev`));
}

async function startTemplateCreation() {
  const templateType = await getTemplateType();
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
      await copyTemplate(templateType, targetDir);
      await editPackageJsonName(targetDir);
      printSuccessMessage(targetDir);
    }
  }
}

await startTemplateCreation();
