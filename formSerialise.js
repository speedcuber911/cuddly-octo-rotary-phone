// `<input type="text" name="street.name" />
// <input type="text" name="street.number" />
// <input type="text" name="zipcode" />
// <input type="text" name="contact.phone.area" />
// <input type="text" name="contact.phone.exchange" />
// <input type="text" name="contact.phone.subscriber" />
// `;

function setIterative(target, key, value = "") {
  var nameArr = key.split(".");
  var nameLength = nameArr.length;
  var lastName = nameArr[nameLength - 1];

  for (var nameIndex = 0; nameIndex < nameLength - 1; nameIndex++) {
    var name = nameArr[nameIndex];
    if (!target[name]) {
      target[name] = {};
    }
    console.log(Object.keys(target));
    target = target[name];
  }
  target[lastName] = value;
  console.log(JSON.stringify(target));
}
console.log(setIterative({}, "contact.phone.area.code"));
