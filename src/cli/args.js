const parseArgs = () => {
  const args = process.argv.slice(2);
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const key = args[i];
    const value = args[i + 1];

    const updatedKey = key.split('').slice(2).join('');
    result.push(`${updatedKey} is ${value}`);
  }

  console.log(result.join(', '));
};

parseArgs();
