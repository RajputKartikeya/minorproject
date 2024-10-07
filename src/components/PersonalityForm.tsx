import React, { useState } from "react";

interface FormData {
  age: string;
  locality: string;
  gender: string;
  tenthPercentage: string;
  twelfthPercentage: string;
  hobbies: string;
  writingHand: string;
  makeFriendsEasily: string;
  trustOthers: string;
  getAngryEasily: string;
  enjoyParties: string;
  decisionMaking: string;
  takeCharge: string;
  hearNegativeThings: string;
  repeatProblematicActions: string;
  difficultExperience: string;
  familySupport: string;
  likeSports: string;
  difficultToApproach: string;
  mindCheating: string;
}

interface Props {
  onSubmit: (data: FormData) => void;
}

const PersonalityForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    age: "",
    locality: "",
    gender: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    hobbies: "",
    writingHand: "",
    makeFriendsEasily: "3",
    trustOthers: "3",
    getAngryEasily: "3",
    enjoyParties: "3",
    decisionMaking: "3",
    takeCharge: "3",
    hearNegativeThings: "3",
    repeatProblematicActions: "3",
    difficultExperience: "",
    familySupport: "",
    likeSports: "",
    difficultToApproach: "",
    mindCheating: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderRangeInput = (name: string, label: string) => (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="range"
        id={name}
        name={name}
        min="1"
        max="5"
        value={formData[name as keyof FormData]}
        onChange={handleChange}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-gray-600">
        <span>Low</span>
        <span>High</span>
      </div>
    </div>
  );

  const renderRadioGroup = (name: string, label: string, options: string[]) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center mr-4">
            <input
              type="radio"
              name={name}
              value={option}
              checked={formData[name as keyof FormData] === option}
              onChange={handleChange}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2 text-sm text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-700"
        >
          Age*
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
        />
      </div>
      <div>
        <label
          htmlFor="locality"
          className="block text-sm font-medium text-gray-700"
        >
          Locality (city)*
        </label>
        <input
          type="text"
          id="locality"
          name="locality"
          value={formData.locality}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
        />
      </div>
      {renderRadioGroup("gender", "Gender*", ["Male", "Female"])}
      <div>
        <label
          htmlFor="tenthPercentage"
          className="block text-sm font-medium text-gray-700"
        >
          10th Percentage*
        </label>
        <input
          type="number"
          id="tenthPercentage"
          name="tenthPercentage"
          value={formData.tenthPercentage}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
        />
      </div>
      <div>
        <label
          htmlFor="twelfthPercentage"
          className="block text-sm font-medium text-gray-700"
        >
          12th Percentage*
        </label>
        <input
          type="number"
          id="twelfthPercentage"
          name="twelfthPercentage"
          value={formData.twelfthPercentage}
          onChange={handleChange}
          required
          min="0"
          max="100"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
        />
      </div>
      <div>
        <label
          htmlFor="hobbies"
          className="block text-sm font-medium text-gray-700"
        >
          What are your hobbies?*
        </label>
        <textarea
          id="hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
        ></textarea>
      </div>
      {renderRadioGroup(
        "writingHand",
        "Which hand do you prefer to use for writing?*",
        ["Left", "Right", "Both"]
      )}
      {renderRangeInput("makeFriendsEasily", "Can you make friends easily?*")}
      {renderRangeInput("trustOthers", "Can you trust others easily?*")}
      {renderRangeInput("getAngryEasily", "Can you get angry easily?*")}
      {renderRangeInput(
        "enjoyParties",
        "Do you enjoy parties and gatherings?*"
      )}
      {renderRangeInput("decisionMaking", "Decision making ability*")}
      {renderRangeInput(
        "takeCharge",
        "Do you like to take charge of the situation or event?*"
      )}
      {renderRangeInput(
        "hearNegativeThings",
        "How often do you hear negative things about you from others?*"
      )}
      {renderRangeInput(
        "repeatProblematicActions",
        "How often do you repeat problematic and controversial actions?*"
      )}
      {renderRadioGroup(
        "difficultExperience",
        "Have you ever encountered a difficult experience that has had a lasting impact on you?*",
        ["Yes", "No"]
      )}
      {renderRadioGroup(
        "familySupport",
        "Do you feel that your family provides you with the support you need?*",
        ["Yes", "No"]
      )}
      {renderRadioGroup("likeSports", "Do you like sports?*", ["Yes", "No"])}
      {renderRadioGroup(
        "difficultToApproach",
        "Is it difficult for you to approach others?*",
        ["Yes", "No"]
      )}
      {renderRadioGroup(
        "mindCheating",
        "Do you mind cheating to get ahead of others?*",
        ["Yes", "No"]
      )}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default PersonalityForm;
