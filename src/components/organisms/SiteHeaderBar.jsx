import BrandLink from "../molecules/BrandLink";
import TopNavigationMenu from "../molecules/TopNavigationMenu";

export default function SiteHeaderBar({ items }) {
  return (
    <div className="site-header__bar">
      <BrandLink />
      <TopNavigationMenu items={items} />
    </div>
  );
}
