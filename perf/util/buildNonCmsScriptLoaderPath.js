function buildNonCmsScriptLoaderPath({ env = '', portalId }) {
  return `${document.location.protocol}//js.hs-scripts${env}.com/${portalId}.js`;
}

module.exports = { buildNonCmsScriptLoaderPath };
