const userSimon = {
    title: 'Testing out PUG',
    message: 'Pug is pretty cool.',
    user: {
        username: 'Simon Belmont',
        profileImageLocation: '/img/',
        profileImage: 'user-simon-profile-image.png',
        joinDate: '10/04/2018',
        lastActive: 'Today',
        id: 2,
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
                name: 'El Jefe',
                id:1,
                latestMessages: [
                    {
                        message: "I'm gonna learn beerus, he's not as bad as eveyone says.",
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
    name: 'Simon Belmont',
    bio: "*Listening to Vampire Killer for the 1000th time. Still great.*",
    profileImageLocation: '/img/',
    profileImage: 'user-simon-profile-image.png',
    isAuthed: true,
    numberArray: [1,2,3,4,1,2,3,4],
    colorObject: {color1: 'red', color2: 'blue', color3: 'green'}
}

module.exports = userSimon;