import { describe, it, expect } from 'vitest';
import { fs, $ } from 'zx';
import validate from 'validate-npm-package-name';

describe('index.mjs', () => {
  it('is exists dir?', async () => {
    const targetDir = 'aa';
    const isExists = await fs.existsSync(targetDir);
    if (!isExists) await $`mkdir ${targetDir}`;
    else expect(isExists).toBe(true);
    await $`rmdir ${targetDir}`;
  });

  it('Verify Node version', async () => {
    const nodeVersion = await $`node -v`;
    console.log('node: ', nodeVersion.stdout > 'v14.18.0');
    expect(nodeVersion.stdout > 'v14.18.0').toBe(true);
  });

  it('validate dir name', () => {
    expect(validate('aa123').validForNewPackages).toBe(true);
    expect(validate('aaSS').validForNewPackages).toBe(false);
  });
});
