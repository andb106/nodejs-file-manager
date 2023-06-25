import path from 'node:path';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { isFileExist } from '../utils/index.js';

export const decompress = async (argsString) => {
  const [pathToSourceFile, pathToDestFile] = argsString.split(' ');

  try {
    const pathToSourceFileResolved = path.isAbsolute(pathToSourceFile) ? pathToSourceFile : path.resolve(pathToSourceFile);
    const pathToDestFileResolved = path.isAbsolute(pathToDestFile) ? pathToDestFile : path.resolve(pathToDestFile);

    if (!await isFileExist(pathToSourceFileResolved)) {
      throw new Error;
    }

    const source = createReadStream(pathToSourceFileResolved);
    const destination = createWriteStream(pathToDestFileResolved);

    const brotli = createBrotliDecompress();

    await pipeline(source, brotli, destination);

  } catch (error) {
    console.log('Operation failed');
  }
};
