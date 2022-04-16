import React from "react";
import ListingsCard from "../../components/ListingsCard";
import UserLayout from "./UserLayout";

const UserFavorites = () => {
  return (
    <UserLayout>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          <ListingsCard remove />
          <ListingsCard remove />
          <ListingsCard remove />
        </div>
      </div>
    </UserLayout>
  );
};

export default UserFavorites;
