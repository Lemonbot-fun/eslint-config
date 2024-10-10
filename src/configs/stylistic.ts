import { pluginAntfu } from '../plugins';
import { interopDefault } from '../utils';

import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';

export const StylisticConfigDefaults: StylisticConfig = {
  commaDangle: 'always-multiline',
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
  lessOpinionated?: boolean;
}

export async function stylistic(
  options: StylisticOptions = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    // commaDangle,
    indent,
    jsx,
    lessOpinionated = false,
    overrides = {},
    quotes,
    semi,
  } = {
    ...StylisticConfigDefaults,
    ...options,
  };

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

  const config = pluginStylistic.configs.customize({
    // commaDangle,
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  });

  return [
    {
      name: 'lemonbot/stylistic/rules',
      plugins: {
        antfu: pluginAntfu,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        'antfu/consistent-chaining': 'error',
        'antfu/consistent-list-newline': 'error',

        'style/brace-style': ['error', '1tbs'],
        'style/comma-dangle': ['warn', 'always-multiline'],

        ...(lessOpinionated
          ? {
              curly: ['error', 'all'],
            }
          : {
              'antfu/curly': 'error',
              'antfu/if-newline': 'error',
              'antfu/top-level-function': 'error',
            }
        ),

        ...overrides,
      },
    },
  ];
}
