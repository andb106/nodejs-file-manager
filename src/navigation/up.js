export const up = () => {
  try {
    process.chdir('..');
  } catch (error) {
    console.log('Operation failed');
  }
}
