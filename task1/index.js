
const file = require('./file-promise');

file
  .read('./task1/data.txt')
  .then(data => data.toUpperCase())
  .then(data => file.write('./task1/upper-data.txt', data))
  .then(filename => console.log(`Создан файл ${filename}`))
  .catch(err => console.error(err));
