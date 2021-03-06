import { join } from 'path';
import registerBabel from 'af-webpack/registerBabel';
import winPath from './utils/winPath';

export default function(babelPreset, opts) {
  const { configOnly, disablePreventTest, ignore, cwd } = opts;
  const files = [
    '.roadhogrc.mock.js',
    'webpack.config.js',
    '.webpackrc.js',
    winPath(join(cwd, 'mock')),
    winPath(join(cwd, 'src')),
  ];
  const only = configOnly ? [new RegExp(`(${files.join('|')})`)] : null;

  registerBabel({
    only,
    ignore,
    babelPreset,
    disablePreventTest,
  });
}
