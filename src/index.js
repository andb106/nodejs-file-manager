import * as readline from 'node:readline/promises';
import { homedir } from 'node:os'
import * as navigation from './navigation/index.js';
import { parseUserName, printCurrentDir, handleExit } from './utils/index.js';
import * as fsCommands from './fs/index.js';
import { handleOsCommands } from './os/os.js';
import { hash } from './hash/hash.js';
import * as zip from './zip/index.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userName = parseUserName();

console.log(`Welcome to the File Manager, ${userName}!`)

process.chdir(homedir());

printCurrentDir();

rl.on('line', async (data) => {
    const command = data.trim().split(' ')[0];
    const commandArgs = data.replace(command, '').trim();

    if (data.trim() === '.exit') {
      handleExit(userName);
    }

    switch (command) {
      case 'up':
        navigation.up();
        break;
      case 'cd':
        navigation.cd(commandArgs);
        break;
      case 'ls':
        navigation.ls();
        break;
      case 'cat':
        await fsCommands.cat(commandArgs);
        break;
      case 'add':
        await fsCommands.add(commandArgs);
        break;
      case 'rn':
        await fsCommands.rn(commandArgs);
        break;
      case 'cp':
        await fsCommands.cp(commandArgs);
        break;
      case 'mv':
        await fsCommands.mv(commandArgs);
        break;
      case 'rm':
        await fsCommands.rm(commandArgs);
        break;
      case 'os':
        handleOsCommands(commandArgs);
        break;
      case 'hash':
        await hash(commandArgs);
        break;
      case 'compress':
        await zip.compress(commandArgs);
        break;
      case 'decompress':
        await zip.decompress(commandArgs);
        break;
      default:
        console.log('Invalid input');
        break;
    }

    printCurrentDir();
  })
  .on('SIGINT', () => {
    handleExit(userName);
  });
