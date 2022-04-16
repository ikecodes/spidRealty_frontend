import React from "react";
import ListingsCard from "../../components/ListingsCard";
import AgentLayout from "./AgentLayout";

const AgentListings = () => {
  return (
    <AgentLayout>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>
          <ListingsCard />
          <ListingsCard />
          <ListingsCard />
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentListings;
