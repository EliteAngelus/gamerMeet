const groupData = {
    id: 1,
	name: "Skyrim in Seattle",
	message:
		"Calling all dragon born to help protect the people of seattle from dragons.",
    bannerImageLocation: "/img/",
    bannerImage: "skyrim-in-seattle-group-banner.png",
    cardImage: "/img/",
    cardImageLocation: "skyrim-in-seattle-group-image.png", 
    createDate: "10/01/18",
    members: [
		{
			username: "CXL",
			id: 4,
			profileImageLocation: "/img/",
			profileImage: "test-profile-pic.png",
        },
        {
			username: "El Jefe",
			id: 1,
			profileImageLocation: "/img/",
			profileImage: "user-jefe-profile-image.png",
        },
        {
			username: "Beerus Sucks",
			id: 3,
			profileImageLocation: "/img/",
			profileImage: "user-beerus-profile-image.png",
		}
    ],
    events: [
        {
            name: "Tavern Story Night",
            description: "Come and hang out with your fellow dragon born and recount the great moments of your adventures.",
            timestamp: "10 days ago",
            startDate: "10/25/18",
            endDate: "10/25/18",
            dateScheduled: "10/05/18",
        }
    ],

};

module.exports = groupData;
