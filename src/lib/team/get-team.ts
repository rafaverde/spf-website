import { AppLocale } from "@/i18n/routing";
import { fetchWp } from "../wp/wp.client";
import { TeamMember } from "./team.types";
import { mapWpTeamMembersToTeam } from "./team.wp.mapper";
import { WpTeamMember } from "./team.wp.types";

export default async function getTeam(
  locale: AppLocale = "es",
): Promise<TeamMember[]> {
  const { data } = await fetchWp<WpTeamMember[]>("team", {
    params: {
      per_page: 100,
      orderby: "date",
      order: "asc",
      _embed: "wp:featuredmedia",
    },
    locale,
    revalidate: 60,
  });

  return data.map(mapWpTeamMembersToTeam);
}
