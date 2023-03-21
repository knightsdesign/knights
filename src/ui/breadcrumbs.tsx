import { cva } from "cva";
import { ChevronRight } from "lucide-react";

type BreadcrumbProps = {
  items: Item[];
  withHome?: boolean;
};

export const Breadcrumb = ({ items, withHome = true }: BreadcrumbProps) => {
  const breadcrumbs = [
    ...(withHome ? [{ title: "Home", href: "/" }] : []),
    ...items,
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl items-center px-8 py-12 md:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto w-full justify-center">
          <nav className="mx-auto flex justify-center " aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              {breadcrumbs.map((item, index) => (
                <li key={item.href}>
                  <div className="flex items-center gap-4">
                    {index != 0 && (
                      <ChevronRight className="md hydrated h-5 w-5 flex-shrink-0 text-gray-300" />
                    )}
                    <a
                      href={item.href}
                      className={link({
                        current: index == breadcrumbs.length - 1,
                      })}
                    >
                      {item.title}
                    </a>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

const link = cva(
  "text-base font-medium duration-200 hover:scale-95 hover:text-sand-10",
  {
    variants: {
      current: {
        true: "text-blue-9",
        false: "text-sand-11",
      },
    },
    defaultVariants: {
      current: false,
    },
  }
);

type Item = {
  title: string;
  href: string;
};

export function getBreadcrumbs(path: string): Item[] {
  const parts = path?.split("/").filter((part) => part !== "");
  const items: Item[] = [];
  let href = "";

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    href += `/${part}`;
    const title =
      part.replace(/-/g, " ").charAt(0).toUpperCase() +
      part.slice(1).replace(/-/g, " ");
    items.push({ title, href });
  }

  return items;
}

export function getBreadcrumb(slug: string): Item {
  const href = `/${slug}`;
  const title =
    slug?.replace(/-/g, " ").charAt(0).toUpperCase() +
    slug?.slice(1).replace(/-/g, " ");

  return {
    href,
    title,
  };
}
