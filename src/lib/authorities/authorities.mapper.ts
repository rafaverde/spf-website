import { RawAuthorityItem } from "./authorities.raw";
import {
  AuthoritiesPageData,
  AuthorityListSection,
  AuthorityPerson,
} from "./authorities.types";
import { AuthorityRole } from "./authority.roles";

export function mapAuthorities(items: RawAuthorityItem[]): AuthoritiesPageData {
  const byRole = (role: AuthorityRole) =>
    items.filter((item) => item.role === role);

  const mapListSection = (
    sectionKey: string,
    role: AuthorityRole,
  ): AuthorityListSection => ({
    sectionKey,
    members: byRole(role).map((item) => ({ name: item.name })),
  });

  const presidency: AuthorityPerson[] = [
    ...byRole(AuthorityRole.PRESIDENT),
    ...byRole(AuthorityRole.VICE_PRESIDENT),
  ].map((item) => ({
    name: item.name,
    title: item.title ?? "",
    imageSrc: item.imageSrc,
  }));

  return {
    titularMembers: {
      presidency,

      secretary: mapListSection("secretary", AuthorityRole.SECRETARY),
      treasury: mapListSection("treasury", AuthorityRole.TREASURER),
      vowels: mapListSection("vowels", AuthorityRole.VOWEL),
      alternates: mapListSection("alternates", AuthorityRole.ALTERNATE),

      fiscalCommition: {
        sectionKey: "fiscalCommission",
        members: byRole(AuthorityRole.FISCAL).map((item) => ({
          name: item.name,
        })),
        subsectionKey: "alternates",
        subSectionMembers: byRole(AuthorityRole.FISCAL_ALTERNATE).map(
          (item) => ({
            name: item.name,
          }),
        ),
      },
    },
  };
}
