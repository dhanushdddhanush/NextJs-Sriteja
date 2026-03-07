import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, phone, email, message } = body;

    if (!name || !phone || !message) {
      return Response.json(
        { error: "Required fields missing" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailContent = `
New Contact Inquiry – Sri Teja Flex

Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Message:
${message}
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "sriteja.tanuku@gmail.com",
      subject: `New Contact Form - ${name}`,
      text: mailContent,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
