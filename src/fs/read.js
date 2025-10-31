import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const ERROR_TEXT = "FS operation failed";
  const FILE_PATH = join(__dirname, 'files', 'fileToRead.txt');

  try {
    const file = await fs.stat(FILE_PATH).catch(() => null);

    if (!file) {
      throw new Error(ERROR_TEXT);
    }

    const content = await fs.readFile(FILE_PATH, 'utf-8');

    console.log(content);
  } catch {
    throw new Error(ERROR_TEXT);
  }
};

await read();
