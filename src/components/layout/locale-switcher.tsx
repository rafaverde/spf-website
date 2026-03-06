import { usePathname, useRouter } from "@/i18n/navigation";
import { AppLocale } from "@/i18n/routing";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";

const LOCALES: Array<{ value: AppLocale; label: string; flag: string }> = [
  { value: "es", label: "Español", flag: "/flags/es.svg" },
  { value: "en", label: "English", flag: "/flags/en.svg" },
];

function resolvePathForLocaleSwitch(pathname: string) {
  if (pathname.startsWith("/actualidad/")) return "/actualidad";
  return pathname;
}

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;

  function handleChange(nextLocale: string) {
    const targetLocale = nextLocale as AppLocale;
    const targetPath = resolvePathForLocaleSwitch(pathname);

    router.replace(targetPath, { locale: targetLocale });
  }

  const current = LOCALES.find((item) => item.value === locale) ?? LOCALES[0];

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger className="[&_svg]:stroke-spf-green-300 border-none shadow-none">
        <SelectValue>
          <span className="inline-flex items-center gap-2">
            <Image
              src={current.flag}
              alt={current.label}
              width={16}
              height={16}
              className="size-4"
            />
          </span>
        </SelectValue>
      </SelectTrigger>

      <SelectContent position="popper" align="end">
        {LOCALES.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            <span className="inline-flex items-center gap-2">
              <Image src={item.flag} alt={item.label} width={16} height={16} />
              {item.label}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
