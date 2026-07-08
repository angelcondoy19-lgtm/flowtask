import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import { navigation } from "@/data/navigation";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-900">
      <Logo />

      <nav className="flex flex-1 flex-col gap-2 px-4">
        {navigation.map((item) => (
          <SidebarItem
            key={item.title}
            {...item}
          />
        ))}
      </nav>

      <div className="border-t border-slate-800 p-5">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="font-semibold text-white">
            Ángel Condoy
          </p>

          <p className="text-sm text-slate-400">
            Developer
          </p>
        </div>
      </div>
    </aside>
  );
}