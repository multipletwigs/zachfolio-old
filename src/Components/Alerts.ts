import Swal, { SweetAlertResult } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default class Alerts{
    
    constructor(){}

    externalLinkWarning(location: string, fn: any){
        Swal.fire({
            title: "You've clicked on an external link!",
            text:`This will bring you to ${location}.`,
            icon:"warning",
            cancelButtonText:"Go back"
        }).then((value) => {if(value) {fn()}})
    }  

    cardNotice(location: string, textHtml: JSX.Element, title: JSX.Element): Promise<SweetAlertResult<any>>{
        const cardNotice = withReactContent(Swal)
        
        return cardNotice.fire({
            title: title,
            html: textHtml,
            confirmButtonText:`Visit ${location}`,
            showCancelButton:true, 
            cancelButtonText:"Go back"
        })
    }

}