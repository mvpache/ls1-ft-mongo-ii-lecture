module.exports = (app) => {
  require('./home')(app);
  require('./kitten')(app);
};
