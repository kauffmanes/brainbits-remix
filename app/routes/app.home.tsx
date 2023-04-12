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

// const bits = [
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jane Cooper",
//     title: "Paradigm Representative",
//     role: "Admin",
//     email: "janecooper@example.com",
//     telephone: "+1-202-555-0170",
//     imageUrl:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
// ];

const bits: any = [];

export default function Home() {
  if (!Array.isArray(bits) || bits.length === 0) {
    return (
      <div className="mx-auto max-w-5xl">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Bits
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          You haven't created any brain bits yet. Get started by selecting a
          template.
          {/* Don't see what you're looking for? Request a template below. */}
        </p>
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
                  <item.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link to="" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <span>{item.title}</span>
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* <div className="mt-4 flex">
          <a
            href="#"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            Request a template
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div> */}
      </div>
    );
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {/* {bits.map((person) => (
        <li
          key={person.email}
          className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'
        >
          <div className='flex flex-1 flex-col p-8'>
            <img
              className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
              src={person.imageUrl}
              alt=''
            />
            <h3 className='mt-6 text-sm font-medium text-gray-900'>
              {person.name}
            </h3>
            <dl className='mt-1 flex flex-grow flex-col justify-between'>
              <dt className='sr-only'>Title</dt>
              <dd className='text-sm text-gray-500'>{person.title}</dd>
              <dt className='sr-only'>Role</dt>
              <dd className='mt-3'>
                <span className='rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'>
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className='-mt-px flex divide-x divide-gray-200'>
              <div className='flex w-0 flex-1'>
                <a
                  href={`mailto:${person.email}`}
                  className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                >
                  <EnvelopeIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Email
                </a>
              </div>
              <div className='-ml-px flex w-0 flex-1'>
                <a
                  href={`tel:${person.telephone}`}
                  className='relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
                >
                  <PhoneIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))} */}
    </ul>
  );
}
