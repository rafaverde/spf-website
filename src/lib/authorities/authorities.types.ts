export interface AuthorityPerson {
  name: string;
  imageSrc?: string;
  title?: string;
}

export interface AuthorityListMember {
  name: string;
}

export interface AuthorityListSection {
  sectionKey: string;
  members: AuthorityListMember[];
  subsectionKey?: string;
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
