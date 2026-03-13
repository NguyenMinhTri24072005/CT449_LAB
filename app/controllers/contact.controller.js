exports.create = (req, res) => {
    res.send({ messages: "create handler"})
}

exports.findAll = (req, res) => {
    res.send({ messages: "findAll handler"})
}

exports.findOne = (req, res) => {
    res.send({ messages: "findOne handler"})
}

exports.update = (req, res) => {
    res.send({ messages: "update handler"})
}

exports.delete = (req, res) => {
    res.send({ messages: "delete handler"})
}

exports.deleteAll = (req, res) => {
    res.send({ messages: "deleteAll handler"})
}

exports.findAllFavorite = (req, res) => {
    res.send({ messages: "findAllFavorite handler"})
}