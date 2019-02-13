const splitequal = spleq => { if (spleq !== undefined) return spleq.split('=') }

const splitn = splff => { if (splff !== undefined) return splff.split('\n') }

const splitcomma = splcl => { if (splcl !== undefined) return splcl.split(',') }

const splitspace = spla => { if (spla !== undefined) return spla.split(' ') }

const splitname = spla => { if (spla !== undefined) return spla.split('username=') }

const splitap = splauthen => { if (splauthen !== undefined) return splauthen.split('AP=')}

exports.splitequal = splitequal
exports.splitn = splitn
exports.splitcomma = splitcomma
exports.splitspace = splitspace
exports.splitname = splitname
exports.splitap = splitap