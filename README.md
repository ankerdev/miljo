# env
A simple module to load environment variables from a `.env` file, and covert them to their respective type.
It currently handles `string`, `number` (integer and float) and `boolean` values.

## Signature
```ts
(key: string, fallback?: any) => any;
```

## Usage
`.env` file:
```
NODE_ENV=production
THROTTLE_REQUESTS=true 
REQUESTS_PER_MIN=10.5
```

`.js`/`.ts` file:
```ts
import { env } from 'env';
const nodeEnv: string = env('NODE_ENV', 'development');
const throttleRequests: boolean = env('THROTTLE_REQUESTS', false);
const requestsPerMin: number = env('THROTTLE_REQUESTS', 1);
```

Would output:
```ts
nodeEnv => (string) 'production';
throttleRequests => (boolean) true;
requestsPerMin => (number) 10.5;
```
