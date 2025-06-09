import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "3zq7sl5a",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});
