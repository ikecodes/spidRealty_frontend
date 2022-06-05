import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../constants/interfaces";
import AdminLayout from "../../layouts/AdminLayout";
import { getPropertiesByAdmin } from "../../slices/adminSlice";
import PropertiesTable from "../../utils/PropertiesTable";

const AdminProperties = () => {
  const dispatch = useDispatch();
  const { properties } = useSelector((state: AdminState) => state.admin);
  useEffect(() => {
    dispatch(getPropertiesByAdmin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AdminLayout>
      <PropertiesTable data={properties} />
    </AdminLayout>
  );
};

export default AdminProperties;
