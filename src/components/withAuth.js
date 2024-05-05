// import { getSession } from 'next-auth/react'

// export default function withAuth(Component) {
//     return function WithAuthComponent(props) {
//       // Now you can use the session object in your component
//       if (!props.session) {
//         return null;
//       }
  
//       return <Component {...props} />;
//     }
//   }

// export async function getServerSideProps(context) {
//   const session = await getSession({ req: context.req })
    
//   console.log(session, "inside withAuth");
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { session },
//   }
// }