# Dockerizing A React - Node - Redis App

- `client` folder has the Node API in which Redis is connected.
- `server` folder has the React App.
- Each time the page loads, it sends a request to the server and fetches the number of time it has been loaded.
- The value of the total loads of the page is stored in Redis.
