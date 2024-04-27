import BookingForm from "@/components/BookingForm";
import { getSingleService } from "@/utils/getSingleService";


const CheckOutPage = async({params}) => {
    console.log(params)
    const dt = await getSingleService(params?._id);
    console.log(dt)

    return (
        <div>
            <h1>CheckOut Page</h1>
            <BookingForm  data={dt}></BookingForm>
        </div>
    );
};

export default CheckOutPage;