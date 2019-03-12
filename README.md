# JS API Proxy Design Pattern
This repository is a POC of JavaScript API proxy design patterns. 

## Advantages of encapsulating API calls

- Abstracts consumers from technology used to retrieve data from APIs.
- Allows re-usability of API calls across different consumers.
- Allows mocking of API layers in unit testing.

## Booting up

```sh
# Open a terminal and run API project
npm run start

# On another terminal, you can run projects 001-003
# most of them will be running on http://localhost:8080
npm run serve
```

## Endpoints

The following endpoint(s) are used for testing API consumptions using API proxies.

### User List

```
 GET http://localhost:3000/users
```

```js
// Response
{
    users: [
      {
        id: 1,
        first_name: "Allan",
        last_name: "Chua"
      },
      {
        id: 2,
        first_name: "Pogs",
        last_name: "Chua"
      },
      {
        id: 3,
        first_name: "Camille",
        last_name: "Gonzales"
      },
      {
        id: 4,
        first_name: "John",
        last_name: "Richardson"
      }
    ]
  });
}
```

### Positive Get by ID (200)

```
// Any number 1-4 would return 200
GET http://localhost:3000/1
```
```json
{
 "user": {
   "id":2,
   "first_name":"Pogs",
   "last_name":"Chua"
 }
}
```

### Negative Get By ID 404
```
// Any number outside 1-4 returns 404
GET http://localhost:3000/5
```

```json
{
 "message":"Item not found."
}
```
