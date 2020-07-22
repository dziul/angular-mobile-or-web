# Mobile or Web

> _Uso do `@angular/router`_

[Veja a alternativa mais simples e acredito, melhor aqui](./tree/alt/a)

A proposta é separar o projeto em dois (web e mobile), porém ser possível o reuso de código entre eles. [Exemplo em produção](https://dziul.github.io/angular-mobile-or-web/)

[![preview](./src/assets/images/preview-e.gif)](https://dziul.github.io/angular-mobile-or-web/)

**Pós:** possibilidade de isolar componentes especifico de cada _device_

~~**contra (?):** A identificação do _device_ é na inicialização do projeto. (uma única vez).~~

> ~~Se estiver em _mobile_ e precisar inspecionar a versão desktop, precisará alterar o tipo do _device_ e refresh no navegador.~~

Primeira abordagem foi usar condicional direto no `loadChildren`, porém no ambiente prod , a compilação `aot`, estava dando `Error: Runtime compiler is not loaded`.

Feito outra abordagem, no qual usa diretiva e serviço. Com isso é possível alterar os projeto em execução.

<!--


# MobileOrWeb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.28.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
