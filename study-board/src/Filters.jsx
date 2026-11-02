export default function Filters({ searchText, onSearch, statusFilter, onStatusChange }) {
    return (
        <div className="filter-toolbar">
            <div className="search-field">
                <label htmlFor="search">Search tasks</label>
                <input id="search" type="search" placeholder="Search your tasks" value={searchText} onChange={(e) => onSearch(e.target.value)} />
                <button type="button" onClick={() => onSearch('')}>Clear</button>
            </div>
            <div className="status-field">
                <label htmlFor="status">Progress</label>
                <select id="status" value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>
    );
}