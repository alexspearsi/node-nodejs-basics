import * as fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const ERROR_TEXT = 'FS operation failed';
  const SRC_DIR = join(__dirname, 'files');
  const DEST_DIR = join(__dirname, 'files_copy');

  try {
    const originalFolder = await fs.stat(SRC_DIR).catch(() => null);
    const copiedFolder = await fs.stat(DEST_DIR).catch(() => null);

    if (!originalFolder?.isDirectory() || copiedFolder) {
      throw new Error(ERROR_TEXT);
    }

    await fs.mkdir(DEST_DIR);
  
    const files = await fs.readdir(SRC_DIR);
  
    for (const file of files) {
      const originalPath  = join(SRC_DIR, file);
      const copiedPath = join(DEST_DIR, file);
      await fs.copyFile(originalPath, copiedPath);
    }

  } catch {
    throw new Error(ERROR_TEXT);
  }
};

await copy();
