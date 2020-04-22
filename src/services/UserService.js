import { StorageService } from './StorageService'
const KEY_USER = 'user'

function getUser() {
    return StorageService.load(KEY_USER)
}

function signUp(name) {
    var user = {
        name,
        coins: 100,
        moves: []
    }
    StorageService.store(KEY_USER, user)
    return user
}

function addMove(contact, amount) {
    const user = getUser()
    user.coins -= amount
    const move = {
        toId: contact._id,
        to: contact.name,
        at: Date.now(),
        amount
    }
    user.moves.unshift(move)
    StorageService.store(KEY_USER, user)
    return user
}

const move = {
    toId: "d99e3u2ih329",
    to: "Moshiko",
    at: 2652712571,
    amount: 2
}


export const UserService = {
    getUser,
    signUp,
    addMove
}