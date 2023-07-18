import React from 'react';
import ReactDOM from 'react-dom/client';

export const Menu = () => {

    const allPanelHiden = () => {
        let div = document.getElementById("panellist");
        let children = div.children;
          for (let i = 0; i < children.length; i++) {
             children[i].className = "tab-pane fade";
          }
    }

    const allTabPassive = () => {
        let allTab = document.getElementById("alltab");
        let allTabChildren = allTab.children;
          for (let i = 0; i < allTabChildren.length; i++) {
            allTabChildren[i].firstElementChild.className = "nav-link special-tab-button";
          }
    }

    const renderPageItem = async(pageName) => {
        let inputName = String(pageName).toLowerCase();
        let element;

        if (pageName === 'X') {
            const yxData = document.getElementById("y-x-input")?.value;
            const zxData = document.getElementById("z-x-input")?.value;
            const xData = yxData ? yxData : zxData;
            element = (
                <>
                    <label>Enter X Data:
                        <input id={`${inputName}-x-input`} type="text" defaultValue={xData} />
                    </label>
                </>
            );
        } else if (pageName === 'Y') {
            const xxData = document.getElementById("x-x-input")?.value;
            const zxData = document.getElementById("z-x-input")?.value;
            const xData = xxData ? xxData : zxData;
            const zyData = document.getElementById("z-y-input")?.value;
            element = (
                <>
                    <label>Enter X Data:
                        <input id={`${inputName}-x-input`} type="text" defaultValue={xData} />
                    </label>
                    <label>Enter Y Data:
                        <input id={`${inputName}-y-input`} type="text" defaultValue={zyData} />
                    </label>
                </>
            );
        }else {
            const xxData = document.getElementById("x-x-input")?.value;
            const yxData = document.getElementById("y-x-input")?.value;
            const xData = xxData ? xxData : yxData;
            const yData = document.getElementById("y-y-input")?.value;
            element = (
                <>
                    <label>Enter X Data:
                        <input id={`${inputName}-x-input`} type="text" defaultValue={xData} />
                    </label>
                    <label>Enter Y Data:
                        <input id={`${inputName}-y-input`} type="text" defaultValue={yData} />
                    </label>
                    <label>Enter Z Data:
                        <input id={`${inputName}-z-input`} type="text" />
                    </label>
                </>
            );
        }

        return element;
    }

    const removeTabItem = (pageName) => {
        const panelItem = document.getElementById(pageName);
        const tabItem = document.getElementById(pageName+'-link');
        if (tabItem !== null) {
            tabItem.remove();
        }
        panelItem.innerHTML = '';
        const allTabItem = document.getElementById('alltab');
        if (allTabItem.children.length === 0) {
            allTabItem.className = 'nav nav-pills mb-3'
        }
    }

    const addEventItem = () => {
        const xPageElementt = document.getElementById('xpage');
        const yPageElementt = document.getElementById('ypage');
        const zPageElementt = document.getElementById('zpage');
        let xxInputItem = document.getElementById('x-x-input');
        let yyInputItem = document.getElementById('y-y-input');
        let zyInputItem = document.getElementById('z-y-input');
        let yxInputItem = document.getElementById('y-x-input');
        let zxInputItem = document.getElementById('z-x-input');
        let xtabClose = document.getElementById('xpage-close');
        let ytabClose = document.getElementById('ypage-close');
        let ztabClose = document.getElementById('zpage-close');


        if (xxInputItem !== null) {
            xxInputItem.addEventListener("change", function(event) {
                const xxChangeData = event.target.value;
                if (yPageElementt !== null && yPageElementt.children.length > 0) {
                    yxInputItem = document.getElementById('y-x-input');
                    yxInputItem.value = xxChangeData;
                }

                if (zPageElementt !== null && zPageElementt.children.length > 0) {
                    zxInputItem = document.getElementById('z-x-input');
                    zxInputItem.value = xxChangeData;
                }
              });
        }

        if (yyInputItem !== null) {
            yyInputItem.addEventListener("change", function(event) {
                const yyChangeData = event.target.value;

                if (zPageElementt !== null && zPageElementt.children.length > 0) {
                    zyInputItem = document.getElementById('z-y-input');
                    zyInputItem.value = yyChangeData;
                }
              });
        }

        if (yxInputItem !== null) {
            yxInputItem.addEventListener("change", function(event) {
                const yxChangeData = event.target.value;

                if (xPageElementt !== null && xPageElementt.children.length > 0) {
                    xxInputItem = document.getElementById('x-x-input');
                    xxInputItem.value = yxChangeData;
                }

                if (zPageElementt !== null && zPageElementt.children.length > 0) {
                    let zxInputItem = document.getElementById('z-x-input');
                    zxInputItem.value = yxChangeData;
                }
              });
        }

        if (zxInputItem !== null) {
            zxInputItem.addEventListener("change", function(event) {
                const zxChangeData = event.target.value;

                if (xPageElementt !== null && xPageElementt.children.length > 0) {
                    xxInputItem = document.getElementById('x-x-input');
                    xxInputItem.value = zxChangeData;
                }

                if (yPageElementt !== null && yPageElementt.children.length > 0) {
                    yxInputItem = document.getElementById('y-x-input');
                    yxInputItem.value = zxChangeData;
                }
              });
        }

        if (zyInputItem !== null) {
            zyInputItem.addEventListener("change", function(event) {
                const zyChangeData = event.target.value;

                if (yPageElementt !== null && yPageElementt.children.length > 0) {
                    yyInputItem = document.getElementById('y-y-input');
                    yyInputItem.value = zyChangeData;
                }
              });
        }

        if (xtabClose !== null) {
            xtabClose.addEventListener('click', function(event){
                var targetId = event.target?.id;
                var removeId = targetId.split('-');
                removeTabItem(removeId[0])
            })
        }

        if (ytabClose !== null) {
            ytabClose.addEventListener('click', function(event){
                var targetId = event.target?.id;
                var removeId = targetId.split('-');
                removeTabItem(removeId[0])
            })
        }

        if (ztabClose !== null) {
            ztabClose.addEventListener('click', function(event){
                var targetId = event.target?.id;
                var removeId = targetId.split('-');
                removeTabItem(removeId[0])
            })
        }
    }

    const handlerAddPage = async(name) => {
        const element = await renderPageItem(name);

        const pageName= String(name).toLowerCase()+'page';
        const rootTab = document.getElementById('alltab');
        const rootDiv = document.getElementById(pageName);

        if (rootDiv !== null &&  rootDiv.children.length === 0) {            
            rootTab.innerHTML += '<li id='+pageName+'-link class="nav-item" role="presentation">' +
            '<button class="nav-link special-tab-button" data-bs-toggle="pill" data-bs-target=#' + pageName + ' type="button" role="tab"  aria-selected="true">' + name + ' Page</button> '+
            '<button id='+pageName+'-close type="button" class="btn-close tab-close-icon" aria-label="Close" />' +
            '</li>';

            allPanelHiden();
            allTabPassive();

            const root = ReactDOM.createRoot(document.getElementById(pageName));
            const divItem = document.getElementById(pageName);
            divItem.className = 'tab-pane fade active show ';
            const rootTabItem = document.getElementById(pageName+'-link');
            rootTabItem.firstElementChild.className = 'nav-link special-tab-button active';
            rootTab.className = 'nav nav-pills mb-3 tab-border';
            root.render(element);

            setTimeout( () => {
                addEventItem();
            },1000)

        }        
    }

    

  return (
    <div className="col-3 left">
        <div className='row special-row'>
            <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => handlerAddPage('X')}
                disabled={false}
                >
                    Open Page X
                </button>
        </div>
        <div className='row special-row'>
            <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => handlerAddPage('Y')}
                >
                    Open Page Y
                </button>
        </div>
        <div className='row special-row'>
            <button 
                type="button" 
                className="btn btn-success"
                onClick={() => handlerAddPage('Z')}
            >
                Open Page Z
            </button>
        </div>
    </div>
  )
}