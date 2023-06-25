import { writeFile } from 'node:fs/promises';
import path from 'node:path';

export const add = async (fileName) => {
    try {
      const pathToFile = path.join(process.cwd(), fileName);
      await writeFile(pathToFile, '', { flag: 'wx' });
    } catch (error) {
      console.log('Operation failed');
    }
};
