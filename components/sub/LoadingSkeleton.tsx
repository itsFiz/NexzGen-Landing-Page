// app/components/LoadingSkeleton.tsx
'use client';

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="h-screen w-full bg-gray-900/20" />
      
      {/* About Section Skeleton */}
      <div className="h-96 w-full bg-gray-900/20 mt-20" />
      
      {/* Services Section Skeleton */}
      <div className="h-96 w-full bg-gray-900/20 mt-20" />
      
      {/* Additional sections... */}
    </div>
  );
}