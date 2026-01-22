import { AuthorityRole } from "./authority.roles";

export interface RawAuthorityItem {
  name: string;
  role: AuthorityRole;
  title?: string;
  imageSrc?: string;
}
