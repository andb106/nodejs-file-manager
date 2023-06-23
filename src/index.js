import * as readline from 'node:readline/promises';
import { homedir } from 'node:os'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const parseUserName = () => {
  let userName = 'Anonymous';
  const cliArguments = process.argv.slice(2);
  const searchKey = '--username';

  cliArguments.forEach((item) => {
      if (item.startsWith(searchKey)) {
        userName = item.split('=')[1];
      }
  });

  return userName;
};

const userName = parseUserName();

console.log(`Welcome to the File Manager, ${userName}!`)

process.chdir(homedir());

const printCurrentDir = () => {
  console.log('You are currently in path_to_working_directory', process.cwd());
}

printCurrentDir();

rl.on('line', (data) => {
    console.log('data -->', data);
    printCurrentDir();
  })
  .on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    rl.close();
  });

