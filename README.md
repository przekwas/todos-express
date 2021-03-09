# Todos Express

This repo and starting code go over a simple Express server setup. We stick to REST guidelines, use basic CRUD operations for our todo list, and we'll be using jQuery's AJAX function on the front end to see how it all comes together.

## File System

This particular example will use node's `fs` module for leveraging file system reads and writes. The pre-made `todos-store.js` (equivalent to `chirpstore.js` in our course) has your basic CRUD operations coded out for you. That way you can focus on learning how we can use Express Endpoints to correspond with out CRUD operations.

-   CreateTodo: takes _any_ object you want, so careful you remain cosistent, and writes it to a JSON file
-   DeleteTodo: takes the id, which is just the key of an object, to delete that todo item
-   GetTodos: takes no argument, and simply returns an object containing all of our data in the JSON file, and note this isn't an array like we're used to seeing
-   GetTodo: takes the id, which retreives only the details of that particular todo item, possibly used on a "details" type page
-   UpdateTodo: takes the id **and** _any_ object we wish to over-write at that id key, so careful to be consistent
