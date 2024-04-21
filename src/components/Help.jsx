import React from "react";

const Help = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-16">
      <div className="max-w-3xl px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Help &amp; Support
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <ul className="list-disc list-inside">
              <li className="mb-2">How do I create a new task?</li>
              <li className="mb-2">How do I mark a task as completed?</li>
              <li className="mb-2">How do I edit an existing task?</li>
              <li className="mb-2">How do I delete a task?</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-2">
              If you have any questions, concerns, or feedback, feel free to
              reach out to us:
            </p>
            <p className="mb-2">Email: support@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
