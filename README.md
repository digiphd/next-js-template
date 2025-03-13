# Next.js Starter Kit

A modern, feature-rich starter template for building production-ready applications with Next.js, Tailwind CSS, and TypeScript.

![Next Starter Kit](https://dwdwn8b5ye.ufs.sh/f/MD2AM9SEY8GucGJl7b5qyE7FjNDKYduLOG2QHWh3f5RgSi0c)

## Features

### Core Technologies
- ⚡ **Next.js 15** - The latest version with App Router - [https://nextjs.org/](https://nextjs.org/)
- 🎨 **Tailwind CSS** - Utility-first CSS framework - [https://tailwindcss.com/](https://tailwindcss.com/)
- 📘 **TypeScript** - Type-safe code - [https://www.typescriptlang.org/](https://www.typescriptlang.org/)
- 🔒 **Authentication** - Clerk integration with persistent authorization toggle - [https://clerk.dev](https://clerk.dev)
- 🎭 **Shadcn/ui** - Beautiful and accessible components - [https://ui.shadcn.com](https://ui.shadcn.com)
- 💾 **Convex DB** - Real-time database with built-in file storage and serverless functions - [https://convex.dev](https://convex.dev)
- 💳 **Polar.sh** - Open-source solution for managing subscriptions and payments - [https://polar.sh](https://polar.sh)

### Performance Optimizations
- 🚀 **Route Prefetching** - Instant page transitions for dashboard, playground, and auth pages
- 🖼️ **Optimized Images** - Eager loading for critical images
- 🌓 **Dark/Light Mode** - System-aware theme switching with custom gradients
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **Real-time Updates** - Powered by Convex DB's real-time capabilities

### Developer Experience
- 🧩 **Component Library** - Pre-built, customizable components
- 🎮 **AI Playground** - Built-in AI chat interface
- 📊 **Dashboard Template** - Ready-to-use admin interface with subscription management
- 🔍 **SEO Optimized** - Meta tags and sitemap generation

## Convex DB Integration

To set up your Convex database, visit: [https://convex.link/](https://convex.link/)

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [Bun](https://bun.sh/) (v1.0.0 or higher)

#### Install Bun

```bash
curl -fsSL https://bun.sh/install | bash # Macos, Linux, WSL
```
Restart your terminal.
```bash
exec /bin/zsh
```

### Setup

1. Clone the repository:
```bash
git clone https://github.com/digiphd/next-js-template.git
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
CONVEX_ADMIN_KEY=

# Polar.sh
POLAR_WEBHOOK_SECRET=

# Frontend
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional: AI Integration
OPENAI_API_KEY=
```

5. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

```
├── app/
│   ├── (auth)/         # Authentication routes
│   ├── (marketing)/    # Marketing pages
│   ├── api/           # API routes
│   ├── dashboard/     # Dashboard pages
│   └── playground/    # AI Playground
├── components/
│   ├── homepage/     # Landing page components
│   ├── shared/       # Shared UI components
│   └── wrapper/      # Layout wrappers and navigation
├── config/           # Configuration files
├── convex/          # Convex DB schema and functions
├── lib/             # Utility functions
├── public/          # Static assets
│   ├── images/      # Image assets
│   └── svg/         # SVG assets
└── styles/          # Global styles
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## Updating Dependencies

To check for outdated dependencies, run:
```bash
bun outdated
```

To update dependencies, run:
```bash
bun update
```

To update a specific package, run:
```bash
bun update <package-name>
```
Example:
```bash
bun update next typescript @clerk/nextjs convex
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this template helpful, please give it a ⭐️ on GitHub!
