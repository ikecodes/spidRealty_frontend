import React from "react";
import { Card } from "react-bootstrap";
import { MdHome, MdShowChart, MdUpload } from "react-icons/md";
import AgentLayout from "./AgentLayout";

const AgentDashboard = () => {
  return (
    <AgentLayout>
      <h2 className='text-capitalize m-0 p-2 mb-5'>welcome back, mary!</h2>
      <div className='row'>
        <div className='col-lg-4'>
          <Card className='p-2'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdHome size={100} />
                <h4 className='text-capitalize m-0'>listings</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>total listings: 1</li>
                  <li>visible listings: 0</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className='col-lg-4'>
          <Card className='p-2'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdUpload size={100} />
                <h4 className='text-capitalize m-0'>properties</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>posted properties: 1</li>
                  <li>sold: 0</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className='col-lg-4'>
          <Card className='p-2'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdShowChart size={100} />
                <h4 className='text-capitalize m-0'>promotions</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>property promotions: 1</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AgentLayout>
  );
};

export default AgentDashboard;
