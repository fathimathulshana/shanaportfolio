# Fathimathul Shana N — Portfolio

A soft-minimal personal portfolio built with HTML, CSS and JavaScript.

## Files
- `index.html` — page content
- `style.css` — styling and responsive layout
- `script.js` — animations, mobile menu and theme toggle
- `assets/profile.jpg` — add your own profile picture here

## Add your photo
1. Choose a portrait photo.
2. Rename it exactly `profile.jpg`.
3. Put it inside the `assets` folder.
4. If you use a different filename, update `src="assets/profile.jpg"` in `index.html`.

## Preview on your computer
Open `index.html` in your browser. For the best development experience, open the folder in VS Code and use the Live Server extension.

## Publish with GitHub Pages
1. Sign in to GitHub and click **New repository**.
2. Name it `shana-portfolio` (or another name you like), set it to **Public**, and create it.
3. In the repository, choose **Add file → Upload files**.
4. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder (with your `profile.jpg` inside).
5. Commit the files.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then click **Save**.
9. Wait a few minutes. Your site will be at `https://YOUR-GITHUB-USERNAME.github.io/shana-portfolio/`.

## Customise
- Update your details and project description in `index.html`.
- Change colours in the `:root` variables at the top of `style.css`.
- Add more projects by copying the `<article class="project-card">...</article>` block.
- The theme toggle remembers the selected theme in your browser.

## Resume
A **Download resume** link is included in the hero section. To make it work, add your resume PDF to the project root (the same folder as `index.html`) and name it exactly `resume.pdf`. The link will then download it.
