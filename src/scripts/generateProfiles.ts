import { writeFileSync } from "fs";

const maleNames = [
  "Rahul", "Aman", "Arjun", "Rohit", "Ankit",
  "Karan", "Vivek", "Aditya", "Saurabh", "Abhishek",
  "Yash", "Manish", "Harsh", "Shubham", "Nikhil",
  "Rajat", "Varun", "Ayush", "Deepak", "Mohit"
];

const femaleNames = [
  "Priya", "Sneha", "Kavya", "Pooja", "Neha",
  "Ananya", "Riya", "Aditi", "Shreya", "Nisha",
  "Simran", "Ishita", "Megha", "Payal", "Radhika",
  "Sakshi", "Tanvi", "Muskan", "Khushi", "Swati"
];

const surnames = [
  "Sharma", "Verma", "Gupta", "Singh", "Patel",
  "Agarwal", "Jain", "Mishra", "Pandey", "Yadav",
  "Reddy", "Nair", "Joshi", "Chauhan", "Bansal",
  "Malhotra", "Kapoor", "Tiwari", "Saxena", "Mehta"
];

const cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Pune",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Lucknow",
  "Indore",
  "Jaipur",
  "Bhopal"
];

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Adobe",
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
  "Deloitte",
  "Flipkart",
  "Paytm",
  "Zoho"
];

const designations = [
  "Software Engineer",
  "Senior Developer",
  "Product Manager",
  "Consultant",
  "Data Scientist",
  "Business Analyst",
  "Marketing Manager",
  "Finance Manager"
];

const colleges = [
  "IIT Delhi",
  "IIT Bombay",
  "IIT Kanpur",
  "IIT Kharagpur",
  "NIT Trichy",
  "NIT Warangal",
  "BITS Pilani",
  "IIIT Hyderabad",
  "IIM Ahmedabad",
  "IIM Bangalore"
];

const religions = [
  "Hindu",
  "Sikh",
  "Jain",
  "Muslim",
  "Christian"
];

const castes = [
  "Brahmin",
  "Rajput",
  "Kayastha",
  "Agarwal",
  "Patel",
  "Reddy",
  "Jat",
  "Gupta"
];

const valuesPool = [
  "Family",
  "Career",
  "Travel",
  "Fitness",
  "Spirituality",
  "Honesty",
  "Respect"
];

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomValues() {
  return valuesPool
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
}

const profiles = [];

for (let i = 1; i <= 200; i++) {
  const gender =
    Math.random() > 0.5
      ? "Male"
      : "Female";

  const firstName =
    gender === "Male"
      ? randomItem(maleNames)
      : randomItem(femaleNames);

  const age =
    gender === "Male"
      ? Math.floor(
          Math.random() * 10 + 25
        )
      : Math.floor(
          Math.random() * 10 + 22
        );

  const height =
    gender === "Male"
      ? Math.floor(
          Math.random() * 20 + 170
        )
      : Math.floor(
          Math.random() * 20 + 150
        );

  const income =
    gender === "Male"
      ? Math.floor(
          Math.random() * 3500000 +
            1000000
        )
      : Math.floor(
          Math.random() * 1800000 +
            400000
        );

  profiles.push({
    id: i.toString(),

    firstName,
    lastName:
      randomItem(surnames),

    gender,

    age,

    dob: "1995-01-01",

    city: randomItem(cities),

    country: "India",

    height,

    email: `${firstName.toLowerCase()}${i}@gmail.com`,

    phone: `98${Math.floor(
      10000000 +
        Math.random() * 90000000
    )}`,

    college:
      randomItem(colleges),

    degree:
      Math.random() > 0.5
        ? "B.Tech"
        : "MBA",

    income,

    company:
      randomItem(companies),

    designation:
      randomItem(designations),

    maritalStatus: "Single",

    languages: [
      "Hindi",
      "English",
    ],

    siblings: Math.floor(
      Math.random() * 3
    ),

    religion:
      randomItem(religions),

    caste: randomItem(castes),

    wantKids:
      randomItem([
        "Yes",
        "No",
        "Maybe",
      ]),

    relocate:
      randomItem([
        "Yes",
        "No",
        "Maybe",
      ]),

    pets: randomItem([
      "Yes",
      "No",
      "Maybe",
    ]),

    values: randomValues(),
  });
}

writeFileSync(
  "./src/data/matchPool.json",
  JSON.stringify(
    profiles,
    null,
    2
  )
);

console.log(
  "200 Indian profiles generated successfully."
);