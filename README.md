# App

## Running the App

Install all the dependencies with
```
cd backend
npm i

cd ../client
npm i
```

Start the Express server with

`node backend/server.js`

Then start the client with

```
cd client
npm start
```


## Communicating with Backend

once the backend is actually working, you can just `fetch` to make requests to the API, and then set whatever state you need.

```javascript
componentDidMount(){
  fetch('/api/users')
   .then(res => res.json())
   .then(users => this.setState({ users }));
}
```
