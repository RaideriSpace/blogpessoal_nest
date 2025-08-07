# 👤 Projeto Blog Pessoal em Nest

## Tecnologias Utilizadas

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" height="30" alt="nestjs logo"  />
  <img width="12" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="30" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="30" alt="mysql logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" height="30" alt="eslint logo"  />
</div>

## Diagrama das classes do projeto

<div align='center'>
  <img src='https://camo.githubusercontent.com/c9f02ab37e969c86d9c938202535710e294b3f2da88c2a512347e07553e2d8f1/68747470733a2f2f692e696d6775722e636f6d2f4641756233616f2e6a7067' />
</div>

## Estrutura do Projeto

 Organizado em módulos por domínio (Postagem, Tema, Usuário e Auth), seguindo boas práticas de separação de responsabilidades.
 <details>
<summary>Exibir</summary>

```plaintext
​src/
├── auth/
│ ├── bcrypt/
│ │   └── bcrypt.ts    # Service do "auth". Criptografa a senha.
│ │
│ ├── constants/
│ │   └── constants.ts    # Armazena a chave secreta de acesso.
│ │
│ ├── controllers/
│ │   └── auth.controller.ts    # Controle do Endpoint de login para aplicação do AuthService, interceptado pelo Guard. 
│ │
│ ├── entities/
│ │   └── usuariologin.entity.ts    # Entidade de "usuariologin" com os atributos necessarios para login.
│ │
│ ├── guard/
│ │   ├── jwt-auth.guard.ts    # Guard que intercepta para verificar a chave jwt.
│ │   └── local-auth.guard.ts    # Guard que intercepta o usuario para verificar o login.
│ │
│ ├── services/
│ │   └── auth.service.ts    # Recebe e usa outros Services para verificar e validar usuario e senha e gerar o token.
│ │
│ ├── strategy/
│ │   ├── jwt.strategy.ts    # Recebe do Guard para usar o AuthService e validar o token.
│ │   └── local.strategy.ts    # Recebe do Guard para usar o AuthService e validar o usuario e senha.
│ │
│ └── auth.module.ts    # Módulo de "postagem" com o mapeamento dos componentes.
│
├── postagem/
│ ├── entities/
│ │   └── postagem.entity.ts    # Entidade de "postagem" com os atributos da tabela.
│ │
│ ├── services/
│ │   └── postagem.service.ts    # Serviços de "postagem" com os métodos da classe.
│ │
│ ├── controllers/
│ │   └── postagem.controller.ts    # Controle de "postagem" com o controle dos caminhos (EndPoints).
│ │
│ └── postagem.module.ts    # Módulo de "postagem" com o mapeamento dos componentes.
│
├── tema/
│ ├── entities/
│ │   └── tema.entity.ts    # Entidade de "tema" com os atributos da tabela.
│ │
│ ├── services/
│ │   └── tema.service.ts    # Serviços de "tema" com os métodos da classe.
│ │
│ ├── controllers/
│ │   └── tema.controller.ts    # Controle de "postagem" com o controle dos caminhos (EndPoints).
│ │
│ └── tema.module.ts    # Módulo de "postagem" com o mapeamento dos componentes.
│
├── usuario/
│ ├── entities/
│ │   └── usuario.entity.ts    # Entidade de "usuario" com os atributos da tabela.
│ │
│ ├── services/
│ │   └── usuario.service.ts    # Serviços de "usuario" com os métodos da classe.
│ │
│ ├── controllers/
│ │   └── usuario.controller.ts    # Controle de "usuario" com o controle dos caminhos (EndPoints).
│ │
│ └── usuario.module.ts    # Módulo de "usuario" com o mapeamento dos componentes.
│
├── app.module.ts
├── app.controller.ts    # Controller da aplicação com a conexão do banco de dados e importação dos módulos.
├── app.service.ts
└── main.ts
```

</details>

## Configuração do Ambiente

**1.** Copie o arquivo `.env_sample` e renomeie para `.env`:

```bash
cp .env_sample .env
```

**2.** Preencha as variáveis com suas configurações locais:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=db_blogpessoal
```

**3.** Instale as dependências:
```bash
npm install
```
**4.** Inicie o servidor:
```bash
npm run start:dev
```
---

# Versões

## v5.0 (Atual)
<!-- <details> -->
<!-- <summary> -->
<!-- Detalhes da versão -->
<!-- </summary> -->

- Instalação do `Passport Local`, `Passport JWT` e `@nestjs/jwt`.

- Criação da classe `LocalAuthGuard`.

- Criação da classe `Constant` para armazenar a chave aleatória.

- Criação da classe `AuthService`.

- Registro da `LocalStrategy` e `AuthService` em `AuthModule`.

- Criação da classe `AuthController`.

- Criação da classe `JwtAuthGuard`.

- Criação da classe `JwtStrategy`.

- Registro da `JwtStrategy`em `AuthModule`.

- Atualização das classes controladoras.

- Aplicação de tratamento de erros e mensagens de sucesso para `Postagem` e `Tema`.

<!-- </details> -->

## v4.0 
<details> 
<summary> 
Detalhes da versão 
</summary>

- Criação do módulo `Auth` para autenticação e criptografia da senha.

- Criação da classe auxiliar `UsuarioLogin`.

- Criação da classe auxiliar `Bcrypt`.

- Criação do módulo `AuthModule`.

- Registro da classe `Bcryp` na classe `AuthModule`.

- Registro da classe `AuthoModule` na classe `AppModule`.

- Criação do módulo `Usuario`:<br>- Criação da classe `usuario.module.ts`.<br>- Criação da classe `usuario.entity.ts` com as definições da tabela `tb_usuario`.

- Registro da classe `Usuario` em `usuario.module.ts`.

- Registro da classe `Usuario` e `UsuarioModule` em `app.module.ts`.

- Criação da classe `usuario.service.ts` e `usuario.controller.ts`.

- Registro das classes `UsuarioService` e `UsuarioController` em `usuario.module.ts`.

- Modificação do `postagem.entity.ts`, `postagem.service.ts` e `postagem.module.ts` para inserir a chave estrangeira `usuario_id`.

- Criação do método `findAll` nas classes `UsuarioService`e `UsuarioController` para mostrar todos os objetos.

- Criação do método `findById` nas classes `UsuarioService` e `UsuarioController` para encontrar um objeto pelo Id e retornando erro se o Id não existir.

- Criação do método `findAllByNome` nas classes `UsuarioService` e `UsuarioController` para encontrar um objeto pelo nome e retornando vazio se ele não existir.

- Criação do método `create` na classe `UsuarioService` e `UsuarioController` para criação de objetos na tabela, retornando um erro se o nome já existir.

- Criação do método `update` na classe `UsuarioService` e `UsuarioController` para atualização de objetos na tabela buscando pelo id, retornando erro se o Id não existir.

- Criação do método `delete` na classe `UsuarioService` e `UsuarioController` para exclusão de objetos na tabela buscando pelo id, retornando erro se o Id não existir.

- Configuração do ```app.module.ts``` para utilização do ```.env```.

</details>

## v3.0

<details>
<summary>
Detalhes da versão
</summary>

- Criação do módulo `Tema`:<br>- Criação da classe `tema.module.ts`.<br>- Criação da classe `tema.entity.ts` com as definições da tabela `tb_tema`.

- Registro da classe `Tema` em `tema.module.ts`.

- Registro da classe `Tema` e `TemaModule` em `app.module.ts`.

- Criação da classe `tema.service.ts`.

- Criação da classe `tema.controller.ts`.

- Registro das classes `temaService` e `TemaController` em `tema.module.ts`.

- Modificação do `postagem.entity.ts`, `postagem.service.ts` e `postagem.module.ts` para inserir a chave estrangeira `temaID` e fazer as verificações do `create` e do `update` para identificar se a chave existe antes de realizar a criação/alteração.

- Criação do método `findAll` nas classes `TemaService`e `TemaController` para mostrar todos os objetos.

- Criação do método `findById` nas classes `TemaService` e `TemaController` para encontrar um objeto pelo Id e retornando erro se o Id não existir.

- Criação do método `findAllByDescricao` nas classes `TemaService` e `TemaController` para encontrar um objeto pelo título e retornando vazio se ele não existir.

- Criação do método `create` na classe `TemaService` e `TemaController` para criação de objetos na tabela.

- Criação do método `update` na classe `TemaService` e `TemaController` para atualização de objetos na tabela buscando pelo id, retornando erro se o Id não existir.

- Criação do método `delete` na classe `TemaService` e `TemaController` para exclusão de objetos na tabela buscando pelo id, retornando erro se o Id não existir.
</details>

## v2.0

<details>
<summary>
Detalhes da versão
</summary>

- Criação da classe `postagem.service.ts`.

- Criação da classe `postagem.controller.ts`.

- Registro das classes `PostagemService` e `PostagemController` em `postagem.module.ts`.

- Criação do método `findAll` nas classes `PostagemService`e `PostagemController` para mostrar todos os objetos.

- Criação do método `findById` nas classes `PostagemService` e `PostagemController` para encontrar um objeto pelo Id e retornando erro se o Id não existir.

- Criação do método `findAllByTitulo` nas classes `PostagemService` e `PostagemController` para encontrar um objeto pelo título e retornando vazio se ele não existir.

- Criação do método `create` na classe `PostagemService` e `PostagemController` para criação de objetos na tabela.

- Criação do método `update` na classe `PostagemService` e `PostagemController` para atualização de objetos na tabela buscando pelo id, retornando erro se o Id não existir.

- Criação do método `delete` na classe `PostagemService` e `PostagemController` para exclusão de objetos na tabela buscando pelo id, retornando erro se o Id não existir.
</details>

## v1.0

<details>
<summary>
Detalhes da versão.
</summary>

- Modificação da classe `main`: <br>- Configuração do fuso horário para UTC-03:00 <br>- Ativação do `ValidationPipe` para validar dados em todas as requisições. <br> - Habilitação do `CORS` para permitir requisições de diferentes origens.

- Criação do banco de dados `db_blogpessoal`.

- Configuração da conexão com banco de dados no `app.module.ts`.

- Criação do módulo `Postagem`:<br>- Criação da classe `postagem.module.ts`.<br>- Criação da classe `postagem.entity.ts` com as definições da tabela `tb_postagens`.

- Registro da classe `Postagem` em `postagem.module.ts`.

- Registro da classe `Postagem` e `PostagemModule` em `app.module.ts`.
</details>

## Detalhes sobre o Nest

<details> 
<summary>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

</summary>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

</details>
