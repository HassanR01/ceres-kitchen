
export default function Overviews() {
  return (
    <>
        <div className="dataAnalysisPartitions">

          {/* Today Orders */}
          <div className="dataAnalysisPartition TO">
            <div className="title">
              <h3>Today Orders</h3>
            </div>
            <div className="data">
              <h2>120</h2>
              <p>Today</p>
              <span>20%</span>
            </div>
            <div className="percentage">
              
            </div>
          </div>

          {/* Order Delivered */}
          <div className="dataAnalysisPartition OD">
            <div className="title">
              <h3>Order Delivered</h3>
            </div>
            <div className="data">
              <h2>60</h2>
              <p>Today</p>
              <span>50%</span>
            </div>
            <div className="percentage">

            </div>
          </div>
          
          {/* Daily Sales */}
          <div className="dataAnalysisPartition DS">
            <div className="title">
              <h3>Daily Sales</h3>
            </div>
            <div className="data">
              <h2>20200 EGP</h2>
              <p>Today</p>
              <span>80%</span>
            </div>
            <div className="percentage">

            </div>
          </div>

          {/* New Customers */}
          <div className="dataAnalysisPartition NC">
            <div className="title">
              <h3>New Customers</h3>
            </div>
            <div className="data">
              <h2>80</h2>
              <p>Today</p>
              <span>30%</span>
            </div>
            <div className="percentage">

            </div>
          </div>
        </div>
    </>
  )
}
