# GitHub API

The client code uses github api v3 and the server code use v4.

## GraphQL

Login and use the Github GraphQL explorer
[here](https://developer.github.com/v4/explorer/).

```graphql
query {
  user(login: "carltonj2000") {
    repositories {
      totalCount
    }
  }
}
```

## History

The client code in this repository is based on the
[Using the GitHub API With JavaScript Part 1: GET Requests From a Content Management System](https://www.youtube.com/watch?v=lJ2sTHMXwJk)
video.
