// app/components/LoadingScreen.tsx
'use client';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#03001417] backdrop-blur-md z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16 animate-spin">
          <Image
            src="/nexzgencircular.png"
            alt="Loading..."
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-white font-semibold animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
}
