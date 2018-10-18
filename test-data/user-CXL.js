const authTestData = {
    title: 'Testing out PUG',
    message: 'Pug is pretty cool.',
    user: {
        username: 'CXL',
        profileImageLocation: '/img/',
        profileImage: 'test-profile-pic.png',
        joinDate: '10/10/2018',
        lastActive: 'Today',
        id: 4,
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
                name: 'El Jefe',
                id: 1,
                latestMessages: [
                    {
                        message: "I'm gonna learn beerus, he's not as bad as eveyone says.",
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
                name: 'Beerus Sucks',
                id: 3,
                latestMessages: [
                    {
                        message: "Yup. Beerus sucks. Sigh.",
                        timestamp: 'yesterday'
                    }
                ],
            }
        ]
    },
    name: 'Chris',
    bio: "\"I'm here to kick ass and chew bubblegum. And I'm running low on gum.\"",
    profileImageLocation: '/img/',
    profileImage: 'test-profile-pic.png',
    isAuthed: true,
    numberArray: [1,2,3,4,1,2,3,4],
    colorObject: {color1: 'red', color2: 'blue', color3: 'green'}
}

module.exports = authTestData;