import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-16">
      <div className="max-w-3xl px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          About Our Task Management Application
        </h1>
        <p className="text-lg mb-6">
          Our task management application is designed to help you organize your
          tasks efficiently. Whether you&apos;re managing personal tasks or
          collaborating with a team, our application provides all the necessary
          features to keep you organized and productive.
        </p>
        <p className="text-lg mb-6">
          With our application, you can create tasks, set due dates, prioritize
          tasks, mark tasks as completed, and even collaborate with others by
          assigning tasks and leaving comments.
        </p>
        <p className="text-lg mb-6">
          We understand the importance of simplicity and usability, which is why
          our application comes with an intuitive user interface that makes task
          management a breeze. Say goodbye to scattered sticky notes and messy
          to-do lists – with our task management application, you'll have
          everything you need to stay organized and focused.
        </p>
      </div>
    </div>
  );
};

export default About;
