# Personal Portfolio Website

This repository contains my personal portfolio website built with **Eleventy (11ty)** to generate static HTML pages.  
The site is automatically built and deployed to **GitHub Pages** using **GitHub Actions**.

## About This Project

This project was created to showcase my work and experience through a lightweight and maintainable static website. It also serves as a practical implementation of a simple **CI/CD workflow**, where every update pushed to the main branch is automatically built and deployed.

## How It Works

- The website is generated using Eleventy (11ty)
- Static files are built into the `_site` directory
- A GitHub Actions workflow runs on every push to the `main` branch
- The build output is automatically deployed to GitHub Pages

## Tech Stack

- Eleventy (11ty)
- Node.js
- GitHub Actions
- GitHub Pages

## Running Locally

```bash
npm install
npx eleventy --serve
```
