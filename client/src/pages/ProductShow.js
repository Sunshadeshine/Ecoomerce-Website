window.onload = function () {
  //// SLIDER

  /////////////////////////////////////////////////////////

  ///// Specification Field

  var buttonFullSpecification = document.getElementsByClassName(
    "block_specification"
  )[0];
  var buttonSpecification = document.getElementsByClassName(
    "block_specification__specificationShow"
  )[0];
  var buttonInformation = document.getElementsByClassName(
    "block_specification__informationShow"
  )[0];

  var blockCharacteristiic = document.querySelector(
    ".block_descriptionCharacteristic"
  );
  var activeCharacteristic = document.querySelector(
    ".block_descriptionCharacteristic__active"
  );

  buttonFullSpecification.onclick = function () {
    console.log("OK");

    buttonSpecification.classList.toggle("hide");
    buttonInformation.classList.toggle("hide");

    blockCharacteristiic.classList.toggle(
      "block_descriptionCharacteristic__active"
    );
  };

  /////  QUANTITY ITEMS

  var up = document.getElementsByClassName("block_quantity__up")[0],
    down = document.getElementsByClassName("block_quantity__down")[0],
    input = document.getElementsByClassName("block_quantity__number")[0];

  function getValue() {
    return parseInt(input.value);
  }

  up.onclick = function (event) {
    input.value = getValue() + 1;
  };
  down.onclick = function (event) {
    if (input.value <= 1) {
      return 1;
    } else {
      input.value = getValue() - 1;
    }
  };
};
