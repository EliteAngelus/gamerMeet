const userCXL = {
    privacyOptions: {
        // profileAccess 0 - friends only, 1 - everyone
        profileAccess: 1,
    },
    username: "CXL",
	profileImage: "test-profile-pic.png",
	joinDate: "10/10/2018",
	lastActive: "10/10/2018",
    userID: 4,
    bio:"\"I'm here to kick ass and chew bubblegum. And I'm running low on gum.\"",
	messages: [
        {
            text: "UNIst > *insert fighting game*",
            date: "10/10/18",
            time: "15:51",
            target: "user"
        },
        {
            text: "Why everyone gotta mash?!",
            date: "10/09/18",
            time: "14:11",
            target: "Not Even Our Final Form"
        },
        {
            text: "No more laggy matches please. I reached my quota for the day.",
            date: "10/08/18",
            time: "00:26",
            target: "user"
        },
        {
            text: "UNIst > *insert fighting game*",
            date: "10/10/18",
            time: "15:51",
            target: "Jefe"
        },
        {
            text: "UNIst > *insert fighting game*",
            date: "10/10/18",
            time: "15:51",
            target: "user"
        }
    ],
	friends: [
		{
			name: "El Jefe",
			id: 1,
			latestMessages: [
				{
					message:
						"I'm gonna learn beerus, he's not as bad as eveyone says.",
					timestamp: "today"
				}
			]
		},
		{
			name: "Simon Belmont",
			id: 2,
			latestMessages: [
				{
					message:
						"I can't wait to try bloodstained. I hope it dosen't suck.",
					timestamp: "today"
				}
			]
		},
		{
			name: "Beerus Sucks",
			id: 3,
			latestMessages: [
				{
					message: "Yup. Beerus sucks. Sigh.",
					timestamp: "yesterday"
				}
			]
		}
	],

	groups: [
		{
			name: "Skyrim in Seattle",
			id: 1,
			latestNews: [
				{
					message: "Simon Belmont has joined.",
					timestamp: "today"
				}
			]
		},
		{
			name: "Tri-Force Heros",
			id: 2,
			latestNews: [
				{
					message: "Zelda Night: A gathering of heros.",
					timestamp: "today"
				}
			]
		},
		{
			name: "Not Even Our Final Form",
			id: 3,
			latestNews: [
				{
					message: "Everyone has to put beerus on their team today.",
					timestamp: "yesterday"
				}
			]
		}
	],
    
    protectedData: {
        username: "CXL",
        firstname: "Chris",
        lastname: "Luigi",
        email: "whatever@yup.nope",
        password: "GuessMeIfYouCan",
    }

};

module.exports = userCXL;
