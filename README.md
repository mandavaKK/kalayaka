# kalayaka.com

Simple static site for `kalayaka.com` (GitHub Pages).

## Local preview

Open `index.html` directly, or run a local server:

```powershell
python -m http.server 8000 --directory .
```

Then visit http://localhost:8000.

## Deploy (high level)

1. Push this repo to GitHub.
2. In GitHub repo settings, enable GitHub Pages (deploy from `main` / root).
3. Set the custom domain to `kalayaka.com`.
4. Point DNS at GitHub Pages (A/AAAA records).

The `CNAME` file in this repo is required for GitHub Pages custom domain support.
