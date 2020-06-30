import * as React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  onTermChanged: (term: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [term, setTerm] = React.useState<string>("");

  return (
    <InputGroup className={styles.searchInput}>
      <FormControl
        placeholder="Symbol..."
        aria-label="Symbol"
        aria-describedby="basic-addon1"
        value={term}
        onChange={(x) => {
          setTerm(x.target.value);
        }}
      />
      <InputGroup.Append>
        <Button onClick={() => props.onTermChanged(term)} variant="success">
          Search
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBar;
