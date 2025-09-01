# KuiperPros Development Agent Instructions

## Project Context
KuiperPros is a two-sided marketplace connecting customers with certified technicians for Amazon Kuiper satellite internet installations. Built with Next.js 14, Tailwind CSS, Prisma, and PostgreSQL.

## Critical Production Rules
1. **ALWAYS test production builds locally before deploying**
   - Run: `npm run build && npm run start`
   - Never trust that dev mode behavior matches production
   
2. **Tailwind CSS Configuration**
   - Content paths MUST include: `'./app/**/*.{js,ts,jsx,tsx,mdx}'`
   - Verify CSS bundle size after build (should be >50KB)
   - Custom brand colors are defined and must be preserved

3. **Database Operations**
   - Always use Prisma transactions for multi-table operations
   - Never expose database IDs in URLs - use UUIDs
   - Run `npx prisma generate` after schema changes

## Common Issues & Solutions
- **Tailwind not working in production**: Check content paths in tailwind.config.js
- **Prisma client errors**: Regenerate with `npx prisma generate`
- **Email not sending**: Verify SENDGRID_API_KEY in environment
- **Image uploads failing**: Check AWS S3 permissions and CORS settings

## Code Standards
### Naming Conventions
- API routes: `/api/[resource]/[action]` (e.g., `/api/quotes/submit`)
- Components: PascalCase with descriptive names
- Database models: Singular nouns (User, Job, Payment)
- Environment variables: SCREAMING_SNAKE_CASE

### Security Requirements
- All admin routes must check for admin role
- Technician routes must verify technician status
- Use Zod for all input validation
- Sanitize file uploads before S3 storage
- Never log sensitive data (passwords, API keys)

### SEO & Performance
- Primary domain: kuiperpro.com (not kuiperpros.com)
- Focus keywords: "Kuiper installation", "Amazon satellite internet"
- Implement dynamic OG images for location pages
- Use Next.js Image component for all images
- Implement loading states for all async operations

## Testing Checklist Before Deploy
- [ ] Run `npm run build && npm run start` locally
- [ ] Test quote submission flow end-to-end
- [ ] Verify email notifications are sent
- [ ] Check mobile responsiveness
- [ ] Test technician login and job acceptance
- [ ] Verify admin dashboard access control
- [ ] Check all environment variables are set in Vercel

## API Response Patterns
### Success Response
```typescript
{
  success: true,
  data: any,
  message?: string
}
```

### Error Response
```typescript
{
  success: false,
  error: string,
  code?: string
}
```

## Database Patterns
### Always use transactions for job assignment
```typescript
await prisma.$transaction(async (tx) => {
  // Update job status
  // Create payment record
  // Send notifications
})
```

### Soft deletes preferred over hard deletes
```typescript
// Don't do: await prisma.user.delete()
// Do: await prisma.user.update({ deletedAt: new Date() })
```

## Component Guidelines
- Use server components by default
- Client components only when needed (forms, interactivity)
- Implement error boundaries for all dynamic sections
- Use Suspense for async components
- Prefer composition over prop drilling

## State Management Rules
- Use Zustand for global client state
- Server state via React Query or SWR
- Form state via React Hook Form
- Never store sensitive data in localStorage

## File Upload Requirements
- Max file size: 10MB
- Allowed formats: jpg, jpeg, png, pdf
- Generate unique S3 keys with timestamps
- Implement virus scanning before storage
- Compress images before upload

## Email Templates
- Use SendGrid dynamic templates
- Always include unsubscribe link
- Test with real email addresses
- Log all sent emails in database

## Environment Variables Required
```
DATABASE_URL
NEXTAUTH_URL
NEXTAUTH_SECRET
SENDGRID_API_KEY
EMAIL_FROM
GOOGLE_MAPS_API_KEY
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
S3_BUCKET_NAME
STRIPE_SECRET_KEY
STRIPE_PUBLISHABLE_KEY
```

## Pre-Launch Critical Tasks
1. Set up Stripe webhook endpoints
2. Configure custom domain emails
3. Implement rate limiting on API routes
4. Set up error monitoring (Sentry)
5. Configure automated backups
6. Implement GDPR compliance features

## Known Technical Debt
- [ ] Implement Redis for session management
- [ ] Add comprehensive error logging
- [ ] Create automated test suite
- [ ] Implement real-time notifications
- [ ] Add analytics tracking
- [ ] Optimize database queries with indexes

## Quick Commands
```bash
# Development
npm run dev

# Test production build
npm run build && npm run start

# Database
npx prisma studio      # GUI
npx prisma db push     # Sync schema
npx prisma generate    # Generate client
npx prisma migrate dev # Create migration

# Deployment
git push origin main   # Auto-deploy via Vercel
```

## Contact for Issues
- Technical issues: Create GitHub issue
- Urgent production issues: Check Vercel logs first
- Database issues: Check connection pool limits