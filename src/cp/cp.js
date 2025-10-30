import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const PATH = fileURLToPath(new URL('./cp.js', import.meta.url));

const spawnChildProcess = async (args = []) => {
  const child = spawn('node', [PATH, ...args]);

  return child
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['first', 'second']);
