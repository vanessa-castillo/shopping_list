import Swal from "sweetalert2"

const ClearListButton = ({setListItems}) => {

    const clearList = async () =>{
        const result = await Swal.fire({
            title:"Clear the List?",
            text:"You won't be able to revert this!",
            icon:"warning",
            showCancelButton:true,
            confirmButtonText:"Yes, clear it!",
        });

        if(result.isConfirmed){
            localStorage.setItem("listItems", JSON.stringify([]))
            setListItems([]);
        }
    }

    return(
        <button 
        className="btn btn-outline-danger btn-sm mt-1 me-1"
        onClick={clearList}
        >                       
            <i className="bi bi-trash2"></i>

        </button>
    )
}

export default ClearListButton