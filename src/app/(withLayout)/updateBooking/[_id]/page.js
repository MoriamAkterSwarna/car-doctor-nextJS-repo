

export const metadata = {
    title: "Update Booking || Car Doctor Pro",
    description: "Generated by Programming Hero",
  };
import UpdateForm from '@/components/Forms/UpdateForm';
import { getSingleBooking } from '@/utils/getSingleBooking';


const UpdateBookingPage = async({params}) => {
    console.log(params)

    const data = await getSingleBooking(params?._id);
    console.log(data);
    return (
        <div>
            
        <UpdateForm data={data} />
        </div>
    );
};

export default UpdateBookingPage;