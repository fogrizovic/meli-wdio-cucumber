function getBaseUrl() {
  switch (process.env.ENV.toLowerCase()) {
    case 'prd':
      return 'https://www.mercadolibre.com.ar';
    case 'tst':
      return '';
    default:
      throw Error(`env is not valid: ${process.env.ENV}`);
  }
}

module.exports = {
  getBaseUrl,
};
