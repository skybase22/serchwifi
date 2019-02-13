const matchid = matchff => matchff.filter(matchff => matchff.match(/5935512034/g))

const matchat = matchatt => matchatt.filter(matchatt => matchatt.match(/522038/g))

const matchap = matchap => matchap.filter(matchap => matchap.match(/AP=/g))

const matchname = matchn => matchn.filter(matchn => matchn.match(/username=/g))

const matchat2 = matchatt => matchatt.filter(matchatt => matchatt.match(/522008/g))

exports.matchid = matchid
exports.matchat = matchat
exports.matchat2 = matchat2
exports.matchap = matchap
exports.matchname = matchname