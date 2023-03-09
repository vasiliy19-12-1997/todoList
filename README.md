<<<<<<< HEAD
todoList (React + Typescript + MobX) ☑️
=====================

**todoList**  prototype written in Typescript + React + SASS  built with [MobX].

👉  **Try it out: [Todo Task List ](https://vasiliy19-12-1997.github.io/todoList)**  👈



&nbsp;<br />
<img src="https://user-images.githubusercontent.com/102950888/224048219-b5b25f6e-96ae-4ac3-81ca-8b65a928f51c.png" alt="Nested Task List gif demo" width=600 />
&nbsp;<br />
&nbsp;<br />

Project created by [Konovalov Vasiliy](https://github.com/vasiliy19-12-1997)

# Features


- **Intuitive UI** - Create a task, delete a task, edit a task, complete a task, 
also, when you close the browser, all your tasks are saved.
- **Smart task completion logic** - When the task is completed, you can see the number of completed tasks from above, when you delete it, the status will be updated.
- **Filter completed tasks** - It is possible to sort tasks by name, by completion, and by number.
- **Smart sortings** - Enter the request and only those tasks that match your request will remain.
- **Easy task editing** - If you click edit task, you will get the latest version of the task.
- **Single page application**  - Also, as training purposes, you can look at users, it's just organizing pages using React-Router-Dom
- **Authorization**  - When you log in to the page, you need to enter admin and password:111. Also, if you accidentally closed the browser, the authorization session will be saved.

# Install / Run in dev mode

From the root of the project directory:

```
npm install
npm start
open http://localhost:3000
```

Or if you're a `yarn` person:

```
yarn
yarn start
open http://localhost:3000
```

# Design Considerations

My intention in building this was to create the following:

> A purely client-side (web only) implementation of hierarchical task-list interface, demonstrating good code design and organization.

> In the project I used sass and sometimes inlyne styles.

I chose to build this in React, using MobX to manage the application state.

**Why React?** - It's flexible, exceedingly powerful and well-suited to a project like this with with a simple core design but with lots to add in terms of functionality.

**Why MobX?** - I started the project from the develop branch and there I used hooks and context, but then I found out about MobX and when I started using it, I realized that I didn't need to throw the state through many components and all the logic of methods and states is stored in one place, I liked it

**Why Material-UI** - The authors have done a fantastic job creating components that are visually attractive, precise and also functional. I knew it would be a great library to get me up and running quickly.


=======
# todoList (React + Typescript + MobX) ☑️

**todoList** prototype written in Typescript + React + SASS built with [MobX].

👉  **Try it out: [Todo Task List ](https://vasiliy19-12-1997.github.io/todoList)**  👈

&nbsp;<br />
<img src="https://user-images.githubusercontent.com/102950888/224048219-b5b25f6e-96ae-4ac3-81ca-8b65a928f51c.png" alt="Nested Task List gif demo" width=600 />
&nbsp;<br />
&nbsp;<br />

Project created by [Konovalov Vasiliy](https://github.com/vasiliy19-12-1997)

# Features

- **Intuitive UI** - Create a task, delete a task, edit a task, complete a task,
  also, when you close the browser, all your tasks are saved.
- **Smart task completion logic** - When the task is completed, you can see the number of completed tasks from above, when you delete it, the status will be updated.
- **Filter completed tasks** - It is possible to sort tasks by name, by completion, and by number.
- **Smart sortings** - Enter the request and only those tasks that match your request will remain.
- **Easy task editing** - If you click edit task, you will get the latest version of the task.
- **Single page application** - Also, as training purposes, you can look at users, it's just organizing pages using React-Router-Dom
- **Authorization** - When you log in to the page, you need to enter admin and password:111. Also, if you accidentally closed the browser, the authorization session will be saved.

# Install / Run in dev mode

From the root of the project directory:

```
npm install
npm start
open http://localhost:3000
```

Or if you're a `yarn` person:

```
yarn
yarn start
open http://localhost:3000
```

# Design Considerations

My intention in building this was to create the following:

> A purely client-side (web only) implementation of hierarchical task-list interface, demonstrating good code design and organization.

> In the project I used sass and sometimes inlyne styles.

I chose to build this in React, using MobX to manage the application state.

**Why React?** - It's flexible, exceedingly powerful and well-suited to a project like this with with a simple core design but with lots to add in terms of functionality.

**Why MobX?** - I started the project from the develop branch and there I used hooks and context, but then I found out about MobX and when I started using it, I realized that I didn't need to throw the state through many components and all the logic of methods and states is stored in one place, I liked it

**Why Material-UI** - The authors have done a fantastic job creating components that are visually attractive, precise and also functional. I knew it would be a great library to get me up and running quickly.

>>>>>>> MobX
## Project Structure

For a project of this scale one of the primary considerations was keeping the design simple and understandable. Hence we have:

- **Entry Point** - `src/index.jsx` and `src/App.jsx`.
<<<<<<< HEAD
- **Stores** - `src/stores/store.ts` for au  provide the state management and define the essential actions to manipulate the tree that represents the visual nested task list and context for authorization `src/Context`.
=======
- **Stores** - `src/stores/store.ts` for au provide the state management and define the essential actions to manipulate the tree that represents the visual nested task list and context for authorization `src/Context`.
>>>>>>> MobX
- **App router** - `src/Components/App router` Routing is divided into private and public in `src/Components/Router`.
- **TodosPage** - `src/Components/page/Todo/TodosPage` the main component of the todo sheet there are also other pages.
- **UI** - `src/Components/UI` This folder contains components for the UI interface.
- **Components** - `src/Сomponents` are the React building block components for the app.
<<<<<<< HEAD
 
# Contact

I enjoy hearing from people checking out my projects. Get in touch on telegram [@kebab_case] or email me at
konovalov.vasiliy97@yandex.ru. 
=======

# Contact

I enjoy hearing from people checking out my projects. Get in touch on telegram [@kebab_case] or email me at
konovalov.vasiliy97@yandex.ru.
>>>>>>> MobX
