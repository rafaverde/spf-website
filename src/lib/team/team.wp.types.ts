export interface WpTeamMember {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    job_title: string;
    linkedin_url?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}
