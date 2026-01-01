import React, { useState, useEffect } from "react";

const AdmissionFormModal = ({ isOpen, onClose, academicLevel }) => {
  const emptyForm = {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    age: "",
    religion: "",
    caste: "",
    category: "",
    aadhaarNumber: "",
    className: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    email: "",
    permanentAddress: "",
    correspondenceAddress: "",
    city: "",
    state: "",
    pinCode: "",
    fatherName: "",
    fatherOccupation: "",
    fatherMobileNumber: "",
    motherName: "",
    motherOccupation: "",
    motherMobileNumber: "",
    guardianName: "",
    annualFamilyIncome: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");
  const [sameAsPermanent, setSameAsPermanent] = useState(false);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const numericFields = new Set([
    "aadhaarNumber",
    "mobileNumber",
    "alternateMobileNumber",
    "pinCode",
    "fatherMobileNumber",
    "motherMobileNumber",
    "annualFamilyIncome",
  ]);

  const update = (e) => {
    const { name } = e.target;
    let { value } = e.target;

    // Allow only numeric input for specific fields
    // \D matches any non-digit character (anything except 0-9)
    // Replace all non-digits with empty string to ensure only numbers remain
    if (numericFields.has(name)) {
      value = value.replace(/\D/g, "");
    }

    setForm((f) => {
      const updated = { ...f, [name]: value };
      if (name === "permanentAddress" && sameAsPermanent) {
        updated.correspondenceAddress = value;
      }
      return updated;
    });

    if (name === "dateOfBirth" && value) {
      const dob = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const monthDiff = today.getMonth() - dob.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < dob.getDate())
      ) {
        age--;
      }
      setForm((f) => ({ ...f, age: age.toString() }));
    }
  };

  const toggleSameAsPermanent = (e) => {
    const checked = e.target.checked;
    setSameAsPermanent(checked);
    if (checked) {
      setForm((f) => ({ ...f, correspondenceAddress: f.permanentAddress }));
    }
  };

  const validateNumericFields = () => {
    const errors = [];

    // Validate Mobile Number (required)
    if (!form.mobileNumber || !/^\d+$/.test(form.mobileNumber)) {
      errors.push("Mobile Number must contain only digits");
    } else if (form.mobileNumber.length !== 10) {
      errors.push("Mobile Number must be exactly 10 digits");
    }

    // Validate Alternate Mobile Number (optional, but if provided must be numeric)
    if (
      form.alternateMobileNumber &&
      !/^\d+$/.test(form.alternateMobileNumber)
    ) {
      errors.push("Alternate Mobile Number must contain only digits");
    } else if (
      form.alternateMobileNumber &&
      form.alternateMobileNumber.length !== 10
    ) {
      errors.push("Alternate Mobile Number must be exactly 10 digits");
    }

    // Validate Father Mobile Number (optional, but if provided must be numeric)
    if (form.fatherMobileNumber && !/^\d+$/.test(form.fatherMobileNumber)) {
      errors.push("Father's Mobile Number must contain only digits");
    } else if (
      form.fatherMobileNumber &&
      form.fatherMobileNumber.length !== 10
    ) {
      errors.push("Father's Mobile Number must be exactly 10 digits");
    }

    // Validate Mother Mobile Number (optional, but if provided must be numeric)
    if (form.motherMobileNumber && !/^\d+$/.test(form.motherMobileNumber)) {
      errors.push("Mother's Mobile Number must contain only digits");
    } else if (
      form.motherMobileNumber &&
      form.motherMobileNumber.length !== 10
    ) {
      errors.push("Mother's Mobile Number must be exactly 10 digits");
    }

    // Validate Annual Family Income (optional, but if provided must be numeric)
    if (form.annualFamilyIncome && !/^\d+$/.test(form.annualFamilyIncome)) {
      errors.push("Annual Family Income must contain only digits");
    }

    // Validate Aadhaar Number (optional, but if provided must be numeric and 12 digits)
    if (form.aadhaarNumber && !/^\d+$/.test(form.aadhaarNumber)) {
      errors.push("Aadhaar Number must contain only digits");
    } else if (form.aadhaarNumber && form.aadhaarNumber.length !== 12) {
      errors.push("Aadhaar Number must be exactly 12 digits");
    }

    // Validate Pin Code (required)
    if (!form.pinCode || !/^\d+$/.test(form.pinCode)) {
      errors.push("Pin Code must contain only digits");
    } else if (form.pinCode.length !== 6) {
      errors.push("Pin Code must be exactly 6 digits");
    }

    return errors;
  };

  const submit = (e) => {
    e.preventDefault();

    // Validate numeric fields
    const validationErrors = validateNumericFields();
    if (validationErrors.length > 0) {
      setToast(validationErrors[0]); // Show first error
      return;
    }

    setLoading(true);

    // Simulate form submission - data not saved to database
    setTimeout(() => {
      setToast("Application submitted successfully!");
      setForm(emptyForm);
      setSameAsPermanent(false);
      setLoading(false);

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-4 right-4 ${
            toast.includes("successfully") ? "bg-emerald-500" : "bg-red-500"
          } text-white px-6 py-3 rounded-lg shadow-lg z-60 animate-slide-in`}
        >
          {toast}
        </div>
      )}

      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Admission Application
            </h2>
            {academicLevel && (
              <p className="text-indigo-100 text-sm mt-1">
                Program: {academicLevel}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-indigo-700 p-2 rounded-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={submit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Personal Information
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Middle Name
                </label>
                <input
                  name="middleName"
                  value={form.middleName}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter middle name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mt-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={form.dateOfBirth}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={update}
                  required
                  min="1"
                  max="100"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  readOnly
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mt-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Religion
                </label>
                <select
                  name="religion"
                  value={form.religion}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                >
                  <option value="">Select Religion</option>
                  <option value="Hinduism">Hinduism</option>
                  <option value="Islam">Islam</option>
                  <option value="Christianity">Christianity</option>
                  <option value="Sikhism">Sikhism</option>
                  <option value="Buddhism">Buddhism</option>
                  <option value="Jainism">Jainism</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Caste
                </label>
                <input
                  name="caste"
                  value={form.caste}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter caste"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="SC">SC</option>
                  <option value="ST">ST</option>
                  <option value="OBC">OBC</option>
                  <option value="EWS">EWS</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Aadhaar Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="aadhaarNumber"
                  value={form.aadhaarNumber}
                  onChange={update}
                  maxLength="12"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter Aadhaar number"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Class <span className="text-red-500">*</span>
                </label>
                <select
                  name="className"
                  value={form.className}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                >
                  <option value="">Select Class</option>
                  <option value="Pre-Primary">Pre-Primary</option>
                  <option value="Nursery">Nursery</option>
                  <option value="LKG">LKG</option>
                  <option value="UKG">UKG</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                  <option value="4th">4th</option>
                  <option value="5th">5th</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th">11th</option>
                  <option value="12th">12th</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Contact Information
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Mobile Number (Student){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="mobileNumber"
                  value={form.mobileNumber}
                  onChange={update}
                  required
                  maxLength="10"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Alternate Mobile Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="alternateMobileNumber"
                  value={form.alternateMobileNumber}
                  onChange={update}
                  maxLength="10"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter alternate mobile number"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter email address"
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Address Information
            </h3>
            <div>
              <label className="text-sm font-medium text-slate-700">
                Permanent Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="permanentAddress"
                value={form.permanentAddress}
                onChange={update}
                required
                rows="3"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                placeholder="Enter permanent address"
              />
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="sameAsPermanent"
                checked={sameAsPermanent}
                onChange={toggleSameAsPermanent}
                className="rounded border-slate-300"
              />
              <label
                htmlFor="sameAsPermanent"
                className="ml-2 text-sm text-slate-700"
              >
                Correspondence same as Permanent Address
              </label>
            </div>

            {!sameAsPermanent && (
              <div className="mt-4">
                <label className="text-sm font-medium text-slate-700">
                  Correspondence Address
                </label>
                <textarea
                  name="correspondenceAddress"
                  value={form.correspondenceAddress}
                  onChange={update}
                  rows="3"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter correspondence address"
                />
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-3 mt-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter city"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  name="state"
                  value={form.state}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter state"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Pin Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="pinCode"
                  value={form.pinCode}
                  onChange={update}
                  required
                  maxLength="6"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter pin code"
                />
              </div>
            </div>
          </div>

          {/* Parent Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Parent Information
            </h3>
            <div className="grid gap-4 sm:grid-cols-3 mb-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Father Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="fatherName"
                  value={form.fatherName}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter father's name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Father Occupation
                </label>
                <input
                  name="fatherOccupation"
                  value={form.fatherOccupation}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter father's occupation"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Father Mobile Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="fatherMobileNumber"
                  value={form.fatherMobileNumber}
                  onChange={update}
                  maxLength="10"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter father's mobile"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 mb-4">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Mother Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="motherName"
                  value={form.motherName}
                  onChange={update}
                  required
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter mother's name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Mother Occupation
                </label>
                <input
                  name="motherOccupation"
                  value={form.motherOccupation}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter mother's occupation"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Mother Mobile Number
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="motherMobileNumber"
                  value={form.motherMobileNumber}
                  onChange={update}
                  maxLength="10"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter mother's mobile"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Guardian Name
                </label>
                <input
                  name="guardianName"
                  value={form.guardianName}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter guardian's name (if applicable)"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Annual Family Income
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="\\d*"
                  name="annualFamilyIncome"
                  value={form.annualFamilyIncome}
                  onChange={update}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
                  placeholder="Enter annual family income"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 pt-6 border-t border-slate-200">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold py-3 rounded-lg hover:shadow-lg disabled:opacity-50 transition"
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-slate-200 text-slate-700 font-semibold py-3 rounded-lg hover:bg-slate-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AdmissionFormModal;
