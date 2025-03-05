"use client";

import { useState } from "react";
import aboutData from "../../data/about.json";

export default function About() {
  type Employee = {
    id: string; 
    name: string;
    role: string;
    bio: string;
  };

  type EmpData = {
    employees: Employee[];
  };

  const [emp, setEmp] = useState<EmpData>(aboutData);

  if (!emp) return <p>Loading...</p>;

  return (
    <>
      <p className="font-bold">About the company</p>
      <div>
        We started with a bunch of passionate techies in 2008, and now have grown into a family of 2500+ Newers,
        spread across our six locations - Singapore, New Delhi, Dehradun, Dubai, New Jersey, and Sydney catering
        to over 300 customers worldwide. In 2008, when the entire world was staring at one of the biggest
        depressions, we came into being. Our birth in the toughest of the times helped us in two ways - first,
        we had to be very cutting-edge with a clear differentiating factor, and second, we had to have very
        strong values and culture to attract and retain top-notch talent. We started working with internet
        product companies and ISVs who used to engage us for our engineering strength, agility (read Scrum!),
        and nimbleness. Within a span of a few years, we got a chance to work with many product companies
        (some of them from Silicon Valley). This gave us a very good experience of the digital ecosystem and
        how great products are designed and developed which are meant for global audiences. All this while, we
        kept investing in new-age technologies, including Cloud and Data.
      </div>

      <div>
        <h2 className="mt-6">Our Team</h2>
        <ul>
          {emp.employees.map((employee) => (
            <li key={employee.id} className="my-4">
              <p><strong>{employee.name}</strong> ({employee.role})</p>
              <p>{employee.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
