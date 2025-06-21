// components/NewsSection.tsx
import { News } from "@/lib/types";

interface NewsSectionProps {
  news: News[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div key={item.id} className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.date}</p>
          <p className="text-gray-600 dark:text-gray-300">{item.excerpt}</p>
        </div>
      ))}
    </div>
  );
}