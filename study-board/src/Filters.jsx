export default function Filters({ searchText, onSearch, statusFilter, onStatusChange }) {
    return (
        <>
            <div>
                <label htmlFor="search">Search:</label>
                <input id="search" type="text" placeholder="Search tasks..." value={searchText} onChange={(e) => onSearch(e.target.value)} />
                <button onClick={() => onSearch('')}>Clear</button>
            </div>
            <div>
                <label htmlFor="status">Filter by Status:</label>
                <select id="status" value={statusFilter} onChange={(e) => onStatusChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="not-started">Not Started</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </>
    );
}