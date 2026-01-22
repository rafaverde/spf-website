import { RawAuthorityItem } from "./authorities.raw";
import { AuthorityRole } from "./authority.roles";

export interface WpAuthority {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    role: string;
    title?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export function mapWpAuthorityToRaw(item: WpAuthority): RawAuthorityItem {
  return {
    name: item.title.rendered,
    role: mapRole(item.acf.role),
    title: item.acf.title,
    imageSrc: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  };
}

function mapRole(role: string): AuthorityRole {
  if (Object.values(AuthorityRole).includes(role as AuthorityRole)) {
    return role as AuthorityRole;
  }

  throw new Error(
    `Invalid AuthorityRole "${role}". Check ACF field "role" in Authority CPT.`,
  );
}
