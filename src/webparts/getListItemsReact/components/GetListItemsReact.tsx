import * as React from 'react';
import styles from './GetListItemsReact.module.scss';
import { IGetListItemsReactProps } from './IGetListItemsReactProps';
import { escape } from '@microsoft/sp-lodash-subset';
import pnp, { Item } from 'sp-pnp-js';
import { ClassCustomer } from './ClassCustomer';
import {ISPListCustomerItem} from "./ICustomer";

export default class GetListItemsReact extends React.Component<IGetListItemsReactProps, any> {
 
  public constructor(props:IGetListItemsReactProps, any: any)
  {
    super(props);
    this.state={
      items:[]
    };
  }
 
  public render(): React.ReactElement<IGetListItemsReactProps> {
    return (
      <div className={ styles.getListItemsReact }>
        <div className={ styles.container }>
          <div className={ styles.row }> 
            <div className={ styles.column}>
            <div className={"ms-Grid"}>
            <div className={"ms-Grid-row"}>
            {
              this.state.items.map(function (item:ISPListCustomerItem){
                return (

                  <div className={"ms-Grid-col ms-sm6 ms-md6 ms-lg4"}>
                    <div className={"styles.contentDiv"}>
                        <label className="ms-label ms-font-xxl">{item.CustomerID}</label>
                        <label className="ms-label">{item.CustomerName}</label>
                        <label className="ms-label">{item.CustomerType}</label>
                        <label className="ms-label">{item.CustomerAddress}</label>
                     </div>
                  </div>

                );
              })
            }
            </div> 
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  public componentDidMount()
  {
    debugger;
    this._getCustomerDataFromList();
  }

  private _getCustomerDataFromList():void
  {
    pnp.sp.web.lists.getByTitle("Customers").items.get().then(response=>{
        let customerCollection=response.map((item: ISPListCustomerItem)=>new ClassCustomer(item));
        this.setState({items:customerCollection});
       
      })
  }
}
