const repositoryRegex = {
    'REGEX_EMAIL': /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    'REGEX_INT': /^[0-9]+$/,
    'REGEX_PASSWORD': /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/
}

module.exports = { repositoryRegex };