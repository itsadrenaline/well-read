# Well Read

Static site. Everything served lives in `public/`.

- Deploy: `npx wrangler deploy` from this folder, or connect the repo to a Cloudflare Worker (Workers Builds) and push.
- Hero footage: drop a `hero.mp4` into `public/` and it plays in place of the drawn bookshelf.
- Covers load from Open Library at runtime.
