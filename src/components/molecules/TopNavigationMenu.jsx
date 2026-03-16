import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

function NavItem({ item }) {
  if (item.href.startsWith("#")) {
    return (
      <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <a href={item.href}>{item.label}</a>
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  }

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link to={item.href}>{item.label}</Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}

export default function TopNavigationMenu({ items }) {
  return (
    <NavigationMenu.Root className="top-nav" aria-label="Main navigation">
      <NavigationMenu.List className="top-nav__list">
        {items.map((item) => (
          <NavItem key={`${item.label}-${item.href}`} item={item} />
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
