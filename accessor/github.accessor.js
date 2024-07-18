const axios = require('axios');
const { createHeader } = require("../utils/fetch.utils");

const getGithubRepoContent = async (installationToken, owner, repo, path) => {
    return await axios
        .get(
            `https://api.github.com/repos/${owner}/${repo}/contents/${path}`,
            createHeader(installationToken)
        )
        .then((res) => res.data)
        .catch((err) => {
            console.error(err);
            return undefined;
        });
};

module.exports = {
    getGithubRepoContent
}