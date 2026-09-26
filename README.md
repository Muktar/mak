# Shohoz Seat Runner — Windows Desktop

## Development

```bash
npm install
npm start
```

The app opens Shohoz Train in a persistent Electron session and loads the bundled extension automatically. Login cookies and saved profiles remain on the computer.

## Build Windows installers

On Windows:

```bash
npm install
npm run dist
```

Outputs are written to `dist/` as an NSIS installer and a portable executable.

## GitHub Actions build

Push this folder to a GitHub repository, open **Actions → Build Windows App → Run workflow**, then download the `Shohoz-Seat-Runner-Windows` artifact.

## Safety boundaries

- Shohoz login, CAPTCHA, passenger data, and payment remain user-controlled.
- Never store Shohoz passwords or payment details in this project.
- Verify website terms and automation policies before distribution.
