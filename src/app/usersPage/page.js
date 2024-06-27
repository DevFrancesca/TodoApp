import db from "@/lib/db"
import userModel from "@/lib/user-model"

const getUsers=async()=>{
    const data = await fetch('http://localhost:3000/api/users')
    const info = await data.json()
    return info;
}

const Page=async()=>{
    // await db();
    // const users = await userModel.find();
    const users = await getUsers();
    return(
        <>
            <div>
                <h1>Hello users</h1>
                {
                    users?.map((e)=>(
                        <div key={e._id}>
                            <h3>Name: {e.firstName}</h3>
                            <p>email: {e.email}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Page