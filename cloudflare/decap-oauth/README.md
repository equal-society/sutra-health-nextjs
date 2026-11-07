# OAuth Worker deployment

The OAuth Worker is a separate service and must not be deployed as part of the Next.js app. Follow `docs/DECAP_CMS_SETUP.md` and deploy a reviewed Decap-compatible Cloudflare Worker. Store OAuth credentials as Cloudflare Worker secrets. Never commit the Client Secret.
