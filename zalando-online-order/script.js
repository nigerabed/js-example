const OrderList = [
  {
    orderId: "20230001",
    amount: "245 kr",
    status: "Delivered",
    customer: "nigerabed",
  },
  {
    orderId: "20230088",
    amount: "301 kr",
    status: "Delivered",
    customer: "arshi",
  },
  {
    orderId: "20230201",
    amount: "104 kr",
    status: "Delivered",
    customer: "nigerabed",
  },
  {
    orderId: "20230299",
    amount: "99 kr",
    status: "Delivered",
    customer: "siraat",
  },
  {
    orderId: "20230405",
    amount: "755 kr",
    status: "Delivered",
    customer: "nigerabed",
  },
];

/*
    This function is for showing the list of order into HTML

*/
function showOrderlist() {
  let orderElement = document.getElementById("orderList");

  orderElement.innerHTML = "";
  OrderList.forEach(function (order) {
    let orderItemElement = document.createElement("li");
    orderItemElement.innerHTML = `
        <span> Order Number: ${order.orderId} </span>
        <span> Amount: ${order.amount} </span>
        <span> Status:  ${order.status}</span>
        <span> Customer:  ${order.customer}</span>
    `;

    orderElement.appendChild(orderItemElement);
  });
}
// Here calling the function to show the list for the first time
showOrderlist();

const orderUpdateForm = document.getElementById("order-update");
orderUpdateForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  // stop submitting the form
  event.preventDefault();

  let orderId;
  let orderStatus;


  // get the user input and save the value in variable
  const arrayField = Array.from(event.target);
  arrayField.forEach(function (field) {

    if (field.name == "orderid") {
      orderId = field.value;
    }

    if (field.name == "status") {
      orderStatus = field.value;
    }
  });

  // now find the orderId from the list and change the order status
  OrderList.forEach(function (item) {
    if (item.orderId == orderId) {
      item.status = orderStatus;
    }
  });

  // finally rander the list again
  showOrderlist();
}
