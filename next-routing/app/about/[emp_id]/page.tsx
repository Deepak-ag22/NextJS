"use client";
import { useParams } from "next/navigation";
import empData from "../../../data/about.json";

type Employee = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

type Params = {
  emp_id: string;
};

export default function ProductDetails() {
  const params = useParams() as Params;
  const empId = params.emp_id;

  const employee: Employee | undefined = empData.employees.find(
    (emp: Employee) => emp.id === empId
  );

  if (!employee) {
    return (
      <>
      <p>Loading...</p>
      </>
    );
  }

  return (
    <div className="product-details p-6">
      <h1 className="text-2xl font-bold">{employee.name}</h1>
      <p className="text-lg text-gray-700 mt-2">{employee.role}</p>
      <p className="text-sm text-gray-500 mt-2">Category: {employee.bio}</p>
    </div>
  );
}


