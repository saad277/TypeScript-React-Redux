import { useState } from "react";
import { connect } from "react-redux";
import { search } from "../store";

interface RepositoryListProps {
  search: Function;
  list: [];
}

const RepositoriesList: React.FC<RepositoryListProps> = (props) => {
  const { search, list } = props;

  console.log(list);

  const [searchText, setSearchText] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    search(searchText);
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

const mapDispatchToProps = {
  search,
};

const mapStateToProps = (state: any) => {
  return {
    list: state.repositories.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);
