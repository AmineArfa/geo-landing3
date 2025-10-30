# Environment Variables

## MapTiler API Key

To use the MapLibre map component, you need a MapTiler API key:

1. Sign up for a free account at https://cloud.maptiler.com/
2. Get your API key from https://cloud.maptiler.com/account/keys/
3. Create a `.env` file in the root directory:
   ```
   VITE_MAPTILER_KEY=your_api_key_here
   ```
4. Restart your development server

The map will work with the demo key for testing, but for production use, you should use your own key.

