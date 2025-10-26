import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const ERROR_TEXT = "FS operation failed";
  const FILE_PATH = join(__dirname, 'files', 'fileToRemove.txt');

  try {
    const srcFile = await fs.stat(FILE_PATH).catch(() => null);

    if (!srcFile) {
      throw new Error(ERROR_TEXT)
    }

    await fs.rm(FILE_PATH);
  } catch {
    throw new Error(ERROR_TEXT);
  }
};

await remove();
