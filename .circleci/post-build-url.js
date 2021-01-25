const { execSync } = require("child_process");

const user =
  process.env.CIRCLE_PR_USERNAME || process.env.CIRCLE_PROJECT_USERNAME;
const repo =
  process.env.CIRCLE_PR_REPONAME || process.env.CIRCLE_PROJECT_REPONAME;

const artifacts = JSON.parse(
  execSync(
    `curl "https://circleci.com/api/v1.1/project/github/${user}/${repo}/$CIRCLE_BUILD_NUM/artifacts?circle-token=$CIRCLE_TOKEN"`,
    { encoding: "utf8" }
  )
);

console.log(
  `curl "https://circleci.com/api/v1.1/project/github/${user}/${repo}/${process.env.CIRCLE_BUILD_NUM}/artifacts?circle-token=$CIRCLE_TOKEN"`
);
console.log(artifacts);

const urls = artifacts.filter((artifact) =>
  artifact.url.includes("index.html")
);
const message = `### Build Info\n\nYour PR was successfully deployed by CircleCI [#$CIRCLE_BUILD_NUM]($CIRCLE_BUILD_URL)\n\n[Storybook](${urls[0].url})`;

execSync(`yarn auto comment --context urls --message "${message}"`, {
  stdio: "inherit",
});
