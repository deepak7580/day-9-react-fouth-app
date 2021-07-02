import { useState } from "react";

export function HomePage() {
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
