import "server-only";
import { wpConfig } from "./wp.config";

interface FetchWpOptions {
  params?: Record<string, string | number | undefined>;
  revalidate?: number;
  namespace?: string;
}

export async function fetchWp<T>(
  endpoint: string,
  options: FetchWpOptions = {},
): Promise<{ data: T; headers: Headers }> {
  const namespace = options.namespace || "wp/v2";
  const url = new URL(`${wpConfig.baseUrl}/wp-json/${namespace}/${endpoint}`);

  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  const response = await fetch(url.toString(), {
    next: {
      revalidate: options.revalidate ?? 60,
    },
  });

  if (!response.ok) {
    throw new Error(`WP Api Error: ${response.status}`);
  }

  const data = await response.json();

  return {
    data,
    headers: response.headers,
  };
}
