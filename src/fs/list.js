import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const ERROR_TEXT = 'FS operation failed';
  const FILE_PATH = join(__dirname, 'files');

  try {
    const files = await fs.readdir(FILE_PATH);

    console.log(files);
  } catch {
    throw new Error(ERROR_TEXT);
  }
};

await list();
