'use client';
import Image from 'next/image';

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
        <p className="text-lg font-medium text-center max-w-xl leading-relaxed">
          منصة رقمية عربية تقدّم محتوى معرفي وألعاب تفاعلية بجودة عالية لجمهور واسع.
        </p>
        <div className="mt-8 w-full flex justify-center">
          <button
            className="
              rounded-full px-8 py-4 text-xl font-bold
              bg-black text-white dark:bg-white dark:text-black
              shadow-md
              hover:bg-zinc-800 dark:hover:bg-zinc-100
              transition-transform transform hover:scale-105 active:scale-95
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400
              select-none cursor-pointer
            "
          >
            إبدأ الآن
          </button>
        </div>
      </div>
    </div>
  );
}
