const createHeader = (token) => {
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
}

module.exports = {
    createHeader
}