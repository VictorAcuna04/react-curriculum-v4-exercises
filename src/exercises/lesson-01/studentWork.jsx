//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Victor';
  const age = 22;
  const hobbies = ['Video games', 'Reading', 'Programming'];

  return (
    <div>
      <h1>About Me</h1>

      <p>
        Hi! My name is {name} and I am {age} years old.
      </p>

      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
