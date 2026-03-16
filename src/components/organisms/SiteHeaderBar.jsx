import BrandLink from "../molecules/BrandLink";
import TopNavigationMenu from "../molecules/TopNavigationMenu";
import ThemeToggle from "../molecules/ThemeToggle";

export default function SiteHeaderBar({ items }) {
  return (
    <div className="site-header__bar">
      <BrandLink />
      <div className="site-header__actions">
        <TopNavigationMenu items={items} />
        <ThemeToggle />
      </div>
    </div>
  );
}
