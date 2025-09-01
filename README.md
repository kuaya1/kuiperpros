# KuiperPros - Amazon Kuiper Installation Marketplace

> Professional satellite internet installation services marketplace connecting customers with certified technicians nationwide.

[![Next.js](https://img.shields.io/badge/Next.js-14.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.15-2D3748)](https://www.prisma.io/)

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/your-username/kuiperpros.git
cd kuiperpros

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Set up database
npx prisma db push
npx prisma generate

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## ⚠️ Critical: Production Build Testing

**Always test production builds locally before deploying:**

```bash
npm run build && npm run start
```

This prevents Tailwind CSS and other production-only issues.

## 🛠 Tech Stack

- **Framework:** Next.js 14 with App Router
- **Database:** PostgreSQL + Prisma ORM
- **Auth:** NextAuth.js
- **Styling:** Tailwind CSS + Radix UI
- **Email:** SendGrid
- **Storage:** AWS S3
- **Payments:** Stripe
- **Maps:** Google Maps API

## 📁 Project Structure

```
kuiperpros/
├── app/              # Next.js pages and API routes
├── components/       # React components
├── lib/              # Business logic
├── prisma/           # Database schema
└── types/            # TypeScript definitions
```

## 🔑 Environment Variables

Create `.env.local` with:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-secret-key"

# Services
SENDGRID_API_KEY="SG...."
GOOGLE_MAPS_API_KEY="AIza..."
AWS_ACCESS_KEY_ID="..."
AWS_SECRET_ACCESS_KEY="..."
S3_BUCKET_NAME="kuiperpros-uploads"

# Stripe (Optional)
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

## 💡 Key Features

### For Customers
- Instant installation quotes
- Photo upload for property assessment
- Real-time technician matching
- Job tracking and updates

### For Technicians
- Job marketplace access
- Service area management
- Earnings tracking
- Professional dashboard

### For Admins
- Technician approval workflow
- Platform analytics
- User management
- Activity monitoring

## 🚦 Development Workflow

### Database Changes
```bash
npx prisma db push        # Sync schema changes
npx prisma generate       # Regenerate client
npx prisma studio         # Visual database editor
```

### Common Commands
```bash
npm run dev               # Development server
npm run build             # Production build
npm run start             # Production server
npm run lint              # Run ESLint
npm run type-check        # TypeScript validation
```

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/quotes/submit` | POST | Submit installation quote |
| `/api/technician/jobs` | GET | Get available jobs |
| `/api/technician/jobs/[id]/accept` | POST | Accept a job |
| `/api/admin/technicians` | GET | List technicians |
| `/api/admin/technicians/[id]/approve` | POST | Approve technician |

## 🐛 Troubleshooting

### Tailwind CSS not working in production
- Check `tailwind.config.js` content paths
- Ensure all component directories are included
- Rebuild: `rm -rf .next && npm run build`

### Prisma client errors
```bash
npx prisma generate
npm run dev
```

### Email not sending
- Verify SENDGRID_API_KEY
- Check sender domain verification
- Review SendGrid logs

## 🚢 Deployment

The project auto-deploys to Vercel on push to `main`.

### Pre-deployment Checklist
- [ ] Test production build locally
- [ ] Verify all environment variables in Vercel
- [ ] Run database migrations
- [ ] Test critical user flows
- [ ] Check mobile responsiveness

## 📈 Performance Monitoring

- Use Vercel Analytics for performance metrics
- Monitor database connection pool
- Track API response times
- Review error logs regularly

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

Proprietary - All rights reserved

## 🆘 Support

- **Technical Issues:** Create GitHub issue
- **Urgent Problems:** Check Vercel logs
- **Database Issues:** Review connection limits

---

Built with ❤️ for the future of satellite internet installation