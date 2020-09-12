const express = require('express');
const fs = require('fs');
const path = require('path');
const process = require('process');
const { exec, spawn } = require('child_process');

const appDir = path.dirname(require.main.filename);
console.log(`app dir value: ${appDir}`);
const port = 3000;
const app = express();
app.use(express.static('public'));

const startpageProfile = 'firefox-profile-startpage';
let firefoxProcess = null;

function killNodeProcess() {
    if (firefoxProcess)
        firefoxProcess.kill();

    process.exit();
}

function launchFirefox(url) {
    firefoxProcess = exec(`firefox --new-instance -P ${startpageProfile} --private-window ${url} --class Startpage`, killNodeProcess);
}

function launchFirefoxProfile(profileId) {
    spawn('firefox', ['--new-instance', '-P', `${profileId}`], {detached: true});
}

function launchFirefoxProfileManager() {
    spawn('firefox', ['--ProfileManager'], {detached: true});
}

function getStartPage() {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(`${appDir}/index.html`, (err, data) => {
            resolve(data);
        });
    });

    return promise;
}

app.get('/', (req, res) => {
    getStartPage().then((data) => {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

app.use('/profiles/:profileId/launch', (req, res) => {
    const profileId = req.params.profileId;
    launchFirefoxProfile(profileId);

    killNodeProcess();
});

app.use('/profileManager/launch', (req, res) => {
    launchFirefoxProfileManager();
    res.end();
});

app.listen(port, () => {
    const url = `http://localhost:${port}/`;
    launchFirefox(url);
});
