import contactUsSchema from "../models/contactUsSchema.js";

 export const contactUs = async (req, res, next) => { 
    try {

       const newContactdata=  await contactUsSchema.create(req.body); 

       console.log(newContactdata);
       

         res.status(200).send(newContactdata)

         await contactUsSchema.save();
  
         // Send email using nodemailer
        //  const transporter = nodemailer.createTransport({
        //    service: 'yahoo',
        //    auth: {
        //      user: 'your_yahoo_email@yahoo.com',
        //      pass: 'your_yahoo_email_password',
        //    },
        //  });
     
        //  const mailOptions = {
        //    from: 'your_yahoo_email@yahoo.com',
        //    to: 'maouma.rasouli@yahoo.com',
        //    subject: 'New Message Received',
        //    text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
        //  };
     
        //  await transporter.sendMail(mailOptions);

    }
     catch(err){
        next(err)
     }
}

// app.post('/submit-message', async (req, res) => {
//     const { firstName, email, message } = req.body;
  
  
  
//     try {
//       await contactUsSchema.save();
  
//       // Send email using nodemailer
//       const transporter = nodemailer.createTransport({
//         service: 'yahoo',
//         auth: {
//           user: 'your_yahoo_email@yahoo.com',
//           pass: 'your_yahoo_email_password',
//         },
//       });
  
//       const mailOptions = {
//         from: 'your_yahoo_email@yahoo.com',
//         to: 'maouma.rasouli@yahoo.com',
//         subject: 'New Message Received',
//         text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
//       };
  
//       await transporter.sendMail(mailOptions);
//       res.json({ message: 'Thanks for your message! We will get back to you.' });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
  
 