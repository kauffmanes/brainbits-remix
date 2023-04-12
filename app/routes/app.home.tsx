import { BitTypes } from "~/components/bit-types";

const bits = [];

export default function Home() {
  // if (bits.length === 0) {
  //   return null;
  // }

  // return (
  //   <div className="py-10">
  //     <h2 className="text-base font-semibold leading-6 text-gray-900">
  //       Most recent
  //     </h2>
  //   </div>
  // );

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Create a New Bit
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Get started by selecting a template. Don't see what you're looking for?
        Request a template below.
      </p>
      <BitTypes />
    </div>
  );
}
