# Art Portfolio

> A personal portfolio website for a visual artist, showcasing their artwork, biography, and contact information for commissions and collaborations.

<img width="1600" height="816" alt="image" src="https://github.com/user-attachments/assets/0ad6d855-7998-49ac-83b9-209f04ae3559" />

## Live Demo

**[https://lau-landing-eta.vercel.app/](https://lau-landing-eta.vercel.app/)**

## Description

**Art Portfolio** is a responsive website that presents a curated gallery of artwork, an artist biography, and a contact form for commissions and collaborations.

Built with **Next.js 16** and **React 19**, the app serves images from a Cloudflare R2 bucket via a Cloudflare Worker, delivering a clean and focused art viewing experience.

### Features

- **Responsive gallery**: Grid layout that adapts from 1 to 3 columns based on screen size
- **Hover effects**: Subtle scale transitions and overlay on gallery items
- **Contact form**: React Hook Forms with Zod validation and Web3Forms email integration
- **Dark theme**: Dark-mode-first design with a warm color palette and serif typography
- **Mobile-first**: Responsive header with accordion menu on mobile, fixed navigation on desktop
- **Smooth scrolling**: Anchor-based navigation between sections
- **Loading states**: Spinner during image fetch operations
  
### Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI (Dialog, Accordion) |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| HTTP | Axios |
| Fonts | Inter, Playfair Display, JetBrains Mono |
| Storage | Cloudflare R2 + Cloudflare Workers |
| Email | Web3Forms |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- A [Web3Forms access key](https://web3forms.com/) (free)
- A Cloudflare R2 bucket and Worker URL for image hosting
  
### Installation

1. Clone the repository:

```
git clone https://github.com/mikemem44/lau-landing.git
cd lau-landing
```

2. Install dependencies:

```
npm install
```

4. Create a .env.local file and add your environment variables:

```
NEXT_PUBLIC_WORKER_URL=https://your-r2-worker-url.workers.dev
NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY=your_web3forms_access_key
```

6. Start the development server:

```
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000).

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (home)/             # Homepage with all sections
│   └── layout.tsx          # Root layout with fonts
├── components/
│   ├── layout/             # Header, Footer, Main wrapper
│   │   └── main/           # Hero, About, Gallery, ContactMe
│   └── ui/                 # Input, Label, Textarea, Loading, Sonner
├── hooks/                  # Custom data-fetching hooks (useImages)
├── common/                 # Types and API constants
├── libs/                   # Axios client with base URL config
└── utils/                  # cn() utility (clsx + tailwind-merge)
```
## To-Dos

- [ ] Integrate i18n for English and Spanish support
- [ ] Improve overall performance and loading times
- [ ] Migrate to static site generation where applicable
- [ ] Explore lightweight animation libraries for subtle page transitions
