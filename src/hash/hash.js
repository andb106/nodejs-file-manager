import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

export const hash = async (pathToFile) => {

  const pathToFileResolved = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(pathToFile);

    const fileData = await readFile(pathToFileResolved);

    const hash = createHash('sha256');

    hash.update(fileData);

    console.log(hash.digest('hex'));
};
