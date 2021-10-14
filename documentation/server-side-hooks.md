---
title: Server side Hooks
tags:
  - hooks
  - server-side
---

# Server side Hooks

<TagLinks />

## How to useHooks in getServerSideProps?

> What a bummer, cannot use `useEffect` on @server?

useEffect runs after component render and there would be another re-render after it fetches data.
However, on the server-side, there is only one render cycle. No updates. No re-renders.

### Making API calls from frontend

https://react-query.tanstack.com/overview

<Footer />
