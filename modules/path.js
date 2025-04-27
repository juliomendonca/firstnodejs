const path = require('path');

// Apenas nome do arquivo atual
console.log(path.basename(__filename)); // Outputs the base name of the current file

// Nome do diretório atual
console.log(path.dirname(__filename)); // Outputs the directory name of the current file

// Extensão do arquivo atual
console.log(path.extname(__filename)); // Outputs the extension of the current file

// Criar objeto path
console.log(path.parse(__filename)); // Outputs an object with details about the current file path

// Concatenar caminhos
console.log(path.join(__dirname, 'test', 'hello.html')); // Outputs a concatenated path to a test file