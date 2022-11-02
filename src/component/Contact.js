import React from 'react';


const Contact = () => {
  
  return (
    <div className="section">
        <h3 style={{ textAlign: 'center' }}>Contact</h3>
        <div class="contact_wrap">
					<h4>연락을 기다립니다.</h4>
					<form method="POST" action="https://formspree.io/khl0211@gmail.com">
						<label>
							<input type="text" name="name" placeholder="Name" />
						</label>
						<label>
							<input type="email" name="_replyto" placeholder="e-mail" />
						</label>
						<label>
							<textarea name="message" placeholder=""></textarea>
						</label>
						<input type="submit" value="Send" />
					</form>
		
				</div>  
    </div>
  );
};


export default Contact;
