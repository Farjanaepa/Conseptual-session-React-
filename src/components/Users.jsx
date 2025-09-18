import { use } from "react";

const Users = ({ userPromise }) => {
    const users = use(userPromise);
    console.log(users)
    return (
       <>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa, recusandae qui quae soluta nesciunt nostrum officiis autem voluptates aperiam eaque ex ratione ipsum similique dolor cum! Magni, maiores corrupti?</h2>
        {users.map((user) => (
            <h1>{user.name}</h1>
        ))}
       </>
    );
};

export default Users;
