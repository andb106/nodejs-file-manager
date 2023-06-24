import path from 'node:path';
import { createReadStream } from 'node:fs';


export const cat = async (pathToFile) => {

  const pathToFileResolved = path.isAbsolute(pathToFile) ? pathToFile : path.resolve(pathToFile);

  const fileReadStream = createReadStream(pathToFileResolved);
    try {
      const resData = [];
      for await (const chunk of fileReadStream) {
        resData.push(chunk);
      }
      console.log(Buffer.concat(resData).toString());
    } catch (error) {
      console.log('Operation failed');
    }
};
