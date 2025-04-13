export default function QuizAppBlog() {
  return (
    <div className="flex flex-col items-center justify-center py-2 bg-white text-gray-800">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mt-8 mb-6">
          Building an Interactive Quiz Application
        </h1>

        <div className="prose max-w-none">
          <p className="mb-4">
            In this project, we developed an interactive quiz application using
            React and TypeScript. The application allows users to test their
            knowledge on various topics through a series of multiple-choice
            questions.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Project Overview</h2>
          <p className="mb-4">
            The Quiz App provides an engaging way for users to challenge
            themselves with quizzes on different subjects. Users can select a
            category, answer questions, and receive immediate feedback on their
            responses.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Multiple quiz categories</li>
            <li className="mb-2">Randomized questions from a large database</li>
            <li className="mb-2">Score tracking and performance statistics</li>
            <li className="mb-2">Timer for each question to add excitement</li>
            <li className="mb-2">
              Responsive design that works on mobile and desktop
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Technical Implementation
          </h2>
          <p className="mb-4">
            We built the application using React with TypeScript for type
            safety. The state management was handled using React Context API,
            which allowed for efficient data flow throughout the component
            hierarchy.
          </p>

          <p className="mb-4">
            For styling, we used Tailwind CSS which enabled rapid development of
            a clean, modern UI without writing custom CSS. The applications
            responsive design ensures it works well on devices of all sizes.
          </p>

          <div className="my-8 flex justify-center">
            <img
              src={'https://placehold.co/600x400'}
              alt="Project Thumbnail"
              className="object-cover rounded-lg"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Challenges and Solutions
          </h2>
          <p className="mb-4">
            One of the main challenges was implementing a timer that would work
            consistently across different questions and quiz sessions. We solved
            this by creating a custom hook that manages the timer state and
            provides methods to start, pause, and reset the timer as needed.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">
            Future Enhancements
          </h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">User authentication to save progress</li>
            <li className="mb-2">
              Leaderboards to compare scores with other users
            </li>
            <li className="mb-2">Custom quiz creation functionality</li>
            <li className="mb-2">
              More advanced analytics on user performance
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">Conclusion</h2>
          <p className="mb-4">
            Building this quiz application was a valuable learning experience
            that helped us improve our React skills and gain experience with
            TypeScript. The project demonstrates effective state management,
            component composition, and responsive design principles.
          </p>
        </div>
      </div>
    </div>
  );
}
