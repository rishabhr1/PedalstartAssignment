import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [error, setError] = useState(null);

    const submit = async (e) => {
        // Once the form has been submitted, this function will post to the backend
        e.preventDefault();

        //Name validator
        const isValidName = name.match(/^[A-Za-z\s]+$/);
        if (!isValidName) {
            setError("Please enter a valid name (letters and spaces only).");
            return; // Prevent form submission if name is invalid
        }

        //Mobile No. validator
        const isValidMobile = mobile.match(/^\d{6,15}$/);
        if (!isValidMobile) {
            setError("Please enter a valid mobile number (digits only).");
            return; // Prevent form submission if mobile is invalid
        }

        //LinkedIn ID validator
        if (linkedin.length < 25) {
            setError(
                "Please enter a valid LinkedIn ID (minimum 25 characters)."
            );
            return; // Prevent form submission if LinkedIn is invalid
        }

        const res = await fetch("http://localhost:4000/", {
            method: "post",
            body: JSON.stringify({
                name: name,
                mobile: mobile,
                email: email,
                linkedin: linkedin,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log(res);
                setName("");
                setMobile("");
                setEmail("");
                setLinkedin("");
                setError(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="flex h-full">
            <div className="px-4 bg-slate-300">
                <h1 className="font-bold text-2xl pt-4">Join Wishlist</h1>
                <span className="text-xs text-gray-500">
                    PedalStart is India’s fast growing startup founders’
                    community that works intensively with the startups in each
                    phase of their journey.
                </span>
                <form className="py-8" onSubmit={(e) => submit(e)}>
                    <div>
                        <label className="pr-2">Name</label>
                        <br />
                        <input
                            type="text"
                            className="px-2 focus:ring-3 focus:ring-blue-300 border-b-4 rounded-md"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            required
                        />
                        {error ===
                            "Please enter a valid name (letters and spaces only)." && (
                            <p className="text-red-500 text-sm pt-2">{error}</p>
                        )}
                    </div>
                    <div className="py-4">
                        <label className="pr-2">Mobile (without +91 & 0)</label>
                        <br />
                        <input
                            type="text"
                            className="px-2 focus:ring-3 focus:ring-blue-300 border-b-4 rounded-md"
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value);
                            }}
                            required
                        />
                        {error ===
                            "Please enter a valid mobile number (digits only)." && (
                            <p className="text-red-500 text-sm pt-2">{error}</p>
                        )}
                    </div>
                    <div className="py-4">
                        <label className="pr-2">Email</label>
                        <br />
                        <input
                            type="email"
                            className="px-2 focus:ring-3 focus:ring-blue-300 border-b-4 rounded-md"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <div className="py-4">
                        <label className="pr-2">LinkedIn ID</label>
                        <br />
                        <input
                            type="text"
                            className="px-2 focus:ring-3 focus:ring-blue-300 border-b-4 rounded-md"
                            value={linkedin}
                            onChange={(e) => {
                                setLinkedin(e.target.value);
                            }}
                            required
                        />
                        {error ===
                            "Please enter a valid LinkedIn ID (minimum 25 characters)." && (
                            <p className="text-red-500 text-sm pt-2">{error}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="w-6/12 flex justify-center  items-center text-center">
                <img
                    className="flex justify-center"
                    src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"
                />
            </div>
        </div>
    );
};

export default Form;
