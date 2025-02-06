"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Banner from "@/components/banner";
interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}
export default function CheckoutPage() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const orderData = {
      userId,
      fullName: `${userDetails.firstName} ${userDetails.lastName}`,
      email: userDetails.email,
      phone: userDetails.phone,
      company: userDetails.company,
      address: `${userDetails.street}, ${userDetails.town}, ${userDetails.city}, ${userDetails.zipCode}, ${userDetails.country}`,
      orderTotal: calculateTotal(),
      cartItems: cartItems.map((item) => ({
        image: item.image,
      })),
      orderStatus: "Order Confirmed",
    };
    try {
      const sanityResponse = await fetch("/api/saveorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const sanityResult = await sanityResponse.json();
      console.log("Sanity API Response:", sanityResult);
      if (!sanityResult.success) {
        throw new Error("Failed to save order in Sanity");
      }
      formData.append("access_key", "30c787a3-d0e8-460d-8f5b-cc8e4228caed");
      formData.append("orderData", JSON.stringify(orderData));
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const emailResult = await emailResponse.json();
      console.log("Email API Response:", emailResult);

      if (!emailResult.success) {
        throw new Error("Failed to send email");
      }

      console.log("Order saved & email sent:", sanityResult, emailResult);

      // Delay popup show to avoid re-render issues
      if (sanityResult.success) {
        console.log("data sent successfully");
      } else {
        console.log("error");
      }
      setShowPopup(true);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    town: "",
    street: "",
    Province: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const userId = `USER-${Date.now()}`;
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };
  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div>
      <Banner name="Checkout" title="Checkout" logo="/logo.png" />
      <div className="flex flex-col lg:px-52">
        <h1 className="font-semibold text-4xl/[54px] font-poppins">
          Billing details
        </h1>
      </div>
      <div className="grid gap-8 px-2 lg:flex lg:mx-[60px] ">
      <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex lg:gap-5 gap-2">
            <div className="w-[170px] h-[110px] flex flex-col justify-between">
              <label
                htmlFor="firstName"
                className="font-medium font-poppins text-base"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                className="sm:w-[212px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
              />
            </div>
            <div className="w-[170px] h-[110px] flex flex-col justify-between">
              <label
                htmlFor="lastName"
                className="font-medium font-poppins text-base"
              >
                Last Name
              </label>
              <input
                type="text"
                required
                id="lastName"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                className="sm:w-[212px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
              />
            </div>
          </div>

          <div className="h-[110px] flex flex-col justify-between">
            <label
              htmlFor="company"
              className="font-medium font-poppins text-base"
            >
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={userDetails.company}
              onChange={handleInputChange}
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
            />
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="country"
              className="font-medium font-poppins text-base"
            >
              Country / Region
            </label>
            <select
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] px-5 font-poppins text-[#9F9F9F] text-base"
              id="country"
              name="country"
              value={userDetails.country}
              onChange={handleInputChange}
              required
            >
              <option value="australia">Australia</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="bhutan">Bhutan</option>
              <option value="canada">Canada</option>
              <option value="china">China</option>
              <option value="india">India</option>
              <option value="japan">Japan</option>
              <option value="maldives">Maldives</option>
              <option value="nepal">Nepal</option>
              <option value="pakistan">Pakistan</option>
              <option value="srilanka">Sri Lanka</option>
              <option value="uk">United Kingdom</option>
              <option value="usa">United States</option>
            </select>
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="street"
              className="font-medium font-poppins text-base"
            >
              Street address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={userDetails.street}
              onChange={handleInputChange}
              required
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
            />
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="town"
              className="font-medium font-poppins text-base"
            >
              Town / City
            </label>
            <input
              required
              type="text"
              id="town"
              name="town"
              value={userDetails.town}
              onChange={handleInputChange}
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
            />
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="Province"
              className="font-medium font-poppins text-base"
            >
              Province
            </label>
            <select
              required
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] px-5 font-poppins text-[#9F9F9F] text-base"
              id="Province"
              name="Province"
              value={userDetails.Province}
              onChange={handleInputChange}
            >
              <option value="western">Western Province</option>
              <option value="eastern">Eastern Province</option>
              <option value="southern">Southern Province</option>
              <option value="northern">Northern Province</option>
              <option value="central">Central Province</option>
              <option value="north_western">North Western Province</option>
              <option value="north_central">North Central Province</option>
            </select>
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="zipCode"
              className="font-medium font-poppins text-base"
            >
              ZIP code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={userDetails.zipCode}
              onChange={handleInputChange}
              required
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
            />
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="phone"
              className="font-medium font-poppins text-base"
            >
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              required
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
            />
          </div>

          <div className="h-[121px] flex flex-col justify-between">
            <label
              htmlFor="email"
              className="font-medium font-poppins text-base"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              required
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border placeholder:text-[#9F9F9F] border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4"
            />
          </div>

          <div className="h-[121px] flex flex-col justify-between pt-7">
            <textarea
              className="sm:w-[453px] w-full sm:h-[75px] h-[60px] border border-[#9F9F9F] rounded-[10px] font-poppins text-base px-4 text-[#9F9F9F] resize-none md:py-6 py-4"
              id="additional-information"
              placeholder="Additional information"
            ></textarea>
          </div>
          <button
            type="submit"
            className="font-poppins font-normal text-xl/[30px] sm:w-[318px] w-52 h-16 rounded-[15px] hover:bg-slate-50 mx-auto mt-6 border border-black"
          >
            Place order
          </button>
        </form>

        <div className="md:w-[600px] w-auto sm:h-auto px-3 gap-10">
          <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-full mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Your Cart
            </h2>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center gap-4">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={50}
                          height={50}
                          className="rounded-md"
                        />
                      )}
                      <span>{item.title}</span>
                    </div>
                    <span>Rs. {item.price}</span>
                    <span>Qty: {item.quantity}</span>
                    <span>Rs. {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center">Your cart is empty.</p>
            )}
          </div>

          <div className="bg-[#F9F1E7] py-8 px-11 sm:p-8 rounded-sm shadow-lg w-full mx-auto mt-8">
            <h2 className="text-3xl font-semibold text-center mb-16">
              Cart Totals
            </h2>
            <div className="flex justify-between mb-5">
              <span className="text-base font-semibold">Subtotal</span>
              <span className="text-base text-[#9F9F9F]">
                Rs. {calculateTotal()}
              </span>
            </div>
            <div className="flex justify-between font-medium mb-5">
              <span className="text-base font-semibold">Total</span>
              <span className="text-xl text-[#9F9F9F] font-semibold">
                Rs. {calculateTotal()}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <span className="flex gap-2 items-center">
              <span className="w-[14px] h-[14px] rounded-full bg-black"></span>
              <p className="font-poppins font-normal text-base">
                Direct Bank Transfer
              </p>
            </span>
            <p className="font-poppins font-light text-base text-[#9F9F9F]">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div>
              <label
                className="text-base font-poppins font-medium text-[#9F9F9F]"
                htmlFor="dbt"
              >
                <input
                  type="radio"
                  className="mr-2"
                  id="dbt"
                  name="payment-method"
                />
                Direct Bank Transfer
              </label>
              <br />
              <label
                className="text-base font-poppins font-medium text-[#9F9F9F]"
                htmlFor="cod"
              >
                <input
                  type="radio"
                  className="mr-2"
                  id="cod"
                  name="payment-method"
                />
                Cash On Delivery
              </label>
            </div>
            <p className="text-base font-poppins font-light">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy.</span>
            </p>
          </div>
        </div>
        
        <div> 
        
          {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                <h1>Take a screenshot of this:</h1>
                <p>
                  <strong>User ID:</strong> {userId}
                </p>
                <p>
                  <strong>Full Name:</strong> {userDetails.firstName}{" "}
                  {userDetails.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {userDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong> {userDetails.phone}
                </p>
                <p>
                  <strong>Company:</strong> {userDetails.company}
                </p>
                <p>
                  <strong>Address:</strong> {userDetails.street},{" "}
                  {userDetails.town}, {userDetails.city}, {userDetails.zipCode},{" "}
                  {userDetails.country}
                </p>
                <p>
                  <strong>Order Total:</strong> ${calculateTotal()}
                </p>
                <h1>
                  Message has been sent to the owner Radiya Khan
                  <span>radiyakhan59@gmail.com</span>
                </h1>
                <button
                  onClick={() => setShowPopup(false)}
                  className="mt-4 px-4 py-2 bg-brown text-white rounded-md shadow-sm focus:outline-none"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
