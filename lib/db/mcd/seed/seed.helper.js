import userModel from "../../models/user.model.mjs";
import dbConnect from "../../dbConnect.js";

/*

    Create new User

*/
export const seedUser = async (user) => {
   
    console.log('-- User --')
    console.log(user);
    console.log('--\n')

    await dbConnect();

    try {

        user.picture = process.env.SERVER_HOST + user.picture;
        let newUser = await userModel.create(user);

        return newUser
    } catch (error) {
        console.log(error)
    }

}
