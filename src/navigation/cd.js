import path from 'node:path';

export const cd = (pathToDir) => {
  try {
    let newPathToDir = path.isAbsolute(pathToDir) ? pathToDir : path.resolve(pathToDir);

    if (!path.parse(pathToDir).base) {
      newPathToDir = path.parse(newPathToDir).root;
    }

    process.chdir(newPathToDir);

  } catch (error) {
    console.log('Operation failed');
  }
}
