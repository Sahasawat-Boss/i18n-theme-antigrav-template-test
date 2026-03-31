import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import ClientLangSwitcher from "./ClientLangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default async function Navbar({ locale }: { locale: string }) {
  const t = await getTranslations("Navigation");

  return (
    <nav className="navbar">
      <div className="logo">AntiGrav.</div>
      <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link href="/" className="nav-link">{t("home")}</Link>
        <Link href="/contact" className="nav-link">{t("contact")}</Link>
        <ClientLangSwitcher currentLocale={locale} />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
