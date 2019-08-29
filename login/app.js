const users = [
    {
      username: 'ryan',
      password: 'password123'
    },
    {
      username: 'travis',
      password: 'password1234'
    },
    {
      username: 'alexander',
      password: 'password1235'
    }
  ]
  
  document.getElementById('login').onclick = function login () {
    // retreive data from username and store in username variable
    const username = document.getElementById('username').value
    // retreive data from password and store in password variable
    const password = document.getElementById('password').value
  
    // loop through all the user pbjects and confrim if the username and password are correct
    for (var i = 0; i < users.length; i++) {
      // check to
      if (username === users[i].username && password === users[i].password) {
        window.location.href = '../public/index.html'
        // stop the statement if result is found true - this was a return in the video, break is best practice here
      } else {
        // error if username and password don't match
        alert('incorrect username or password')
      }
    }
  }
  
  // register functionality
  document.getElementById('register').onclick = function register () {
    // store new users username
    var registerUsername = document.getElementById('newUsername').value
    // store new users password
    var registerPassword = document.getElementById('newPassword').value
    // store new user data in an object
    var newUser = {
      username: registerUsername,
      password: registerPassword
    }
    // loop throught people array to see if the username is taken, or password to short
    for (var i = 0; i < users.length; i++) {
      // check if new username is equal to any already created usernames
      if (registerUsername === users[i].username) {
        // alert user that the username is take
        alert('That username is alreat in user, please choose another')
        // stop the statement if result is found true
        break
        // check if new password is 8 characters or more
      } else if (registerPassword.length < 8) {
        // alert user that the password is to short
        alert('That is to short, include 8 or more characters')
        // stop the statement if result is found true
        break
      }
    }
    // push new object to the people array
    users.push(newUser)
    // console the updated people array
    console.log(users)
  }
  