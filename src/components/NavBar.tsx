import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  PhotoIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import profilepic from "../assets/Profile.jpg";

const navigation = [
  { name: "Home", href: "#home", icon: HomeIcon, current: true },
  { name: "About", href: "#about", icon: UserIcon, current: false },
  { name: "Skills", href: "#skills", icon: CodeBracketIcon, current: false },
  { name: "Projects", href: "#projects", icon: BriefcaseIcon, current: false },
  { name: "Gallery", href: "#gallery", icon: PhotoIcon, current: false },
  { name: "Contact", href: "#contact", icon: EnvelopeIcon, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <>
      {/* DESKTOP SIDEBAR (Visible on md and up) */}
      <nav className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-50">
        <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex flex-col gap-4 shadow-2xl">
          <div className="mb-4 border-b border-white/10 pb-4">
            <img
              src={profilepic}
              className="w-10 h-10 rounded-full ring-2 ring-indigo-500/50"
              alt="profile"
            />
          </div>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              title={item.name}
              className={classNames(
                item.current
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "text-gray-400 hover:bg-white/10 hover:text-white",
                "p-3 rounded-xl transition-all duration-200 group relative"
              )}
            >
              <item.icon className="w-6 h-6" />
              {/* Tooltip */}
              <span className="absolute left-14 scale-0 group-hover:scale-100 transition-all origin-left bg-gray-900 text-white text-xs px-2 py-1 rounded-md border border-white/10">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE BOTTOM TAB BAR (iOS Style - Visible on small screens) */}
      <nav className="md:hidden fixed bottom-6 inset-x-4 z-50">
        <div className="bg-gray-950/80 backdrop-blur-lg border border-white/10 rounded-3xl p-2 flex justify-around items-center shadow-2xl">
          {navigation.slice(0, 5).map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? "text-indigo-400" : "text-gray-400",
                "flex flex-col items-center p-2"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-[10px] mt-1 font-medium">{item.name}</span>
            </a>
          ))}

          {/* Mobile Menu Button (Hamburger) */}
          <Disclosure as="div">
            {({ open }) => (
              <>
                <DisclosureButton className="flex flex-col items-center p-2 text-gray-400">
                  {open ? (
                    <XMarkIcon className="w-6 h-6" />
                  ) : (
                    <Bars3Icon className="w-6 h-6" />
                  )}
                  <span className="text-[10px] mt-1 font-medium">Menu</span>
                </DisclosureButton>

                <DisclosurePanel className="absolute bottom-20 left-0 w-full bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 mb-2 animate-in slide-in-from-bottom-5">
                  <div className="grid grid-cols-3 gap-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex flex-col items-center gap-1 text-gray-300"
                      >
                        <item.icon className="w-8 h-8 p-2 bg-white/5 rounded-lg" />
                        <span className="text-xs">{item.name}</span>
                      </a>
                    ))}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </nav>
    </>
  );
}
