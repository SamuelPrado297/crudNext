export default class Id {
    static get new(): number {
        return Math.floor(Math.random() * 100)
    }
}
