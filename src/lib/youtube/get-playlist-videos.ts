import "server-only";
import { YoutubePlaylistVideo } from "./youtube.types";

const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/playlistItems";

interface GetPlaylistVideosParams {
  maxResults?: number;
}

export async function getPlayListVideos(
  params: GetPlaylistVideosParams = {},
): Promise<YoutubePlaylistVideo[]> {
  const { maxResults = 6 } = params;

  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID;

  await new Promise((resolve) => setTimeout(resolve, 10000));

  if (!apiKey || !playlistId) {
    throw new Error("Youtube API key or Playlist ID not configured.");
  }

  const url = new URL(YOUTUBE_API_URL);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("playlistId", playlistId);
  url.searchParams.set("maxResults", String(maxResults));
  url.searchParams.set("key", apiKey);

  const response = await fetch(url.toString(), {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch YouTube playlist videos.");
  }

  const data = await response.json();

  return data.items.map(
    (item: any): YoutubePlaylistVideo => ({
      id: item.id,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      videoId: item.snippet.resourceId.videoId,
      publishedAt: item.snippet.publishedAt,
    }),
  );
}
