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

Initial Template based on the [Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS), [Blocks, Elements and Modifiers](http://getbem.com/introduction/) (BEMCSS), and [Syntactically Awesome Style Sheets](https://sass-lang.com/) (SASS) projects. Regardless of the size of your project, this organization pattern combined with BEM can further streamline and speed up the development and maintenance of your code.

Styles are divided into the following groups: **Base, Layout, Shame, Modules, Responsive, States, Utilities e Pages**

## About the template

[![Product Name Screen Shot][product-screenshot]](https://example.com)

## Why use SMACSS ??
_[Scalable and Modular Architecture for CSS](http://smacss.com/) (SMACSS), It is not a framework or library, but rather a guide to structure styles in an intelligent and scalable way. Regardless of the size of the project, this organizational pattern combined with BEM can further streamline and speed up the development and maintenance of your code._

## Why use BEM with Bootstrap?
_The Block Element Modifier (BEM) is a naming convention for CSS selectors created by Yandex developers. It makes it easy to understand the function of a certain CSS selector simply by analyzing its name. Great for team work. Maintenance is facilitated even after a long time without contact with the code. Small changes do not affect what has already been implemented, reducing the chance of bugs._

_The purpose of using Bootstrap is to use as little Sass as possible, but still have everything available. However, there are cases where Bootstrap will not be enough and we will have to use Sass. By doing this, we can take advantage of using BEM, standardizing these `exceptions` and bringing an intuitive and standardized code._

#### Example below using BEM in conjunction with Bootstrap:
```html
<section class="home">
   <div class="container">
     <div class="row">
        <div class="col-12">
           <div class="home__box">
              <div class="home__box__content">
                   <h1>Hello World</h1>
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

## How to best use Bootstrap?
_Bootstrap entered the market as a CSS framework, focused on components, unlike Tailwind, which is utility-first, focused on utilities. This way, Bootstrap comes pre-defined with components, colors, fonts, and styles. Many don't know, but Bootstrap offers source files for download to be used in your own way._

_It is recommended that you only change the `_variables.scss` file, as from the variables you can have the autonomy to change, for example, `text-primary`, `bg-secondary` to colors of your choice. There are countless possibilities for how to customize Bootstrap to your liking!_

#### As the default Bootstrap/Sass standard:
_As a standard of Bootstrap, it comes set in this way, so that each component is guided by these variables. But what if we could change it in our own way?_

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


#### After changing the `_variables.scss` file:
_After changing the `$primary` variable to `#e6381f`, every time you call a pre-defined class such as `text-primary` or `bg-primary`, it will automatically use the hexadecimal color we set to `#e6381f` by default. This applies to colors, fonts, sizes, etc. The possibilities are endless!_

```scss
// Variables
// Color system

// scss-docs-start theme-color-variables
$primary:       #e6381f !default;
// scss-docs-end theme-color-variables

```

## Directory Structure

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

### Rewriting components the right way:

_Do you know that embarrassing thing we have to do sometimes? Be it a component created by you or something ready from bootstrap? Well, this file in particular is directed towards exactly this! The infamous and controversial `!important`, and for this the `_overrides.scss` fulfills its promise._


1. Rewriting Bootstrap component:

```scss
.form {
    border: none!important;

    input:focus {
        border-color: #86b7fe!important;
    }

}

```


### Gulp:
_Using Gulp saves a lot of time. `By using Gulp, you will no longer perform tedious tasks that have become the responsibility of your Operating System`, such as: Compiling Sass files to CSS. Concatenation (combination) of several JavaScript files, file renaming, file minification, and a sea of possibilities for you to venture into!_


1. Examples of production and development tasks and when to use them:

1.1 Development task, should be used in the development environment for testing, refactoring, where this task has the goal of expanding the minified file for better readability, in the moment of finding that notorious bug!.
```js
// To run this task, type the following in the root project terminal: 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

```

1.2 Development task should be used during the development stage for testing, refactoring, with the aim of expanding the minified file for better readability when finding a bug.
Production task should be used at the decisive moment when we are about to make the final release, for whichever server it may be. This task has the goal of minifying the file, converting Sass to CSS. That's right, you read that correctly, small dev! No more tedious tasks, leave it to Gulp to handle it for you. Beyond just minifying and converting, it redirects the minified and converted file to the css/main.css folder, isn't that wonderful!

```js
// To run this task, type the following in the root project terminal: 'gulp sassprod'

gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(cssDest));
});

```


# Libs
_Here I present you some pre-configured libraries starting from this template, below I highlight the main `libraries` of this theme and their examples of how to use them, which will influence the development of your project.._


### Slick Slider
_Making a carousel will never be a problem again
This small open source library (made available under the MIT license) created by [Ken Wheeler](http://kenwheeler.github.io/) (current director of open source at Formidable Labs, Inc) and now has over 21,000 stars on GitHub, makes creating a carousel extremely easy. The best part is that we don't have to sacrifice flexibility and customization. In short, it helps us without limiting us._

1. create with slider and slick:

1.1
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

1.2
```js
$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
});
```

### AOS Animation
_[AOS](https://michalsnik.github.io/aos/) (Animate On Scroll) is a library that allows you to apply different types of animations on scroll to the elements (blocks, images, etc.) that make up your website._

1. Creating and activating animations with AOS:

1.1
```html
<div class="item" data-aos="fade-up">fade-up</div>
<div class="item" data-aos="fade-down">fade-down</div>
<div class="item" data-aos="zoom-in">zoom-in</div>
<div class="item" data-aos="zoom-out">zoom-out</div>
<div class="item" data-aos="slide-up">slide-up</div>
<div class="item" data-aos="flip-right">flip-right</div>
<div class="item" data-aos="flip-left">flip-left</div>
```

1.2
```html
<script> 
    AOS.init(); 
<script>
```


## :rocket: To install the project, follow these steps:


_Follow the steps below for the best template experience:_

1. Clone the project:
   ```sh
   git clone https://github.com/Manrriquez/scalable-starter-boilerplate-manrriquez.git
   ```
   
## :wrench: Follow these steps to start the project:


_Follow the steps below for the best template experience_

1. Download the necessary dependencies:
   ```npm
   npm install
   ```

2. Any changes in the project scss, type in the terminal at the root of the project: 
   ```npm
   gulp
   ```
   

## Bugs & Suporte

Developed and structured by [@Manrriquez](https://www.linkedin.com/in/manrriiquez/). If there are any errors or bugs, please contact me as soon as possible.

## Reference links

Reference links used to structure this template, where everything was possible.

- [BOOTSTRAP](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [SASS](https://sass-lang.com/)
- [Scalable and Modular Architecture for CSS](http://smacss.com/book) (<abbr title="Scalable and Modular Architecture for CSS">SMACSS</abbr>)
- [BEM](http://getbem.com/introduction/)
- [SLICK SLIDER](https://imasters.com.br/front-end/slick-js-fazer-um-carrossel-nunca-foi-tao-facil)
- [AOS ANIMATE](https://michalsnik.github.io/aos/)

<!-- LICENSE -->
## License


Distributed under the MIT license. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

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