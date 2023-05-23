module.exports = {
	extends: "@technologiestiftung/semantic-release-config",
	branches: [
		{ name: "master" },
		{ name: "master-magdeburg" },
		{ name: "staging", channel: "pre/rc", prerelease: "rc" },
	],
	plugins: [
		[
			"@saithodev/semantic-release-backmerge",
			{
				backmergeBranches: [{ from: "master", to: "staging" }],
				backmergeStrategy: "merge",
			},
		],
	],
};
