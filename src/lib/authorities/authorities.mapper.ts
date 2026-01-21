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
    sectionTitle: string,
    role: AuthorityRole,
  ): AuthorityListSection => ({
    sectionTitle,
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

      secretary: mapListSection("Secretario", AuthorityRole.SECRETARY),
      treasury: mapListSection("Tesorero", AuthorityRole.TREASURER),
      vowels: mapListSection("Vocales", AuthorityRole.VOWEL),
      alternates: mapListSection("Suplentes", AuthorityRole.ALTERNATE),

      fiscalCommition: {
        sectionTitle: "Comisión Fiscal",
        members: byRole(AuthorityRole.FISCAL).map((item) => ({
          name: item.name,
        })),
        subsectionTitle: "Suplentes",
        subSectionMembers: byRole(AuthorityRole.FISCAL_ALTERNATE).map(
          (item) => ({
            name: item.name,
          }),
        ),
      },
    },
  };
}
