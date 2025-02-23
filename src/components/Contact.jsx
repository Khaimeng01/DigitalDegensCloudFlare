import React, { useEffect } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import CtaButton from "./CtaButton";
import emailjs from 'emailjs-com';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// React Form
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
    const { register, handleSubmit } = useForm();

    // const onSubmit = (data, e) => {
    //   console.log(data);
    //   toast.success("Message sent Successfully");
    //   e.target.reset();
    // };

    const onSubmit = (data, e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log('Part 1 ');

        emailjs.send(
            'service_u0mde5r', // Replace with your EmailJS Service ID
            'template_0f86h9f', // Replace with your EmailJS Template ID
            {
                name: data.name, // Form field values
                email: data.email,
                subject: data.subject,
                message: data.message,
            },
            'wribopA55E2Gz7P2_' // Replace with your EmailJS Public Key
        )
            .then((response) => {
                console.log('Part 1.1 ');

                console.log('SUCCESS!', response.status, response.text);
                toast.success("Message sent successfully!");
                e.target.reset(); // Clear the form fields
            })
            .catch((error) => {
                console.log('Part 2 ');

                console.error('FAILED...', error);
                toast.error("Failed to send the message. Please try again.");
            });
    };


    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <div className="text-[#7A6960]">

            <h1 data-aos="fade-right" className="text-gray-900  text-3xl font-semibold text-center">
                Contact
            </h1>

            {/* <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div> */}

            <div className="flex justify-center items-center mt-2">
                <div className="bg-blue-400 h-1 w-16 rounded"></div>
            </div>

            <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
                Let's Connect & Elevate Your Brand!
            </p>

            <div className="lg:flex gap-6">
                {/* map */}
                <div
                    data-aos="fade-up"
                    className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-blue-400 mb-7 lg:mb-0"
                >
                    <div className="flex gap-5 mt-3 mb-12">

                        {/* <div
              className="rounded-full h-fit bg-orange-100 p-2"
              style={{ color: "#EA580C", fontSize: "28px" }}
            >
              <IoLocationOutline />
            </div> */}

                        {/* <div
  className="rounded-full h-fit bg-blue-100 p-2"
  style={{ color: "#000000", fontSize: "28px" }}
>
  <IoLocationOutline />
</div>

<div
  className="rounded-full h-fit bg-black p-2"
  style={{ color: "#60A5FA", fontSize: "28px" }} // Light blue (#60A5FA)
>
  <IoLocationOutline />
</div> */}

                        <div className="rounded-full h-fit bg-black p-2 text-white text-2xl">
                            <IoLocationOutline />
                        </div>


                        <div>
                            <h2 className="lg:text-xl text-gray-700 font-semibold">
                                Address
                            </h2>
                            <p className="text-sm text-slate-800">
                                One Ampang Avenue, Ampang, Selangor
                            </p>
                        </div>

                    </div>

                    <div className="flex gap-5 mb-12">
                        <div className="rounded-full h-fit bg-black p-2 text-white text-2xl">
                            <IoCallOutline />
                        </div>
                        <div>
                            <h2 className="lg:text-xl text-gray-700 font-semibold">
                                Call Us
                            </h2>
                            <p className="text-sm text-slate-800">+60128251933</p>
                        </div>
                    </div>

                    <div className="flex gap-5 mb-12">
                        <div className="rounded-full h-fit bg-black p-2 text-white text-2xl">
                            <TfiEmail />
                        </div>
                        <div>
                            <h2 className="lg:text-xl text-gray-700 font-semibold">
                                Email Us
                            </h2>
                            <p className="text-sm text-slate-800">connect@digitaldegensmy.com</p>
                        </div>
                    </div>

                    <div className="lg:w-full lg:h-72">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8857713303357!2d101.7516695559557!3d3.154844338474936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37aa637603b7%3A0xd27fdd61acc6536!2sOne%20Ampang%20Avenue%2C%20Southview!5e0!3m2!1sen!2smy!4v1735904050437!5m2!1sen!2smy" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* form */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    className="lg:w-[60%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-blue-400"
                >
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="md:flex gap-6">
                            <div className="md:w-[50%]">
                                <div>
                                    <label htmlFor="name" className="text-gray-700 font-semibold">Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="md:w-[50%]">
                                <div>
                                    <label htmlFor="email" className="text-gray-700 font-semibold" >Your Email</label>
                                    <input
                                        {...register("email", { required: true })}
                                        type="email"
                                        id="email"
                                        placeholder="johndoe@gmail.com"
                                        className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="text-gray-700 font-semibold">Subject</label>
                            <input
                                {...register("subject", { required: true })}
                                type="text"
                                id="subject"
                                placeholder="Your subject"
                                className="w-full h-10 px-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-gray-700 font-semibold" >Message</label>
                            <textarea
                                {...register("message", { required: true })}
                                id="message"
                                placeholder="Enter your message"
                                className="w-full h-60 p-3 my-3 rounded border border-zinc-300 focus:border focus:border-orange-600 outline-none resize-none"
                            ></textarea>
                        </div>

                        <div className="flex justify-center m-3">
                            <button className="bg-blue-400 hover:bg-blue-300 hover:shadow hover:shadow-blue-300 text-white rounded-3xl px-4 py-2 w-fit text-lg transition-all duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    // return (
    //   <div className="flex justify-center items-center min-h-screen text-[#7A6960]">
    //     <div className="w-full max-w-5xl">
    //       <h1 data-aos="fade-right" className="text-3xl font-semibold text-center">
    //         Contact
    //       </h1>
    //       <div className="flex justify-center items-center mt-2">
    //         <div className="bg-orange-600 h-1 w-16 rounded"></div>
    //       </div>
    //       <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
    //         Reach out for a new project or just say hello
    //       </p>

    //       <div className="lg:flex gap-6 justify-center items-center">
    //         {/* map */}
    //         <div
    //           data-aos="fade-up"
    //           className="lg:w-[40%] px-10 py-5 shadow-xl border-t-[3px] border-b-[3px] border-orange-600 mb-7 lg:mb-0"
    //         >
    //           <div className="flex gap-3 mt-3 mb-12">
    //             <div
    //               className="rounded-full h-fit bg-orange-100 p-2"
    //               style={{ color: "#EA580C", fontSize: "28px" }}
    //             >
    //               <IoLocationOutline />
    //             </div>
    //             <div>
    //               <h2 className="lg:text-xl text-[#7A6960] font-semibold">
    //                 Address
    //               </h2>
    //               <p className="text-sm text-slate-800">
    //                 A108 Adam Street, New York, NY 535022
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex gap-3 mb-12">
    //             <div
    //               className="rounded-full h-fit bg-orange-100 p-2"
    //               style={{ color: "#EA580C", fontSize: "28px" }}
    //             >
    //               <IoCallOutline />
    //             </div>
    //             <div>
    //               <h2 className="lg:text-xl text-[#7A6960] font-semibold">
    //                 Call Us
    //               </h2>
    //               <p className="text-sm text-slate-800">+1 5589 55488 55</p>
    //             </div>
    //           </div>

    //           <div className="flex gap-5 mb-12">
    //             <div
    //               className="rounded-full h-fit bg-orange-100 p-2"
    //               style={{ color: "#EA580C", fontSize: "28px" }}
    //             >
    //               <TfiEmail />
    //             </div>
    //             <div>
    //               <h2 className="lg:text-xl text-[#7A6960] font-semibold">
    //                 Email Us
    //               </h2>
    //               <p className="text-sm text-slate-800">info@example.com</p>
    //             </div>
    //           </div>

    //           <div className="lg:w-full lg:h-72">
    //             <iframe
    //               width="100%"
    //               height="100%"
    //               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.8857713303357!2d101.7516695559557!3d3.154844338474936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37aa637603b7%3A0xd27fdd61acc6536!2sOne%20Ampang%20Avenue%2C%20Southview!5e0!3m2!1sen!2smy!4v1735904050437!5m2!1sen!2smy"
    //               loading="lazy"
    //               referrerpolicy="no-referrer-when-downgrade"
    //             ></iframe>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );

};

export default Contact;
