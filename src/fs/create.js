import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = join(__dirname, 'files', 'fresh.txt');

  const contentText = "I am fresh and young"
  const errorText = 'FS operation failed';


  try {
    await fs.writeFile(filePath, contentText, { flag: 'wx' });
  } catch {
    throw new Error(errorText);
  }

};

await create();
