import { rename as fsRename } from 'node:fs/promises';
import path from 'node:path';
import { isFileExist } from '../utils/index.js';

export const rn = async (argsString) => {
    const [pathFileOld, pathFileNew] = argsString.split(' ');

    try {
        const pathToFileOldResolved = path.isAbsolute(pathFileOld) ? pathFileOld : path.resolve(pathFileOld);
        const pathToFileNewResolved = path.isAbsolute(pathFileNew) ? pathFileNew : path.resolve(pathFileNew);

        if (!await isFileExist(pathToFileOldResolved)) {
            throw new Error;
        }

        await fsRename(pathToFileOldResolved, pathToFileNewResolved);

    } catch (error) {
        console.log('Operation failed');
    }
};
