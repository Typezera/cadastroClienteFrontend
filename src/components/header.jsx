import { LucideSunMedium, LucideTent } from "lucide-react";

export function Header() {
  return (
    <div className="bg-gray-200 p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center ml-5 gap-3">
          <LucideTent className="w-6 h-6 ml-2" />
          <h1 className="font-semibold">MUI Toolpad</h1>
          <button className="bg-gray-300 rounded-lg text-gray-400 text-[13px] ml-3 p-1">
            Beta
          </button>
        </div>
        <p className="text-sm text-gray-600">
          This is a preview version of the application.
        </p>
        <div className="mr-5">
          <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-2 text-sm">
            <LucideSunMedium />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
