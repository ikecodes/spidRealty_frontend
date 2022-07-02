import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnquiryState } from "../../constants/interfaces";
import AdminLayout from "../../layouts/AdminLayout";
import { getAllEnquiry } from "../../slices/enquirySlice";
import EnquiriesTable from "../../utils/EnquiriesTable";

const AdminEnquiries = () => {
  const dispatch = useDispatch();
  const { enquiries } = useSelector((state: EnquiryState) => state.enquiry);
  useEffect(() => {
    dispatch(getAllEnquiry());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AdminLayout>
      <EnquiriesTable data={enquiries} />
    </AdminLayout>
  );
};

export default AdminEnquiries;
