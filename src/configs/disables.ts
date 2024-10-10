import { GLOB_SRC, GLOB_SRC_EXT } from '../globs';

import type { TypedFlatConfigItem } from '../types';

export async function disables(): Promise<TypedFlatConfigItem[]> {
  return [
    {
      files: [`scripts/${GLOB_SRC}`],
      name: 'lemonbot/disables/scripts',
      rules: {
        'no-console': 'off',
        'ts/explicit-function-return-type': 'off',
      },
    },
    {
      files: [`cli/${GLOB_SRC}`, `cli.${GLOB_SRC_EXT}`],
      name: 'lemonbot/disables/cli',
      rules: {
        'no-console': 'off',
      },
    },
    {
      files: ['**/bin/**/*', `**/bin.${GLOB_SRC_EXT}`],
      name: 'lemonbot/disables/bin',
      rules: {
        'lemonbot/no-import-dist': 'off',
        'lemonbot/no-import-node-modules-by-path': 'off',
      },
    },
    {
      files: ['**/*.d.?([cm])ts'],
      name: 'lemonbot/disables/dts',
      rules: {
        'eslint-comments/no-unlimited-disable': 'off',
        'import/no-duplicates': 'off',
        'no-restricted-syntax': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.{test,spec}.([tj])s?(x)'],
      name: 'lemonbot/disables/test',
      rules: {
        'no-unused-expressions': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.cjs'],
      name: 'lemonbot/disables/cjs',
      rules: {
        'ts/no-require-imports': 'off',
      },
    },
  ];
}
