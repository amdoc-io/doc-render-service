const { GITHUB_INSTALLATION_TOKEN_HEADER } = require("../constant/header.constant");

const applyGithubInstallationTokenMiddleware = (req, res, next) => {
    const githubInstallationToken = req.headers[GITHUB_INSTALLATION_TOKEN_HEADER];

    if (!githubInstallationToken) {
        return res.status(401).json({ error: 'Unauthorized: Missing X-Github-Installation-Token header' });
    }

    next();
};

module.exports = {
    applyGithubInstallationTokenMiddleware
};