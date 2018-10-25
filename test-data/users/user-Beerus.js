const userBeerus = {
    title: 'Testing out PUG',
    message: 'Pug is pretty cool.',
    user: {
        username: 'Beerus Sucks',
        profileImageLocation: '/img/',
        profileImage: 'user-beerus-profile-image.png',
        joinDate: '10/02/2018',
        lastActive: 'Today',
        id: 1,
        groups: [
            {
                name: 'Skyrim in Seattle',
                id: 1,
                latestNews: [
                    {
                        message: 'Simon Belmont has joined.',
                        timestamp: 'today',
                    }
                ]
            },
            {
                name: 'Tri-Force Heros',
                id: 2,
                latestNews: [
                    {
                        message: 'Zelda Night: A gathering of heros.',
                        timestamp: 'today',
                    }
                ]
            },
            {
                name: 'Not Even Our Final Form',
                id: 3,
                latestNews: [
                    {
                        message: 'Everyone has to put beerus on their team today.',
                        timestamp: 'yesterday',
                    }
                ]
            }
        ],
        friends: [
            {
                name: 'CXL',
                id: 4,
                latestMessages: [
                    {
                        message: "UNIst > *insert fighting game*",
                        timestamp: 'today'
                    }
                ],
            },
            {
                name: 'Simon Belmont',
                id:2,
                latestMessages: [
                    {
                        message: "I can't wait to try bloodstained. I hope it dosen't suck.",
                        timestamp: 'today'
                    }
                ],
            },
            {
                name: 'El Jefe',
                id: 3,
                latestMessages: [
                    {
                        message: "I'm gonna learn beerus, he's not as bad as eveyone says.",
                        timestamp: 'today'
                    }
                ],
            }
        ]
    },
    name: 'Beerus the God of Destruction',
    bio: "I'm going back to sleep. Wake me up when the next patch drops.",
    profileImageLocation: '/img/',
    profileImage: 'user-beerus-profile-image.png',
    isAuthed: true,
    numberArray: [1,2,3,4,1,2,3,4],
    colorObject: {color1: 'red', color2: 'blue', color3: 'green'}
}

module.exports = userBeerus;