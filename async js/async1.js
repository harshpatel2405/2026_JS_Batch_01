// //  callback -- passing function as an args

// function WelcomeToTheJungle() {
//   console.log("Inside 1");

//   setTimeout(() => {
//     console.log(
//       "Movie of Akshay Kumar is Welcome to The Jungle by Sajid Nadiadwala",
//     );
//   }, 1000);

//   console.log("Inside 2");
// }

// function sajidNadiadwala(heroName, callback) {
//   console.log("Hero is : " + heroName);
//   callback();
// }

// sajidNadiadwala("Akshay Kumar", WelcomeToTheJungle);

//  callback hell
// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log("C");
//     }, 1000);
//     console.log("B");
//   }, 2000);
//   console.log("A");
// }, 3000);

// setTimeout(() => {
//   console.log("A");
// }, 6000);

// setTimeout(() => {
//   console.log("B");
// }, 3000);

// setTimeout(() => {
//   console.log("C");
// }, 4000);


function getUser(callback) {
    setTimeout(() => {
        console.log("1. User received");
        callback("Harsh");
    }, 1000);
}

function getProfile(username, callback) {
    setTimeout(() => {
        console.log("2. Profile received");
        callback("profile123");
    }, 1000);
}

function getPosts(profileId, callback) {
    setTimeout(() => {
        console.log("3. Posts received");
        callback(["Post 1", "Post 2"]);
    }, 1000);
}

function getComments(posts, callback) {
    setTimeout(() => {
        console.log("4. Comments received");
        callback(["Comment 1", "Comment 2"]);
    }, 1000);
}

function sendNotification(comments, callback) {
    setTimeout(() => {
        console.log("5. Notification sent");
        callback();
    }, 1000);
}

getUser(function (username) {
    getProfile(username, function (profileId) {
        getPosts(profileId, function (posts) {
            getComments(posts, function (comments) {
                sendNotification(comments, function () {
                    console.log("All tasks completed!");
                });
            });
        });
    });
});