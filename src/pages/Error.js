import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <section>
      <p>The page you are looking for does not exist.</p>
      <p>
        Go back to <Link to="/">the home page</Link>.
      </p>
    </section>
  );
}

export default Error;
