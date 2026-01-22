import { TeamMember } from "./team.types";
import { WpTeamMember } from "./team.wp.types";

export function mapWpTeamMembersToTeam(item: WpTeamMember): TeamMember {
  return {
    name: item.title.rendered,
    jobTitle: item.acf.job_title,
    linkedInUrl: item.acf.linkedin_url,
    imageSrc: item._embedded?.["wp:featuredmedia"]?.[0].source_url,
  };
}
