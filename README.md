# Next.js Rendering and Routing for the Pages Router: A Practical Guide

Copyright © 2025 Michael Abler. Licensed under CC BY-ND 4.0.

## Introduction

This document provides a comprehensive guide to rendering and routing in Next.js, a popular React framework for building modern web applications. It focuses on the core rendering methods—Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), and Client-Side Rendering (CSR)—and their associated routing patterns, such as dynamic and prerendered URLs. By explaining key concepts, functions, and practical examples, the document equips developers with the knowledge to implement efficient and scalable page-rendering strategies in Next.js.

This document applies to the Next.js **Pages Router** (using the `pages/` directory for file-based routing). As of April 2025, the Pages Router remains relevant for maintaining and upgrading existing Next.js applications, particularly those built before the App Router’s introduction in Next.js 13. The techniques described (e.g., `getServerSideProps`, `getStaticProps`) are compatible with Next.js versions 9 through 14 and likely later, though the App Router is recommended for new projects. Check the official Next.js documentation for any version-specific changes or deprecations.

For advanced Next.js features that complement rendering and routing—such as API Routes, Middleware, Preview Mode, and Internationalized Routing—refer to the companion document ["Advanced Next.js Features for the Pages Router: A Practical Guide"](https://github.com/MichaelAblerCode/next_pagesrouter_advanced#).

This document is licensed under the Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0) License. You may share it in its original form, provided you credit the author. See LICENSE.md for details.

### Target Audience

The document is designed for:

- **Web developers** with an **intermediate understanding of React** (e.g., components, hooks, props, async data fetching) and **basic familiarity with Next.js** (e.g., pages, file-based routing), seeking to learn or deepen their knowledge of Next.js rendering and routing.
- **Intermediate Next.js users** looking for a concise reference on rendering methods, dynamic routes, and best practices.
- **Technical leads or architects** with React and Next.js experience, evaluating rendering strategies for performance, SEO, and scalability in Next.js projects.

Familiarity with React components, asynchronous JavaScript (e.g., `async/await`), and basic Next.js concepts (e.g., pages, routing) is assumed. Beginners new to Next.js or React may benefit from reviewing the official Next.js and React documentation for foundational concepts before diving in.

### Purpose and Motivation

The purpose of this document is to serve as a focused, practical resource for implementing rendering and routing in Next.js, enabling developers to:

- **Understand rendering methods**: Learn how SSR, SSG, ISR, and CSR work, including their functions (`getServerSideProps`, `getStaticProps`, `getStaticPaths`) and routing patterns (dynamic, catch-all, and prerendered URLs).
- **Make informed decisions**: Use the comparison of rendering methods to choose the best approach for specific use cases, balancing performance, SEO, data freshness, and complexity.
- **Apply best practices**: Follow clear, actionable code examples to build pages for common scenarios like blogs, e-commerce, dashboards, and documentation.

The motivation for this document stems from the critical role that rendering and routing play in Next.js applications. Choosing the right rendering method impacts user experience, search engine visibility, server costs, and development efficiency. By consolidating essential concepts, examples, and decision-making guidance into a single resource, this document aims to streamline the learning process and empower developers to build high-performance Next.js applications.

For advanced Next.js features that complement rendering and routing—such as API Routes, Middleware, Preview Mode, and Internationalized Routing—refer to the companion document ["Advanced Next.js Features for the Pages Router: A Practical Guide"](https://github.com/MichaelAblerCode/next_pagesrouter_advanced#).

### Contributions

Contributions to this document are welcome! I encourage the community to suggest improvements, correct errors, or propose additional examples to enhance its value. To contribute, please fork the repository on GitHub, submit pull requests with your changes, or open issues to discuss ideas. All contributions will be reviewed to ensure alignment with the document’s purpose and quality standards. Note that the document is licensed under CC BY-ND 4.0, meaning only the official, unmodified version may be distributed publicly, but your contributions can be incorporated into updates by the author. For details, see the [CONTRIBUTING.md](CONTRIBUTING.md) file in the repository.

# Table of Contents

1. [Server-Side Rendering (SSR) - Dynamic URLs](#1-server-side-rendering-ssr---dynamic-urls)
2. [Static Site Generation (SSG) - Single Prerendered URL](#2-static-site-generation-ssg---single-prerendered-url)
3. [Static Site Generation (SSG) - Multiple Prerendered URLs](#3-static-site-generation-ssg---multiple-prerendered-urls)
4. [Incremental Static Regeneration (ISR)](#4-incremental-static-regeneration-isr)
5. [Client-Side Rendering (CSR)](#5-client-side-rendering-csr)
6. [Comparison of Rendering Methods](#6-comparison-of-rendering-methods)

## 1. Server-Side Rendering (SSR) - Dynamic URLs

Dynamic URLs are defined by folder and file names, where file names in square brackets (e.g., `[slug].js`) act as variables. Next.js supports single dynamic parameters, nested dynamic routes, and catch-all routes for flexible URL handling.

**Function Used:**

```javascript
export async function getServerSideProps({ params })
```

- **Input:**
  - `{ params }`: An object containing the dynamic URL parameters.
    - For a file `[slug].js`, `params.slug` holds the URL segment value (e.g., `params.slug = 'post-1'` for `/post-1`).
    - For a nested route `[category]/[id].js`, `params` contains multiple properties (e.g., `params = { category: 'electronics', id: '123' }` for `/electronics/123`).
    - For a catch-all route `[...category].js`, `params.category` is an array of URL segments (e.g., `params.category = ['electronics', 'phones']` for `/electronics/phones`).
    - For an optional catch-all route `[[...category]].js`, `params.category` is either `undefined` for the root path (e.g., `/`) or an array for nested paths (e.g., `params.category = ['electronics', 'phones']` for `/electronics/phones`).
- **Output:**

  - `{ props }`: An object whose properties are passed to the page component.

- **Use Case:**
  - Pages that require real-time data fetching on each request, such as user-specific content, frequently updated pages, or complex routing scenarios like documentation or category pages.

**Examples:**

- **Single Dynamic Route:**

```javascript
// pages/[slug].js
export async function getServerSideProps({ params }) {
  const data = await fetchData(params.slug);
  return { props: { data } };
}
```

- **Nested Dynamic Route:**

```javascript
// pages/[category]/[id].js
export async function getServerSideProps({ params }) {
  const data = await fetchData(params.category, params.id);
  return { props: { data } };
}
```

- **Catch-All Route:**

```javascript
// pages/[...category].js
export async function getServerSideProps({ params }) {
  const data = await fetchData(params.category); // e.g., ['electronics', 'phones']
  return { props: { data } };
}
```

- **Optional Catch-All Route:**

```javascript
// pages/[...category].js
export async function getServerSideProps({ params }) {
  const data = await fetchData(params.category); // e.g., ['electronics', 'phones']
  return { props: { data } };
}
```

## 2. Static Site Generation (SSG) - Single Prerendered URL

Static pages are prerendered at build time for a single, fixed URL defined by the folder and file name (e.g., `about.js`).

**Function Used:**

```javascript
export async function getStaticProps()
```

- **Input:**

  - None. Data is fetched during the build process to render the page.

- **Output:**

  - `{ props }`: An object whose properties are passed to the page component.

- **Use Case:**
  - Pages with content that doesn’t change often, such as marketing pages or blog posts.

```javascript
// pages/about.js
export async function getStaticProps() {
  const data = await fetchData();
  return { props: { data } };
}
```

## 3. Static Site Generation (SSG) - Multiple Prerendered URLs

Dynamic routes with multiple prerendered pages are defined using placeholders (e.g., `[id].js`) and require specifying which paths to prerender. Next.js supports single dynamic parameters, nested dynamic routes, and catch-all routes for flexible static generation.

**Functions Used:**

```javascript
export async function getStaticPaths()
```

- **Input:**

  - None.

- **Output:**
  - `{ paths, fallback }`:
    - `paths`: An array of objects defining the dynamic parameter values to prerender.
      - For `[id].js`, e.g., `{ params: { id: '1' } }`.
      - For `[category]/[id].js`, e.g., `{ params: { category: 'electronics', id: '123' } }`.
      - For `[...category].js` or `[[...category]].js`, e.g., `{ params: { category: ['electronics', 'phones'] } }` or `{ params: { category: undefined } }` for the root path in optional catch-all routes.
    - `fallback`: Controls behavior for non-prerendered paths:
      - `false`: Returns 404 for unknown paths.
      - `true`: Generates pages on-demand (requires `getStaticProps`).
      - `'blocking'`: Generates pages on-demand with a blocking request.
    - The `paths` array supplies `params` to `getStaticProps` for fetching page data. `getStaticPaths` requires `getStaticProps` to provide props to the page component, similar to how standalone `getStaticProps` or `getServerSideProps` props are delivered to the page component.

**Purpose:**
Designates dynamic URLs for prerendering during build time in static generation.

```javascript
export async function getStaticProps({ params })
```

- **Input:**

  - `{ params }`: An object containing the dynamic URL parameters.
    - For `[id].js`, `params.id` holds the value (e.g., `params.id = '1'`).
    - For `[category]/[id].js`, `params` contains multiple properties (e.g., `params = { category: 'electronics', id: '123' }`).
    - For `[...category].js`, `params.category` is an array (e.g., `params.category = ['electronics', 'phones']`).
    - For `[[...category]].js`, `params.category` is `undefined` for the root path or an array for nested paths.

- **Output:**
  - `{ props }`: An object whose properties are passed to the page component.

**Purpose:**
Fetches data for each prerendered page based on the `params`.

**Use Case:**
Pages with dynamic routes (e.g., blog posts, product pages, or documentation) that can be prerendered at build time.

**Examples:**

- **Single Dynamic Route:**

```javascript
// pages/posts/[id].js
export async function getStaticPaths() {
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchData(params.id);
  return { props: { data } };
}
```

- **Nested Dynamic Route:**

```javascript
// pages/[category]/[id].js
export async function getStaticPaths() {
  const paths = [{ params: { category: "electronics", id: "123" } }];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchData(params.category, params.id);
  return { props: { data } };
}
```

- **Catch-All Route:**

```javascript
// pages/[...category].js
export async function getStaticPaths() {
  const paths = [{ params: { category: ["electronics", "phones"] } }];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchData(params.category);
  return { props: { data } };
}
```

- **Optional Catch-All Route:**

```javascript
// pages/[[...category]].js
export async function getStaticPaths() {
  const paths = [
    { params: { category: undefined } }, // Root path
    { params: { category: ["electronics", "phones"] } },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const category = params?.category || []; // Handle root path or array
  const data = await fetchData(category);
  return { props: { data } };
}
```

## 4. Incremental Static Regeneration (ISR)

ISR extends SSG (applies to both single and multiple prerendered URLs) by allowing pages to be regenerated in the background after a specified time interval, without requiring a full rebuild.

**Function Used:**

```javascript
export async function getStaticProps()
```

- **Input:**

  - None for single static URLs, or `{ params }` for dynamic routes (same as SSG).

- **Output:**
  - `{ props, revalidate }`:
    - `props`: An object whose properties are passed to the page component.
    - `revalidate`: A number (in seconds) after which `getStaticProps` is rerun to regenerate the page.

**Use Case:**
Pages with static content that needs periodic updates, such as news articles or product listings.

**Example:**

```javascript
// pages/news.js
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60, // Regenerate every 60 seconds
  };
}
```

## 5. Client-Side Rendering (CSR)

Pages or components fetch data in the browser using client-side JavaScript, typically with React hooks or libraries like SWR.

**Function Used:**

- None (uses client-side APIs like `fetch` or libraries in `useEffect`).

- **Input:** None (data fetching occurs after the page loads in the browser).
- **Output:** None (data is managed in component state).
- **Use Case:** Dynamic, user-specific content like dashboards or real-time feeds.

**Example:**

```javascript
// pages/dashboard.js
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? data.message : "Loading..."}</div>;
}
```

## 6. Comparison of Rendering Methods

Choosing the right rendering method in Next.js depends on factors like performance, SEO requirements, data freshness, and development complexity. Below is a brief comparison of **Server-Side Rendering (SSR)**, **Static Site Generation (SSG)**, **Incremental Static Regeneration (ISR)**, and **Client-Side Rendering (CSR)** to guide decision-making.

| **Factor**             | **SSR**                                                               | **SSG**                                                 | **ISR**                                                               | **CSR**                                                             |
| ---------------------- | --------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Rendering Location** | Server (on each request)                                              | Build time (static HTML)                                | Build time + on-demand regeneration                                   | Browser (client-side JavaScript)                                    |
| **Performance**        | Slower initial load (server processing per request); good for SEO     | Fastest initial load (prebuilt HTML); excellent for SEO | Fast initial load (like SSG); periodic updates maintain freshness     | Slower initial load (requires client-side fetching); SEO challenges |
| **Data Freshness**     | Real-time (fetched on every request)                                  | Static (data fixed at build time)                       | Periodic updates (regenerates after `revalidate` interval)            | Real-time (fetched in browser)                                      |
| **SEO**                | Excellent (fully rendered HTML)                                       | Excellent (fully rendered HTML)                         | Excellent (fully rendered HTML)                                       | Poor (requires JavaScript execution; needs prerendering for SEO)    |
| **Server Load**        | High (processes every request)                                        | Low (serves static files)                               | Low (serves static files, occasional regeneration)                    | Low (data fetching offloaded to client)                             |
| **Use Case**           | User-specific or frequently updated content (e.g., dashboards, feeds) | Static content (e.g., blogs, marketing pages)           | Static content with periodic updates (e.g., news, product listings)   | Dynamic, user-specific content (e.g., real-time dashboards)         |
| **Complexity**         | Moderate (requires server-side logic)                                 | Simple (build-time data fetching)                       | Moderate (build-time + regeneration logic)                            | Moderate (client-side state management)                             |
| **Trade-Offs**         | Slower load times but ensures fresh data; higher server costs         | Fastest and cheapest but inflexible for dynamic data    | Balances speed and freshness but requires careful `revalidate` tuning | Flexible for dynamic data but poor SEO and initial load performance |

**When to Choose**:

- **SSR**: Use for pages requiring real-time data or user-specific content, where SEO is critical (e.g., e-commerce product pages, personalized feeds).
- **SSG**: Ideal for content that rarely changes, prioritizing performance and low server costs (e.g., blog posts, documentation).
- **ISR**: Best for static content needing occasional updates without rebuilding the entire site (e.g., news articles, product catalogs).
- **CSR**: Suitable for highly dynamic, user-specific interfaces where SEO is less critical (e.g., admin dashboards, real-time apps).

**Note**: You can combine methods within a Next.js app (e.g., SSG for marketing pages, SSR for user profiles, CSR for dashboards) to optimize performance and functionality.

# License

This project is licensed under the [Creative Commons Attribution-NoDerivatives 4.0 International License (CC BY-ND 4.0)](https://creativecommons.org/licenses/by-nd/4.0/). See the [LICENSE](LICENSE) file for details

Copyright © 2025 Michael Abler. Licensed under CC BY-ND 4.0.
