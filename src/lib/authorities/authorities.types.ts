export interface AuthorityPerson {
  name: string;
  imageSrc?: string;
  title?: string;
}

export interface AuthorityListMember {
  name: string;
}

export interface AuthorityListSection {
  sectionTitle: string;
  members: AuthorityListMember[];
  subsectionTitle?: string;
  subSectionMembers?: AuthorityListMember[];
}

export interface AuthoritiesPageData {
  titularMembers: {
    presidency: AuthorityPerson[];

    secretary: AuthorityListSection;
    treasury: AuthorityListSection;
    vowels: AuthorityListSection;
    alternates: AuthorityListSection;

    fiscalCommition: AuthorityListSection;
  };
}
