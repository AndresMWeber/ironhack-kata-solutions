function removeUrlAnchor(url) {
    let anchorIndex = url.indexOf('#')
    return url.slice(0, (anchorIndex === -1 ? url.length : anchorIndex))
}

module.exports = { removeUrlAnchor }