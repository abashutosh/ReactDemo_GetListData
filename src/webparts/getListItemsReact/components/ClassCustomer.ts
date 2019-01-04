import {ISPListCustomerItem} from "./ICustomer";

export class ClassCustomer{

    public CustomerName:string;
    public CustomerID:string;
    public CustomerAddress:string;
    public CustomerType:string;

    constructor (item: ISPListCustomerItem){
        this.CustomerName=item.CustomerName;
        this.CustomerID=item.CustomerID;
        this.CustomerAddress=item.CustomerAddress;
        this.CustomerType=item.CustomerType;
    }
}