import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const SOURCE_FILE = join(__dirname, 'files', 'fileToCompress.txt');
  const DEST_FILE = join(__dirname, 'files', 'archive.gz');

  const readableStream = createReadStream(SOURCE_FILE);
  const writableStream = createWriteStream(DEST_FILE);
  const gzip = createGzip();

  await pipeline(readableStream, gzip, writableStream);
};

await compress();
