import path from 'node:path';

export const cd = (pathToDir) => {
  try {
    const newPathToDIr = path.isAbsolute(pathToDir) ? pathToDir : path.resolve(pathToDir);
    process.chdir(newPathToDIr);
  } catch (error) {
    console.log('Operation failed');
  }
}
