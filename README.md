# env
A simple module to load environment variables from a `.env` file.

## Usage
```js
  import { env } from 'env';
  ...
  const dbUser = env('DB_USER', 'This is a fallback');
```
