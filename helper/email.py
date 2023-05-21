import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import dotenv_values

env_vars = dotenv_values(".env")


def send_email(subject, message):
    sender_email = env_vars["SENDER_EMAIL"]
    receiver_email = env_vars["RECEIVER_EMAIL"]

    # SMTP server configuration
    smtp_server = "smtp.qiye.aliyun.com"
    smtp_port = 25
    smtp_username = env_vars["EMAIL_USER_NAME"]
    smtp_password = env_vars["EMAIL_PASSWORD"]

    # Create a MIME message
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = subject

    # Attach the message to the email
    msg.attach(MIMEText(message, "plain"))

    # Create an SMTP session and send the email
    try:
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(smtp_username, smtp_password)
            server.send_message(msg)
        print("Email sent successfully")
    except smtplib.SMTPException as e:
        print("Error sending email:", str(e))
