import connectDB from "@/lib/mongodb";
import Event from "@/database/event.model";

export async function getEvents() {
	await connectDB();
	const events = await Event.find().sort({ createdAt: -1 });
	return JSON.parse(JSON.stringify(events)); // serialize mongoose docs
}
