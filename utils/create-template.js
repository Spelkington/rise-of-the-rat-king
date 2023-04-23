var swig = require('swig');
var args = require('yargs').argv;
var fs = require('fs');

const EXPECTED_ARGUMENTS = ["name", "input", "output"]

/**
 * Asserts that all expected arguments have values
 * 
 * @param {Map<string, string>} provided_args 
 * @param {Array<string>} expected_args 
 */
function VerifyArguments(providedArgs, expectedArgs) {
    for (expected of expectedArgs) {
        if (!(expected in providedArgs) || providedArgs[expected] === true) {
            throw new Error(`Process could not run: --${expected} argument was not provided.`);
        }
    }

    return;
}

function FillDirectory(inputPath, outputPath, opts) {
    var outputDir = fs.mkdirSync(outputPath);
    var inputDirObjects = fs.readdirSync(inputPath);

    for (obj of inputDirObjects) {

        var inputObjPath = `${inputPath}/${obj}`;
        var outputObjPath = `${outputPath}/${obj}`;
        var inputObjIsDirectory = fs.lstatSync(inputObjPath).isDirectory();

        if (inputObjIsDirectory) {
            console.log(`[RUNNING] Templating ${inputObjPath}...`)
            FillDirectory(inputObjPath, outputObjPath, opts);
        }
        else {
            var fileContents = fs.readFileSync(inputObjPath).toString();
            var newFilePath = swig.render(outputObjPath, opts)
            var newFileContents = swig.render(fileContents, opts)

            fs.writeFileSync(newFilePath, newFileContents)
            console.log(`[SUCCESS] Created template of ${inputObjPath}`)
        }
    }
}

function Main(arguments) {

    // Verify arguments were provided correctly
    VerifyArguments(arguments, EXPECTED_ARGUMENTS);

    var opts = {
        locals: {
            template_name: arguments["name"]
        }
    }

    FillDirectory(arguments.input, `${arguments.output}/${arguments["name"]}`, opts)

}

Main(args);