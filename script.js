/* =======================
   RATION CARD DATABASE
   ======================= */

const rationDB = {
  RC1001: {
    cardDetails: {
      type: "PHH",
      issueDate: "12-04-2019",
      fpsCode: "FPS-2031",
      district: "Chennai",
      state: "Tamil Nadu"
    },

    head: {
      name: "Ramesh Kumar",
      gender: "Male",
      age: 42
    },

    family: [
      {
        name: "Ramesh Kumar",
        relation: "Head",
        gender: "Male",
        age: 42,
        aadhaar: "XXXX-XXXX-1234"
      },
      {
        name: "Lakshmi Ramesh",
        relation: "Wife",
        gender: "Female",
        age: 38,
        aadhaar: "XXXX-XXXX-5678"
      },
      {
        name: "Karthik R",
        relation: "Son",
        gender: "Male",
        age: 16,
        aadhaar: "XXXX-XXXX-1122"
      },
      {
        name: "Anitha R",
        relation: "Daughter",
        gender: "Female",
        age: 12,
        aadhaar: "XXXX-XXXX-3344"
      },
      {
        name: "Meena Devi",
        relation: "Mother",
        gender: "Female",
        age: 65,
        aadhaar: "XXXX-XXXX-7788"
      }
    ],

    address: {
      door: "12A",
      street: "Anna Nagar",
      city: "Chennai",
      district: "Chennai",
      state: "Tamil Nadu",
      pincode: "600040"
    },

    entitlement: {
      rice: "20 Kg",
      wheat: "10 Kg",
      sugar: "5 Kg",
      kerosene: "3 Liters"
    }
  }
};

/* =======================
   FETCH & DISPLAY LOGIC
   ======================= */

const params = new URLSearchParams(window.location.search);
const rc = params.get("rc");
const data = rationDB[rc];

if (!data) {
  alert("Invalid Ration Card Number");
} else {
  document.getElementById("rc").innerText = rc;
  document.getElementById("type").innerText = data.cardDetails.type;
  document.getElementById("issue").innerText = data.cardDetails.issueDate;
  document.getElementById("fps").innerText = data.cardDetails.fpsCode;

  document.getElementById("head").innerText =
    `${data.head.name} (${data.head.gender}, Age: ${data.head.age})`;

  const table = document.getElementById("familyTable");
  data.family.forEach(m => {
    table.innerHTML += `
      <tr>
        <td>${m.name}</td>
        <td>${m.relation}</td>
        <td>${m.gender}</td>
        <td>${m.age}</td>
        <td>${m.aadhaar}</td>
      </tr>`;
  });

  document.getElementById("address").innerText =
    `${data.address.door}, ${data.address.street}, ${data.address.city},
     ${data.address.district}, ${data.address.state} - ${data.address.pincode}`;

  document.getElementById("rice").innerText = data.entitlement.rice;
  document.getElementById("wheat").innerText = data.entitlement.wheat;
  document.getElementById("sugar").innerText = data.entitlement.sugar;
  document.getElementById("kerosene").innerText = data.entitlement.kerosene;
}
