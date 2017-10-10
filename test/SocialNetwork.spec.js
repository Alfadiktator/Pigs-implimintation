const SocialNetwork = require('../implementation/SocialNetwork');

/** Good luck! :) **/

const dataBase = {
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
    },
}


describe('SocialNetwork', () => {
    describe('#constructor', () => {
        it('throws an exception if config isn\'t passed', () => {
            expect(() => new SocialNetwork()).to.throw(Error);
        });
		it('must assigns exemplar\'s database to parametrs\'s database', () => {
			const q = new SocialNetwork(dataBase);
			expect(JSON.stringify(q.dataBase)).to.equal(JSON.stringify((dataBase)));
		});
    });

    describe('#addUser', () => {
        let social;
        
        beforeEach(() => {
             social =new SocialNetwork(dataBase);
        });
               
        it('throws an exception if id already exist', () => {
            const newuser={
                name: "Marshall Mathers",
                friends: [],
            };
			expect(() => social.addUser(1,newuser)).to.throw(Error);
        });
        it('throws an exception if user\'s data is invalid', () => {
            const newuser={
                name: "Marshall Mathers",
                enemies: [],
            };
			expect(() => social.addUser(99,newuser)).to.throw(Error);
        });
        it('returns valid added data', () => {
            const newuser={
                name: "Marshall Mathers",
                friends: [],
            };
            social.addUser(99,newuser);
            expect(social.getUser(99).name).to.equal("Marshall Mathers");
            expect(social.getUser(99).friends.length).to.equal(0);
        });
    });

    describe('#makeFriends', () => {
        let social;
        
        beforeEach(() => {
             social =new SocialNetwork(dataBase);
        });

        it('throws an exception if id doesn\'t exist', () => {
			expect(() => social.makeFriends(1,999)).to.throw(Error);
        });

        it('do nothing if connection already exist', () => {
			expect(() => social.makeFriends(1,2)).not.to.throw(Error);
        });
        it('valid added connection', () => {
            social.makeFriends(1,4);
            expect(social.getUser(1).friends.indexOf(4)!==-1).to.be.ok;
            expect(social.getUser(4).friends.indexOf(1)!==-1).to.be.ok;
        });
    });

    describe('#findMinPathOfFriends', () => {
        let social;

        function validPath(arr){
            for(let i = 0; i < arr.length - 1; i++){
                if(dataBase[arr[i]].friends.indexOf(arr[i+1]) === -1){
                    return false;
                }
            }
            return true;
        }

        beforeEach(() => {
             social =new SocialNetwork(dataBase);
        });

        it('throws an exception if id doesn\'t exist', () => {
            expect(() => social.findMinPathOfFriends(1,999)).to.throw(Error);
        });
        it('find min path of friends', () => {
            let path = social.findMinPathOfFriends(1,5);
            expect(path.length).to.be.equal(4);            
            expect(validPath(path)).to.be.equal(true);

            path = social.findMinPathOfFriends(1,4);
            expect(path.length).to.be.equal(3);            
            expect(validPath(path)).to.be.equal(true);

            path = social.findMinPathOfFriends(1,2);
            expect(path.length).to.be.equal(2);            
            expect(validPath(path)).to.be.equal(true);
        });
        it('return [] if there no path of friends', () => {
            const newuser={
                name: "Marshall Mathers",
                friends: [],
            };
            social.addUser(12,newuser);
            expect(social.findMinPathOfFriends(1,12)).to.deep.equal([]);           
        });
    });
    describe('#getUser', () => {
        let social;
        
        beforeEach(() => {
             social =new SocialNetwork(dataBase);
        });
        it('should return null if there is no such id in database', () => {
            expect(() => social.dataBase.getUser(666)).to.throw();
        });
		it('must return valid user', () => {
            expect(social.getUser(5).name).to.equal("Unity C#-ович");
            expect(social.getUser(5).friends.length).to.equal(1);
		});
    });
});