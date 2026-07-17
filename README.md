# Ali Basit — Portfolio

A personal portfolio for Ali Basit, an AI and full-stack engineer. It's a small,
fast static site with no build step and no framework dependencies.

## Built with

- HTML, CSS, and vanilla JavaScript
- No frameworks, no bundler — just static files
- Google Fonts (Cormorant Garamond, DM Sans, DM Mono)

## Pages

- **Home** — intro, what I do, featured projects, and video testimonials
- **Projects** — filterable grid of AI, web, automation, and data-science work
- **About** — background, experience, skills, and credentials
- **Contact** — ways to reach me, an FAQ, and client testimonials

## Structure

```
.
├── index.html
├── about.html
├── projects.html
├── contact.html
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── images/
    └── media/        (CV and testimonial videos)
```

## Running locally

It's a static site, so just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.
