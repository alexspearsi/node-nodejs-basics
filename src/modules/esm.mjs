import * as fs from 'node:fs/promises';
import path, { dirname, join } from 'node:path';
import { release, version } from 'node:os';
import { fileURLToPath } from 'node:url';
import { createServer as createServerHttp } from 'node:http';
import './files/c.cjs';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = Math.random() > 0.5
  ? join(__dirname, 'files', 'a.json')
  : join(__dirname, 'files', 'b.json');

const fileContent = await fs.readFile(filePath, 'utf-8');
const unknownObject = fileContent.parse(fileContent);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
