export interface Customer {
  id: string;

  firstName: string;

  lastName: string;

  gender:
    | "Male"
    | "Female";

  age: number;

  dob: string;

  city: string;

  country: string;

  height: number;

  email: string;

  phone: string;

  college: string;

  degree: string;

  income: number;

  company: string;

  designation: string;

  maritalStatus: string;

  languages: string[];

  siblings: number;

  religion: string;

  caste: string;

  wantKids:
    | "Yes"
    | "No"
    | "Maybe";

  relocate:
    | "Yes"
    | "No"
    | "Maybe";

  pets:
    | "Yes"
    | "No"
    | "Maybe";

  values: string[];
}