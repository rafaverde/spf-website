import { mapAuthorities } from "./authorities.mapper";
import { RawAuthorityItem } from "./authorities.raw";
import { AuthorityRole } from "./authority.roles";

export async function getAuthorities() {
  // TEMP: mock / placeholder
  const raw: RawAuthorityItem[] = [];

  return mapAuthorities(raw);
}
