
import { FaBandcamp } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BiCalendar, BiLogIn } from "react-icons/bi";
import { CiUser, CiSettings } from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";

export function AsideNavigation() {
  const val = true

  return (
    <aside className="max-w-full ">
      <div className="fixed h-full max-w-full flex flex-col border-solid border-2 border-gray-900 h-full bg-primary">
        <a href="/" className="text-4xl pt-8 pl-16 text-white">FlixMovie<span className="text-red-500">.</span></a>
        <nav className="max-w-[400px] flex flex-col mt-12 gap-4">
          <h3 className="pl-16 text-gray-600 text-sm ">Menu</h3>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <FaBandcamp color={`${val ? 'red' : 'blue'}`} />Browse
            </a>
          </div>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="/" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <FiHeart />Watchlist
            </a>
          </div>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="/" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <BiCalendar />Coming soon
            </a>
          </div>
        </nav>
        <nav className="w-[400px] flex flex-col mt-12 gap-4">
          <h3 className="pl-16 text-gray-600 text-sm">Social</h3>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="/" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <CiUser />Friends
            </a>
          </div>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="/" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <AiOutlineTeam />Parties
            </a>
          </div>
        </nav>
        <nav className="w-[400px] flex flex-col mt-12 gap-4">
          <h3 className="pl-16 text-gray-600 text-sm">General</h3>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="/" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <CiSettings />Settings
            </a>
          </div>
          <div className="pl-16 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-2 before:h-full before:bg-red-600 before:rounded-r-sm">
            <a href="/" className="flex items-center gap-2 text-base rounded-lg text-gray-500 hover:text-white">
              <BiLogIn />
              Log out</a>
          </div>
        </nav>
      </div>
    </aside>
  )
}