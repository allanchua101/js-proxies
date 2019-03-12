# JS Proxy Design Pattern
This repository is a POC of JavaScript proxy design pattern. It showcases the advantages of encapsulating API calls inside proxies so that API calls could be re-used between different components and how could they be mocked to make your code testable.


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

### Get by ID

```
// Any number 1-4 would return 200
GET http://localhost:3000/1

// Any number outside 1-4 returns 404
GET http://localhost:3000/5
```
