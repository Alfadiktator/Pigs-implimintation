class SocialNetwork {
    constructor(dataBase) {
        if(typeof(dataBase) === 'undefined'){
            throw new Error();
        }
        this.dataBase = JSON.parse(JSON.stringify(dataBase));
    }
    /**
     * Adds new user.
     * Throws exception if user with such ID already exist or invalid input
     */
    addUser(id, user){
        if(!user.hasOwnProperty("name") || !user.hasOwnProperty("friends")){
            throw new Error("Invalid user");
        }
        if(this.dataBase.hasOwnProperty(id)){
            throw new Error("Already existing ID");
        }
        this.dataBase[id] = user;
    }
    /**
     * Adds friend connection between two users.
     * Throws exception if there is no user with such ID
     */
    makeFriends(id1, id2){
        if (!this.dataBase.hasOwnProperty(id1) || !this.dataBase.hasOwnProperty(id2)){
            throw new Error("No such users.");
        }
        if(this.dataBase[id1].friends.indexOf(id2) === -1){
            this.dataBase[id1].friends.push(id2);
            this.dataBase[id2].friends.push(id1);
        }
    }

    /**
     * Returns user by id
     * Returns null if user doesn't exist
     * @return {Object} 
     */
    getUser(id){
        if(!id in this.dataBase){
            return null;
        }
        return this.dataBase[id];
    }
     /**
     * Finds shortest path of adjacent friends.
     * Returns array of ids that represent path or empty array,
     * if there no path.
     * Throws exception if there no users with such ids
     * @returns {Array}
     * Bfs algorithm on graph
     */
    findMinPathOfFriends(id1, id2) {
        if (!this.dataBase.hasOwnProperty(id1) || !this.dataBase.hasOwnProperty(id2)){
            throw new Error("No such users.");
        }
        
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

 module.exports = SocialNetwork;