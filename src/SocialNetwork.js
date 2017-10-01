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
        if (!this.dataBase.hasOwnProperty(id1) || !this.dataBase.hasOwnProperty(id2))
            throw new Error("No such users.");
        
        let queue = [id1];
        let history = {
            currentId: -1,
        };
        let found = false;
        while (queue.length !== 0 && found === false) {
            const currentId = queue.shift();
            for (let i = 0; i < this.dataBase[currentId].friends.length; i++) {
                const id = this.dataBase[currentId].friends[i];
                if (!history.hasOwnProperty(id)) {
                    queue.push(id);
                    history[id] = currentId;
                }
                if (id === id2) {
                    found = true;
                    break;
                }
            }
        }

        let path = [];
        if (found === true) {
            let id = id2;
            while (id !== id1) {
                path.push(id);
                id = history[id];
            }
            path.push(id1);
            path.reverse();
        }
        return path;
    }
}

var dataBase = {
    1 : {
        name: "Simon Karasik",
        friends: [2, 3],
    }, 
    2 : {
        name: "Ivan Shpuntov",
        friends: [1, 3, 4],
    },
    3: {
        name: "Alexandr Kovalchuk",
        friends: [1, 2, 4],
    },
    4: {
        name: "Oleg Bobrov",
        friends: [2, 3, 5],
    },
    5: {
        name: "Unity, C#",
        friends: [4],
    },
    6: {
        name: "Lonely men",
        friends: [],
    }
}

let sn = new SocialNetwork(dataBase);
console.log(sn.findMinPathOfFriends(1,6));


module.exports = SocialNetwork;