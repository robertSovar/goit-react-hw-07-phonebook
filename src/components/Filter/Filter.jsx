import PropTypes from "prop-types";
import styles from "../Filter/Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/slices/filterSlice";
import { selectFilter } from "../../redux/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const changeFilterInput = (event) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <label>
      <input
        className={styles.filterInput}
        type="text"
        name={filter}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
      />
    </label>
  );
};

export default Filter;
