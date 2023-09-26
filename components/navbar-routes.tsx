"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { isTeacher } from "@/lib/teacher";

import { SearchInput } from "./search-input";
import { cookies } from "next/headers";
import axios from "axios";

interface NavbarRoutesProps {
	isTeacher: string;
}

export const NavbarRoutes = ({ isTeacher }: NavbarRoutesProps) => {
	const { userId } = useAuth();
	const pathname = usePathname();

	const isTeacherPage = pathname?.startsWith("/teacher");
	const isCoursePage = pathname?.includes("/courses");
	const isSearchPage = pathname === "/search";
	const isTeacherValue = isTeacher === "true" ? true : false;
	const onClick = async () => {
		try {
			await axios.post("/api/userrole/", { role: "teacher" });
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isSearchPage && (
				<div className="hidden md:block">
					<SearchInput />
				</div>
			)}
			<div className="flex gap-x-2 ml-auto">
				{isTeacherPage || isCoursePage ? (
					<Link href="/">
						<Button size="sm" variant="ghost">
							<LogOut className="h-4 w-4 mr-2" />
							Exit
						</Button>
					</Link>
				) : isTeacherValue ? (
					<Link href="/teacher/courses">
						<Button size="sm" variant="ghost">
							Teacher mode
						</Button>
					</Link>
				) : (
					<Button size="sm" variant="blue" onClick={onClick}>
						Become a Teacher
					</Button>
				)}
				<UserButton afterSignOutUrl="/" />
			</div>
		</>
	);
};
