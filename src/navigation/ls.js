import { readdir } from 'node:fs/promises';

export const ls = async () => {
  try {
    const items = await readdir(process.cwd(), {withFileTypes: true});
    const res = items.map((item) => {
      return {name: item.name, type: item.isFile() ? 'file' : 'directory'};
    })
    console.table(res.sort((a,b) => {
      if (a.type !== b.type) {
        return a.type.localeCompare(b.type);
      }
      return a.name.localeCompare(b.name);
    }));
  } catch (error) {
    console.log('Operation failed');
  }
}
