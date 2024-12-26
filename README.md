# Solana LST Data Provider

A TypeScript-based data provider for fetching and managing stake pool information from various Solana liquid staking protocols including Marinade, Jito, Blaze, MarginFi, and JPool.

## Features

- Fetches APY and TVL data from multiple liquid staking protocols
- Implements caching mechanism to reduce API calls
- Includes retry mechanism for improved reliability
- TypeScript support for better development experience

## Installation

Using pnpm:

```bash
pnpm install
```

Using yarn:

```bash
yarn install
```

## Build

Using pnpm:

```bash
pnpm run build
```

Using yarn:

```bash
yarn build
```

## Development

Using pnpm:

```bash
pnpm run dev
```

Using yarn:

```bash
yarn dev
```

## Usage

Using pnpm:

```bash
pnpm run start
```

Using yarn:

```bash
yarn start
```

## API Endpoints

The server runs on port 6666 by default and provides the following endpoints:

- `GET /health` - Health check endpoint
- `GET /api/stake-pool-info` - Get information about all stake pools including APY, TVL, and other metrics
- `GET /api/stake-pool-list` - Get a list of supported stake pools
