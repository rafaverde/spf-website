import { fetchWp } from "../wp/wp.client";
import { GlobalOptions } from "./global.types";

export async function getGlobalOptions(): Promise<GlobalOptions> {
  const { data: globalOptions } = await fetchWp<GlobalOptions>(
    "global-options",
    {
      namespace: "spf/v1",
    },
  );

  return globalOptions;
}
