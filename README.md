# Vue 3

## Description

A compact test project designed to cover the core aspects of modern Vue 3 development — including routing, state management with Pinia, modular architecture, and Feature-Sliced Design principles.

---

## Main Features:

1. **Feature-Sliced Design** — the project is structured according to the Feature-Sliced Design methodology for scalability and maintainability
2. **Routing** — implemented routing between pages: `Main`, `Posts`, `About`, as well as viewing post details
3. **CRUD for posts** — add, delete, view posts, modal window for creating a post
4. **Search and sorting** — search posts by title with debounce, sorting by title and description
5. **Pagination and infinite scroll** — infinite scrolling is implemented using the native Intersection Observer API, with the logic neatly abstracted into a custom reusable hook
6. **Animated post lists** — smooth transitions on post creation, sorting and removal using Vue’s `TransitionGroup`
7. **UI Kit** — reusable components: buttons, inputs, selects, modals, pagination
8. **Responsive design** — styled with SCSS modules, adapted for different screens
9. **State Management** — global state managed with Pinia
10. **Axios** — for working with API (jsonplaceholder)

---

## Tech Stack

1. **Vue 3** — main framework.
2. **TypeScript** — strict typing
3. **Pinia** — modern state management
4. **Vue Router** — routing
5. **Axios** — HTTP client
6. **Vite** — fast development and build tool
7. **SCSS** — modular styles
8. **Husky + Lint Staged** — pre-commit hooks
9. **ESLint + StyleLint + Prettier** — code quality control and auto-formatting

---

## Project launch

```
npm install            # Install dependencies
npm run dev            # Start the project in development mode (Vite)
npm run build          # Build the project
npm run preview        # Preview the production build
```

---

## Scripts

- `npm run dev` — Start the project with Vite
- `npm run build` — Build the project
- `npm run preview` — Preview the production build
- `npm run lint:ts` — Check TypeScript/TSX/Vue files with ESLint
- `npm run lint:ts:fix` — Auto-fix ESLint errors
- `npm run lint:scss` — Check SCSS files with Stylelint
- `npm run lint:scss:fix` — Auto-fix Stylelint errors
- `npm run prettier` — Format code with Prettier
- `npm run prepare` — Set up Husky for git hooks

---

## Project architecture

The project is built using the Feature-Sliced Design methodology.

Documentation — [Feature-Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Linting

The project uses ESLint, Stylelint, and Prettier to maintain code quality.  
ESLint — for TypeScript/Vue, Stylelint — for SCSS, Prettier — for auto-formatting.

##### Running linters and formatter:

- `npm run lint:ts` — Check TypeScript/TSX/Vue files
- `npm run lint:ts:fix` — Auto-fix ESLint errors
- `npm run lint:scss` — Check SCSS files
- `npm run lint:scss:fix` — Auto-fix Stylelint errors
- `npm run prettier` — Format code

---

## Project configuration

The following configs are used for development:

- [Vite](vite.config.ts)

---

## Entities

- [PostItem](src/entities/PostItem/ui/PostItem.vue)

## Features

- [PostList](src/features/PostList/ui/PostList.vue)
- [PostForm](src/features/PostForm/ui/PostForm.vue)
- [CounterFeature](src/features/CounterFeat/ui/CounterFeature.vue)

## Shared UI

- [ButtonUi](src/shared/ui/ButtonUi/ButtonUi.vue)
- [InputUi](src/shared/ui/InputUi/InputUi.vue)
- [SelectUi](src/shared/ui/SelectUi/SelectUi.vue)
- [ModalUi](src/shared/ui/ModalUi/ModalUi.vue)
- [PaginationUi](src/shared/ui/PaginationUi/ui/PaginationUi.vue)

## Widgets

- [NavBar](src/widgets/NavBar/ui/NavBar.vue)

## Pages

- [MainPage](src/pages/MainPage/MainPage.vue)
- [PostsPage](src/pages/PostsPage/PostsPage.vue)
- [AboutPage](src/pages/AboutPage/AboutPage.vue)
- [PostInfoPage](src/pages/PostInfoPage/PostInfoPage.vue)

---

## Screenshots

<img src="https://github.com/NathanBailie/vue-3/raw/master/src/shared/assets/screenshots/main.png" width="700" />
<img src="https://github.com/NathanBailie/vue-3/raw/master/src/shared/assets/screenshots/adaptive.png" width="400" />
