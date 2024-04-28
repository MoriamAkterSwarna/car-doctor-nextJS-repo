
import UpdateForm from '@/components/Forms/UpdateForm';
import { getSingleBooking } from '@/utils/getSingleBooking';


const UpdateBookingPage = async({params}) => {
    console.log(params)

    const data = await getSingleBooking(params?._id);
    console.log(data);
    return (
        <div>
            aaflajlfjgsgsdg
        <UpdateForm data={data} />
        </div>
    );
};

export default UpdateBookingPage;