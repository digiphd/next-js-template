"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  return (
    <ClerkProvider>
      <ClerkProviderContent convexUrl={convexUrl}>{children}</ClerkProviderContent>
    </ClerkProvider>
  );
}

function ClerkProviderContent({ 
  children,
  convexUrl 
}: { 
  children: ReactNode;
  convexUrl: string | undefined;
}) {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  // If Convex URL is not provided, just render the children without Convex provider
  if (!convexUrl) {
    console.log('Convex URL not provided, running in development mode without Convex');
    return <>{children}</>;
  }

  try {
    const convex = new ConvexReactClient(convexUrl);
    return (
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    );
  } catch (error) {
    console.error('Failed to initialize Convex client:', error);
    // If Convex initialization fails, still render the app without Convex functionality
    return <>{children}</>;
  }
}
