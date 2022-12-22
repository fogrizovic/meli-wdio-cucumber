async function urlCC(url) {
  await this.url(url);
  await this.maximizeWindow();
  logger.info(`Opened url: ${url}`);
}

module.exports = {
  urlCC,
};
