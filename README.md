# Quizzes

Quiz SPA Game made with Vue.js 3 framework and JSON data fetched externally.

## Demo

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=flat&logo=github&logoColor=white)](https://eimwe.github.io/quizzes/)

## Technology stack

- Vue 3 Composition API
- Vue Router
- Dart Sass
- JavaScript ES8+
- Vite

## Test environment

| Browser         | Version |
| --------------- | ------- |
| Google Chrome   | 112     |
| Mozilla Firefox | 112     |
| Safari          | 16      |

## API Setup

1. Rename `.env.sample` file into `.env`;
2. Create your quiz data in JSON according to the [given structure](https://api.npoint.io/83ef935a4e807fa235ec);
3. Select the JSON storage. For this project I used [npoint.io](https://www.npoint.io/) (sign up required);
4. Replace `const URL` contents at `.src/api/config.js` with your JSON storage path excluding `BIN_ID`;
5. Copy/paste your JSON bin id to the `.env` file.

## Project Setup

1. Clone the repository
2. Run `npm ci` to install dependencies
3. Run one of the following commands:

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Preview the Production Build

```sh
npm run preview
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## Attributions

1. **Irene** for testing the project across numerous devices, creating quiz content, and suggesting new ideas such as score table with answer keys 💜
2. [Laith Academy](https://www.youtube.com/@laithacademy) for the detailed tutorial on how to create quiz app from [this YT video](https://youtu.be/I_xLMmNeLDY);
3. [Kitty](https://kittygiraudel.com/) for the 7-1 sass files organizing pattern [described in this article](https://sass-guidelin.es/#architecture);
4. [Nicolas Gallagher](https://nicolasgallagher.com/) for the _normalize.css_ file that you can [get from this source](https://necolas.github.io/normalize.css/);
5. [easyScript](https://stackoverflow.com/users/2390645/easyscript) for a hint on turning on the css sourcemaps in [their stackoverflow reply](https://stackoverflow.com/a/73648558)\*;
6. [tony19](https://stackoverflow.com/users/6277151/tony19) for the example of Rollup config to change output file directories described in [their post](https://stackoverflow.com/a/71190586)\*;
7. [mahan](https://stackoverflow.com/users/8292178/mahan) for taking the above solution a little bit further and giving an example of distributing fonts in a separate output folder in [this post](https://stackoverflow.com/a/72024201)\*;
8. [Maciek Sitkowski](https://www.youtube.com/@macieksitkowski) for showing the proper way of deploying vite project to GitHub Pages in [this YT video](https://youtu.be/MKw-IriprJY);
9. [fedorqui](https://stackoverflow.com/users/1983854/fedorqui) for the instruction on how to undo several pushed commits in [this post](https://stackoverflow.com/a/36177806)\*
10. [tao](https://stackoverflow.com/users/1891677/tao) and [Duannx](https://stackoverflow.com/users/4254681/duannx) for 'how to' strategies concerning fetching data inside Vue components in these two stackoverflow replies: [one from tao](https://stackoverflow.com/a/65753437)\* and [the other one from Duannx](https://stackoverflow.com/a/73485601)\*;
11. [Dmitri Pavlutin](https://dmitripavlutin.com/about-me/) for a concise tutorial on how to desctructure props in Vue Composition API in [this blog entry](https://dmitripavlutin.com/props-destructure-vue-composition/);
12. [Kevin Powell](https://www.kevinpowell.co/) for the inspirational and highly informative pieces of advice on how to make the corners of the Internet just a little bit more awesome;
13. [jcomp](https://www.freepik.com/author/jcomp) for [the image](https://www.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_13330330.htm#&position=2&from_view=author) I used in this project's social preview.

**\*** - _all stackoverflow content is licensed by https://creativecommons.org/licenses/by-sa/4.0/_

## Contributing

If you get interested in this project, I'd be glad to see your contributions. Pull requests are welcome!
