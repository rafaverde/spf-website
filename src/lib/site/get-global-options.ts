import { AppLocale } from "@/i18n/routing";
import { fetchWp } from "../wp/wp.client";
import { GlobalOptions } from "./global.types";

export async function getGlobalOptions(
  locale: AppLocale = "es",
): Promise<GlobalOptions> {
  const { data: globalOptions } = await fetchWp<GlobalOptions>(
    "global-options",
    {
      namespace: "spf/v1",
      locale,
      revalidate: 60,
    },
  );

  return globalOptions;
}
