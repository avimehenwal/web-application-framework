# Next.js

> Web Framework Sotware

- build on top of `node.js` to build `react` apps, Recommended Toolchains
- server-side rendering to reduce the burden on web browsers and provide enhanced security
- webpack 5 as code bundler
- code splitting to promote Lazy loading
  - is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.
  - Tree Shaking - dead code elimination optimization

## 6 principles

1. out-of-the box functionality requiring no setup,
2. JavaScript everywhere, all functions are written in JavaScript,
3. automatic code-splitting and server-rendering,
4. configurable data-fetching,
5. anticipating requests, and
6. simplifying deployment.

## How to use

- Pre-rendering
  - SSG
  - SSR
- @client -> hydration
- Environment variables for each deployment environment @client and @server
- nextjs @erver marks routes with getStaticProps and executes it before serving/pre-rendering the page. Dynamic page
  - runs for EACH and every request
- else @server @build time marks it as static page

## Timeline

| timeline | description     |
| -------- | --------------- |
| 2016     | initial release |

- used by Netflix, GitHub, Uber, Ticketmaster, and Starbucks

## Features

- preview of real-time collaborative coding functionality
- automatic conversion from Create React App to Next.js compatible form

### Questions

##### Why everything (all page components) are rendered at least twice?

I guess because Pages in next.js are server side rendered (or pre-rendered).
So in this case when next.js is rendering your page(server side), the script will console.log("Index Component Called") then on your frontend react it's hydrating so all the code coming from the server should be executed again.
In next.js you can execute Server Side code inside getInitialProps, and in pages only not components.

Also has to do with strict mode

```js
module.exports = {
  reactStrictMode: true,
};
```
