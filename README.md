# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://media.discordapp.net/attachments/1112216671227215965/1232458133256011878/image.png?ex=66298794&is=66283614&hm=1bfca476f59fec3bb29101f334cf36f15baa6ca372b170679919a91f0bbaac34&=&format=webp&quality=lossless&width=1139&height=559)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Contacto/
│   │   │   ├──ContactaConMigo.astro
│   │   │   └──ContainerCCM.astro
│   │   │
│   │   ├── Proyecto/
│   │   │   ├──ProyectosCard.astro
│   │   │   └──ProyectosImage.astro
│   │   │
│   │   ├── Tecnologias/
│   │   │   ├──BaseCatrocarts.astro
│   │   │   ├──Combinacion.astro
│   │   │   ├──CuatroCarts.astro
│   │   │   └──UnaCart.astro
│   │   │
│   │   ├── cartAvilidades.astro
│   │   ├── CartPerfil.astro
│   │   ├── CartProyectImage.astro
│   │   ├── cartProyectContainer.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Image.astro
│   │   ├── NavBar.astro
│   │   ├── SobreMi.astro
│   │   └── Title.astro
│   ├──config
│   │    └── Data.json
│   │    └── DataProyectos.jason
│   │    └── DataTecnologis.jason
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run subir`           | Subir a GitHub Pages                             |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
