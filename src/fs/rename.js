import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const ERROR_TEXT = 'FS operation failed';
  const PROPER_FILE = join(__dirname, 'files', 'wrongFilename.txt')
  const WRONG_FILE = join(__dirname, 'files', 'properFilename.md');

  
  try {
    const wrongFileStats = await fs.stat(PROPER_FILE).catch(() => null);
    const properFileStats = await fs.stat(WRONG_FILE).catch(() => null);

    if (!wrongFileStats || properFileStats) {
      throw new Error(ERROR_TEXT);
    }

    await fs.rename(PROPER_FILE, WRONG_FILE);
  } catch {
    throw new Error(ERROR_TEXT)
  }
};

await rename();
