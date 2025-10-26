import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const FILE_PATH = join(__dirname, 'files', 'fileToWrite.txt');

  const writableStream = createWriteStream(FILE_PATH, { encoding: 'utf-8' });

  for await (const chunk of process.stdin) {
    writableStream.write(chunk);
  }

  writableStream.end();
};

await write();
