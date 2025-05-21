FROM python:3.11-slim

# Install security updates and system dependencies
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Create a non-root user and switch to it
RUN useradd -m appuser
USER appuser

ENV FLASK_APP=app.py

CMD ["flask", "run", "--host=0.0.0.0"]
