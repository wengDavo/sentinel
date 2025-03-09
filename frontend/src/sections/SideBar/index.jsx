"use client";
import { useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import AvailableSlot from "@/components/AvailableSlot";

export function SideBar() {
	const [selected, setSelected] = useState(null);
	const defaultClassNames = getDefaultClassNames();

	// Availability slots
	const availableSlots = [
		{ id: 1, venue: "Room A", time: "08:00 AM - 09:00 AM" },
		{ id: 2, venue: "Room B", time: "09:00 AM - 10:00 AM" },
		{ id: 3, venue: "Room C", time: "10:00 AM - 11:00 AM" },
		{ id: 4, venue: "Room D", time: "11:00 AM - 12:00 PM" },
		{ id: 5, venue: "Room E", time: "12:00 PM - 01:00 PM" },
		{ id: 6, venue: "Room F", time: "01:00 PM - 02:00 PM" },
		{ id: 7, venue: "Room G", time: "02:00 PM - 03:00 PM" },
		{ id: 8, venue: "Room H", time: "03:00 PM - 04:00 PM" },
		{ id: 9, venue: "Room I", time: "04:00 PM - 05:00 PM" },
		{ id: 10, venue: "Room J", time: "05:00 PM - 06:00 PM" },
	];

	return (
		<aside className="border-r border-abs-white-10 p-4 h-screen max-w-full">
			{/* Date Picker */}
			<div className="">
				<DayPicker
					mode="single"
					selected={selected}
					onSelect={setSelected}
					showOutsideDays={true}
					captionLayout="label"
				/>
			</div>
			{/* Available Slots */}
			<section>
				{availableSlots.length > 0 ? (
					<AvailableSlot slots={availableSlots} />
				) : (
					<div>
						<h3 className="font-bold text-[#333333] uppercase">Available Slots</h3>
						<p>No slots available</p>
					</div>
				)}
			</section>
		</aside>
	);
}

export default SideBar;

