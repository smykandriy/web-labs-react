import { useCallback, useEffect, useState } from "react";
import { getHelicopters } from "../../services/getHelicopters";
import HelicopterList from "../../common/HelicopterList/HelicopterList";
import { ViewMoreButton } from "../../util/ViewMoreButton";
import styles from "./Catalog.module.scss";
import { CustomButton } from "../../util/CustomButton";
import { Loader } from "../../util/Loader";
import { useAppSelector } from "../../../redux";
import { selectCartItems } from "../../common/HelicopterDetailsModal/HelicopterDetails.slice";

export const Catalog: React.FC = () => {
  const [helicopters, setHelicopters] = useState([]);
  const [visibleRows, setVisibleRows] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [loading, setLoading] = useState(true);
  const cartItems = useAppSelector(selectCartItems);

  const handleFilterChange = useCallback(
    (filterType: string, filterVal: string) => {
      console.log(filterType, filterVal);
      setSelectedFilter(filterType);
      setFilterValue(filterVal);
    },
    []
  );

  const getQuery = () => {
    if (searchQuery) {
      return `?model=${searchQuery}${
        selectedFilter && filterValue ? `&${selectedFilter}=${filterValue}` : ""
      }`;
    }
    return `${
      selectedFilter && filterValue ? `?${selectedFilter}=${filterValue}` : ""
    }`;
  };

  useEffect(() => {
    const query = getQuery();
    console.log("Cart: ", cartItems);

    async function fetchHelicopters(query: string) {
      try {
        const data = await getHelicopters(query);
        setHelicopters(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchHelicopters(query);
  }, [searchQuery, selectedFilter, filterValue, handleFilterChange]);

  const totalRows = Math.ceil(helicopters.length / 4);

  const visibleHelicopters = helicopters.slice(0, visibleRows * 4);

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 1);
  };

  const handleSearch = (search: string) => {
    setSearchQuery(search);
  };

  return (
    <div className={styles.catalogHero}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.filtersAndSearch}>
            <div className={styles.filtersContainer}>
              <CustomButton
                className={styles.applyFiltersButton}
                text="Apply filter"
                onClick={() => handleFilterChange(selectedFilter, filterValue)}
              />
              <div className={styles.filterValueContainer}>
                <input
                  type="text"
                  placeholder="Filter Value"
                  onChange={(e) => setFilterValue(e.target.value)}
                />
                <select onChange={(e) => setSelectedFilter(e.target.value)}>
                  <option value="weight">Weight</option>
                  <option value="max_altitude">Max Altitude</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
            <input
              className={styles.search}
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <HelicopterList helicopters={visibleHelicopters} />
          {visibleRows < totalRows && (
            <ViewMoreButton
              className={styles.viewMoreHelicoptersButton}
              onClick={handleViewMoreClick}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Catalog;
