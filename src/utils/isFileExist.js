import { readFile } from 'node:fs/promises';

export const isFileExist = async (pathToFile) => {
  try {
      await readFile(pathToFile);
      return true;
  } catch (error) {
      return false;
  }
}
