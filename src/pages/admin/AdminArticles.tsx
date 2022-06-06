import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState } from "../../constants/interfaces";
import AdminLayout from "../../layouts/AdminLayout";
import { getAllArticles } from "../../slices/adminSlice";
import ArticlesTable from "../../utils/ArticlesTable";

const AdminArticles = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: AdminState) => state.admin);
  useEffect(() => {
    dispatch(getAllArticles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AdminLayout>
      <ArticlesTable data={articles} />
    </AdminLayout>
  );
};

export default AdminArticles;
