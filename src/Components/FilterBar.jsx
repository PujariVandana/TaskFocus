export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-container">
      <label htmlFor="filter" style={{ fontWeight: "500", color: "#fff" }}>
       <h3>Filter: </h3>
      </label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
}