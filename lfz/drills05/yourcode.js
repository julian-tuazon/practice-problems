function populateRecords(arr){
  var charge = 0;
  var cashAdvance = 0;
  var record = $("<div>").addClass("testOutput").appendTo("#testArea");
  var title = $("<div>").addClass("transactionRecord").appendTo(record);
  title.append(
    $("<div>").addClass("transactionType").text("TYPE"),
    $("<div>").addClass("transactionLocation").text("SOURCE"),
    $("<div>").addClass("transactionAmount").text("AMOUNT"),
  );
  for (var i = 0; i < arr.length; i++) {
    var container = $("<div>").addClass("transactionRecord").appendTo(record);

    var type = $("<div>").addClass("transactionType").text(arr[i].type).appendTo(container);
    var source = $("<div>").addClass("transactionLocation").text(arr[i].source).appendTo(container);
    var amt = $("<div>").addClass("transactionAmount").text(arr[i].amount).appendTo(container);

    var amount = parseFloat(arr[i].amount);
    switch (arr[i].type) {
      case "charge":
        charge += amount;
        break;
      case "cash advance":
        cashAdvance += amount;
        break;
    }
  }
  console.log(record.text());
  return {
    charge: charge,
    "cash advance": cashAdvance,
  };
}
