import { useDispatch, useSelector } from "react-redux";
import { increment, selectCount } from "@/store/features/counterSlice";

function TopBar() {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	
	return (
		<section className="">
		</section>
	);
};

export default TopBar;
