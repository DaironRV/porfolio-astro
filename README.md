# Astro Porfolio Dairon

```sh
 git clone https://github.com/DaironRV/porfolio-astro.git
```
```sh
 git remote -v
 git remote remove origin
 git remote add origin <nueva_url_del_repositorio>
```



> 🧑‍🚀 **Listo para despegar** Esto fue demasiado divertido!

![just-the-basics](https://media.discordapp.net/attachments/1112216671227215965/1232458133256011878/image.png?ex=66298794&is=66283614&hm=1bfca476f59fec3bb29101f334cf36f15baa6ca372b170679919a91f0bbaac34&=&format=webp&quality=lossless&width=1139&height=559)

## 🚀 Estructura Del Proyecto

Esta es la estructura de mi proyecto

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

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial en `src/components/`, pero es donde solemos colocar componentes de `Astro/React/Vue/Svelte/Preact.`

Los activos estáticos, como imágenes, se pueden colocar en el directorio `public/`

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

## 👀 Quieres ver mas?

Proyecto: [Python](https://github.com/DaironRV/contador-monedas-camara.git) O con [Estado de empleabilidad](https://github.com/programateacademy/c9-interno-empleabilidad.git).
