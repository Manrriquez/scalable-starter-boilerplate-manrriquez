<div id="top"></div>

<span align="center">

# SCALABRE STARTER BOILERPLATE

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<h2>By <a href="https://www.linkedin.com/in/manrriiquez/">@Manrriquez</a></h2>
<br>
</span>

Um Template inicial baseado em projetos [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS), [Blocks, Elements and Modifiers](http://getbem.com/introduction/) (BEMCSS) e [Syntactically Awesome Style Sheets](https://sass-lang.com/) (SASS). Não importa o tamanho do seu projeto, esse padrão de organização combinado com o BEM pode facilitar e agilizar ainda mais o desenvolvimento
e manutenção do seu código. 

Os estilos são divididos nos seguintes grupos: **Base, Layout, Shame, Modules, Responsive, States, Utilities e Pages**

## Sobre o template

[![Product Name Screen Shot][product-screenshot]](https://example.com)

## Porque utilizar SMACSS ??
_Scalabre and Modular Archtecture for CSS não é um framework, nem biblioteca, mas sim um guia para estruturar estilos de maneira inteligente
e escalonánel. Não importa o tamanho do projeto, esse padrão de organização combinado com o BEM pode facilitar e agilizar ainda mais o desenvolvimento
e manutenção do seu código._

## Como utilizar bootstrap da melhor forma ??
_Bootstrap veio para o mercado como um framework CSS, focado em components, diferente do Tailwind no qual e utility first, focado em utilidades, dessa forma bootstrap vem pré-definido components, cores, fonts e estilos, muitos não sabem, mas o bootstrap oferece como download source files (arquivo fonte), para utilizar da sua forma._

_É recomendado você apenas alterar o arquivo `_variables.scss`, pois da variables você pode ter autonomia de mudar por exemplo `text-primary`, `bg-secondary`, por cores da sua escolha, é uma imensidão de possibilidades de como personalizar o bootstrap ao seu gosto!_

#### Como padrão bootstrap/sass default:
_Como padrão do bootstrap ele vem setado dessa forma, assim cada componente seja guidado por estas variaveis, mas e se pudessemos alterar da nossa forma?_

```scss
// Variables
// Color system

// scss-docs-start theme-color-variables
$primary:       $blue !default;
$secondary:     $gray-600 !default;
$success:       $green !default;
$info:          $cyan !default;
$warning:       $yellow !default;
$danger:        $red !default;
$light:         $gray-100 !default;
$dark:          $gray-900 !default;
// scss-docs-end theme-color-variables

```


#### Após alterar o  `_variables.scss`:
_Após alterar a variavel `$primary` com `#e6381f` toda vez que você chamar uma classe pré-definida com `primary` por exemplo `text-primary`, `bg-primary` ele irá chamar por padrão o o color hexadecimal que setamos como `#e6381f`, isso vale tanto para cores, fonts, tamanhos etc.. As possibilidaes são inumeras!!_

```scss
// Variables
// Color system

// scss-docs-start theme-color-variables
$primary:       #e6381f !default;
// scss-docs-end theme-color-variables

```


## Porque utilizar BEM com Bootstrap ??
_Block Element Modifier é um padrão de nomenclatura para seletores CSS, criado por desenvolvedores da Yandex. Facilita a compreensão da função
de um determinado seletor CSS, simplismente analisando o nome desse seletor. Otimo para quem trabalha em times. Manuntenção facilitada mesmo depois
de muito tempo sem contato com o código. Pequenas mudanças não alteram o que já está implementado, diminuindo a chance de BUGs._

_Intuito utilizando bootstrap, e utilizar o minimo possivel de sass, mas com tudo todavia, há casos que realmente o bootstrap não poderá dar conta e partiremos para o sass, e dessa forma aproveitamos utilizar o BEM, padronizando essas `exceções` assim trazendo consigo um codigo intuitivo e padronizado!_

#### Exemplo abaixo utilizando Bem juntamente bom bootstrap:
```html
<section class="home">
   <div class="container">
     <div class="row">
        <div class="col-12">
           <div class="home__box">
              <div class="home__box__content">
                   <h1>Olá,sou Fulano!</h1>
              </div>
           </div>
        </div>
      </div>
   </div>
</section> 

```

```scss
.home {
  &__box {
    box-shadow: 0 1px 2px rgb(223 3 3 / 50%);
    
    &__content {
      padding: 15px;
    }
  }
}
```

## Diretorio de estrutura

```
┌── .gitignore
├── assets
│   ├── img
│   ├── js
│   ├── sass
│        ├── base
│        │   ├── _base.scss
│        │   ├── _root.scss
│        │   └── _index.scss
│        │
│        ├── layout
│        │   ├── _header.scss
│        │   ├── _footer.scss
│        │   ├── _main.scss
│        │   └── _index.scss
│        │
│        ├── pages
│        │   ├── _home.scss
│        │   ├── _privacy-policy.scss
│        │   ├── _use-cockies.scss
│        │   └── _index.scss
│        │
│        ├── modules
│        │   ├── components
│        │   │   ├── _boxes.scss
│        │   │   ├── _buttons.scss
│        │   │   
│        │   └── _index.scss
│        │
│        ├── states
│        │   └── _boxes.scss
│        │   ├── _list.scss
│        │   ├── _index.scss
│        │
│        ├── utilities
│        │   ├── _keyframes.scss
│        │   ├── _transforms.scss
│        │   ├── _transitions.scss
│        │   └── _utilities.scss
│        │   
│        ├── responsive
│        │   ├── _tablet.scss
│        │   ├── _mobile.scss
│        │   └── _index.scss
│        │
│        ├── shame
│        │   └── _overrides.scss
│        │ 
│        ├── main.scss
│
├── README.md
├── README-PT.md
├── .gitignore
├── .gulpfile.js
├── package.json
├── LICENSE.txt
├── index.html

```

### Reescrevendo components da forma certa:
_Sabe aquela coisa vergonhosa que vez em quando temos que realizar?. Seja um component realizado por você ou algo pronto do bootstrap?. Então este arquivo em especial e redirecionado para exatamente
isto! os tão famigerados e polêmicos `!important`, e para isto o `_overrides.scss` cumpre a promessa._


1. Reescrevendo componente bootstrap:

```scss
.form {
    border: none!important;

    input:focus {
        border-color: #86b7fe!important;
    }

}

```

## Libs

# Slick Slider
_Fazendo carrossel nunca mais será um problema
Essa pequena biblioteca open source (disponibilizada sob licença MIT) criada por [Ken Wheeler](http://smacss.com/) (atual diretor de open source na Formidable Labs, Inc) e que hoje já possui mais de 21000 estrelas no GitHub, torna o trabalho de criar um carrossel algo extremamente fácil. O melhor de tudo é que não precisamos abrir mão de flexibilidade e customização. Resumindo, ela nos ajuda sem nos prender a suas limitações._

1. Criando um slider com slick:

1.1 HTML
```html
<div class="carousel">
  <div><img src="https://i.imgur.com/3aIutJi.png" alt="js" /></div>
  <div><img src="https://i.imgur.com/rWtGeQ0.png" alt="java" /></div>
  <div><img src="https://i.imgur.com/8946bSF.png" alt="python"/></div>
  <div><img src="https://i.imgur.com/9Hc7hjb.png" alt="kotlin" /></div>
  <div><img src="https://i.imgur.com/uZDEpjX.png" alt="scala" /></div>
  <div><img src="https://i.imgur.com/eQoyQjy.png" alt="C#" /></div>
  <div><img src="https://i.imgur.com/ko3iAbu.png" alt="PHP" /></div>
  <div><img src="https://i.imgur.com/Afkz5od.png" alt="dotnet" /></div>
</div>
```

1.2 JS
```js
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
});
```

## :rocket: Para instalar o projeto, siga estas etapas:


_Siga as etapas a seguir, para melhor experiencia do template.._

1. Clone o projeto
   ```sh
   git clone https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez.git
   ```
   
## :wrench: Para iniciar o projeto, siga estas etapas:


_Siga as etapas a seguir, para melhor experiencia do template.._

1. Baixe as dependências necessárias:
   ```npm
   npm install
   ```

2. Qualquer mudança no scss do projeto digite no terminal na raiz do projeto: 
   ```npm
   gulp
   ```
   

## Bugs & Suporte

Desenvolvido e estruturado por [@Manrriquez](https://www.linkedin.com/in/manrriiquez/). Por favor, caso aja algum erro ou bug, contate-me o mais breve possivel!

## Links de referência

Links de referencia utilizados para estruturar este template, aonde foi tudo possivel.

- [BOOTSTRAP](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [SASS](https://sass-lang.com/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [BEM](http://getbem.com/introduction/)


<!-- LICENSE -->
## License

Distribuído sob a licença MIT. Veja `LICENSE.txt` para mais informações.



<!-- CONTACT -->
## Contato

Luis Fernando - [@manrriiquez](https://www.linkedin.com/in/manrriiquez/) - manrriquez.contato@gmail.com

Project Link: [https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez](https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez)

<p align="right">(<a href="#top">Subir</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Manrriquez/scalable-starter-boilerplate-manrriquez.svg?style=for-the-badge
[contributors-url]: https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Manrriquez/scalable-starter-boilerplate-manrriquez.svg?style=for-the-badge
[forks-url]: https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez/network/members
[stars-shield]: https://img.shields.io/github/stars/Manrriquez/scalable-starter-boilerplate-manrriquez.svg?style=for-the-badge
[stars-url]: https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez/stargazers
[issues-shield]: https://img.shields.io/github/issues/Manrriquez/scalable-starter-boilerplate-manrriquez.svg?style=for-the-badge
[issues-url]: https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez/issues
[license-shield]: https://img.shields.io/github/license/Manrriquez/scalable-starter-boilerplate-manrriquez.svg?style=for-the-badge
[license-url]: https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/manrriiquez/
[product-screenshot]: assets/images/screenshot.png