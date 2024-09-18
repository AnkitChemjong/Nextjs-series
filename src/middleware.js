import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoute = createRouteMatcher(['/onboard(.*)','/membership(.*)','/activity(.*)','/jobs(.*)','/account(.*)'])

export default clerkMiddleware((auth, req) => {
  // Restrict the route until you are logged in
  if (isProtectedRoute(req)) {
    auth().protect();
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}