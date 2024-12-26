import express from 'express';
import cors from 'cors';
import { Connection } from '@solana/web3.js';
import { StakeProtocolProvider } from './provider.js';

const app = express();
const port = process.env.PORT ?? 6666;

// Initialize Solana connection and stake protocol provider
const connection = new Connection('https://api.mainnet-beta.solana.com');
const stakeProtocolProvider = new StakeProtocolProvider(connection);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Stake pool info endpoint
app.get('/api/stake-pool-info', async (req, res) => {
    try {
        const poolInfo = await stakeProtocolProvider.getStakePoolInfo();
        res.json(poolInfo);
    } catch (error) {
        console.error('Error fetching stake pool info:', error);
        res.status(500).json({
            error: 'Failed to fetch stake pool information',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

// Get Stake Pool List
app.get('/api/stake-pool-list', async (req, res) => {
    try {
        const stakePoolList = await stakeProtocolProvider.getStakePoolList();
        res.json(stakePoolList);
    } catch (error) {
        console.error('Error fetching stake pool list:', error);
        res.status(500).json({
            error: 'Failed to fetch stake pool list',
            message: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
