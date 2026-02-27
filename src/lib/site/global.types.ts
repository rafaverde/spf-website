export interface GlobalOptions {
  branding?: {
    logo_principal: string;
    icon_marca: string;
    footer_description: string;
  };

  navigation?: {
    label: string;
    href: string;
  }[];
}
