import { Link } from "@remix-run/react";
import {
  Bars4Icon,
  CalendarIcon,
  ClockIcon,
  PhotoIcon,
  TableCellsIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

import { classNames } from "~/utils";

const items = [
  {
    title: "Create a Collection",
    description:
      "Organize your brain bits into collections. Fav recipes, code snippets, etc.",
    icon: Bars4Icon,
    background: "bg-pink-500",
  },
  {
    title: "Create a Code Snippet",
    description: "Find a cool piece of code? Save it for later.",
    icon: CalendarIcon,
    background: "bg-yellow-500",
  },
  {
    title: "Create a Note",
    description:
      "Have a thought? Afraid it's going to exit stage left? Save it!",
    icon: PhotoIcon,
    background: "bg-green-500",
  },
  {
    title: "Bookmark a Link",
    description: "Favorite waffle recipe? Save a link to it.",
    icon: ViewColumnsIcon,
    background: "bg-blue-500",
  },
  // {
  //   title: "Create a Spreadsheet",
  //   description: "Lots of numbers and things — good for nerds.",
  //   icon: TableCellsIcon,
  //   background: "bg-indigo-500",
  // },
  // {
  //   title: "Create a Timeline",
  //   description: "Get a birds-eye-view of your procrastination.",
  //   icon: ClockIcon,
  //   background: "bg-purple-500",
  // },
];

export function BitTypes() {
  return (
    <>
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
      >
        {items.map((item, itemIdx) => (
          <li key={itemIdx} className="flow-root">
            <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
              <div
                className={classNames(
                  item.background,
                  "flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg"
                )}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  <Link to="" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <span>{item.title}</span>
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="mt-4 flex">
        <a
          href="#"
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          Suggest a new template
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div> */}
    </>
  );
}
