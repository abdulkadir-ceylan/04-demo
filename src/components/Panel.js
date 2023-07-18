import React from 'react';

export const Panel = () => {
  return (
    <div className="col">
        <ul className="nav nav-pills mb-3" id='alltab' role="tablist" />

        <div id='panellist' className="tab-content">
            <div className="tab-pane fade" id="xpage" role="tabpanel" tabIndex="0" />
            <div className="tab-pane fade" id="ypage" role="tabpanel"  tabIndex="0" /> 
            <div className="tab-pane fade" id="zpage" role="tabpanel"  tabIndex="0" />
        </div>
    </div>  
  )
}