import {
  ACCESS_TOKEN,
  IS_LOGGED_IN,
  REFRESH_TOKEN,
} from "../configs/variables.config";
// import Navigate from 'universal-navigate';

export const getUserloggedInData = () => {
  if (localStorage.hasOwnProperty("userData")) {
    return JSON.parse(localStorage.getItem("userData"));
  } else {
    return null;
  }
};

export const parseJwt = (token) => {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export const CheckUserExpired = (pageStatus) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (!token) return;
  const { exp } = parseJwt(token);
  if (exp * 1000 < Date.now()) {
    localStorage.removeItem("userData");
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(IS_LOGGED_IN);

    // if(pageStatus != "public") {
    //     Navigate.push({
    //         url: '/login?expired=true',
    //         animated: true
    //     });
    // }
  }
};

export function convertMiladiToShamsi(gy, gm, gd) {
  var g_d_m, jy, jm, jd, gy2, days;
  g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  gy2 = gm > 2 ? gy + 1 : gy;
  days =
    355666 +
    365 * gy +
    ~~((gy2 + 3) / 4) -
    ~~((gy2 + 99) / 100) +
    ~~((gy2 + 399) / 400) +
    gd +
    g_d_m[gm - 1];
  jy = -1595 + 33 * ~~(days / 12053);
  days %= 12053;
  jy += 4 * ~~(days / 1461);
  days %= 1461;
  if (days > 365) {
    jy += ~~((days - 1) / 365);
    days = (days - 1) % 365;
  }
  if (days < 186) {
    jm = 1 + ~~(days / 31);
    jd = 1 + (days % 31);
  } else {
    jm = 7 + ~~((days - 186) / 30);
    jd = 1 + ((days - 186) % 30);
  }
  return [jy + "/" + jm + "/" + jd];
}

export function removeAllUserData() {
  localStorage.removeItem("userData");
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
  localStorage.removeItem(IS_LOGGED_IN);
}

export const loadUserData = () => {
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));

    const userInfo = {
      id: userData.id,
      username: userData.username,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      Economic_code: userData.ecod,
      National_Code: userData.ncode,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      country: userData.country,
      state: userData.state,
      city: userData.city,
      zip: userData.zip,
      createdAt: userData.createdAt,
      exp: userData.exp,
      iat: userData.iat,
      loggedIn: userData.loggedIn,
      token: userData.token,
    };

    if (userData === null) {
      return (userInfo = {
        id: null,
        role: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        Economic_code: "",
        National_Code: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        city: "",
        zip: "",
        createdAt: null,
        exp: null,
        iat: null,
        loggedIn: false,
        token: "",
      });
    }
    return userInfo;
  } catch (err) {
    return undefined;
  }
};
