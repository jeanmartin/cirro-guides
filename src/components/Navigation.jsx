import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

export function Navigation({ navigation, main, className }) {
  let router = useRouter()

  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <ul role="list" className="pb-6">
        {main.map((section) => (
          <li key={section.title}>
            <Link
              href={section.href}
              className={clsx(
                "group mb-4 flex items-center font-medium lg:text-sm lg:leading-6",
                section.href === "/"
                  ? "font-semibold text-sky-500 before:bg-sky-500"
                  : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
              )}
            >
              <section.icon className="mr-4 h-6 w-6" />
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:border-slate-200"
            >
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={clsx(
                      "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                      link.href === router.pathname
                        ? "font-semibold text-sky-500 before:bg-sky-500"
                        : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
