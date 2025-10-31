import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const PATH = fileURLToPath(new URL('./files/script.js', import.meta.url));

const spawnChildProcess = async (args = []) => {
  const child = spawn('node', [PATH, ...args]);

  process.stdin.pipe(child.stdin);

  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);
  
  return child
};

spawnChildProcess(['first', 'second']);
