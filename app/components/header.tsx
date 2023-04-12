import { Form, Link, useLocation } from "@remix-run/react";

export function Header({ user }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white shadow">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            {/* <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              /> */}
            <strong>BrainBits.dev</strong>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm">{user.email}</p>
          <Form action="/logout" method="post">
            <button
              type="submit"
              // className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
              className="ml-4 text-sm font-semibold leading-6 text-gray-900"
            >
              Logout
            </button>
          </Form>
        </div>
      </nav>
    </header>
  );
}
