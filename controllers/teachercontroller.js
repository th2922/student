import teacher_model from "../modules/teacher_model.js";
import bcrypt from 'bcryptjs';  // You can install bcryptjs using npm install bcryptjs


export const getalluser= async (req,res,next )=>{
    const  alluser =await teacher_model.find();
    res.status(200).json({alluser});
}

// User Signup Function
export const teachersignup = async (req, res, next) => {
    const { name, email, password } = req.body;

    // Simple validation: Check if fields are present
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Check if user already exists
        const existingTeacher = await teacher_model.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({ message: " Teacher with this email already exists" });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);  // Salt rounds are set to 10

        // Create a new user with the hashed password
        const teacher = new teacher_model({
            name,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await teacher.save();

        // Send a successful response
        return res.status(201).json({ message: "Teacher signup successful" });
    } catch (err) {
        // Log the error and send a generic error message
        console.error("Error during signup:", err);
        return res.status(500).json({ message: `Error signing up user: ${err.message}` });
    }
};

// User Login Function
export const logine = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const exesTeacher = await teacher_model.findOne({ email });
        if (!exesTeacher) {
            return res.status(400).json({ message: "You have no account yet, please sign up." });
        }

        // Compare the password with the stored hashed password
        const isPasswordCorrect = await bcrypt.compare(password, exesUser.password);
        
        if (isPasswordCorrect) {
            return res.status(200).json({ message: "You are logged in!" });
        } else {
            return res.status(400).json({ message: "Your password is incorrect" });
        }
    } catch (err) {
        // Log the error and send a generic error message
        console.error("Error during login:", err);
        return res.status(500).json({ message: `Error logging in user: ${err.message}` });
    }
};
