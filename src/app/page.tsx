'use client';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans px-4">
      <div className="flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="منصة ثمانية"
          width={180}
          height={38}
          priority
          className="mb-8 dark:invert"
        />
        <p className="text-2xl text-gray-700 dark:text-gray-200 text-center mb-3">
          هنا تجد أفضل محتوى عربي على الإنترنت.
        </p>
        <p className="text-lg font-medium text-center max-w-xl leading-relaxed dark:text-gray-300 text-gray-900">
          نقدّم البودكاست والوثائقيات ونكتب نشرات بريدية تصل يوميا إلى مئات الألوف. من أسلوب الحياة
          إلى الثقافة والسياسة والسينما.
        </p>
        <div className="mt-8 w-full flex justify-center">
          <Button size="lg" className="flex items-center gap-2">
            <Globe size={18} />
            تصفح الآن
          </Button>
        </div>
      </div>
    </div>
  );
}
