const groupData = {
    id: 1,
	name: "Tri-Force Heros",
	message:
		"Hyaaaaah!",
    bannerImageLocation: "/img/",
    bannerImage: "tri-force-group-banner.png",
    cardImage: "/img/",
    cardImageLocation: "tri-force-group-image.png", 
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
            name: "Co op Night",
            description: "Lets take down gannon... together!",
            timestamp: "2 days ago",
            startDate: "10/17/18",
            endDate: "10/18/18",
            dateScheduled: "10/10/18",
        },
        {
            name: "Fashion show!",
            description: "Post pics of you defeating gannon in your favorite outfit.",
            timestamp: "10 days ago",
            startDate: "10/17/18",
            endDate: "10/18/18",
            dateScheduled: "10/10/18",
        }
    ],

};

module.exports = groupData;
