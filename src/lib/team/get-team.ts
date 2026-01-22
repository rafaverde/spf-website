import { fetchWp } from "../wp/wp.client";
import { TeamMember } from "./team.types";
import { mapWpTeamMembersToTeam } from "./team.wp.mapper";
import { WpTeamMember } from "./team.wp.types";

export default async function getTeam(): Promise<TeamMember[]> {
  const { data } = await fetchWp<WpTeamMember[]>("team", {
    params: {
      per_page: 100,
      _embed: "wp:featuredmedia",
    },
    revalidate: 60,
  });

  return data.map(mapWpTeamMembersToTeam);
}
