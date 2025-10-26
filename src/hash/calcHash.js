import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const ERROR_TEXT = 'FS operation failed';
  const FILE_PATH = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  try {
    const hash = createHash('sha256');
    const stream = createReadStream(FILE_PATH);

    for await (const chunk of stream) {
      hash.update(chunk);
    }

    console.log(hash.digest('hex'));
  } catch {
    throw new Error(ERROR_TEXT)
  }
};

await calculateHash();
