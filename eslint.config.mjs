import markdown from '@eslint/markdown';
import prettier from 'eslint-config-prettier';

export default [
  ...markdown.configs.recommended,
  prettier,
  {
    ignores: [
      'node_modules/**',
      'package-lock.json',
      '.git/**',
      '.claude-plugin/**',
      '.DS_Store',
    ],
  },
];
