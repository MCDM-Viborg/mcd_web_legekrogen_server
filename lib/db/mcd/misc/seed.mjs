import { stubProducts, stubQuestions, stubReviews, stubSubscribers } from "../seed/seed.data.js"
import { seedUser } from "../seed/seed.helper.js";
import bcrypt from 'bcryptjs';

export const seedQuestions = async () => {

    for (let i = 0; i < stubQuestions.length; i++) {

        const questionList = await seedQuestion(stubQuestions[i]);
    }
}

export const seedUsers = async () => {
    
    // Seeding Admin User
    const user = await seedUser({
        "name" : "admin",
        "email" : "admin@mediacollege.dk",
        "picture" : "/users/no-user.jpg",
        "role" : "admin",
        "hashedPassword" : await bcrypt.hash("admin", 10)
    })

    // Seeding Guest User
    const guest = await seedUser({
        "name" : "guest",
        "email" : "guest@mediacollege.dk",
        "picture" : "/users/no-user.jpg",
        "role" : "guest",
        "hashedPassword" : await bcrypt.hash("guest", 10)
    })

    return true
}