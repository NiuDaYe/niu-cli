#!/usr/bin/env node

'use strict';

import cli from '../src/cli.mjs';
import a from 'niu-lerna-a';
import b from 'niu-lerna-b';
// eslint-disable-next-line no-unused-expressions
cli().parse(process.argv.slice(2));

a();
b();