import { NavbarRoutes } from "@/components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";
import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";

export const Navbar = async () => {
	const { userId } = auth();
	const isTeacherValue = await isTeacher(userId);
	const isTeacherString = isTeacherValue ? "true" : "false";

	return (
		<div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
			<MobileSidebar />
			<NavbarRoutes isTeacher={isTeacherString} />
		</div>
	);
};
