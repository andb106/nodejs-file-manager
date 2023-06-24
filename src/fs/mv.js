import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { rm } from 'node:fs/promises';

export const mv = async (argsString) => {
  const [pathToFile, pathToNewDir] = argsString.split(' ');

    try {
      const pathToFileResolved = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(pathToFile);
      const fileName = path.parse(pathToFileResolved).base;
      const pathToFileCopyResolved = path.resolve(pathToNewDir, fileName);

      const fileReadStream = createReadStream(pathToFileResolved);
      const fileWriteStream = createWriteStream(pathToFileCopyResolved);

      await pipeline(fileReadStream, fileWriteStream);
      await rm(pathToFileResolved);
    } catch (error) {
      console.log('Operation failed');
    }
};
