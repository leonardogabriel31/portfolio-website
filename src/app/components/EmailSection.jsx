import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-24">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is a always
          open. Wether you have a question or just want to say hi. I'll try my
          best to get back to you.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com">
            <Image
              className="rounded-lg"
              src={"/github.png"}
              alt="Github icon"
              width={50}
              height={50}
            />
          </Link>
          <Link href="https://linkedin.com">
            <Image
              className="rounded-lg"
              src={"/linkedin.png"}
              alt="Linkedin icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <label
            htmlFor="email"
            type="email"
            className="text-white block text-sm font-medium"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="example@example.com"
          />

          <label
            htmlFor="subject"
            className="text-white block text-sm font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
