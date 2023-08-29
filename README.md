# node-cb-demo

Example of how to implement Circuit Breakers in NodeJS. The demo idea is to have two different repositories, one simulating the service (API) we want to protect, and the other one showing a basic CB implementation.

## How to run it

### API
This is a basic Fastify app that enables the endpoint `/demo` that has different behaviors simulated based on query params.
```bash
cd api
npm run start
```

### Circuit Breaker
This is a basic example implementing `Opossum's Circuit Breaker` in a simple Express app. This also uses an `/demo` endpoint.

```bash
cd cb
npm run start
```

## References
- [Opossum GitHub repository](https://github.com/nodeshift/opossum)
- [Opossum's documentation](https://nodeshift.dev/opossum/)