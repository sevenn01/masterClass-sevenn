//import {   clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { authMiddleware, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { isPagesAPIRouteMatch } from "next/dist/server/future/route-matches/pages-api-route-match";

/*
export default authMiddleware({
  
})*/


const isProtectedRoute = createRouteMatcher([
  //'/courses/(.*)', // Protect all sub-routes under /courses
  //'/api/courses',  // Protect the API route for courses
])


export default clerkMiddleware((auth, req) => {
  if(isProtectedRoute(req)) auth().protect()
  

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    '/', // Home route
    '/courses', // Courses route
    '/api/courses', // API route
  ],
};

/*
function authMiddleware(arg0: {}) {
  throw new Error("Function not implemented.");
}
*/
/*
function customAuthMiddleware(arg0: {}) {
  throw new Error("Function not implemented.");
}
*/