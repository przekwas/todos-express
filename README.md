# Todos Express

This repo and starting code go over a simple Express server setup. We stick to REST guidelines, use basic CRUD operations for our todo list, and we'll be using jQuery's AJAX function on the front end to see how it all comes together.

## File System

This particular example will use node's `fs` module for leveraging file system reads and writes. The pre-made `todos-store.js` (equivalent to `chirpstore.js` in our course) has your basic CRUD operations coded out for you. That way you can focus on learning how we can use Express Endpoints to correspond with out CRUD operations.

-   CreateTodo: takes _any_ object you want, so careful you remain cosistent, and writes it to a JSON file
-   DeleteTodo: takes the id, which is just the key of an object, to delete that todo item
-   GetTodos: takes no argument, and simply returns an object containing all of our data in the JSON file, and note this isn't an array like we're used to seeing
-   GetTodo: takes the id, which retreives only the details of that particular todo item, possibly used on a "details" type page
-   UpdateTodo: takes the id **and** _any_ object we wish to over-write at that id key, so careful to be consistent

## Express App

Here's some breakdowns of our Express App:

```js
app.use(morgan('dev'));
```

this middleware we use to log incoming requests to our server. It's a very handy tool to see what activity is occuring on our servers and helps us debug any problems at a top-level glance in our console logs.

```js
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
```

these middlewares are our "interpreters" for any incoming `req.body` values of types `urlencoded` and `json` we receive. This way our server is front end _agnostic_, it don't care _who_ makes the request, so long as they format their body as `urlencoded` or `json` our server is capable of handling it!

```js
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
```

This is totally overkill for this example, but this tidbit allows us to actually deploy our servers to the real world and have our friends+family break our website in no time.

## Routing

-   `/server/routes/index.js`: this files purpose is to _index_ (like it's in the name or something) of all of our other routers
-   `/server/routes/todos.js`: this file is where the specific endpoints exist for our `todos` resource, aka the purpose of this demo.

## Running the Project

Run each once at a time:

```bash
git clone https://github.com/przekwas/todos-express.git
cd todos-express
npm install
npm run dev
```

The first command will copy my code to your computers via the command line. It will make a new folder called `todos-express` for you, so run this command in your terminal where you want to keep my folder+code. The rest are the usual suspects. Move into the new project folder, install all needed dependencies, and then run the project with `npm run dev`
