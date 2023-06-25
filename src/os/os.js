import { cpus, EOL, homedir, userInfo, arch } from 'node:os';

export const handleOsCommands = (argsString) => {

  switch (argsString) {
    case '--EOL':
      console.log('End-Of-Line: ', JSON.stringify(EOL));
      break;

    case '--cpus':
      const countCpu = cpus().length;
      const res = cpus().map((item) => {
        return {model: item.model, speed: `${item.speed / 1000} GHz`};
      })
      console.log(`Amount of CPU: ${countCpu}`);
      console.table(res);
      break;

    case '--homedir':
      console.log(homedir());
      break;

    case '--username':
      console.log(userInfo().username);
      break;

    case '--architecture':
      console.log(arch());
      break;

    default:
      console.log('Operation failed');
      break;
  }
}
