import { useState } from "react";

const RepositoriesList: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
