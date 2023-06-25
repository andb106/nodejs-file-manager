import { rm as fsRemove } from 'node:fs/promises';
import path from 'node:path';

export const rm = async (pathToFile) => {

  const pathToFileResolved = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(pathToFile);

  try {
      await fsRemove(pathToFileResolved);
  } catch (error) {
    console.log('Operation failed');
  }
};
