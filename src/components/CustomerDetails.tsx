interface Props {
  customer: any;
}

export default function CustomerDetails({
  customer,
}: Props) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-2xl font-bold mb-5">
        Customer Profile
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <p>
          Name:
          {" "}
          {customer.firstName}
          {" "}
          {customer.lastName}
        </p>

        <p>
          Gender:
          {" "}
          {customer.gender}
        </p>

        <p>
          Age:
          {" "}
          {customer.age}
        </p>

        <p>
          City:
          {" "}
          {customer.city}
        </p>

        <p>
          Country:
          {" "}
          {customer.country}
        </p>

        <p>
          Height:
          {" "}
          {customer.height}
          cm
        </p>

        <p>
          Email:
          {" "}
          {customer.email}
        </p>

        <p>
          Phone:
          {" "}
          {customer.phone}
        </p>

        <p>
          College:
          {" "}
          {customer.college}
        </p>

        <p>
          Degree:
          {" "}
          {customer.degree}
        </p>

        <p>
          Income:
          ₹
          {customer.income}
        </p>

        <p>
          Company:
          {" "}
          {customer.company}
        </p>

        <p>
          Designation:
          {" "}
          {customer.designation}
        </p>

        <p>
          Religion:
          {" "}
          {customer.religion}
        </p>

        <p>
          Caste:
          {" "}
          {customer.caste}
        </p>

        <p>
          Want Kids:
          {" "}
          {customer.wantKids}
        </p>

        <p>
          Relocate:
          {" "}
          {customer.relocate}
        </p>

        <p>
          Pets:
          {" "}
          {customer.pets}
        </p>
      </div>
    </div>
  );
}