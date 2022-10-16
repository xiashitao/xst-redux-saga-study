export function loginService({ name, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "admin" && password === "admin") {
        resolve({ success: true, name, password });
      } else {
        reject({ success: false, msg: "账户不合法" });
      }
    }, 1000);
  });
}
