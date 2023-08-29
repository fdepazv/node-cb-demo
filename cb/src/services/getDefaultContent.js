const getDefaultContent = (req, res) => {
  res.send({ status: 'ok', message: 'This is the default content'})
}

module.exports = getDefaultContent
