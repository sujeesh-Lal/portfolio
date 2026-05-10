# Sujeesh Lal — Portfolio

Personal portfolio website for **Sujeesh Lal**, a Technical Architect with 17+ years of experience designing and delivering scalable web platforms for global enterprises.

Live at: [vercel.app](https://portfolio-nine-ivory-hch9lv754j.vercel.app) _(update with your actual URL)_

---

## About

This site showcases Sujeesh's professional background, technical expertise, featured projects, and certifications. It includes a working contact form and smooth page animations.

---

## Tech Stack

| Layer      | Technology                                     |
| ---------- | ---------------------------------------------- |
| Framework  | [Next.js 14](https://nextjs.org/) (App Router) |
| Language   | TypeScript                                     |
| Styling    | Tailwind CSS                                   |
| Animations | Framer Motion                                  |
| Icons      | React Icons                                    |
| Email      | [Resend](https://resend.com) (contact form)    |
| Deployment | Vercel (recommended)                           |

---

## Project Structure

```
portfolio/
├── app/
│   ├── api/          # API routes (contact form)
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/
│   ├── About.tsx     # Experience & certifications
│   ├── Contact.tsx   # Contact form
│   ├── Footer.tsx
│   ├── Hero.tsx      # Landing section
│   ├── Navigation.tsx
│   ├── Projects.tsx  # Featured projects
│   └── Skills.tsx    # Skills with proficiency bars
├── lib/
│   └── data.ts       # All portfolio content (single source of truth)
└── public/           # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/sujeesh-Lal/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable         | Description                                                                    |
| ---------------- | ------------------------------------------------------------------------------ |
| `RESEND_API_KEY` | Resend API key for contact form emails (optional — sign up free at resend.com) |

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## Customisation

All portfolio content lives in [`lib/data.ts`](lib/data.ts). Edit that single file to update:

- Personal info, bio, and contact details
- Work experience
- Skills and proficiency levels
- Featured projects
- Certifications

---

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add the `RESEND_API_KEY` environment variable under **Project Settings → Environment Variables** in Vercel to enable the contact form.

---

## Contact

- Email: sujeeshdl@gmail.com
- GitHub: [github.com/sujeesh-Lal](https://github.com/sujeesh-Lal)
- Location: India
