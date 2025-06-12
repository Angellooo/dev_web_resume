# Angello Gonzalez - Resume & Portfolio Website

This is a personal portfolio and resume website built with [Flask](https://flask.palletsprojects.com/) and Docker. It showcases my experience, skills, certifications, and provides a way for visitors to contact me.

## Features

- Modern, responsive design
- Dynamic sections for experience, education, skills, and certificates
- Contact form with email integration (AWS SES-ready)
- Downloadable resume
- Dockerized for easy deployment

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/) installed on your machine

### Running Locally

1. Clone this repository:
    ```sh
    git clone https://github.com/yourusername/dev_web_resume.git
    cd dev_web_resume
    ```

2. Build and run the Docker container:
    ```sh
    docker build -t resume-portfolio .
    docker run -p 5000:5000 resume-portfolio
    ```

3. Visit [http://localhost:5000](http://localhost:5000) in your browser.

### Environment Variables

For production, set the following environment variables (especially for email/contact form):

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `SES_SENDER_EMAIL`
- `SES_RECIPIENT_EMAIL`

You can set these in your deployment environment (e.g., Elastic Beanstalk, Docker Compose, etc.).

## Deployment

This project is ready to deploy on any Docker-compatible host, including AWS Elastic Beanstalk, EC2, or your own server.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Credits

- Design inspired by [styleshout](http://www.styleshout.com/)
- Built with Flask, Docker, and open-source libraries

