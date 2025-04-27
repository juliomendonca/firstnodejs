const fs = require("fs");
const path = require("path");

// Criar um diretório
fs.mkdir(path.join(__dirname, "test"), (err) => {
  if (err) throw err;
  console.log("Diretório criado com sucesso!");
});

// Criar um arquivo e escrever nele
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("Arquivo criado e escrito com sucesso!");

    // Ler o conteúdo de um arquivo
    fs.readFile(
      path.join(__dirname, "test", "hello.txt"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        console.log("Conteúdo do arquivo:", data);
      }
    );

    // Atualizar o conteúdo de um arquivo
    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      "\nHello again!",
      (err) => {
        if (err) throw err;
        console.log("Arquivo atualizado com sucesso!");
      }
    );

    // Renomear um arquivo
    fs.rename(
      path.join(__dirname, "test", "hello.txt"),
      path.join(__dirname, "test", "greetings.txt"),
      (err) => {
        if (err) throw err;
        console.log("Arquivo renomeado com sucesso!");
      }
    );
  }
);
