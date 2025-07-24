import path from 'path'

const filePath = '/user/docs/file.txt';
console.log(path.basename(filePath)); // ➜ file.txt

console.log(path.dirname(filePath)); // ➜ /user/docs

console.log(path.extname(filePath)); // ➜ .txt

const joined = path.join('folder', 'subfolder', 'file.txt');
console.log(joined); // ➜ folder/subfolder/file.txt (OS dependent)

console.log(path.resolve('folder', 'file.txt'));
// ➜ /your/working/dir/folder/file.txt

console.log(path.parse('/user/docs/file.txt'));
/*
{
  root: '/',
  dir: '/user/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

console.log(path.normalize('/user//docs/../file.txt'));
// ➜ /user/file.txt

console.log(__dirname);  // ➜ Full path of current folder
console.log(__filename); // ➜ Full path of current file

const fullPath = path.join(__dirname, 'myfile.txt');
console.log(fullPath);

