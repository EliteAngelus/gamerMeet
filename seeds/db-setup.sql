DROP DATABASE IF EXISTS GamersMeet;

CREATE DATABASE GamersMeet;

USE GamersMeet;

CREATE TABLE userAccounts(
	accountID int auto_increment not null,
    username varchar(20) not null,
    joinDate date not null,
    email varchar(40) not null,
    password varchar(30) not null,
    primary key(accountID)
);


CREATE TABLE users(
	userID int auto_increment not null,
    accountID int not null,
	profileAccess bool not null,
	username varchar(30) not null,
    joinDate date,
    lastActive datetime,
    profileImage text,
    profileBanner text,
    friends longtext,
    joinedEvents longtext,
    joinedGroups longtext,
    mods longtext,
	bio tinytext,
    primary key (userID),
    FOREIGN KEY (accountID) REFERENCES userAccounts (accountID)
);


CREATE TABLE userMessages(
	ID int auto_increment not null,
    userID int not null,
	text tinytext not null,
    targetID int not null,
    date date not null,
    time timestamp not null,
    primary key(ID),
    foreign key(userID) references users(userID),
    foreign key(targetID) references users(userID) 
);

CREATE TABLE sessions(
	ID int auto_increment not null,
    accountID int,
    cookieID text not null,
    cookieIP text not null,
    lastActive datetime not null,
    isActive bool not null default true, 
    primary key (ID),
    foreign key (accountID) references userAccounts(accountID)
);


insert into userAccounts(username, joinDate, email, password) 
	values
    ("CXL", date("2018-08-10"), "CXL@CXL.CXL", "GuessMeIfYouCan"),
    ("Jefe", date("2018-08-11"), "CXL@CXL.CXL", "GuessMeIfYouCan"),
    ("Simon Belmont", date("2018-08-12"), "CXL@CXL.CXL", "GuessMeIfYouCan"),
    ("Beerus Sucks", date("2018-08-13"), "CXL@CXL.CXL", "GuessMeIfYouCan"),
    ("Samus", date("2018-08-14"), "CXL@CXL.CXL", "GuessMeIfYouCan"),
    ("I play on WiFi", date("2018-08-15"), "CXL@CXL.CXL", "GuessMeIfYouCan")
    ;
    
insert into users(accountID, profileAccess, username, joinDate, lastActive, profileImage, profileBanner, friends, joinedEvents, joinedGroups, mods, bio)
	values 
    (1, 0, "CXL", date("2018-08-10"), date("2018-08-10"), "test-profile-pic.png", null, null, null, null, null, "I'm here to kick ass and chew bubblegum. And I'm running low on gum."),
    (2, 0, "Jefe", date("2018-08-11"), date("2018-08-10"), "user-jefe-profile-image.png", null, null, null, null, null, "I am the great SAYAMAN!!!"),
    (3, 1, "Simon Belmont", date("2018-08-12"), date("2018-08-10"), "user-simon-profile-image.png", null, null, null, null, null, "*Listening to Vampire Killer for the 1000th time. Still great.*"),
    (4, 1, "Beerus Sucks", date("2018-08-13"), date("2018-08-10"), "user-beerus-profile-image.png", null, null, null, null, null, "I'm going back to sleep. Wake me up when the next patch drops."),
    (5, 0, "Samus", date("2018-08-14"), date("2018-08-10"), "test-profile-pic.png", null, null, null, null, null, "I'm here to kick ass and chew bubblegum. And I'm running low on gum."),
    (6, 1, "I play on WiFi", date("2018-08-15"), date("2018-08-10"), "test-profile-pic.png", null, null, null, null, null, "I'm here to kick ass and chew bubblegum. And I'm running low on gum."),
    (6, 1, "Tri-Force Heros", date("2018-08-15"), null, "tri-force-group-banner.png", null, null, null, null, null, "Hyaaaaah!"),
    (3, 1, "Skyrim in Seattle", date("2018-08-15"), null, "skyrim-in-seattle-group-image.png", null, null, null, null, null, "Calling all dragon born to help protect the people of seattle from dragons."),
    (4, 1, "Not Even Our Final Form", date("2018-08-05"), null, "not-even-our-final-form-group-banner.jpg", null, null, null, null, null, "I don't choose my real form because my power is too radical to control.")
    ;
    
insert into userMessages(userID, text, targetID, date, time)
	values 
    (1, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 1, date("2018-10-10"), localtimestamp()),
    (2, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 4, date("2018-10-10"), localtimestamp()),
    (3, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 6, date("2018-10-10"), localtimestamp()),
    (4, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 3, date("2018-10-10"), localtimestamp()),
    (5, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 7, date("2018-10-10"), localtimestamp()),
    (6, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 7, date("2018-10-10"), localtimestamp()),
    (1, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 8, date("2018-10-10"), localtimestamp()),
    (2, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 8, date("2018-10-10"), localtimestamp()),
    (3, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 9, date("2018-10-10"), localtimestamp()),
    (3, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 9, date("2018-10-10"), localtimestamp()),
    (5, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 9, date("2018-10-10"), localtimestamp()),
    (6, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 4, date("2018-10-10"), localtimestamp()),
    (6, "UNIst is the greatest fighting game of all time! ALMOST DEFINITELY PROBABLY! I'm pretty sure.", 7, date("2018-10-10"), localtimestamp())
    ;
   