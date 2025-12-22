// src/lib/news/get-all-news.ts
import "server-only";
import { newsMock } from "./news.mock";

export async function getAllNews() {
  return [...newsMock].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
