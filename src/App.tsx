import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Stories from "./pages/Stories";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Header from "./components/Header";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Header />
          <Outlet />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create chat route
const chatRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/chat',
  component: Chat,
})

// Create stories route
const storiesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/stories',
  component: Stories,
})

// Create friends route
const friendsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/friends',
  component: Friends,
})

// Create profile route
const profileRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Profile,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  chatRoute,
  storiesRoute,
  friendsRoute,
  profileRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;