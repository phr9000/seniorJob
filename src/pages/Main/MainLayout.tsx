/* eslint-disable */
import React from "react";

/* Import Component */
import LatestList from 'src/components/LatestList'

const MainLayout: React.FC = () => {
  return (
    <main>
      <>
        <section className="banner">
          <div className="banner-txt-area j-mb20">
            <h3>A Job Platform for Seniors</h3>
            <p>
              Founded in 2006, the Centre For Seniors (CFS) is a non-profit,
              Social Service Agency (SSA) that is committed to promoting the
              total well-being of
              <br /> older persons in Singapore, specifically their vocational,
              financial and psycho-social health. Silver Job portal is created
              with seniors in mind to help
              <br /> them to explore work in the various sectors for meaningful
              retirement. For more info, please go to{" "}
              <a className="go-link" href="https://cfs.org.sg">
                https://cfs.org.sg
              </a>
            </p>
            <p>
              We welcome employers who are keen to hire seniors in your
              organization , please contact us at{" "}
              <a className="go-link">ready2work@cfs.org.sg</a>
            </p>
          </div>
        </section>
        <section className="search-box-container">
          <div className="top">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <input type="text" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <input type="text" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <input type="text" />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-2">
              <input type="text" />
            </div>
          </div>
        </section>
        <div className="flex items-center">
          <div>test</div>
          <div>new add text test !!!!!!!</div>
        </div>
        <div className="text1">git pull success!</div>
      </>

      <div className="container">
        <LatestList/>
      </div>
    </main>
  );
};
export default MainLayout;
