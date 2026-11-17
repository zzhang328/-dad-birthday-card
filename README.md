# Dad's birthday card — GitHub Pages version

This is a ready-to-upload static website. No build step or additional software is needed.

## Publish it with GitHub Pages

1. Download and unzip this folder on your computer.
2. On GitHub, create a **new public repository**. A simple name such as `dad-birthday-card` works.
3. Open the repository and choose **Add file → Upload files**. Upload the *contents* of the unzipped folder so `index.html` is at the repository root. Keep `assets/family-photo.jpeg` inside the `assets` folder.
4. Commit the uploaded files.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select branch `main` and folder `/(root)`, then click **Save**.
6. After the Pages deployment finishes, open the URL shown in Settings → Pages. For a regular repository it is usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

GitHub Pages is publicly accessible. Anyone with the site URL can view the page and the family photo included in this package. If you do not want the photo online, remove `assets/family-photo.jpeg` and the matching photo block in `index.html` before publishing.

## Files

- `index.html` — card content and structure
- `style.css` — paper texture, collage lettering, and pop-up scene
- `script.js` — open/close interaction and confetti
- `assets/family-photo.jpeg` — the supplied family photo used in the card
