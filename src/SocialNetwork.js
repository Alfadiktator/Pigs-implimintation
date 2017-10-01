class SocialNetwork {

/*
constructor get dataBase in format:

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
        name: "Unity C#-ович",
        friends: [4],
    },
    6: {
        name: "Lonely men",
        friends: [],
    }
}

 example of singal user format
 
    [user_id]: {
        name: [user_name],
        friends: [array_of_friends],
    }

*/ 
    constructor(dataBase) {
        
    }

    /**
     * Adds new user.
     * Throws exception if user with such ID already exist or invalid input
     */
    AddUser(id, user){

    }
    /**
     * Adds friend connection between two users.
     * Throws exception if there is no user with such ID
     * !!! if A friend of B,then B friend of A
     */
    AddFriendConnection(id1, id2){
 
    }
     /**
     * Finds shortest path of adjacent friends.
     * Returns array of ids that represent path or empty array,
     * if there no path.
     * Throws exception if there no users with such ids
     * @returns {Array}
     */
    findMinPathOfFriends(id1, id2) {
  
    }
}

