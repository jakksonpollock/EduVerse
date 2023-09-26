import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
	return (
		<div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
			<div className="p-6 pr-6 pt-[11px] pb-[11px]">
				<Logo />
			</div>
			<div className="flex flex-col w-full">
				<SidebarRoutes />
			</div>
		</div>
	);
};
