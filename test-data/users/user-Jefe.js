const userJefe = {
    title: 'Testing out PUG',
    message: 'Pug is pretty cool.',
    user: {
        username: 'El Jefe',
        profileImageLocation: '/img/',
        profileImage: 'user-jefe-profile-image.png',
        joinDate: '10/01/2018',
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
    name: 'Jeff',
    bio: "I am the great SAYAMAN!!!",
    profileImageLocation: '/img/',
    profileImage: 'user-jefe-profile-image.png',
    isAuthed: true,
    numberArray: [1,2,3,4,1,2,3,4],
    colorObject: {color1: 'red', color2: 'blue', color3: 'green'}
}

module.exports = userJefe;