const { signup, login } = require("./auth");

describe("Successful Signup", () => {
    test("Sign up with new user", () => {
        const result = signup(
            "Atul",
            "atul@gmail.com",
            "password123"
        );

        expect(result.success).toBe(true);
        expect(result.message).toBe("Signup successful");
    });
});

describe("SignUp duplicate check", () => {
    test("Sign up with duplicate email", () => {
        const result = signup(
            "Atul",
            "atul@gmail.com",
            "password123"
        );

        expect(result.success).toBe(false);
        expect(result.message).toBe("User already exists");
    });
});

describe("Successful Login", () => {
    test("Successful login with valid credentials", () => {
        const result = login(
            "atul@gmail.com",
            "password123"
        );

        expect(result.success).toBe(true);
        expect(result.message).toBe("Login successful");
    });
});

describe("Invalid Login", () => {
    test("Login with invalid credentials", () => {
        const result = login(
            "atul@gmail.com",
            "wrongpassword"
        );

        expect(result.success).toBe(false);
        expect(result.message).toBe("Invalid password");
    });
});