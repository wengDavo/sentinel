"use client";
import "material-symbols";
import ReduxProvider from "@/store/provider";
import TopBar from "@/sections/TopBar";
import SideBar from "@/sections/SideBar";
import ActionBar from "@/sections/ActionBar";
import Graph from "@/sections/Graph";

export default function Home() {
	return (
		<ReduxProvider>
			<div className="min-h-screen w-screen">
				<main className="grid grid-cols-12 min-h-screen">
					{/* Sidebar: Hidden on small screens, shown on medium+ */}
					<section className="hidden md:grid md:col-start-1 md:col-end-4 md:h-screen">
						<SideBar />
					</section>

					{/* Main content area */}
					<section className="grid col-span-full grid-rows-[8%_auto] md:grid-rows-[6%_auto] md:col-start-4 md:col-end-11">
						<TopBar />
						<Graph />
					</section>

					{/* ActionBar: Hidden on small screens */}
					<section className="hidden md:grid md:col-start-11 md:col-end-13 md:h-screen">
						<ActionBar />
					</section>
				</main>
			</div>
		</ReduxProvider>
	);
}

