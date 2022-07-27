
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-analytics.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
        import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";
        import { getFirestore, collection } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
                const firebaseConfig = {
                  apiKey: "AIzaSyAK09hAg1puDmfULhLqvCKf86crQ_eyFWI",
                  authDomain: "algo-simulation-7cc87.firebaseapp.com",
                  databaseURL: "https://algo-simulation-7cc87-default-rtdb.firebaseio.com",
                  projectId: "algo-simulation-7cc87",
                  storageBucket: "algo-simulation-7cc87.appspot.com",
                  messagingSenderId: "435094910087",
                  appId: "1:435094910087:web:776c43a33ed8bf4ff6b422",
                  measurementId: "G-1MT1BNZNRK"
                };
          
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            const auth = getAuth();
            const db = getDatabase();
            //db.settings({ timestampsInSnapshots: true });
            const signupForm = document.querySelector('#signup-form');

            signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // get user info
            const email = signupForm['signup-email'].value;
            const password = signupForm['signup-password'].value;
            console.log(email, password);
            // sign up the user
            if (!Validation()){
                    return;
                };
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                // close the signup modal & reset form
                const modal = document.querySelector('#modal-signup');
                M.Modal.getInstance(modal).close();
                signupForm.reset()
                const user = userCredential.user;
                writeUserData(user, email);
                ;})
                .catch((error)=> {
                            const errorCode = error.code;
                            const errorMessage = error.message;

                            alert(errorMessage);
                        })
            });

            // logout
            const logout = document.querySelector('#logout');

            logout.addEventListener('click', (e) => {
                e.preventDefault();
                signOut(auth).then(() => {
                    console.log('user signed out');
                })
                });

            // login
            const loginForm = document.querySelector('#login-form');
            loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // get user info
            const email = loginForm['login-email'].value;
            const password = loginForm['login-password'].value;

            // log the user in
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                // close the signup modal & reset form
                const modal = document.querySelector('#modal-login');
                M.Modal.getInstance(modal).close();
                loginForm.reset();
                })
                .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                    });
            });

            
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    console.log('user logged in: ', user);
                    setupUI(user);
                    const uid = user.uid;
                } else {
                    console.log('user logged out');
                    setupUI();
                }
                });

                const loggedOutLinks = document.querySelectorAll('.logged-out');
                const loggedInLinks = document.querySelectorAll('.logged-in');
                const accountDetails = document.querySelector('.account-details');

                const setupUI = (user) => {
                if (user) {
                    // account info
                    db.collection('users').doc(user.uid).get().then(doc => {
                    const html = `
                        <div>Logged in as ${user.email}</div>
                        <div>${doc.data().bio}</div>
                    `;
                    accountDetails.innerHTML = html;
                    });
                    // toggle user UI elements
                    loggedInLinks.forEach(item => item.style.display = 'block');
                    loggedOutLinks.forEach(item => item.style.display = 'none');
                } else {
                    // clear account info
                    accountDetails.innerHTML = '';
                    // toggle user elements
                    loggedInLinks.forEach(item => item.style.display = 'none');
                    loggedOutLinks.forEach(item => item.style.display = 'block');
                }
                };

                function writeUserData(userId, email) {
        
                const db = getDatabase();
                const dbRef = ref(db);

                get(child(dbRef, "UsersList/"+ userId.uid)).then((snapshot)=>{
                    if(snapshot.exists()){
                    alert("Account already exists.");
                }
                    else{
                    set(ref(db, "UsersList/" + userId.uid),{
                    UID: userId.uid,
                    email: email,
                    })
                    .then(()=>{
                    alert("The account was registered successfully.");
                    })
                    .catch((error)=>{
                    alert("error" + error);
                    })
            }
        });
        }


        const forgotPasswordForm = document.querySelector('#forgotPassword-form');
        forgotPasswordForm.addEventListener('submit',(e) => {
            e.preventDefault();
            const forgotEmail = forgotPasswordForm['forgotPassword-email'].value;
            sendPasswordResetEmail(auth, forgotEmail)
                .then(() => {
                // Password reset email sent!
                // ..
                alert('Password reset instructions were sent to ' + forgotEmail + ".")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.code);
                // ..
            });

            });

            function isEmptyOrSpaces(str){
                return str ===null || str.match(/^ *$/) !== null;
            }

            function Validation(){
                let emailregex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook|hotmail)\.com$/;
                let nameregex = /^[a-zA-Z\s]+$/;
                const email = document.getElementById("signup-email");
                const password = document.getElementById("signup-password");
                const password2 = document.getElementById("signup-confirmPassword");

                if(isEmptyOrSpaces(email.value) || isEmptyOrSpaces(password.value)){
                    alert("You cannot have any blank fields.")
                    return false;
                }
                if(!emailregex.test(email.value)){
                    alert("Enter a valid email address");
                    return false;
                }
                if(password.value != password2.value){
                    alert("Passwords do not match.");
                    return;
                }
                return true;
            }
            
            let userlink = document.getElementById('userlink');
            let signoutlink = document.getElementById('signoutlink');
            var currentUser = null;

            function getUsername(){
                let keepLoggedIn = localStorage.getItem("keepLoggedIn");
                if(keepLoggedIn == "yes"){
                    currentUser = JSON.parse(localStorage.getItem('user'))
                }
                else{
                    currentUser = JSON.parse(sessionStorage.getItem('user'))
                }
            }

            
          
