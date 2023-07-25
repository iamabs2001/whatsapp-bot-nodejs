const wbm = require("./index");

wbm
  .start()
  .then(async () => {
    const contacts = [
      { phone: "+9190048xxxxx", name: "Ram", otp: 123456 },
      { phone: "+9190048xxxxx", name: "Alex", otp: 234567 },
    ];
    const message = `Hi {{name}}, your one time password to login in your hero account is {{otp}}.`;
    await wbm.send(contacts, message);
    await wbm.end();
  })
  .catch((err) => console.log(err));
