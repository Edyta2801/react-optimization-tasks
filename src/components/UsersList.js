import React, { Profiler, useMemo, useCallback } from "react";
import User from "./User";
import Pagination from "./Pagination";

function renderClb(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log(id, phase, actualDuration, baseDuration, startTime, interactions);
}

const resultsPerPage = 5;

function UsersList({ users, onRefresh, onInsert }) {
  const pagination = useMemo(() => ({
    page: 1,
    allPages: Math.ceil(users.length / resultsPerPage),
  }), [users]);

const handlePageChange=useCallback(()=>{
  console.log(users.length)
}, [users]);

  return (
    <Profiler id="UsersList" onRender={renderClb}>
      <div className="users">
        <button onClick={onRefresh}>refresh</button>
        <button onClick={onInsert}>insert new user</button>
        <Pagination onPageChange={handlePageChange} page={pagination.page} allPages={pagination.allPages} />
        {users.map((user) => (
          <User key={user.login.uuid} user={user} />
        ))}
      </div>
    </Profiler>
  );
}
export default UsersList;
