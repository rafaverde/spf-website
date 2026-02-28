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

  contact?: {
    address: string;
    email: string;
    phones: { phone: string }[];
  };

  social?: { label: string; href: string; icon: string }[];

  footer?: {
    cta: { label: string; href: string };
    copyright: string;
  };

  general?: {
    asuntos_laborales: {
      label: string;
      file_url: string;
    };
  };
}
