import { createReadStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  
  const FILE_PATH = join(__dirname, 'files', 'fileToRead.txt');
  
  const stream = createReadStream(FILE_PATH, { encoding: 'utf-8' });

  for await (const chunk of stream) {
    console.log(chunk);
    process.stdout.write(chunk);
  }
};

await read();
