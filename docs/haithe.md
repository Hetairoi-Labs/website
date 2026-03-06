# Building Haithe: Decentralized AI Orchestration and Smart Contract Settlement

The current AI development landscape forces engineers to surrender data privacy to centralized providers and offers no secure mechanism to monetize individual AI components like prompts or knowledge bases. We engineered Haithe to break these silos. By combining a high-concurrency Rust backend with the Metis L2 blockchain, we built a fully non-custodial, composable ecosystem for AI agent deployment and automated financial settlement.

> **The Architecture:** Haithe orchestrates multi-provider AI interactions off-chain using an async-first Rust architecture, while settling access controls and revenue routing immutably on the Metis L2 network.

### The AI Orchestration Engine

Centralized AI models exist in isolated environments lacking interoperability. To build a composable tool system, we architected the core orchestration layer in Rust using Actix Web 4.9.0. This backend operates with a strict async-first design, allowing the system to handle high-concurrency WebSocket connections for real-time AI chat interfaces without thread blocking.

* **Dynamic Model Resolution:** The engine seamlessly routes prompts across multiple providers, including OpenAI, Gemini, and DeepSeek, utilizing dynamic parameter injection.
* **Sandboxed Composability:** The platform executes custom tools (RPC, MCP, Rust, JavaScript, Python) within isolated runtime environments, allowing AI agents to interact securely with external APIs and knowledge bases.
* **Database Optimization:** Multi-tenant AI platforms frequently bottleneck at the database layer when tracking per-call API metrics. We optimized the backend queries using SQLite combined with SQLx to maintain low-latency responses during high transaction volumes.

### On-Chain Settlement and Smart Contracts

To eliminate the monetization barrier for AI creators, we replaced traditional SaaS billing with a decentralized, smart contract-driven financial rail deployed on the Metis L2 Hyperion network.

* **Multi-Tenant Access Control:** The `HaitheOrchestrator` and `HaitheOrganization` contracts manage complex workspace permissions and enable organizations to pool USDT balances for API usage.
* **Automated Fee Routing:** When an AI agent utilizes a community-built tool, the `HaitheProduct` contract calculates the per-call cost and executes automated, gas-optimized USDT revenue distributions directly to the creator's wallet.
* **NFT-Based Identity:** Creator profiles and accumulated funds are tracked via the `HaitheCreatorIdentity` ERC721 contract, allowing creators to immutably prove ownership of their AI models and withdraw earnings.

### Zero-Trust Authentication and Frontend Integration

We built the client-facing application using React 19 and TypeScript, integrating Privy and Wagmi for seamless Web3 onboarding.

* **Cryptographic Session Management:** We eliminated reliance on centralized credential databases. Authentication requires a user to sign a time-limited nonce with their Web3 wallet. The Rust backend verifies this cryptographic signature using `secp256k1` before issuing a JWT.
* **State and Performance:** The frontend relies on Zustand for global UI state and TanStack Query for caching server state, ensuring the interface remains highly responsive even when querying complex on-chain analytics or rendering real-time WebSocket chat data.

The result is a production-grade orchestration platform that successfully decentralizes AI infrastructure, connecting raw computational logic directly to on-chain financial settlement.