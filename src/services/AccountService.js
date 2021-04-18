const axios = require("axios");

// const cors = require("cors");

// const _store = require("../store/store.js");
// const { SSE } = require("./sse.js");
// const store = _store.default;

// let baseURL = `${process.env.VUE_APP_BACKEND}:2053`;
let baseURL = `http://ec2-54-180-90-248.ap-northeast-2.compute.amazonaws.com:1000`;

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Expose-Headers": "*",
  "Access-Control-Allow-Methods": "*",
};

// axios.defaults.baseURL = 'http://ec2-54-180-90-248.ap-northeast-2.compute.amazonaws.com:1000'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const apiClient = axios.create({
  headers,
  timeout: 60 * 60 * 1000,
});


// const simpleRequestHeaders = {
//   "Content-Type": "text/plain",
//   "cache-control": "max-age=43200",
// };

// const simpleRequestApiClient = axios.create({
//   headers: simpleRequestHeaders,
//   timeout: 60 * 60 * 1000,
// });

// function updateUserToken() {
//   apiClient.interceptors.request.use((request) => {
//     request.headers["Authorization"] =
//       store.getters["AccountModule/currentUserToken"];
//     if (request.method == "post" || request.method == "delete") {
//       if (request.data)
//         request.data.requestorOid =
//           store.getters["AccountModule/currentUserOid"];
//       request.data.loginType =
//         store.getters["AccountModule/currentUserLoginType"];
//     } else if (request.method == "get") {
//       if (request.params) {
//         request.params.requestorOid =
//           store.getters["AccountModule/currentUserOid"];
//         request.params.loginType =
//           store.getters["AccountModule/currentUserLoginType"];
//       }
//     }
//     return request;
//   });
// }

// updateUserToken();

export default {
  login(accountInfo) {
    console.log(accountInfo);
    return apiClient.get(baseURL + "/email", {
      params: {
        email: accountInfo.id,
      },
    });
  },
  // get(endpoint, _params) {
  //   const params = new URLSearchParams(_params);
  //   console.log(baseURL + `${endpoint}?` + params.toString());
  //   return fetch(baseURL + `${endpoint}?` + params.toString(), {
  //     method: "GET", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Expose-Headers": "*",
  //       "Access-Control-Allow-Methods": "*",
  //     },
  //     body: JSON.stringify(body), // body data type must match "Content-Type" header
  //   });
  // },
  
  // getTopCreators() {
  //   return fetch(baseURL + "/creatorlist.json", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "text/plain",
  //     },
  //   }).then((res) => {
  //     return res.json();
  //   });
  // },
  requestGoogleLogin() {
    return new Promise((resolve, reject) => {
      if (window.gapi && window.gapi.auth2) {
        window.gapi.auth2.getAuthInstance().then((googleAuth) => {
          googleAuth
            .signIn()
            .then(() => {
              const googleUser = googleAuth.currentUser.get();
              const profile = googleUser.getBasicProfile();
              const userEmail = profile.getEmail();
              const googleAccessToken = googleUser.getAuthResponse().id_token;
              this.post("/login", {
                token: googleAccessToken,
                loginAttemptType: "google",
              })
                .then((response) => {
                  if (response.data.accountType == "google")
                    resolve({ ...response, googleAccessToken });
                  else reject({ message: "account type err" });
                })
                .catch(() => {
                  reject({ userEmail, message: "not registered" });
                });
            })
            .catch(() => {
              reject({ message: "failed login" });
            });
        });
      } else {
        this.$store.dispatch("AccountModule/clearUser");
        this.$store.dispatch("AccountModule/clearLoginTimeRecord");
        this.$store.dispatch("AccountModule/clearLoginType");
        resolve();
      }
    });
  },
};
