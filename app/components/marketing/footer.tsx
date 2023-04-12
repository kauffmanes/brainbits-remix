import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-24 sm:mt-56 sm:py-32"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* <img
            className='h-7'
            src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
            alt='Company name'
          /> */}
          BrainBits.dev &copy; {new Date().getFullYear()}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://github.com/kauffmanes/brainbits-remix/issues"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Create an issue
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="https://getargosy.com"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Argosy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/getargosy"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy-policy"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
