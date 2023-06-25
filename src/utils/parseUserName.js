export const parseUserName = () => {
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
