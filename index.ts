/*----1. O que é TypeScript e quais são suas principais vantagens em relação ao JavaScript ? Cite pelo menos duas vantagens.
TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft, que é um superconjunto estrito de JavaScript.Ele adiciona tipagem estática e outras funcionalidades, tornando o JavaScript mais robusto e seguro.

Principais vantagens em relação ao JavaScript:

Tipagem estática: Em TypeScript, você pode definir tipos para variáveis, parâmetros e retornos de funções, o que ajuda a evitar muitos erros comuns durante o desenvolvimento.
Melhor suporte a IDEs e ferramentas de desenvolvimento: A tipagem estática e as características de TypeScript permitem que editores de código e IDEs forneçam melhores recursos de autocompletar, refatoração e depuração.
2. Analise o seguinte código em TypeScript e explique qual é a diferença em relação ao equivalente em JavaScript:
typescript*/


function multiplicar(a: number, b: number): number {
    return a * b;
}
//console.log(multiplicar(4, "5"));


/*Diferença em relação ao JavaScript:

Em JavaScript, o código executaria sem erro devido à coerção de tipo automática.A string "5" seria convertida implicitamente para um número, e a multiplicação aconteceria normalmente.
Em TypeScript, o código resultaria em um erro de compilação, porque b foi tipado explicitamente como number, e passar uma string("5") violaria essa restrição.TypeScript não permite essa coerção automática de tipos, oferecendo um ambiente mais seguro e robusto.
3. Quais os passos necessários para instalar o TypeScript e configurar um novo projeto ? Liste pelo menos três etapas.
Instalar o Node.js(caso não esteja instalado):

TypeScript depende do Node.js, portanto, instale - o a partir do site oficial: https://nodejs.org/
Instalar o TypeScript globalmente:

Use o comando npm(Node Package Manager) para instalar o TypeScript:

npm install - g typescript
Configurar o projeto TypeScript:

Crie uma pasta para o projeto e inicialize o npm:
bash

npm init - y
Crie o arquivo de configuração tsconfig.json:
bash

tsc--init
Esse arquivo permite configurar opções como diretórios de saída e opções de compilação.

4. O que é o arquivo tsconfig.json e qual a sua importância na configuração do TypeScript ? Cite pelo menos duas configurações que podem ser definidas nesse arquivo.
    tsconfig.json é o arquivo de configuração do TypeScript, onde você pode definir várias opções de compilação e controle de como o TypeScript deve ser compilado para JavaScript.

        Importância:

/*Ele centraliza as configurações para o compilador TypeScript.
Permite ajustar o comportamento da compilação para diferentes cenários, como desenvolvimento, produção, ou uso de bibliotecas específicas.
Exemplos de configurações que podem ser definidas:*/

/*"target": "ES6": Define a versão de ECMAScript para a qual o código TypeScript será transpilado.
"strict": true: Ativa o modo estrito, que força o compilador a verificar tipos mais rigorosamente, melhorando a segurança do código.
5. Depois de criar um arquivo TypeScript(index.ts), quais comandos você deve executar para compilar e rodar o código ? Descreva brevemente o que acontece em cada etapa.
Compilar o código TypeScript: Execute o comando tsc no terminal para compilar o arquivo TypeScript:*/


/*tsc index.ts
O comando tsc(TypeScript Compiler) converte o código TypeScript em código JavaScript.Após a execução, um arquivo index.js será gerado no mesmo diretório.
Rodar o código compilado em JavaScript: Após a compilação, execute o código gerado com Node.js:*/


/*node index.js
O Node.js executará o arquivo JavaScript gerado, e o código será executado no ambiente de execução do Node.js.*/