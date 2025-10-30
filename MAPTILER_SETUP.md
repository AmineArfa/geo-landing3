# Environment Variables

## MapTiler API Key

To use the MapLibre map component, you need a MapTiler API key:

1. Sign up for a free account at https://cloud.maptiler.com/
2. Get your API key from https://cloud.maptiler.com/account/keys/
3. **For Local Development**: Create a `.env` file in the root directory:
   ```
   VITE_MAPTILER_KEY=your_api_key_here
   ```
4. **For Vercel Deployment**: See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions

## Important Notes

- The demo key (`get_your_own_OpIi9ZULNHzrESv6T2vL`) works for local testing but **will NOT work on Vercel/production**
- You **must** set `VITE_MAPTILER_KEY` as an environment variable in Vercel
- Add `.env` to `.gitignore` to avoid committing your API key

## Quick Vercel Setup

1. Get your MapTiler API key
2. In Vercel Dashboard: Settings → Environment Variables
3. Add `VITE_MAPTILER_KEY` with your key value
4. Redeploy your site

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for complete instructions.


