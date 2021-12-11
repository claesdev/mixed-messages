const subjects = ['You', 'Your brother', 'Your sister', 'Your girlfriend', 'Your mother', 'Your father', 'The cat', 'Santa Claus']
const presents = ['a bicycle', 'a train set', 'a comfy sweater', 'a pair of slippers', 'a magazine subscription', 'a pretty necklace']
const objects = ['me', 'you', 'the neighbour', 'the janitor', 'the janitors dog', 'my mom', 'my dad', 'some homeless guy', 'the cat']

const randomSubjectIndex = Math.floor(Math.random() * subjects.length)
const randomPresentIndex = Math.floor(Math.random() * presents.length)
const randomObjectsIndex = Math.floor(Math.random() * objects.length)

const message = `${subjects[randomSubjectIndex]} should get ${objects[randomObjectsIndex]} ${presents[randomPresentIndex]} for x-mas!`
console.log(message)