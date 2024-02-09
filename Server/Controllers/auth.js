const User = require("../db/user");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/auth");

exports.signUp = async (req, res) => {
    console.log("Preparing to SignUp");
    try {
        const { name, email, password } = req.body;
        if (!name) {
            return res.json({
                error: "Name is required"
            })
        } else if (!email) {
            return res.json({
                error: "Email is required"
            })
        } else if (!password || password.length < 0) {
            return res.json({
                error: "Password is required and should be more than 8 characters"
            })
        } else {
            const exist = await User.findOne({ email });
            if (exist) {
                return res.json({
                    error: "Email is taken"
                })
            } else {
                const hashedPassword = await hashPassword(password);
                try {
                    const user = await new User({
                        name, email, password: hashedPassword,
                    }).save();

                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                        expiresIn: "7d",
                    })

                    const { password, ...rest } = user._doc;
                    return res.json({
                        token, user: rest,
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            
        }
    } catch (err) {
        console.log(err)
    }
}