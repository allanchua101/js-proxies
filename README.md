# JS Proxy Design Pattern
This repository is a POC of JavaScript proxy design pattern. It showcases the advantages of encapsulating API calls inside proxies so that API calls could be re-used between different components and how could they be mocked to make your code testable.


## Endpoint as Subject

The following endpoint(s) are used for testing API consumptions using API proxies.

### User List
```
GET http://localhost:3000/users
```
