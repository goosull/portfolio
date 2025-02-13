"use client";

import { useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const Mail = () => {
  const form = useRef<HTMLFormElement>(null); // form 레퍼런스 생성이다.
  const [status, setStatus] = useState(""); // 전송 상태를 관리한다.
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null); // reCAPTCHA 토큰 상태이다.
  const recaptchaRef = useRef<ReCAPTCHA>(null); // reCAPTCHA 레퍼런스를 생성한다.

  // reCAPTCHA 값이 변경될 때 호출되는 함수이다.
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // reCAPTCHA 검증이 완료되지 않았으면 메일 전송을 중단한다.
    if (!recaptchaToken) {
      setStatus("reCAPTCHA 검증에 실패하였습니다. 다시 시도해주세요.");
      return;
    }

    try {
      const serviceId = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_MAIL_USER_ID!;

      // emailjs를 통해 이메일 전송을 시도한다.
      await emailjs.sendForm(serviceId, templateId, form.current, userId);

      setStatus("메일이 성공적으로 전송되었습니다.");
      // 메일 전송 후 reCAPTCHA를 초기화한다.
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Email send error:", error);
      setStatus("메일 전송에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="p-6 rounded w-full max-w-3xl">
        <h1 className="text-2xl font-bold text-center mb-4">Contact Me</h1>
        <p className="text-center text-gray-600 mb-6 font-pretendard">
          저와 나누고 싶은 이야기가 있다면 편하게 메일을 보내주세요.
          <br />
          빠른 시일 내에 답변드리겠습니다.
        </p>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="이름 / 소속"
            className="border border-stone-400 p-3 rounded bg-[#ffffff]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            className="border border-stone-400 p-3 rounded bg-[#ffffff]"
            required
          />
          <textarea
            name="message"
            placeholder="메시지를 입력해주세요."
            className="border border-stone-400 p-3 rounded h-60 bg-[#ffffff]"
            rows={20}
            required
          />
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={handleRecaptchaChange}
              ref={recaptchaRef}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white p-3 rounded hover:bg-gray-800 flex gap-2 items-center"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
      </div>
    </div>
  );
};
