import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <MyAppHomePage />

      <MyAppExplorePage />

      <MyAppNotificationPage />

      <MyAppMessagesPage />
    </div>
  );
}

function MyAppHomePage() {
  const [list] = useState([1, 1]);
  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Home</h2>
      {list.map(() => (
        <div className="bg-secondary text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

function MyAppExplorePage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Explore</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-info text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}
function MyAppNotificationPage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Notification</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-success text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

function MyAppMessagesPage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Messages</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-warning text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

export default App;
