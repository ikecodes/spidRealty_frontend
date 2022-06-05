import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../constants/interfaces";
import AdminLayout from "../../layouts/AdminLayout";
import { getAllAgents } from "../../slices/adminSlice";
import AgentsTable from "../../utils/AgentsTable";

const AdminAgents = () => {
  const dispatch = useDispatch();
  const { agents } = useSelector((state: AdminState) => state.admin);
  useEffect(() => {
    dispatch(getAllAgents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AdminLayout>
      <AgentsTable data={agents} />
    </AdminLayout>
  );
};

export default AdminAgents;
