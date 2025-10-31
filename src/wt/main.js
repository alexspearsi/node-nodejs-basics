import os from 'os';
import { Worker } from 'worker_threads';

const CORES_QUANTITY = os.cpus().length;

const performCalculations = async () => {

  const workers = [];

  for (let i = 0; i < CORES_QUANTITY; i++) {
      const worker = new Worker(new URL('./worker.js', import.meta.url), {
        workerData: 10 + i,
      })

      workers.push(
        new Promise((resolve) => {
          worker.on('message', (msg) => resolve(msg));
          worker.on('error', () => resolve({ status: 'error', data: null }));
          worker.on('exit', (code) => {
            if (code !== 0) {
              resolve({ status: 'error', data: null })
            }
          })
        })
      )
  }

  const results = await Promise.all(workers);
  console.log(results);
};

await performCalculations();
