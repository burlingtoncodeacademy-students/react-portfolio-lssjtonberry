import { useForm } from "react-hook-form";

const ContactMe = () => {
  const { handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact">
      <h1>For your Web Dev Needs feel free to fill out this little form. I'll get back to you in no time!<br/></h1>
      {/*Contact Form. Will eventually link to my email on submit */}
      <form id="contactform" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="username" placeholder="Name" />
        <br />
        <input type="email" name="useremail" placeholder="Email" />
        <br />
        <textarea name="message" placeholder="Message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactMe;
