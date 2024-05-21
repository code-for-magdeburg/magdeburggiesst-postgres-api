import { supabaseAnonClient } from "../src/supabase-client";

describe("trees table", () => {
	beforeAll(async () => {});

	afterAll(async () => {});

	it("should return some trees as anon user", async () => {
		const { data, error } = await supabaseAnonClient
			.from("trees")
			.select("*")
			.limit(10);
		expect(error).toBeNull();
		expect(data).toBeDefined();
		expect(data?.length).toBe(10);
	});

	it("should return a single tree", async () => {
		const { data, error } = await supabaseAnonClient
			.from("trees")
			.select("*")
			.eq("id", "_0epuygrgg")
			.single();
		expect(error).toBeNull();
		expect(data).toBeDefined();
		expect(data?.id).toBe("_0epuygrgg");
	});
});
