const parseEnv = () => {
  const begining = 'RSS_';
  const result = [];

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith(begining)) {
      result.push(`${key}=${value}`);
    }
  }
  
  console.log('second', result.join('; '));
};

parseEnv();
