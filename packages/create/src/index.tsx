import { prompt } from "enquirer";
import signale from "signale";
import reflect from "@alumna/reflect";
import { execSync } from "child_process";
import { v4 as uuid } from "uuid";
import { paramCase, constantCase, capitalCase } from "change-case";
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

/** Get the default author name from the local system. */
const defaultAuthorName = () => {
  try {
    return String(execSync("git config --get user.name")).trim();
  } catch (error) {
    return "";
  }
};

/** Get the default author email from the local system. */
const defaultAuthorEmail = () => {
  try {
    return String(execSync("git config --get user.email")).trim();
  } catch (error) {
    return "";
  }
};

/** Build a template */
const main = async () => {
  signale.start("Starting devtools-ds project generation..");
  const defaultName = defaultAuthorName();
  const defaultEmail = defaultAuthorEmail();
  try {
    let responses = (await prompt([
      {
        type: "select",
        name: "template",
        message: "What template would you like to use?",
        choices: getTemplates(),
      },
      {
        type: "input",
        name: "projectName",
        message: "What is your devtools project's name?",
        initial: "my-devtools",
      },
      {
        type: "input",
        name: "devName",
        message: "What is your name?",
        initial: defaultName,
      },
      {
        type: "input",
        name: "devEmail",
        message: "What is your email?",
        initial: defaultEmail,
      },
      {
        type: "input",
        name: "projectOrg",
        message: "What will your project's GitHub organization be?",
        initial: paramCase(defaultName),
      },
    ])) as any;

    let { projectName } = responses;
    const projectNameConstant = constantCase(projectName);
    const projectNameCapital = capitalCase(projectName);
    projectName = paramCase(projectName);

    responses = {
      ...responses,
      projectName,
      projectNameCapital,
      projectNameConstant,
      uuid: `{${uuid()}}`,
    };

    signale.success("Recorded responses");
    signale.await(`Loading ${responses.template} template..`);

    const srcPath = getTemplatePath(responses.template);
    const outPath = `${process.cwd()}/${responses.projectName}/`;

    copy(srcPath, outPath, responses, async (err, createdFiles) => {
      if (err) throw err;
      createdFiles.forEach((filePath) =>
        signale.complete(`Created ${filePath}`)
      );

      // Copy assets which may get damaged by the templates
      await reflect({
        src: `${srcPath}/src/assets`,
        dest: `${outPath}/src/assets`,
        recursive: false,
      });

      signale.complete(`Copied assets`);

      signale.success(
        `Navigate into ${responses.projectName}/ to get started!`
      );
    });
  } catch (e) {
    signale.complete("Cancelling template creation");
  }
};

main();
