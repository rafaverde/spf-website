export interface TeamMember {
  name: string;
  jobTitle: string;
  imageSrc?: string;
  linkedInUrl?: string;
}

export interface TeamPageData {
  team: TeamMember[];
}
