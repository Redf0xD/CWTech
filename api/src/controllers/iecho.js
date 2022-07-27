const getInvertedText = (req, res, next) => {
  try {
    const { text } = req.query
    if (text) {
      const invertedText = text.split('').reverse().join('')
      const palindrome = invertedText === text
      res.send({ text: invertedText, palindrome })
    } else {
      res.status(400).send({ error: 'no text' })
    }
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send({ msg: err.response.status })
    } else if (err.request) {
      next(err.request)
    } else {
      next(err)
    }
  }
}

module.exports = {
  getInvertedText
}
