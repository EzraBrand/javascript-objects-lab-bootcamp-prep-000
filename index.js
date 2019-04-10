let recipes = {eggs: 3}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

console.log(deleteFromObjectByKey(recipes,'eggs'))
function destructivelyDeleteFromObjectByKey(object, key) {
  console.log('before ' + Object.values(object))
  delete object.key
  console.log('after ' + Object.values(object))
  return object
}
