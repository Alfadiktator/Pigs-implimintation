class SocialNetwork {
    constructor(dataBase) {
        this.dataBase = dataBase;
    }

     /**
     * Finds shortest path of adjacent friends.
     * Returns array of ids that represent path or empty array,
     * if there no path.
     * Throws exception if there no users with such ids
     * @returns {Array}
     */
    findMinPathOfFriends(id1, id2) {
        if (!this.dataBase.hasOwnProprety(id1) || !this.dataBase.hasOwnProprety(id2))
            throw new Error("No such users.");
        
        let queue = [id1];
        let visited = new Set();
        let length = {};
        while (queue.length != 0) {
            const currentId = queue.shift();
            visited.add(currentId);
            this.dataBase[currentId].forEach((id) => {})
        }

    }
}

module.exports = SocialNetwork;