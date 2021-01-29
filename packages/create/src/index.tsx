import { prompt } from "enquirer";
import signale from "signale";
import copy from "copy-template-dir";
import { readdirSync, statSync } from "fs";
import { join } from "path";

/** Get the list of templates */
const getTemplates = () => {
  const templatePath = join(__dirname, "../../templates");
  const templates = readdirSync(templatePath).filter((f) =>
    statSync(join(templatePath, f)).isDirectory()
  );

  return templates;
};

/** Get the path to a template */
const getTemplatePath = (template: string) => {
  return join(__dirname, "../../templates/", template);
};

/** Build a template */
const main = async () => {
  signale.start("Starting devtools-ds project generation..");
  const responses = (await prompt([
    {
      type: "select",
      name: "template",
      message: "What template would you like to use?",
      choices: getTemplates(),
    },
    {
      type: "input",
      name: "project_name",
      message: "What is your devtools project's name?",
    },
    {
      type: "input",
      name: "project_org",
      message: "What will your project's GitHub organization be?",
    },
    { type: "input", name: "dev_name", message: "What is your name?" },
    { type: "input", name: "dev_email", message: "What is your email?" },
  ])) as any;

  signale.success("Recorded responses");
  signale.await(`Loading ${responses.template} template..`);

  copy(
    getTemplatePath(responses.template),
    `${process.cwd()}/${responses.project_name}/`,
    responses,
    (err, createdFiles) => {
      if (err) throw err;
      createdFiles.forEach((filePath) =>
        signale.complete(`Created ${filePath}`)
      );
      signale.success(
        `Navigate into ${responses.project_name}/ to get started!`
      );
    }
  );
};

main();
