const express = require('express');
const { GITHUB_INSTALLATION_TOKEN_HEADER } = require('../constant/header.constant');
const { getGithubRepoContent } = require('../accessor/github.accessor');
const { applyGithubInstallationTokenMiddleware } = require('../middleware/token.middleware');
const callout = require('../schema/Callout.markdoc');
const heading = require('../schema/heading.markdoc');
const Markdoc = require('@markdoc/markdoc');
const router = express.Router();

router.get('/render-markdoc-content', applyGithubInstallationTokenMiddleware, async (req, res) => {
    const headers = req.headers;
    const params = req.query;
    const githubInstallationToken = headers[GITHUB_INSTALLATION_TOKEN_HEADER];
    const owner = params["owner"];
    const repo = params["repo"];
    const path = params["path"];

    const repoContent = await getGithubRepoContent(githubInstallationToken, owner, repo, path);
    if (!repoContent) {
        return res.status(404).json({ error: 'Git content not found' });
    }

    const ast = Markdoc.parse(atob(repoContent.content));

    const variables = {
        flags: {
            show_secret_feature: false
        }
    };
    const config = {
        tags: {
            callout
        },
        nodes: {
            heading
        },
        variables: variables
    };

    const html = Markdoc.transform(ast, config);

    return res.json(html);
});

module.exports = router;