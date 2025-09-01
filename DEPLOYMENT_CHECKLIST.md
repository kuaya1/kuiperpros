# Deployment Checklist

## Before Every Deployment

### Local Testing
- [ ] Run `npm run test:prod` locally
- [ ] Verify styles render correctly at http://localhost:3000
- [ ] Test on mobile viewport
- [ ] Check browser console for errors

### Code Review
- [ ] Tailwind config includes all component paths
- [ ] No hardcoded localhost URLs
- [ ] Environment variables documented
- [ ] Database migrations ready

### Final Checks
- [ ] Run `npm run build` - must complete without errors
- [ ] CSS bundle size > 50KB (check with `npm run postbuild`)
- [ ] All forms tested end-to-end
- [ ] Error pages render correctly

## Post-Deployment Verification

- [ ] Visit production URL
- [ ] Verify styles loaded
- [ ] Test quote submission
- [ ] Check technician login
- [ ] Monitor error logs for 15 minutes
